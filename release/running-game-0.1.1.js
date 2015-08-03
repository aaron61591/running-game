"use strict";!function(){function a(a){var b=this;c(b,a),(void 0===b.opt.fullScreen||b.opt.fullScreen)&&f(b.canvas)}function b(a){for(var b=a.length,c=0;b--;)a[b]>c&&(c=a[b]);return c+1}function c(a,b){a.ele=a.canvas=document.createElement("canvas"),a.ctx=window.UPlayer.getContext(a),a.opt=b||{},a.canvas.id=a.opt.id||"",a.plugins=a.opt.debug?[window.UPlayer.debug]:[],a.pluginsIndex={},a.curFrame=0,a.playing=!1}function d(a){e(a);for(var b=0;b<a.plugins.length;)a.plugins[b]&&("function"==typeof a.plugins[b]?a.plugins[b](a.ctx,a.curFrame):"function"==typeof a.plugins[b].render&&a.plugins[b].render(a.ctx,a.curFrame)),++b}function e(a){(a.opt.refresh||void 0===a.opt.refresh)&&a.ctx.clearRect(0,0,a.canvas.width,a.canvas.height)}function f(a){a.style.position="fixed",a.style.top=0,a.style.left=0,a.style.zIndex=1e3,document.body.appendChild(a),g(a),window.onresize=function(){g(a)}}function g(a){a.width=window.innerWidth,a.height=window.innerHeight}function h(a,b){for(var c in a.pluginsIndex)a.pluginsIndex.hasOwnProperty(c)&&a.pluginsIndex[c]>=b&&++a.pluginsIndex[c]}function i(a,b){for(var c in a.pluginsIndex)a.pluginsIndex.hasOwnProperty(c)&&a.pluginsIndex[c]>=b&&++a.pluginsIndex[c]}function j(a,b,c){a.plugins.splice(c,1),a.pluginsIndex[b]=void 0,i(a,c)}function k(a,b,c){var e=+new Date;a.playing&&(e-b>1e3/(a.opt.fps||30)&&(d(a),++a.curFrame,b=e,void 0!==c&&--c),void 0===c||c?l.call(window,function(){k(a,b,c)}):a.playing=!1)}var l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.setTimeout;a.prototype={},a.prototype.plug=function(a){var b=0;for(a.zIndex=a.zIndex||0;b<this.plugins.length&&!(a.zIndex<this.plugins[b].zIndex);)++b;if(this.plugins.splice(b,0,a),void 0!==a.hash){var c=this.pluginsIndex[a.hash];void 0!==c?"object"==typeof c?c.push(b):this.pluginsIndex[a.hash]=[c,b]:(h(this,b),this.pluginsIndex[a.hash]=b)}},a.prototype.plugCard=function(a){var c=this;window.UPlayer.preImage(a.src,function(d){a.img=d,a.render=function(c,e){a.pulse&&a.pulse(c,e);var f,g,h,i=a.scaleX||a.scale||1,j=a.scaleY||a.scale||1;"object"==typeof a.frame?(g=b(a.frame),f=a.frame[e%a.frame.length]):(g=a.frame,f=e%g),h=d.width/g,c.drawImage(d,f*h,0,h,d.height,a.x||0,a.y||0,h*i,d.height*j)},c.plug(a)})},a.prototype.unplug=function(a){var b=this.pluginsIndex[a];if(void 0!==b)if("object"!=typeof b)j(this,a,b);else for(var c=b.length;c--;)j(this,a,b[c])},a.prototype.run=function(a){if(!this.playing){this.playing=!0;var b=this;window.UPlayer._imageReady(function(){k(b,0,a)})}},a.prototype.pause=function(){this.playing=!1},a.prototype.stop=function(){this.curFrame=0,this.playing=!1},window.UPlayer=a}(),function(){function a(a){for(var d in a.raw)"function"==typeof a.raw[d]?b(a,d):c(a,d)}function b(a,b){a[b]=function(){a.raw[b].apply(a.raw,arguments)}}function c(a,b){a.props=a.props||{},a.props[b]={get:function(){return a.raw[b]},set:function(c){a.raw[b]=c}},Object.defineProperties(a,a.props)}function d(){}window.UPlayer.transit={},window.UPlayer.getContext=function(b){var c={raw:b.canvas.getContext("2d")};return a(c),d(c),c}}(),function(){function a(a){return c[a.src]}function b(a){var b=document.createElement("canvas"),d=b.getContext("2d");return b.width=a.width,b.height=a.height,d.drawImage(a,0,0),c[a.src]=b,b}var c={};window.UPlayer.transit.drawImage=function(c){var d=a(c);d||(d=b(c)),arguments[0]=d,this.raw.drawImage.apply(this.raw,arguments)}}(),function(){function a(a,b){if(!f[a]){++e;var d=new Image;d.src=a,d.complete&&c(d,a),d.onload=function(){c(d,a)},f[a]=[]}f[a].push(b)}function b(){for(var a=0;a<g.length;)g[a](),++a}function c(a,c){--e||b(),d[c]=a;for(var g=0;g<f[c].length;)f[c][g](a),++g;f[c]=null}var d={},e=0,f={},g=[];window.UPlayer.preImage=function(b,c){var e=d[b];e?c(e):a(b,c)},window.UPlayer._imageReady=function(a){e?g.push(a):a()}}(),function(){function a(){if(!f){var a=document.createElement("div"),b=a.style;a.id=g,b.position="fixed",b.top=0,b.right=0,b.zIndex=1e4,b.fontSize="24px",b.color="#fff",b.margin="5px",b.padding="10px",b.background="rgba(0, 0, 0, 0.6)",a.innerText="FPS 0",document.body.appendChild(a),f=!0}}var b,c=+new Date,d=10,e=0,f=!1,g="uplayer-fps";window.UPlayer.debug=function(){a(),++e%d===0&&(b=+new Date,document.getElementById(g).innerText="FPS "+(d/((b-c)/1e3)).toFixed(1),c=b)}}(),function(){function a(a,e,j){c(a,e,j),d(),f(),g(),h(),i(),b()}function b(){k.$root=k._div(),k.$root.id=k.$opt.id||"",k.$root.style.zIndex=1e3,k._insert(k.$root,document.body)}function c(a,b,c){k.$opt=a||{},k.$path="http://img.ucweb.com/s/uae/g/01/running_game/",k.$cb=b,k.$round=c,k.$grade=1,k.$res=0,k.$running=!0}function d(){for(var a=k.$extPlugin=[],b=k.$opt.extension||k.EXT,c=0;c<b.length;)"string"==typeof b[c]&&-1!==k.EXT.indexOf(b[c])&&a.push({zIndex:c,extName:b[c]}),"function"==typeof b[c]&&a.push({zIndex:c,render:b[c]}),++c}function e(){for(var a=0;a<k.$extPlugin.length;)k.$p.plug(k.$extPlugin[a]),++a}function f(){k.$imgPath=k.$opt.imgPath||k.$path+"images/",k.$img=["loading.png","bg.png","end.png","music-on.png","music-off.png","person.png","ready.png","start.png"]}function g(){var a=k.$msg=k.$opt.msg||{};a.ready=a.ready||"click button to start",a.result=a.result||"cool! u ran ",a.nick=a.nick||"UU"}function h(){var a=k.$conf=k.$opt.conf||{};a.grade=a.grade||[0,1,3,5,7],a.point=a.point||[3,4,5,6,10],a.fps=a.fps||[10,20,30,40,70]}function i(){k.$audio=k.$opt.audio||{bg:k.$path+"audio/bg.mp3",over:k.$path+"audio/over.mp3"}}function j(){k.$p=new UPlayer({fps:10}),e(),k._animateBg(),k._animatePersonStart(),k._insert(k.$p.canvas),k.$p.run(1)}var k=window.RunningGame={},l=0;k.EXT=["Sky","Cloud","Ground"],k.PRE="running-game",k.start=function(b,c,d){k.$running||(a(b,c,d),k._load())},k._loaded=function(){k.$music.init(),k.$point.init(),k.$motion.init(),k._ready(),j()},k._startRun=function(){k.$time.init(),k.$p.unplug("start"),k._animatePerson(k.$p),k.$p.run(),k.$motion.combo=0},k._round=function(){var a,b=+new Date;b-l>1e3&&(l=b,a=k.$motion.getGrade(),console.log("grade: ",a),4===a&&5===k.$lastGrade&&(k.$p.unplug("person"),k._animatePersonSuper()),5===k.$lastGrade&&4===a&&(k.$p.unplug("person-super"),k._animatePerson()),k.$p.opt.fps=k.$conf.fps[a-1],k.$round&&k.$round(k.$lastGrade,a),k.$lastGrade=a)},k._gameover=function(){k.$p.unplug("person"),k.$p.unplug("person-super"),k._animatePersonEnd(k.$p),k.$p.stop(),k.$p.run(1),k.$point.end(),k.$music.stopBg(),k.$music.playOver(),setTimeout(function(){document.body.removeChild(k.$root),k.$cb&&k.$cb(k.$res),k.$running=!1},k.$opt.endTime||3e3)}}(),function(){function a(){j=g._div(),j.className=i,b(j),c(j),d(j),g.$root.appendChild(j)}function b(a){k=g._div(),k.innerText=g.$msg.nick,k.className=i+"-nick",a.appendChild(k)}function c(a){m=g._span(),a.appendChild(m)}function d(a){l=g._span(),e(),a.appendChild(l)}function e(){l.innerText=g.$res+" M"}function f(){return Math.random()>.5?1:-1}var g=window.RunningGame,h=g.$point={},i="",j={},k={},l={},m={};h.init=function(){i=g.PRE+"-point",a()},h.update=function(){g.$res+=g.$conf.point[(g.$lastGrade||1)-1]+f(),e()},h.end=function(){j.className=i+" "+i+"-end",k.style.display="none",setTimeout(function(){k.className=i+"-nick "+i+"-end-nick",k.style.display="block",l.className=i+"-end-dis",m.innerText=g.$msg.result},1e3)}}(),function(){function a(){i=g.PRE+"-motion",n=0,m=0,l=-1,h.combo=0}function b(){var a=g._div();a.className=i,c(a,0),c(a,1),g._insert(a)}function c(a,b){var c,e=g._div(),f=g._div();b?(k=f,c="-r"):(j=f,c="-l"),e.className=i+c,f.className=i+"-btn "+i+"-btn"+c,d(f),f.addEventListener("touchstart",function(){h.step(b)}),e.appendChild(f),a.appendChild(e)}function d(a){a.style.background="#8a8a8a url("+g.$imgPath+"step.png) no-repeat center",a.style.backgroundSize="22px 43px"}function e(a){j.style.backgroundColor=a?"#8a8a8a":"#ffba15",k.style.backgroundColor=a?"#3088e2":"#8a8a8a"}function f(a){l!==a&&(1===a&&++h.combo,l=a)}var g=window.RunningGame,h=g.$motion={},i="",j={},k={},l=-1,m=0,n=0;h.combo=0,h.init=function(){a(),b()},h.step=function(a){f(a),e(a)},h.getGrade=function(){for(var a,b=g.$conf.grade,c=b.length;c--;)if(h.combo>=b[c]){a=c+1;break}return h.combo=0,a>m&&(m+=a-m>=2?2:1),m>a&&(m-=1),m},document.onkeydown=function(a){switch(a.keyCode){case 37:h.step(0);break;case 39:h.step(1)}}}(),function(){function a(){j=h.PRE+"-top",m=h.$conf.gameTime||1e4}function b(){k=h._div(),k.className=j,c(k),d(k),h._insert(k)}function c(a){l=h._span(),l.className=j+"-second",l.innerText="10.0",a.appendChild(l)}function d(a){var b=h._span();b.innerText="s",a.appendChild(b)}function e(a){var b=a/1e3;l.innerText=b%1!==0?b+"":b+".0",a!==m&&a%500===0&&h.$point.update()}function f(){h._gameover(),k.className=j+" "+j+"-end",setTimeout(function(){k.className=j+" "+j+"-end "+j+"-hide"},1e3)}function g(a,b,c,d){var e=0,f=setInterval(function(){c(a-e),e+=b,e>a&&-1!==a&&(clearInterval(f),d&&d())},b)}var h=window.RunningGame,i=h.$time={},j="",k={},l={},m=0;i.init=function(){a(),b(),g(m,100,e,f)}}(),function(){function a(){f.ele.addEventListener("touchstart",function(a){c()?(c("0"),b()):(c("1"),d()),a.cancelBubble=!0})}function b(){f.playBg(),f.ele.style.background="url("+e.$imgPath+"music-on.png) 10px 10px no-repeat",f.ele.style.backgroundSize="30px"}function c(a){var b=window.localStorage,c="runningGameMusicOff";return void 0===a?"1"===b.getItem(c)?!0:!1:void b.setItem(c,a)}function d(){f.stopBg(),f.ele.style.background="url("+e.$imgPath+"music-off.png) 10px 10px no-repeat",f.ele.style.backgroundSize="30px"}var e=window.RunningGame,f=e.$music={},g={},h={};f.init=function(){f.ele=e._div(),f.ele.className=e.PRE+"-music",c()?d():b(),a(),e._insert(f.ele)},f.playBg=function(){g=document.createElement("audio"),g.src=e.$audio.bg,g.volume=e.$audio.volume||1,g.loop=!0,g.play()},f.playOver=function(){c()||(h=document.createElement("audio"),h.src=e.$audio.over,h.volume=e.$audio.volume||1,h.loop=!1,h.play())},f.stopBg=function(){g.pause&&g.pause(),g.src=""}}(),function(){function a(){f=i._div(),f.innerText=i.$msg.ready,f.className=i.PRE+"-ready",f.style.background="url("+i.$imgPath+"ready.png) 50% -200px / 225px 245px no-repeat",i._insert(f)}function b(){g=i._div(),g.className=i.PRE+"-finger";var a=0;h=setInterval(function(){++a%2?(i.$motion.step(0),c(0)):(i.$motion.step(1),c(1))},200),i._insert(g)}function c(a){var b=g.style;b.left=a?"initial":0,b.right=a?0:"initial",b.background="url("+i.$imgPath+"ready.png) 50% "+(a?"-100px":"0%")+" / 225px 245px no-repeat"}function d(){document.body.addEventListener("touchstart",e)}function e(){clearInterval(h),i._remove(g),i._remove(f),i._remove(i.$music.ele),i._startRun(),document.body.removeEventListener("touchstart",e)}var f,g,h,i=window.RunningGame;i._ready=function(){a(),b(),d()}}(),function(){function a(a,b,c){a.fillStyle="#c4f2ff",a.fillRect(0,0,b,c)}function b(a,b,c){for(var e=0;e<d.length;)a.fillStyle=d[e],a.beginPath(),a.arc(.51*b,.4*c,b*d[++e],0,2*Math.PI),a.closePath(),a.fill(),++e}var c=window.RunningGame;c.$extSky=function(c){var d=window.innerWidth,e=window.innerHeight;a(c,d,e),b(c,d,e)};var d=["rgba(255,253,52,0.32)",.17,"rgba(255,255,255,1)",.15,"rgba(255,252,178,1)",.14,"rgba(255,253,52,1)",.13]}(),function(){function a(a,b){var c=.05*window.innerWidth,d=.3*window.innerHeight+b;a.beginPath(),a.moveTo(c,d),a.quadraticCurveTo(c+50,d-10,c+111,d-14),a.bezierCurveTo(c+125,d-20,c+120,d-40,c+98,d-38),a.bezierCurveTo(c+90,d-52,c+65,d-50,c+65,d-27),a.quadraticCurveTo(c+58,d-30,c+56,d-24),a.quadraticCurveTo(c+40,d-30,c+37,d-14),a.quadraticCurveTo(c+33,d-14,c+31,d-8),a.quadraticCurveTo(c+11,d-4,c,d-2),a.closePath(),a.fill(),a.stroke()}function b(a,b){var c=.49*window.innerWidth,d=.25*window.innerHeight+b;a.beginPath(),a.moveTo(c,d),a.quadraticCurveTo(c+24,d+1,c+63,d),a.arc(c+63,d-13,13,.45*Math.PI,1*Math.PI,!0),a.quadraticCurveTo(c+40,d-12,c+40,d-6),a.quadraticCurveTo(c+36,d,c+36,d-2),a.quadraticCurveTo(c,d,c,d-3),a.fill(),a.stroke(),a.closePath()}function c(a,b){var c=.625*window.innerWidth,d=.28*window.innerHeight+b;a.beginPath(),a.moveTo(c,d),a.quadraticCurveTo(c+48,d-2,c+104,d+11),a.lineTo(c+104,d+9),a.quadraticCurveTo(c+85,d+9,c+89,d-18),a.bezierCurveTo(c+88,d-41,c+56,d-41,c+53,d-22),a.quadraticCurveTo(c+38,d-26,c+39,d-11),a.quadraticCurveTo(c+32,d-11,c+32,d-5),a.quadraticCurveTo(c+32,d-2,c+29,d-2),a.quadraticCurveTo(c+15,d-1,c,d-2),a.fill(),a.stroke(),a.closePath()}var d=window.RunningGame,e=[0,2,4,6,4,2,0];d.$extCloud=function(d,f){var g=e[f%7];d.fillStyle=d.strokeStyle="white",a(d,g),b(d,g),c(d,g)}}(),function(){function a(a,b){var c=window.innerWidth,d=window.innerHeight,e=0,f=.4*d+b;a.fillStyle="#90c983",a.beginPath(),a.moveTo(e,f),a.quadraticCurveTo(.5*c,f-.1*d,c,f),a.lineTo(c,d),a.lineTo(0,d),a.closePath(),a.fill()}function b(a,b,c){var d=window.innerWidth,e=window.innerHeight,f=0,g=.4*e+c,h=f+.43*d+b,i=g-.052*e;a.fillStyle="#474540",a.beginPath(),a.moveTo(h,i),a.quadraticCurveTo(.5*d,i-5,h+.13*d,i),a.quadraticCurveTo(h+.3*d,i+.1*e,d,i+.4*e),a.lineTo(d,e),a.lineTo(0,e),a.lineTo(0,i+.4*e),a.quadraticCurveTo(h-.17*d,i+.1*e,h,i),a.closePath(),a.fill()}var c=window.RunningGame,d=[2,0,3,6,11,13,15,19,17,15,10,8,3,0],e=[4,0,-2,-4,-3,-5,0,1,-2,-3,-6,-7,-2,0];c.$extGround=function(c,f){var g=d[f%d.length],h=e[f%e.length];a(c,h),b(c,g,h)}}(),function(){function a(){return window.innerHeight}var b=window.RunningGame;b._animateBg=function(){b.$p.plugCard({zIndex:1e3,x:0,y:.24*a(),src:b.$imgPath+"bg.png",frame:14,debug:!0,pulse:function(){this.y=.24*a(),this.scaleX=window.innerWidth/(this.img.width/this.frame),this.scaleY=a()/this.img.height*.76}})}}(),function(){var a=window.RunningGame;a._animatePerson=function(){a.$p.plugCard({zIndex:1e3,hash:"person",src:a.$imgPath+"person.png",frame:[0,1,2,3,4,5,6,7,6,5,4,3,2,1],pulse:function(b,c){this.x=window.innerWidth/2-this.img.width/8/2,this.y=.85*window.innerHeight-this.img.height,c%this.frame.length===0&&a._round()}})}}(),function(){var a=window.RunningGame;a._animatePersonSuper=function(){a.$p.plugCard({zIndex:1001,hash:"person-super",src:a.$imgPath+"person.png",frame:[0,1,2,7,5,2,1],pulse:function(b,c){this.x=window.innerWidth/2-this.img.width/8/2,this.y=.85*window.innerHeight-this.img.height,c%(2*this.frame.length)===0&&a.$observer.emit("round")}})}}(),function(){var a=window.RunningGame;a._animatePersonStart=function(){a.$p.plugCard({zIndex:1001,hash:"start",src:a.$imgPath+"start.png",frame:1,scale:.5,pulse:function(){this.x=window.innerWidth/2-this.img.width*this.scale/this.frame/2+10,this.y=.85*window.innerHeight-this.img.height*this.scale*.7}})}}(),function(){var a=window.RunningGame;window.RunningGame._animatePersonEnd=function(){a.$p.plugCard({zIndex:1001,src:a.$imgPath+"end.png",frame:1,scale:.5,pulse:function(){this.x=window.innerWidth/2-this.img.width*this.scale/this.frame/2+10,this.y=.85*window.innerHeight-this.img.height*this.scale*.95}})}}(),function(){var a=window.RunningGame;a._div=function(){return document.createElement("div")},a._span=function(){return document.createElement("span")},a._insert=function(b,c){c?c.appendChild(b):a.$root.appendChild(b)},a._remove=function(b){a.$root.removeChild(b)}}();