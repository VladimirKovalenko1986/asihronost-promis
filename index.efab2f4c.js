!function(){var e=document.getElementById("time"),t=document.getElementById("stopBtn"),n=document.getElementById("continueBtn"),a=new Date("Jan 1, ".concat((new Date).getFullYear()+1));c();var o=setInterval(c,1e3);function c(){var t=Date.now(),n=((new Date).getTime(),a-t),o=Math.floor(n/864e5),c=Math.floor(n/36e5%24),l=Math.floor(n/6e4%60),d=Math.floor(n/1e3%60);e.textContent="".concat(o," d. ").concat(c," h. ").concat(l," m. ").concat(d," s."),n<=0&&(r(),e.textContent="Heppy New Year!!!")}function r(){clearInterval(o),alert("The timer has been stopped!")}t.addEventListener("click",r),n.addEventListener("click",(function(){setInterval(c,1e3)}))}();
//# sourceMappingURL=index.efab2f4c.js.map
