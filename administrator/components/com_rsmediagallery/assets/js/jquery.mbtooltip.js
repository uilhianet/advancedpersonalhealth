(function(a){jQuery.fn.mbTooltip=function(b){return this.each(function(){this.options={live:true,opacity:.9,wait:2e3,timePerWord:70,cssClass:"default",hasArrow:true,imgPath:"images/",hasShadow:true,shadowColor:"black",shadowLeft:1,anchor:"mouse",shadowTop:1,mb_fade:200};a.extend(this.options,b);if(this.options.live)a("[title]").live("mouseover",function(){a(this).mbTooltip(b)});var c=a(this).is("[title]")?a(this):a(this).find("[title]");var d=this.options.wait;var e=this.options.hasShadow;var f=this.options.mb_fade;var g=this.options;a(c).each(function(){a(this).attr("tooltip",a(this).attr("title"));a(this).removeAttr("title");a(this).attr("tooltipEnable","true");var b=a(this);var c=b.attr("tooltip");var h=a.browser.msie?"mouseenter":"mouseover";a(this).bind(h,function(b){if(g.anchor=="mouse")a(document).mb_getXY();a(this).one("mouseout",function(){a(this).stopTime();a(this).deleteTooltip(e,f)}).one("click",function(){a(this).stopTime();a(this).deleteTooltip(e,f)});a(this).oneTime(d,function(){if(a(this).attr("tooltipEnable")=="true")a(this).buildTooltip(c,g,b)})})})})};var b=0;var c=0;a.fn.extend({mb_getXY:function(){a(document).bind("mousemove",function(a){b=a.pageX;c=a.pageY});return{x:b,y:c}},buildTooltip:function(b,c){this.options={};a.extend(this.options,c);var d=a(this);a("body").append("<div id='mbtooltip'></div>");var e=this.options.imgPath+"up.png";a("#mbtooltip").html(b);a("#mbtooltip").addClass(this.options.cssClass);if(this.options.hasArrow){a("#mbtooltip").prepend("<img id='ttimg' src='"+e+"'>");a("#ttimg").css({position:"absolute",opacity:.5});a("#ttimg").addClass("top")}a("#mbtooltip").css({position:"absolute",top:this.options.anchor=="mouse"?a(document).mb_getXY().y+7:d.offset().top+d.outerHeight(),left:this.options.anchor=="mouse"?a(document).mb_getXY().x+7:d.offset().left,opacity:0});a("#mbtooltip").findBestPos(d,this.options.imgPath,this.options.anchor);if(this.options.anchor=="mouse")a(document).unbind("mousemove");if(this.options.hasShadow){a("#mbtooltip").dropShadow({left:this.options.shadowLeft,top:this.options.shadowTop,blur:2,opacity:.3,color:this.options.shadowColor});a(".dropShadow").css("display","none");a(".dropShadow").mb_bringToFront();a(".dropShadow").fadeIn(this.options.mb_fade)}a("#mbtooltip").mb_bringToFront();a("#mbtooltip").fadeTo(this.options.mb_fade,this.options.opacity,function(){});var f=3e3+b.length*this.options.timePerWord;var g=this.options.hasShadow;var h=this.options.mb_fade;a(this).oneTime(f,function(){a(this).deleteTooltip(g,h)})},deleteTooltip:function(b,c){var d=b?"#mbtooltip,.dropShadow":"#mbtooltip";a(d).fadeOut(c,function(){a(d).remove()})},findBestPos:function(b,c,d){var e=a(this);var f=a(window).width()+a(window).scrollLeft();var g=a(window).height()+a(window).scrollTop();var h=e.outerWidth();e.css({width:h});var i=e.offset().top+e.outerHeight(true)>g?e.offset().top-(d!="mouse"?b.outerHeight():0)-e.outerHeight()-20:e.offset().top;i=i<0?0:i;var j=e.offset().left+h>f-5?e.offset().left-(h-(d!="mouse"?b.outerWidth():0)):e.offset().left;j=j<0?0:j;if(e.offset().top+e.outerHeight(true)>g){a("#ttimg").attr("src",c+"bottom.png");a("#ttimg").removeClass("top").addClass("bottom")}e.css({width:h,top:i,left:j})},disableTooltip:function(){a(this).find("[mbtooltip]").attr("tooltipEnable","false")},enableTooltip:function(){a(this).find("[mbtooltip]").attr("tooltipEnable","true")}});jQuery.fn.mb_bringToFront=function(){var b=10;a("*").each(function(){if(a(this).css("position")=="absolute"){var c=parseInt(a(this).css("zIndex"));b=c>b?parseInt(a(this).css("zIndex")):b}});a(this).css("zIndex",b+=100)};a(function(){a("select[title]").each(function(){var b=a("<span></span>");b.attr("title",a(this).attr("title"));a(this).wrapAll(b);a(this).removeAttr("title")})})})(jQuery)