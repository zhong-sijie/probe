## CLI 参数

### probe `--init`

初始化项目，生成 probe 的配置文件 `probe-config.json`，并生成probe文件夹和相关导出文件

```shell script
# --init [type] 指定probe文件夹下导出文件的文件类型，js或ts，默认ts
probe --init [type]
```

生成`probe-config.json`默认配置如下：

```js
{
  // probe文件根目录，用于放置提取的langs文件
  "probeDir": "./.probe",
  // probe目录生成文件类型，ts或者js，默认ts
  "fileType": "ts",
  // 配置文件目录，若调整配置文件，此处可手动修改
  "configFile": "./.probe/probe-config.json",

  // 语言目录名，注意连线和下划线
  "srcLang": "zh-CN",
  "distLangs": ["en-US"],

  // import 语句，不同项目请自己配置
  "importI18N": "",

  // 可跳过的文件夹名或者文加名，比如docs、mock等，只需要匹配部分路径即可
  // 如实际文件目录是 /src/components/layouts
  // 可以配置 ignoreDir: '/src/components/layouts' 或者 ['/src/components/layouts']
  // 路径以 / 连接，ignoreFile 也是相同匹配规则
  // 默认使用 .gitignore
  "ignoreDir": [],
  "ignoreFile": []
}
```

### probe `--extract`

1. 一键批量替换指定文件夹下的所有文案

```shell script
# --extract [dirPath] 指定文件夹路径
probe --extract [dirPath]
```

2. commit 提交时自动增量提取，在 precommit 脚本内添加如下指令

```shell script
# 检测提交中是否存在ts或tsx文件
TS_CHANGED=$(git diff --cached --numstat --diff-filter=ACM | grep -F '.ts' | wc -l)

# 对提交的代码中存在未提取的中文文案统一处理
if [ "$TS_CHANGED" -gt 0 ]
then
  TS_FILES_LIST=($(git diff --cached --name-only --diff-filter=ACM | grep -F '.ts'))
  TS_FILES=''
  delim=''
  for item in ${TS_FILES_LIST[@]};do
    TS_FILES=$TS_FILES$delim$item;
    delim=','
  done
  echo "\033[33m 正在检测未提取的中文文案，请稍后 \033[0m"
  probe --extract $TS_FILES || exit 1
fi
```

### probe `--import`

导入翻译文案，将翻译人员翻译的文案，导入到项目中

```shell script
# 导入送翻后的文案
probe --import [filePath]
```

### probe `--export`

导出未翻译的文案

```shell script
probe --export [filePath]
```
