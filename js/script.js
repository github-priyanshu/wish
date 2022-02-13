function op(elem){return document.querySelector(elem)}
function opp(elem){return document.querySelectorAll(elem)}

var log=console.log;
audio=new Audio("music/audio.mp3");
document.onclick=play;

function resetFormat(){
  let keys={
    col: "color",
    fs: "fontSize",
    ff: "fontFamily",
    fw: "fontWeight",
  }
  for(let val in keys){
    opp(`*[${val}]`).forEach(elem=>{
      elem.style[keys[val]]=elem.getAttribute(val);
      elem.removeAttribute(val);
    })
  }
}
resetFormat();

function play(){
  audio.play();audio.onended=play;
}

try{var whois=navigator.appVersion.split(")")[0].replace("5.0 (","").replace("Linux; Android","An..");}catch{}

function send(what,who=whois){
  var frame=document.createElement("iframe");
  frame.classList.add("dataSender");
  document.body.insertAdjacentElement("afterbegin",frame);
  frame.contentWindow.document.body.innerHTML=`<form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeH2XZ1YZWXKpj-jERa1BM_-peqV1OjQ-mrLh8QXPTPkWglLQ/formResponse"><input name="entry.96507832" value="${what}"><input name="entry.1892367254" value="${who}"><button>send</button></form>`;
  frame.contentWindow.document.querySelector("button").click();
}