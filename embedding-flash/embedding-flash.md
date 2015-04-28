#How to insert Flash into web pages

---

通常情况下，IE 系列浏览器通过 ActiveX 插件使用 OBJECT 元素引入 Flash，而其他浏览器则是通过相应的 NPAPI 插件使用 EMBED 元素。这造成了各浏览器中插入 Flash 的方式的差异。 
若仅仅使用 OBJECT 元素设置了 classid 属性引入 Flash，则可能造成在某些浏览器中 Flash 无法被引入。而若嵌套的 OBJECT 和 EMBED 元素参数不统一，也可能造成引入的 Flash 在各浏览器中出现差异。

---

###解决方案：

1.若需要考虑 W3C 校验（swfobject Markup Validation Service），则可使用第三种单独使用 OBJECT 与 PARAM 元素的方式。**（推荐）**

```html
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="" height="">
	<param name="movie" value="movie-name.swf">
	<param name="wmode" value="transparent">
	<!--[if !IE]>-->
	<object type="application/x-shockwave-flash" data="movie-name.swf" width="" height="">
		<param name="wmode" value="transparent">
	</object>
	<!--<![endif]-->
</object>
``` 

2.若不考虑 W3C 校验，可统一使用 EMBED 元素嵌入 Flash，这样可以避免因参数不统一导致的兼容性问题。

```html
<embed src="movie-name.swf" type="application/x-shockwave-flash" width="" height="" quality="high" />
```

3.若必须使用 OBJECT 嵌套 EMBED 元素这种混合方式，则要保证 Flash 文件 URL、为 Flash 传递的参数、宽度、高度、wmode 等参数保持统一。 

```html
<object width="" height="" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">
  <param name="src" value="movie-name.swf" />
  <param name="quality" value="high" />
  <embed src="movie-name.swf" type="application/x-shockwave-flash" width="" height="" quality="high" />
</object>
``` 

4.可以使用开源的 SWFObject 引入 Flash。 
请参见[swfobject](http://code.google.com/p/swfobject/) 
 
>参考资料：http://w3help.org/zh-cn/causes/HO8001