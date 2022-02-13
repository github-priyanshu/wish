function showPan(num){
  op(".pan.active").classList.remove("active");
  op(`.pan.p${num}`).classList.add("active");
}


document.body.addEventListener("click",(e)=>{
  var x=e.clientX-30,y=e.clientY-30,
  scale=Math.random(),hue=Math.ceil(Math.random()*360),
  rot= 15+Math.ceil(Math.random()*30);

  var elem=document.createElement("img");
  elem.src="back.jpg";
  elem.classList.add("flyKite");
  elem.setAttribute("style", `top: ${y}px; left: ${x}px; transform: scale(${scale}) rotate(${rot}deg); filter: hue-rotate(${hue}deg) opacity(.8);`)

  document.body.insertAdjacentElement("beforeend",elem);
  elem.onanimationend=()=>{elem.remove()}
})
resetFormat();

