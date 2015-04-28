# 视频在iOS设备上转HTML5播放
---
移动终端对flash支持并不好，特别是ios都不支持flash 

利用html5不用插件直接播放视频，还能跨平台来实现播放。pc端还是用flash播放，但移动端通过html5（video标签）方式来做。
---
flash方式嵌入优酷、土豆视频
```
<embed src="movie-name" allowFullScreen="true" quality="high" width="" height="" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
``` 

上面代码不支持ios设备（iphone，ipad），所以要用iframe方式插入视频
```
<iframe width='' height='' src="" frameborder=0 allowfullscreen></iframe>
``` 

`html5player.js`做了上面的兼容，支持优酷、土豆视频 
使用方法：在页面引入`html5player.js`
