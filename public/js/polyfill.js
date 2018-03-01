// https://github.com/Fyrd/purejs-datalist-polyfill
// license: MIT
(function(f){function w(e,h,g){var a=f.createElement("ul"),k=null;a.id=s;a.className=x;f.body.appendChild(a);for(var b=f.createDocumentFragment(),m=0;m<g.length;m++){var q=g[m],p=f.createElement("li");p.innerText=q.value;b.appendChild(p)}a.appendChild(b);var r=a.childNodes,t=function(c){for(var d=0;d<r.length;d++)c(r[d])},l=function(c,d,a){c.addEventListener?c.addEventListener(d,a,!1):c.attachEvent("on"+d,a)};h.parentNode.removeChild(h);l(e,"focus",function(){a.scrollTop=0});l(e,"blur",function(c){setTimeout(function(){a.style.display=
"none";t(function(a){a.className=""})},100)});var u=function(){a.style.top=e.offsetTop+e.offsetHeight+"px";a.style.left=e.offsetLeft+"px";a.style.width=e.offsetWidth+"px"},v=function(c){e.value=c.innerText;y(e,"change");setTimeout(function(){a.style.display="none"},100)};h=function(c){a.style.display="block";u();k=[];t(function(a){var c=e.value.toLowerCase();(c=c.length&&-1<a.innerText.toLowerCase().indexOf(c))&&k.push(a);a.style.display=c?"block":"none"})};l(e,"keyup",h);l(e,"focus",h);t(function(a){l(a,
"mouseover",function(d){t(function(d){d.className=a==d?n:""})});l(a,"mouseout",function(d){a.className=""});l(a,"mousedown",function(d){v(a)})});l(window,"resize",u);l(e,"keydown",function(c){var d=a.querySelector("."+n);if(k.length){var e=38==c.keyCode,f=40==c.keyCode;if(e||f)if(f&&!d)k[0].className=n;else if(d){for(var b=null,h=null,g=0;g<k.length;g++)if(k[g]==d){b=k[g-1];h=k[g+1];break}d.className="";e&&(b?(b.className=n,b.offsetTop<a.scrollTop&&(a.scrollTop-=b.offsetHeight)):k[k.length-1].className=
n);f&&(h?(h.className=n,h.offsetTop+h.offsetHeight>a.scrollTop+a.offsetHeight&&(a.scrollTop+=h.offsetHeight)):k[0].className=n)}!d||13!=c.keyCode&&9!=c.keyCode||v(d)}})}var x="datalist-polyfill",n="datalist-polyfill__active",m=!(!f.createElement("datalist")||!window.HTMLDataListElement),b=navigator.userAgent,b=b.match(/Android/)&&!b.match(/(Firefox|Chrome|Opera|OPR)/);if(!m||b)for(var m=f.querySelectorAll("input[list]"),y=function(e,b){var g;f.createEvent?(g=f.createEvent("HTMLEvents"),g.initEvent(b,
!0,!0),e.dispatchEvent(g)):(g=f.createEventObject(),g.eventType=b,e.fireEvent("on"+b,g))},b=0;b<m.length;b++){var r=m[b],s=r.getAttribute("list"),p=f.getElementById(s);if(!p){console.error("No datalist found for input: "+s);break}var q=f.querySelector('select[data-datalist="'+s+'"]'),z=(q||p).getElementsByTagName("option");w(r,p,z);q&&q.parentNode.removeChild(q)}})(document);