var html="",
by=decodeURI(location.search.split("=")[1]) || "Awesome Code",
loader=op(".loader");

for(let i=0; i<20; i++){
	var l=Math.ceil(Math.random()*window.innerWidth),
	t=Math.ceil(Math.random()*window.innerHeight)+100,
	delay=Math.ceil(Math.random()* -10),
	time=5+Math.ceil(Math.random()* 5),
	d=10+Math.ceil(Math.random()*10);

	html+=`<div class="kite" style="animation-delay: ${delay}s;animation-duration: ${time}s;left: ${l}px; top: ${t}px; width: ${d}px; height: ${d}px;"></div>`
}
loader.insertAdjacentHTML("afterbegin",html);
var loadNum=0;

var ulti=setTimeout(()=>{
	loadNum=3;
	imgLoaded();
},5000)

function imgLoaded(){
	loadNum++;
	if(loadNum>=3){
		clearTimeout(ulti);
		op(".pan.p1").innerHTML=`<div class="top flex w100p" onclick="window.open('https://ai-player.netlify.app?sh=16')"><img src="img/front.jpg" class="w100p"><div class="icons flex"><img src="img/mini1.jpg" class="ico"><img src="img/mini2.jpg" class="ico"></div></div><div class="bottom w100p"><div class="shayari"></div></div><div class="msg flex c"><div class="head">${by} ने आपके लिए उपहार भेजा है</div><div class="large flex"><span>खोलें</span></div></div><div class="welAi flex" onclick="window.open('https://ai-player.netlify.app?sh=16')"><span fs="1.1" fw="bold"> मुफ्त </span> में फिल्में: <span fs="1.1" fw="bold"> CLICK </span></div>`;
		resetFormat();
		loader.classList.remove("active");
	}
}
