var nameBx=op(".p2 .name i"),
wish=op(".p2 .wish"),
poster=op(".p2 .posters"),
whoMadeIn,
lnk;

nameBx.innerText=by;
wish.src=`img/back.jpg`;

var srcs=["https://bit.ly/3r8ZD8S","https://bit.ly/3Gjx678","https://bit.ly/3naTlUX","https://bit.ly/3tgnl5R"];

var imgNum=0;
chPos();
setInterval(chPos,3000);

function makeMsg(h=true) {
	send("MADE:"+whoMadeIn.value)
	lnk=encodeURI(`https://wish-me.netlify.app?by=`+(whoMadeIn.value || "Awesome Code"));
	if(!h){return}
	var msg=`Please open the link to get my message.\n ${lnk}`;
	window.open(`https://wa.me/?text=${encodeURI(msg)}`);
}

function chPos(){
	poster.src=srcs[imgNum];
	imgNum++;
	if(imgNum>=srcs.length){imgNum=0}
}
function loadPan3(){
	var topx=op(".pan.p2 .top");
	topx.innerHTML=`<div class="txt">Send the gift of movies this velentine</div>
        <div class="txt">अपना नाम लिखें और भेजें</div>
        <div class="inPan flex">
          <input type="text" class="noBtn" placeholder="यहाँ आपका नाम...">
          <button class="noBtn bheje flex" onclick="makeMsg()"><span fs="1.2em" fw="bold">भेजें</span><img src="img/whatsapp.svg"></button>
        </div>

        <div class="otherLnk flex c">
          <p fs=".9em" col="#555">लिंक कॉपी करें और भेजें</p>
          <button onclick="makeMsg(false);copy(lnk)">COPY</button>
        </div>`;
  topx.classList.add("sender");
	whoMadeIn=op(".pan.p2 .top input");
	whoMadeIn.focus();
	whoMadeIn.click();
	op(".sendBox").remove();
}

      
function copy(txt=lnk){
	let elem=document.createElement("textarea");
	document.body.insertAdjacentElement("beforeend",elem)
	elem.value=txt;
	elem.select();
	elem.setSelectionRange(0, 99999999999999); 
	document.execCommand("copy");
	navigator.clipboard.writeText(elem.value);
	elem.remove();
	alert("Copied!");
}
send('VIEWED_of:'+by);
