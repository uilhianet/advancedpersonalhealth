(function(a){var b=1;a.fn.dropShadow=function(c){var d=a.extend({left:4,top:4,blur:2,opacity:.5,color:"black",swap:false},c);var e=a([]);this.not(".dropShadow").each(function(){var f=a(this);var g=[];var h=d.blur<=0?0:d.blur;var i=h==0?d.opacity:d.opacity/(h*8);var j=d.swap?b:b+1;var k=d.swap?b+1:b;var l;if(this.id){l=this.id+"_dropShadow"}else{l="ds"+(1+Math.floor(9999*Math.random()))}a.data(this,"shadowId",l);a.data(this,"shadowOptions",c);f.attr("shadowId",l).css("zIndex",j);if(f.css("position")!="absolute"){f.css({position:"relative",zoom:1})}bgColor=f.css("backgroundColor");if(bgColor=="rgba(0, 0, 0, 0)")bgColor="transparent";if(bgColor!="transparent"||f.css("backgroundImage")!="none"||this.nodeName=="SELECT"||this.nodeName=="INPUT"||this.nodeName=="TEXTAREA"){g[0]=a("<div></div>").css("background",d.color)}else{g[0]=f.clone().removeAttr("id").removeAttr("name").removeAttr("shadowId").css("color",d.color)}g[0].addClass("dropShadow").css({height:f.outerHeight(),left:h,opacity:i,position:"absolute",top:h,width:f.outerWidth(),zIndex:k});var m=8*h+1;for(n=1;n<m;n++){g[n]=g[0].clone()}var n=1;var o=h;while(o>0){g[n].css({left:o*2,top:0});g[n+1].css({left:o*4,top:o*2});g[n+2].css({left:o*2,top:o*4});g[n+3].css({left:0,top:o*2});g[n+4].css({left:o*3,top:o});g[n+5].css({left:o*3,top:o*3});g[n+6].css({left:o,top:o*3});g[n+7].css({left:o,top:o});n+=8;o--}var p=a("<div></div>").attr("id",l).addClass("dropShadow").css({left:f.position().left+d.left-h,marginTop:f.css("marginTop"),marginRight:f.css("marginRight"),marginBottom:f.css("marginBottom"),marginLeft:f.css("marginLeft"),position:"absolute",top:f.position().top+d.top-h,zIndex:k});for(n=0;n<m;n++){p.append(g[n])}f.after(p);e=e.add(p);a(window).resize(function(){try{p.css({left:f.position().left+d.left-h,top:f.position().top+d.top-h})}catch(a){}});b+=2});return this.pushStack(e)};a.fn.redrawShadow=function(){this.removeShadow();return this.each(function(){var b=a.data(this,"shadowOptions");a(this).dropShadow(b)})};a.fn.removeShadow=function(){return this.each(function(){var b=a(this).shadowId();a("div#"+b).remove()})};a.fn.shadowId=function(){return a.data(this[0],"shadowId")};a(function(){var b="<style type='text/css' media='print'>";b+=".dropShadow{visibility:hidden;}</style>";a("head").append(b)})})(jQuery)