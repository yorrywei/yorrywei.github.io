---
layout: post
title: "【趣味编程】图片转字符"
description: "刷抖音看到这么一个视频，还挺火的~哎哟，这不是图片转字符的升级版么，视频的每一帧图片转换掉再放回去。抖音人才多啊！正好以前也稍微研究了一丢丢，代码不多，挺有意思的。"
tags: [抖音,趣味编程,python]
categories: [Blog]
sid: 20180718a
---
[![Smithsonian Image](//up.yorry.cn/link/blog/yorry_ascii.jpg)](//up.yorry.cn/link/blog/yorry_ascii.jpg)
{: .image-horizontal}

刷抖音看到这么一个视频，还挺火的~

{::nomarkdown}
<video width=250 class="my-video" src="//up.yorry.cn/video/FinalVideo_1531968495.452555.MP4" controls="controls">您的浏览器不支持 video 标签。</video>
{:/nomarkdown}

哎哟，这不是图片转字符的升级版么，视频的每一帧图片转换掉再放回去。抖音人才多啊！

正好以前也稍微研究了一丢丢，代码不多，挺有意思的。

<!--more-->

{% highlight python %}
# -*- coding: utf-8 -*-
from PIL import Image

codeLib = '''@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^`'. '''#生成字符画所需的字符集
count = len(codeLib)

def transform1(image_file):
    image_file = image_file.convert("L")#转换为黑白图片，参数"L"表示黑白模式
    codePic = ''
    for h in range(0,image_file.size[1]):  #size属性表示图片的分辨率，'0'为横向大小，'1'为纵向
        for w in range(0,image_file.size[0]):
            gray = image_file.getpixel((w,h)) #返回指定位置的像素，如果所打开的图像是多层次的图片，那这个方法就返回一个元组
            codePic = codePic + codeLib[int(((count-1)*gray)/256)]#建立灰度与字符集的映射
        codePic = codePic+'\r\n'
    return codePic

def transform2(image_file):
    codePic = ''
    for h in range(0,image_file.size[1]):
        for w in range(0,image_file.size[0]):
            g,r,b = image_file.getpixel((w,h))
            gray = int(r* 0.299+g* 0.587+b* 0.114)
            codePic = codePic + codeLib[int(((count-1)*gray)/256)]
        codePic = codePic+'\r\n'
    return codePic


fp = open(u'yorry.jpg','rb')
image_file = Image.open(fp)
image_file=image_file.resize((int(image_file.size[0]*0.75), int(image_file.size[1]*0.5)))#调整图片大小
print(u'Info:',image_file.size[0],' ',image_file.size[1],' ',count)

tmp = open('tmp.txt','w')
tmp.write(transform1(image_file))
tmp.close()
{% endhighlight %}

以上代码把图片"yorry.jpg"文件名替换成自己的，保存文件为"test.py"，电脑上安装好Python3环境，在当前目录运行：
```
python test.py
```
打开文件"tmp.txt"，生成的字符串就如本文一开始的截图那样了~

原图(yorry.jpg)

[![Smithsonian Image](//up.yorry.cn/link/blog/yorry.jpg)](//up.yorry.cn/link/blog/yorry.jpg)
{: .image-horizontal}

不会码代码的小伙伴也可以直接用一些在线工具来转(字符集与本文不同)

> [https://www.fontke.com/tool/image2ascii/](https://www.fontke.com/tool/image2ascii/)

> [http://www.makepic.net/tool/image2ascii.html](http://www.makepic.net/tool/image2ascii.html)

### 原文地址
> [Python实现图片转字符画](https://blog.csdn.net/wait_nothing_alone/article/details/52901531)