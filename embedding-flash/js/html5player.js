/*!
 * @author 	max
 * @date	2013-01-14T01:20:08
 */
(function(){
	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
	    var embeds  = jQuery('embed[src*=swf]');
	    var youkuPattern = /\/sid\/([\w]+)[\W]/;
	    var tudouPattern = /\/v\/([^\/]+)\//;
	    var sohuPattern  = /id=([\d]+)[\D]/i;
	    jQuery.each(embeds, function(i, v){
	        var _U = jQuery(embeds[i]).attr('src');
	        var _W = jQuery(embeds[i]).attr('width');
	        var _H = jQuery(embeds[i]).attr('height');
	        if(_U.match(/youku/)){
	            var vid = _U.match(youkuPattern)[1];
	            if(vid != null){
	                jQuery(embeds[i]).replaceWith('<iframe width='+_W+' height='+_H+' src="http://player.youku.com/embed/'+vid+'" frameborder=0 allowfullscreen></iframe>');
	            };
	        }else if(_U.match(/tudou/)){
	            var vid = _U.match(tudouPattern)[1];
	            if(vid != null){
	                jQuery(embeds[i]).replaceWith('<iframe width="'+_W+'" height="'+_H+'" frameborder="0" src="http://www.tudou.com/programs/view/html5embed.action?code='+vid+'"></iframe>');
	            };
	        }else if(_U.match(/sohu/)){
	            var vid = _U.match(sohuPattern)[1];
	            if(vid != null){
	                jQuery(embeds[i]).parent('object').replaceWith('<video width="'+_W+'" height="'+_H+'" x-webkit-airplay="allow" preload controls src="http://my.tv.sohu.com/ipad/'+vid+'.m3u8"></video>');
	            };
	        };
	    });
	};
}());