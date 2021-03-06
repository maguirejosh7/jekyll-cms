/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-boxshadow-canvas-cssgrid_cssgridlegacy-flexbox-flexboxlegacy-localstorage-svg-touchevents-video-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,a,s,i;for(var l in T)if(T.hasOwnProperty(l)){if(e=[],n=T[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)s=e[a],i=s.split("."),1===i.length?Modernizr[i[0]]=r:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=r),w.push((r?"":"no-")+i.join("-"))}}function a(e){var n=b.className,t=Modernizr._config.classPrefix||"";if(C&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),C?b.className.baseVal=n:b.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):C?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||(e=s(C?"svg":"body"),e.fake=!0),e}function l(e,t,o,r){var a,l,c,u,d="modernizr",p=s("div"),f=i();if(parseInt(o,10))for(;o--;)c=s("div"),c.id=r?r[o]:d+(o+1),p.appendChild(c);return a=s("style"),a.type="text/css",a.id="s"+d,(f.fake?f:p).appendChild(a),f.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,f.fake&&(f.style.background="",f.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(f)),l=t(p,e),f.fake?(f.parentNode.removeChild(f),b.style.overflow=u,b.offsetHeight):p.parentNode.removeChild(p),!!l}function c(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var r;for(var a in e)if(e[a]in n)return t===!1?e[a]:(r=n[e[a]],o(r,"function")?d(r,t||n):r);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,t,o){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,n,t);var a=e.console;if(null!==r)o&&(r=r.getPropertyValue(o));else if(a){var s=a.error?"error":"log";a[s].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!t&&n.currentStyle&&n.currentStyle[o];return r}function y(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(f(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];r--;)a.push("("+f(n[r])+":"+o+")");return a=a.join(" or "),l("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return t}function v(e,n,r,a){function i(){d&&(delete N.style,delete N.modElem)}if(a=o(a,"undefined")?!1:a,!o(r,"undefined")){var l=y(e,r);if(!o(l,"undefined"))return l}for(var d,p,f,m,v,g=["modernizr","tspan","samp"];!N.style&&g.length;)d=!0,N.modElem=s(g.shift()),N.style=N.modElem.style;for(f=e.length,p=0;f>p;p++)if(m=e[p],v=N.style[m],c(m,"-")&&(m=u(m)),N.style[m]!==t){if(a||o(r,"undefined"))return i(),"pfx"==n?m:!0;try{N.style[m]=r}catch(h){}if(N.style[m]!=v)return i(),"pfx"==n?m:!0}return i(),!1}function g(e,n,t,r,a){var s=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+E.join(s+" ")+s).split(" ");return o(n,"string")||o(n,"undefined")?v(i,n,r,a):(i=(e+" "+z.join(s+" ")+s).split(" "),p(i,n,t))}function h(e,n,o){return g(e,t,t,n,o)}var w=[],T=[],x={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){T.push({name:e,fn:n,options:t})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(n){return!1}});var b=n.documentElement,C="svg"===b.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("video",function(){var e=s("video"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("audio",function(){var e=s("audio"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return n});var S=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=S;var P=x.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");P(o,function(e){t=9===e.offsetTop})}return t});var _="Moz O ms Webkit",E=x._config.usePrefixes?_.split(" "):[];x._cssomPrefixes=E;var z=x._config.usePrefixes?_.toLowerCase().split(" "):[];x._domPrefixes=z;var $={elem:s("modernizr")};Modernizr._q.push(function(){delete $.elem});var N={style:$.elem.style};Modernizr._q.unshift(function(){delete N.style}),x.testAllProps=g,x.testAllProps=h,Modernizr.addTest("boxshadow",h("boxShadow","1px 1px",!0)),Modernizr.addTest("cssgridlegacy",h("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",h("grid-template-rows","none",!0)),Modernizr.addTest("flexbox",h("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",h("boxDirection","reverse",!0)),r(),a(w),delete x.addTest,delete x.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);
$(document).ready(function() {

  // Get Next Rocket Launch
  if ($('#next-launch').length) {
    // get latest rocket launch data from API
    $.get("https://launchlibrary.net/1.2/launch/next/1", function(data) {
      var launch = data.launches[0];
      var html = '<h1><i class="fa fa-rocket" aria-hidden="true"></i> ' + launch.name + '</h1>';
      html += '<strong>' + launch.windowstart + ' - ' + launch.windowend + '</strong>';
      html += '<small class="pull-right">' + launch.location.pads[0].agencies[0].name + '</small>';
      html += '<hr><p>' + launch.missions[0].description + '</p>';
      $('#next-launch').html(html);
    });
  }

  // ##### Optional Libraries that may not be on every page
  // if check for pages that may optionally have this
  if ($('.dataTable').length) {
    $('.dataTable').DataTable();
  }
  // owlCarousel
  if ($("#testimonial-slider").length) {
    $("#testimonial-slider").owlCarousel({
      paginationSpeed: 500,
      singleItem: true,
      autoPlay: 3000,
    });
  }
  if ($("#clients-logo").length) {
    $("#clients-logo").owlCarousel({
      autoPlay: 3000,
      items: 5,
      itemsDesktop: [1199, 5],
      itemsDesktopSmall: [979, 5],
    });
  }

});
