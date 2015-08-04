"use strict";!function(){function a(a,b){a.canvas=j._canvas(),a.$canvas=j._canvas(),a.ctx=a.canvas.getContext("2d"),a.$ctx=a.$canvas.getContext("2d"),a.opt=b||{},a.canvas.id=a.opt.id||"",a.plugins=a.opt.debug?[j.debug]:[],a.pluginsIndex={},a.curFrame=0,a.playing=!1}function b(a){var b=a.style;b.position="fixed",b.top=0,b.left=0,b.zIndex=1e3,c(a),window.onresize=function(){c(a)}}function c(a){a.width=window.innerWidth,a.height=window.innerHeight}function d(a,b){for(var c in a.pluginsIndex)a.pluginsIndex.hasOwnProperty(c)&&a.pluginsIndex[c]>=b&&++a.pluginsIndex[c]}function e(a,b){for(var c in a.pluginsIndex)a.pluginsIndex.hasOwnProperty(c)&&a.pluginsIndex[c]>=b&&++a.pluginsIndex[c]}function f(a,b,c){a.plugins.splice(c,1),a.pluginsIndex[b]=void 0,e(a,c)}function g(a,b,c){var d=+new Date;a.playing&&(d-b>1e3/(a.opt.fps||30)&&(UPlayer._render(a),++a.curFrame,b=d,void 0!==c&&--c),void 0===c||c?i.call(window,function(){g(a,b,c)}):a.playing=!1)}function h(a){for(var b=a.length,c=0;b--;)a[b]>c&&(c=a[b]);return c+1}var i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.setTimeout,j=window.UPlayer=function(c){var d=this;a(d,c),(void 0===d.opt.fullScreen||d.opt.fullScreen)&&(b(d.canvas),b(d.$canvas),document.body.appendChild(d.canvas))};j.prototype.plug=function(a){var b=0;for(a.zIndex=a.zIndex||0,a.$hash=UPlayer._uuid();b<this.plugins.length&&!(a.zIndex<this.plugins[b].zIndex);)++b;if(this.plugins.splice(b,0,a),void 0!==a.id){var c=this.pluginsIndex[a.id];void 0!==c?"object"==typeof c?c.push(b):this.pluginsIndex[a.id]=[c,b]:(d(this,b),this.pluginsIndex[a.id]=b)}},j.prototype.plugCard=function(a){var b=this;j.preImage(a.src,function(c){a.img=c,a.render=function(b,d){a.pulse&&a.pulse(b,d);var e,f,g,i=a.scaleX||a.scale||1,j=a.scaleY||a.scale||1;"object"==typeof a.frame?(f=h(a.frame),e=a.frame[d%a.frame.length]):(f=a.frame,e=d%f),g=c.width/f,b.drawImage(c,e*g,0,g,c.height,a.x||0,a.y||0,g*i,c.height*j)},b.plug(a)})},j.prototype.unplug=function(a){var b=this.pluginsIndex[a];if(void 0!==b)if("object"!=typeof b)f(this,a,b);else for(var c=b.length;c--;)f(this,a,b[c])},j.prototype.run=function(a){if(!this.playing){this.playing=!0;var b=this;window.UPlayer._imageReady(function(){g(b,0,a)})}},j.prototype.pause=function(){this.playing=!1},j.prototype.stop=function(){this.curFrame=0,this.playing=!1}}(),function(){function a(a,b){a.clearRect(0,0,d(b),e(b))}function b(a,b){c(a,b)}function c(a,b){"function"==typeof b?b(a.ctx,a.curFrame):"function"==typeof b.render&&b.render(a.ctx,a.curFrame)}function d(a){return a.canvas.width}function e(a){return a.canvas.height}var f=window.UPlayer;f._render=function(c){(c.opt.refresh||void 0===c.opt.refresh)&&a(c.ctx,c);for(var d=0;d<c.plugins.length;)c.plugins[d]=c.plugins[d]||{},b(c,c.plugins[d]),++d},f._clearCache=function(){}}(),function(){function a(a,b){if(f[a])f[a].push(b);else{++e,f[a]=[b];var d=new Image;d.src=a,d.complete?c(d,a):d.onload=function(){c(d,a)}}}function b(){for(var a=0;a<g.length;)g[a](),++a}function c(a,c){--e||b(),d[c]=a;for(var g=0;g<f[c].length;)f[c][g](a),++g;f[c]=null}var d={},e=0,f={},g=[];window.UPlayer.preImage=function(b,c){var e=d[b];e?c(e):a(b,c)},window.UPlayer._imageReady=function(a){e?g.push(a):a()}}(),function(){function a(){if(!f){var a=document.createElement("div"),b=a.style;a.id=g,b.position="fixed",b.top=0,b.right=0,b.zIndex=1e4,b.fontSize="24px",b.color="#fff",b.margin="5px",b.padding="10px",b.background="rgba(0, 0, 0, 0.6)",a.innerText="FPS 0",document.body.appendChild(a),f=!0}}var b,c=+new Date,d=10,e=0,f=!1,g="uplayer-fps";window.UPlayer.debug=function(){a(),++e%d===0&&(b=+new Date,document.getElementById(g).innerText="FPS "+(d/((b-c)/1e3)).toFixed(1),c=b)}}(),function(){var a=window.UPlayer;a._uuid=function(){for(var a=[],b="0123456789abcdef",c=0;36>c;c++)a[c]=b.substr(Math.floor(16*Math.random()),1);return a[14]="4",a[19]=b.substr(3&a[19]|8,1),a[8]=a[13]=a[18]=a[23]="-",a.join("")},a._canvas=function(){return document.createElement("canvas")}}(),function(){function a(a,e,j){c(a,e,j),d(),f(),g(),h(),i(),b()}function b(){k.$root=k._div(),k.$root.id=k.$opt.id||"",k.$root.style.zIndex=1e3,k._insert(k.$root,document.body)}function c(a,b,c){k.$opt=a||{},k.$path="http://img.ucweb.com/s/uae/g/01/running_game/",k.$cb=b,k.$round=c,k.$grade=1,k.$res=0,k.$running=!0}function d(){for(var a=k.$extPlugin=[],b=k.$opt.extension||k.EXT,c=0;c<b.length;)"string"==typeof b[c]&&-1!==k.EXT.indexOf(b[c])&&a.push({zIndex:c,extName:b[c]}),"function"==typeof b[c]&&a.push({zIndex:c,render:b[c]}),++c}function e(){for(var a=0;a<k.$extPlugin.length;)k.$p.plug(k.$extPlugin[a]),++a}function f(){k.$imgPath=k.$opt.imgPath||k.$path+"images/",k.$img=["loading.png","bg.png","end.png","music-on.png","music-off.png","person.png","ready.png","start.png"]}function g(){var a=k.$msg=k.$opt.msg||{};a.ready=a.ready||"click button to start",a.result=a.result||"cool! u ran ",a.nick=a.nick||"UU"}function h(){var a=k.$conf=k.$opt.conf||{};a.grade=a.grade||[0,1,3,5,7],a.point=a.point||[3,4,5,6,10],a.fps=a.fps||[10,20,30,40,70]}function i(){k.$audio=k.$opt.audio||{bg:k.$path+"audio/bg.mp3",over:k.$path+"audio/over.mp3"}}function j(){k.$p=new UPlayer({fps:10}),e(),k._animateBg(),k._animatePersonStart(),k._insert(k.$p.canvas),k.$p.run(1)}var k=window.RunningGame={},l=0;k.EXT=["Sky","Cloud","Ground"],k.PRE="running-game",k.start=function(b,c,d){k.$running||(a(b,c,d),k._load())},k._loaded=function(){k.$music.init(),k.$point.init(),k.$motion.init(),k._ready(),j()},k._startRun=function(){k.$time.init(),k.$p.unplug("start"),k._animatePerson(k.$p),k.$p.run(),k.$motion.combo=0},k._round=function(){var a,b=+new Date;b-l>1e3&&(l=b,a=k.$motion.getGrade(),console.log("grade: ",a),4===a&&5===k.$lastGrade&&(k.$p.unplug("person"),k._animatePersonSuper()),5===k.$lastGrade&&4===a&&(k.$p.unplug("person-super"),k._animatePerson()),k.$p.opt.fps=k.$conf.fps[a-1],k.$round&&k.$round(k.$lastGrade,a),k.$lastGrade=a)},k._gameover=function(){k.$p.unplug("person"),k.$p.unplug("person-super"),k._animatePersonEnd(k.$p),k.$p.stop(),k.$p.run(1),k.$point.end(),k.$music.stopBg(),k.$music.playOver(),setTimeout(function(){document.body.removeChild(k.$root),k.$cb&&k.$cb(k.$res),k.$running=!1},k.$opt.conf.endTime||3e3)}}(),function(){function a(){j=g._div(),j.className=i,b(j),c(j),d(j),g.$root.appendChild(j)}function b(a){k=g._div(),k.innerText=g.$msg.nick,k.className=i+"-nick",a.appendChild(k)}function c(a){m=g._span(),a.appendChild(m)}function d(a){l=g._span(),e(),a.appendChild(l)}function e(){l.innerText=g.$res+" M"}function f(){return Math.random()>.5?1:-1}var g=window.RunningGame,h=g.$point={},i="",j={},k={},l={},m={};h.init=function(){i=g.PRE+"-point",a()},h.update=function(){g.$res+=g.$conf.point[(g.$lastGrade||1)-1]+f(),e()},h.end=function(){j.className=i+" "+i+"-end",k.style.display="none",setTimeout(function(){k.className=i+"-nick "+i+"-end-nick",k.style.display="block",l.className=i+"-end-dis",m.innerText=g.$msg.result},1e3)}}(),function(){function a(){i=g.PRE+"-motion",n=0,m=0,l=-1,h.combo=0}function b(){var a=g._div();a.className=i,c(a,0),c(a,1),g._insert(a)}function c(a,b){var c,e=g._div(),f=g._div();b?(k=f,c="-r"):(j=f,c="-l"),e.className=i+c,f.className=i+"-btn "+i+"-btn"+c,d(f),f.addEventListener("touchstart",function(){h.step(b)}),e.appendChild(f),a.appendChild(e)}function d(a){a.style.background="#8a8a8a url("+g.$imgPath+"step.png) no-repeat center",a.style.backgroundSize="22px 43px"}function e(a){j.style.backgroundColor=a?"#8a8a8a":"#ffba15",k.style.backgroundColor=a?"#3088e2":"#8a8a8a"}function f(a){l!==a&&(1===a&&++h.combo,l=a)}var g=window.RunningGame,h=g.$motion={},i="",j={},k={},l=-1,m=0,n=0;h.combo=0,h.init=function(){a(),b()},h.step=function(a){f(a),e(a)},h.getGrade=function(){for(var a,b=g.$conf.grade,c=b.length;c--;)if(h.combo>=b[c]){a=c+1;break}return h.combo=0,a>m&&(m+=a-m>=2?2:1),m>a&&(m-=1),m},document.onkeydown=function(a){switch(a.keyCode){case 37:h.step(0);break;case 39:h.step(1)}}}(),function(){function a(){j=h.PRE+"-top",m=h.$conf.gameTime||1e4}function b(){k=h._div(),k.className=j,c(k),d(k),h._insert(k)}function c(a){l=h._span(),l.className=j+"-second",l.innerText="10.0",a.appendChild(l)}function d(a){var b=h._span();b.innerText="s",a.appendChild(b)}function e(a){var b=a/1e3;l.innerText=b%1!==0?b+"":b+".0",a!==m&&a%500===0&&h.$point.update()}function f(){h._gameover(),k.className=j+" "+j+"-end",setTimeout(function(){k.className=j+" "+j+"-end "+j+"-hide"},1e3)}function g(a,b,c,d){var e=0,f=setInterval(function(){c(a-e),e+=b,e>a&&-1!==a&&(clearInterval(f),d&&d())},b)}var h=window.RunningGame,i=h.$time={},j="",k={},l={},m=0;i.init=function(){a(),b(),g(m,100,e,f)}}(),function(){function a(){f.ele.addEventListener("touchstart",function(a){c()?(c("0"),b()):(c("1"),d()),a.cancelBubble=!0})}function b(){f.playBg(),f.ele.style.background="url("+e.$imgPath+"music-on.png) 10px 10px no-repeat",f.ele.style.backgroundSize="30px"}function c(a){var b=window.localStorage,c="runningGameMusicOff";return void 0===a?"1"===b.getItem(c)?!0:!1:void b.setItem(c,a)}function d(){f.stopBg(),f.ele.style.background="url("+e.$imgPath+"music-off.png) 10px 10px no-repeat",f.ele.style.backgroundSize="30px"}var e=window.RunningGame,f=e.$music={},g={},h={};f.init=function(){f.ele=e._div(),f.ele.className=e.PRE+"-music",c()?d():b(),a(),e._insert(f.ele)},f.playBg=function(){g=document.createElement("audio"),g.src=e.$audio.bg,g.volume=e.$audio.volume||1,g.loop=!0,g.play()},f.playOver=function(){c()||(h=document.createElement("audio"),h.src=e.$audio.over,h.volume=e.$audio.volume||1,h.loop=!1,h.play())},f.stopBg=function(){g.pause&&g.pause(),g.src=""}}(),function(){function a(){var a=window.innerWidth,b=window.innerHeight,c=0;k=new UPlayer({fps:30}),j._insert(k.canvas),k.plug({zIndex:0,render:function(c){c.fillStyle="#fff",c.fillRect(0,0,a,b)}}),k.plug({zIndex:1,render:function(d,e){var f="",g=0;for(e%5===0&&++c;c%4>g;)f+=".",++g;d.font="normal bold 10px Helvetica",d.fillStyle="#f47021",d.fillText("Loading"+f,a/2-20,b/2+10)}}),k.run(),k.plugCard({zIndex:0,src:j.$imgPath+"loading.png",frame:11,pulse:function(){this.x=a/2-this.img.width/this.frame/2,this.y=b/2-this.img.height}})}function b(){n=0,d(c)}function c(){if(l)h();else{l=!0;var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.href=j.$opt.css||j.$path+"css/running-game-0.1.0.css",a.complete&&h(),a.onload=h,j._insert(a,document.body)}}function d(a){var b=j.$extPlugin.length;if(m){for(;b--;)j.$extPlugin[b].extName&&e(j.$extPlugin[b])();a()}else for(m=!0;b--;)j.$extPlugin[b].extName&&f(j.$extPlugin[b],e(j.$extPlugin[b]),a)}function e(a){return function(){a.render=j["$ext"+a.extName]}}function f(a,b,c){++o;var d=document.createElement("script");d.src=j.$path+"js/extension/"+a.extName.toLowerCase()+".js",d.complete?g(b,c)():d.onload=g(b,c),j._insert(d,document.body)}function g(a,b){return function(){a(),--o||b()}}function h(){for(var a,b=1;b<j.$img.length;)a=j.$imgPath+j.$img[b],UPlayer.preImage(a,i),++b}function i(){++n===j.$img.length-1&&(j._loaded(),k.stop(),j._remove(k.canvas))}var j=window.RunningGame,k={},l=!1,m=!1,n=0;j._load=function(){a(),UPlayer.preImage(j.$imgPath+j.$img[0],function(){b()})};var o=0}(),function(){function a(){f=i._div(),f.innerText=i.$msg.ready,f.className=i.PRE+"-ready",f.style.background="url("+i.$imgPath+"ready.png) 50% -200px / 225px 245px no-repeat",i._insert(f)}function b(){g=i._div(),g.className=i.PRE+"-finger";var a=0;h=setInterval(function(){++a%2?(i.$motion.step(0),c(0)):(i.$motion.step(1),c(1))},200),i._insert(g)}function c(a){var b=g.style;b.left=a?"initial":0,b.right=a?0:"initial",b.background="url("+i.$imgPath+"ready.png) 50% "+(a?"-100px":"0%")+" / 225px 245px no-repeat"}function d(){document.body.addEventListener("touchstart",e)}function e(){clearInterval(h),i._remove(g),i._remove(f),i._remove(i.$music.ele),i._startRun(),document.body.removeEventListener("touchstart",e)}var f,g,h,i=window.RunningGame;i._ready=function(){a(),b(),d()}}(),function(){function a(){return window.innerHeight}var b=window.RunningGame;b._animateBg=function(){b.$p.plugCard({zIndex:1e3,x:0,y:.24*a(),src:b.$imgPath+"bg.png",frame:14,debug:!0,pulse:function(){this.y=.24*a(),this.scaleX=window.innerWidth/(this.img.width/this.frame),this.scaleY=a()/this.img.height*.76}})}}(),function(){var a=window.RunningGame;a._animatePerson=function(){a.$p.plugCard({zIndex:1e3,id:"person",src:a.$imgPath+"person.png",frame:[0,1,2,3,4,5,6,7,6,5,4,3,2,1],pulse:function(b,c){this.x=window.innerWidth/2-this.img.width/8/2,this.y=.85*window.innerHeight-this.img.height,c%this.frame.length===0&&a._round()}})}}(),function(){var a=window.RunningGame;a._animatePersonSuper=function(){a.$p.plugCard({zIndex:1001,id:"person-super",src:a.$imgPath+"person.png",frame:[0,1,2,7,5,2,1],pulse:function(b,c){this.x=window.innerWidth/2-this.img.width/8/2,this.y=.85*window.innerHeight-this.img.height,c%(2*this.frame.length)===0&&a.$observer.emit("round")}})}}(),function(){var a=window.RunningGame;a._animatePersonStart=function(){a.$p.plugCard({zIndex:1001,id:"start",src:a.$imgPath+"start.png",frame:1,scale:.5,pulse:function(){this.x=window.innerWidth/2-this.img.width*this.scale/this.frame/2+10,this.y=.85*window.innerHeight-this.img.height*this.scale*.7}})}}(),function(){var a=window.RunningGame;window.RunningGame._animatePersonEnd=function(){a.$p.plugCard({zIndex:1001,src:a.$imgPath+"end.png",frame:1,scale:.5,pulse:function(){this.x=window.innerWidth/2-this.img.width*this.scale/this.frame/2+10,this.y=.85*window.innerHeight-this.img.height*this.scale*.95}})}}(),function(){var a=window.RunningGame;a._div=function(){return document.createElement("div")},a._span=function(){return document.createElement("span")},a._insert=function(b,c){c?c.appendChild(b):a.$root.appendChild(b)},a._remove=function(b){a.$root.removeChild(b)}}();