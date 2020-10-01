---
layout: post
title: 肿助理 (chrome插件)
description: "百度的推广链接现在越来越过分了，首屏大部分全是广告，于是萌生了搞个chrome插件来屏蔽它们的想法。"
tags: [作品]
categories: [Prod]
modified: 2018-06-30
sid: crx-assistant-zhong
---

[![Smithsonian Image](//yorry.cn/up/link/crx/assistant-zhong_logo.png)](//yorry.cn/up/link/crx/assistant-zhong_logo.png)
{: .image-contain}

百度的推广链接现在越来越过分了，首屏大部分全是广告，于是萌生了搞个chrome插件来屏蔽它们的想法。

不过取个啥名好呢？或许别弄得太狭隘了，像什么"屏蔽百度广告"之类的，以后万一还有别的啥idea，能做进来的话还是棒棒哒~

干脆就随我姓肿吧，哈哈，叫"肿助理"啦~

---

### 下载地址
[assistantZhong_v1.0.crx](//yorry.cn/up/link/crx/assistantZhong_v1.0.crx)

chrome打开"扩展程序"页面，将下载的插件拖放进来即可完成安装。

<!--more-->

---

### 原理剖析

[![Smithsonian Image](//yorry.cn/up/link/crx/crx-assistant-zhong-1.png)](//yorry.cn/up/link/crx/crx-assistant-zhong-1.png)

百度的广告内容，底部会多一层淡淡的背景色，DOM结构与样式也跟正常搜索结果不一样。为了防止被通过样式display:none;直接隐藏掉，居然还给广告加了优先级最高的行内样式，外加!important，真是煞费苦心啊！

不过想要不显示给用户，还有别的办法，比如这样，哈哈。。。

{% highlight css %}
#content_left > div:not(.c-container) {
    height: 0;
    overflow: hidden;
    margin-bottom: 0!important;
}
{% endhighlight %}

而不知道从何时起，百度偶尔也还会把广告内容的DOM结构和样式包装成跟正常搜索结果一！模！一！样！

不过不记得是哪个法律法规，规定了搜索引擎的广告必须明确标识出来，好吧，我曲线救个国。。。

把结构包装成正常结果的广告找出来，然后，嘿嘿嘿。。。

{% highlight javascript %}
$.each($('.f13'), function (i, v) {
  if ($(v).text().indexOf('广告') > -1) {
    $(v).closest('.result').addClass('it-is-ad')
  }
})
{% endhighlight %}

{% highlight css %}
.it-is-ad {
    height: 0;
    overflow: hidden;
    margin-bottom: 0!important;
}
{% endhighlight %}

一记组合拳，度娘你服不服！魔高一尺，道高一丈，你过来呀~到时候见招拆招出新版本，嘿嘿。。。