function lasad_client(){var Q='',yb='" for "gwt:onLoadErrorFn"',wb='" for "gwt:onPropertyErrorFn"',jb='"><\/script>',$='#',Gb='&',kc='.cache.html',ab='/',mb='//',Zb='093C626C752120B4C01A1D52A6D4CC02',$b='1E18B9F57BB908821E706E25AC498A4E',_b='28137100849EB93181092ED6424D6354',ac='5A1FB6455E487B32F5C5058257C5F719',bc='7E764D2CA020C032EF33519F9C1E58A9',cc='80DA740B27ABE8305137CB3636348A41',dc='90FD3C410DF86B0DDDC332B3BF86BF3C',jc=':',qb='::',sc='<script defer="defer">lasad_client.onInjectionDone(\'lasad_client\')<\/script>',ib='<script id="',tb='=',_='?',ec='A0D7A18574FBA816B2640F274052E895',fc='BE4FDF048E154C9B8315B95D9AA5AAEF',gc='BE83EBA3F162376B708545FC2137A352',vb='Bad handler "',hc='D0C117F315CD7FA052EEC55CDEF1FEBF',rc='DOMContentLoaded',ic='F8390EDFF1E3646B1CB2512DF10F05C1',kb='SCRIPT',Jb='Unexpected exception in locale detection, using default: ',Ib='_',Hb='__gwt_Locale',hb='__gwt_marker_lasad_client',lb='base',db='baseUrl',U='begin',T='bootstrap',cb='clear.cache.gif',sb='content',Yb='de',Eb='default',Z='end',Sb='gecko',Tb='gecko1_8',V='gwt.codesvr=',W='gwt.hosted=',X='gwt.hybrid',lc='gwt/dark/dark.css',xb='gwt:onLoadErrorFn',ub='gwt:onPropertyErrorFn',rb='gwt:property',qc='head',Wb='hosted.html?lasad_client',pc='href',Rb='ie6',Qb='ie8',Pb='ie9',zb='iframe',bb='img',Ab="javascript:''",R='lasad_client',fb='lasad_client.nocache.js',pb='lasad_client::',mc='link',Vb='loadExternalRefs',Db='locale',Fb='locale=',nb='meta',Cb='moduleRequested',Y='moduleStartup',Ob='msie',ob='name',Lb='opera',Bb='position:absolute;width:0;height:0;border:none',nc='rel',Nb='safari',eb='script',Xb='selectingPermutation',S='startup',oc='stylesheet',gb='undefined',Ub='unknown',Kb='user.agent',Mb='webkit';var m=window,n=document,o=m.__gwtStatsEvent?function(a){return m.__gwtStatsEvent(a)}:null,p=m.__gwtStatsSessionId?m.__gwtStatsSessionId:null,q,r,s,t=Q,u={},v=[],w=[],x=[],y=0,z,A;o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:U});if(!m.__gwt_stylesLoaded){m.__gwt_stylesLoaded={}}if(!m.__gwt_scriptsLoaded){m.__gwt_scriptsLoaded={}}function B(){var b=false;try{var c=m.location.search;return (c.indexOf(V)!=-1||(c.indexOf(W)!=-1||m.external&&m.external.gwtOnLoad))&&c.indexOf(X)==-1}catch(a){}B=function(){return b};return b}
function C(){if(q&&r){var b=n.getElementById(R);var c=b.contentWindow;if(B()){c.__gwt_getProperty=function(a){return I(a)}}lasad_client=null;c.gwtOnLoad(z,R,t,y);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Y,millis:(new Date).getTime(),type:Z})}}
function D(){function e(a){var b=a.lastIndexOf($);if(b==-1){b=a.length}var c=a.indexOf(_);if(c==-1){c=a.length}var d=a.lastIndexOf(ab,Math.min(c,b));return d>=0?a.substring(0,d+1):Q}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=n.createElement(bb);b.src=a+cb;a=e(b.src)}return a}
function g(){var a=G(db);if(a!=null){return a}return Q}
function h(){var a=n.getElementsByTagName(eb);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(fb)!=-1){return e(a[b].src)}}return Q}
function i(){var a;if(typeof isBodyLoaded==gb||!isBodyLoaded()){var b=hb;var c;n.write(ib+b+jb);c=n.getElementById(b);a=c&&c.previousSibling;while(a&&a.tagName!=kb){a=a.previousSibling}if(c){c.parentNode.removeChild(c)}if(a&&a.src){return e(a.src)}}return Q}
function j(){var a=n.getElementsByTagName(lb);if(a.length>0){return a[a.length-1].href}return Q}
function k(){var a=n.location;return a.href==a.protocol+mb+a.host+a.pathname+a.search+a.hash}
var l=g();if(l==Q){l=h()}if(l==Q){l=i()}if(l==Q){l=j()}if(l==Q&&k()){l=e(n.location.href)}l=f(l);t=l;return l}
function E(){var b=document.getElementsByTagName(nb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(ob),g;if(f){f=f.replace(pb,Q);if(f.indexOf(qb)>=0){continue}if(f==rb){g=e.getAttribute(sb);if(g){var h,i=g.indexOf(tb);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=Q}u[f]=h}}else if(f==ub){g=e.getAttribute(sb);if(g){try{A=eval(g)}catch(a){alert(vb+g+wb)}}}else if(f==xb){g=e.getAttribute(sb);if(g){try{z=eval(g)}catch(a){alert(vb+g+yb)}}}}}}
function F(a,b){return b in v[a]}
function G(a){var b=u[a];return b==null?null:b}
function H(a,b){var c=x;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function I(a){var b=w[a](),c=v[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(A){A(a,d,b)}throw null}
var J;function K(){if(!J){J=true;var a=n.createElement(zb);a.src=Ab;a.id=R;a.style.cssText=Bb;a.tabIndex=-1;n.body.appendChild(a);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Y,millis:(new Date).getTime(),type:Cb});a.contentWindow.location.replace(t+M)}}
w[Db]=function(){var b=null;var c=Eb;try{if(!b){var d=location.search;var e=d.indexOf(Fb);if(e>=0){var f=d.substring(e+7);var g=d.indexOf(Gb,e);if(g<0){g=d.length}b=d.substring(e+7,g)}}if(!b){b=G(Db)}if(!b){b=m[Hb]}if(b){c=b}while(b&&!F(Db,b)){var h=b.lastIndexOf(Ib);if(h<0){b=null;break}b=b.substring(0,h)}}catch(a){alert(Jb+a)}m[Hb]=c;return b||Eb};v[Db]={de:0,'default':1};w[Kb]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return b.indexOf(Lb)!=-1}())return Lb;if(function(){return b.indexOf(Mb)!=-1}())return Nb;if(function(){return b.indexOf(Ob)!=-1&&n.documentMode>=9}())return Pb;if(function(){return b.indexOf(Ob)!=-1&&n.documentMode>=8}())return Qb;if(function(){var a=/msie ([0-9]+)\.([0-9]+)/.exec(b);if(a&&a.length==3)return c(a)>=6000}())return Rb;if(function(){return b.indexOf(Sb)!=-1}())return Tb;return Ub};v[Kb]={gecko1_8:0,ie6:1,ie8:2,ie9:3,opera:4,safari:5};lasad_client.onScriptLoad=function(){if(J){r=true;C()}};lasad_client.onInjectionDone=function(){q=true;o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Vb,millis:(new Date).getTime(),type:Z});C()};E();D();var L;var M;if(B()){if(m.external&&(m.external.initModule&&m.external.initModule(R))){m.location.reload();return}M=Wb;L=Q}o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:Xb});if(!B()){try{H([Yb,Qb],Zb);H([Eb,Tb],$b);H([Yb,Nb],_b);H([Yb,Lb],ac);H([Eb,Qb],bc);H([Eb,Rb],cc);H([Eb,Pb],dc);H([Yb,Tb],ec);H([Yb,Rb],fc);H([Yb,Pb],gc);H([Eb,Nb],hc);H([Eb,Lb],ic);L=x[I(Db)][I(Kb)];var N=L.indexOf(jc);if(N!=-1){y=Number(L.substring(N+1));L=L.substring(0,N)}M=L+kc}catch(a){return}}var O;function P(){if(!s){s=true;if(!__gwt_stylesLoaded[lc]){var a=n.createElement(mc);__gwt_stylesLoaded[lc]=a;a.setAttribute(nc,oc);a.setAttribute(pc,t+lc);n.getElementsByTagName(qc)[0].appendChild(a)}C();if(n.removeEventListener){n.removeEventListener(rc,P,false)}if(O){clearInterval(O)}}}
if(n.addEventListener){n.addEventListener(rc,function(){K();P()},false)}var O=setInterval(function(){if(/loaded|complete/.test(n.readyState)){K();P()}},50);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:Z});o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Vb,millis:(new Date).getTime(),type:U});n.write(sc)}
lasad_client();