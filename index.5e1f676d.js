const e=document.getElementById("time"),t=document.getElementById("stopBtn"),n=document.getElementById("continueBtn"),o=new Date(`Jan 1, ${(new Date).getFullYear()+1}`);l();let a=setInterval(l,1e3);function l(){const t=Date.now(),n=((new Date).getTime(),o-t),a=Math.floor(n/864e5),l=Math.floor(n/36e5%24),r=Math.floor(n/6e4%60),d=Math.floor(n/1e3%60);e.textContent=`${a} d. ${l} h. ${r} m. ${d} s.`,n<=0&&(c(),e.textContent="Heppy New Year!!!")}function c(){clearInterval(a),alert("The timer has been stopped!")}t.addEventListener("click",c),n.addEventListener("click",(function(){setInterval(l,1e3)}));
//# sourceMappingURL=index.5e1f676d.js.map
