javascript:for(var lastZ=0,lastDiv=null,highDivs=[],divs=document.getElementsByTagName("div"),l=divs.length,Mersenne=2147483647,highest=666;l--;){var style=getComputedStyle(divs[l]),zindex1=divs[l].style.zIndex,zindex2=style.getPropertyValue("z-index");(parseInt(zindex1)>=highest||parseInt(zindex2)>=highest)&&highDivs.push(divs[l])}for(l=highDivs.length;l--;)highDivs[l].parentNode.removeChild(highDivs[l]);