window.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("canvas");if(e){var n=e.getContext("2d");if(n){var t=window.innerWidth<720?window.innerWidth:720,o=t;e.width=t,e.height=o;for(var i=2*Math.PI,a=t/2*.8,d=0;d<360;d++){var l=i*(d/360),r=i*((d+1)/360);n.beginPath(),n.fillStyle="hsl("+d+", 100%, 50%)",n.moveTo(t/2,o/2),n.arc(t/2,o/2,a,l,r,!1),n.lineTo(t/2,o/2),n.closePath(),n.fill()}}else console.log("Not context 2d")}else console.error("Not canvas")}));