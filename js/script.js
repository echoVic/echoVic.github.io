window.onload=function(){
    var aA=document.getElementsByTagName('a');
	for(var i=0; i<aA.length; i++){
		aA[i].onmouseover=function(){
			var This=this;
			clearInterval(This.time);
			This.time=setInterval(function(){
					This.style.width=This.offsetWidth+8+"px";
					if(This.offsetWidth>=380)
					clearInterval(This.time);
				},30)
		}
		aA[i].onmouseout=function(){
				clearInterval(this.time);
				var This=this;
				this.time=setInterval(function(){
					This.style.width=This.offsetWidth-8+"px";
					if(This.offsetWidth<=350){
						This.style.width='350px';
						clearInterval(This.time);
					}
				},30)
		}
	}
}