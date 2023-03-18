---
title: Markdown语法摘录
date: 2023-01-13 13:30:00
tags: Markdown, Hexo
categories: Blog
top_img: 
mathjax: true
---

参考资料：
> [Markdown语法图文全面详解(10分钟学会)](https://blog.csdn.net/u014061630/article/details/81359144)
> [Markdown语法与外挂标签写法汇总](https://www.fomal.cc/posts/2013454d.html)

<!-- # 快捷键
*[注释]: Shift + Alt + f 自动美化表格
|   功能   |  快捷键  |
| :------: | :------: |
|   加粗   | Ctrl + B |
|   斜体   | Ctrl + I |
|   引用   | Ctrl + Q |
| 插入链接 | Ctrl + L |
| 插入代码 | Ctrl + K |
| 插入图片 | Ctrl + G |
| 提升标题 | Ctrl + H |
| 有序列表 | Ctrl + O |
| 无序列表 | Ctrl + U |
|   横线   | Ctrl + R |
|   撤销   | Ctrl + Z |
|   重做   | Ctrl + Y | --> |

# Markdown语法摘录

## 1. s文字样式

> 源码示例
```Markdown
*斜体* （快捷键：Ctrl + i）

**加粗** （快捷键：Ctrl + b）

***斜体加粗***

`高亮`

~~删除线~~
```
> 效果示例
> 
> *斜体*
> 
> **加粗**
> 
> ***斜体加粗***
> 
> `高亮`
> 
> ~~删除线~~
## 2. 引用

### 源码示例

```Markdown
> 引用1
> 引用2
> > 引用2.1
> 引用3
>
> 引用4
```

### 效果示例

> 引用1
> 引用2
> > 引用2.1
> 引用3
>
> 引用4

## 3. 列表

### 3.1 无序列表
使用 *，+，- 表示无序列表。
注意：符号后面一定要有一个空格，起到缩进的作用。

> 源码示例
```Markdown
- 列表文字
- 列表文字

* 列表文字
* 列表文字

+ 列表文字
+ 列表文字
```
> 效果示例
> - 列表文字
> - 列表文字
> 
> * 列表文字
> * 列表文字
> 
> + 列表文字
> + 列表文字

### 3.2 有序列表

注：有序列表的序列顺序即使输入错误也会自动修正（例如第三行的4）

> 源码示例
```Markdown
1. content1
2. content2
4. content3
```

> 效果示例
> 1. content1
> 2. content2
> 4. content3

PS：数字后加点号有时会无意创建列表，因此点号的输入方式为斜杠加点号：
```Markdown
\.
```
## 4. 特殊符号

按字符输出语法符号时，需要加斜杠：
![](https://img-blog.csdn.net/20180802162507298?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQwNjE2MzA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
PS：图片引自[Markdown语法图文全面详解(10分钟学会)](https://blog.csdn.net/u014061630/article/details/81359144)

## 5. 缩进

> 源码示例
```Markdown
content0，无缩进
&nbsp;content1，缩进1/2字符
&ensp;content2，缩进1字符
&emsp;content3，缩进2字符（1个中文字符）
```

> 效果示例
> content0，无缩进
> &nbsp;content1，缩进1/2字符
> &ensp;content2，缩进1字符
> &emsp;content3，缩进2字符（1个中文字符）

## 6. 图片

### 6.1 本地图片
<img src="/img/nijika.png" alt="示例图片" style="zoom:50%;" />

> 代码示例
```Markdown
<img src="/img/nijika.png" alt="示例图片" style="zoom:50%;" />
```

- img src="文件相对位置"
- alt="图片名称"
- style="zoom:图片大小百分比;"

### 6.2 在线图片
![code](https://cdn.jsdelivr.net/gh/fomalhaut1998/markdown_pic/img/code.png)
> 代码示例
```Markdown
![code](https://cdn.jsdelivr.net/gh/fomalhaut1998/markdown_pic/img/code.png)
```

- ![图片名称]
- (网址)

## 7.表格

表格第一行是表头，第二行用杠（这个符号：- ）来生成表格，杠左右加冒号（英文格式的）用来控制这一列对齐位置，**第二行要有杠才能生成表格**

- 源码示例
```Markdown
|                 A |        B         | C                 | D              |
| ----------------: | :--------------: | :---------------- | -------------- |
| 我是右对其的内容: | :我是居中的内容: | :我是左对齐的内容 | 我是默认的内容 |
|             A内容 |      B内容       | C内容             | D内容          |
```


- 效果示例

|                 A |        B         | C                 | D              |
| ----------------: | :--------------: | :---------------- | -------------- |
| 我是右对其的内容: | :我是居中的内容: | :我是左对齐的内容 | 我是默认的内容 |
|             A内容 |      B内容       | C内容             | D内容          |

表头默认加粗居中，内容默认左对齐

使用 Alt + Shift + f 可以自动美化源码中的表格的文本