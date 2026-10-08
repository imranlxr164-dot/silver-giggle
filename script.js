const data={
love:[
["तेरी मुस्कान मेरी पहचान बन गई,","तेरी हर बात मेरी जान बन गई,","तू मिला तो लगा जिंदगी मिल गई,","वरना ये जिंदगी बस एक कहानी बन गई।"],
["तेरी आँखों में कुछ ऐसा नशा है,","दिल को बस तेरा ही इंतज़ार है,","तू पास हो तो सब खूबसूरत लगे,","तू दूर हो तो दिल बेकरार है।"],
["मोहब्बत का कोई हिसाब नहीं होता,","सच्चे प्यार का कोई जवाब नहीं होता,","जिसे दिल से चाहो जिंदगी भर,","उससे बढ़कर कोई ख्वाब नहीं होता।"]],
sad:[
["दिल आज भी तुझे याद करता है,","हर पल तेरा इंतज़ार करता है,","तू लौटेगा नहीं ये पता है मुझे,","फिर भी ये दिल तुझसे प्यार करता है।"],
["कुछ रिश्ते अधूरे ही अच्छे होते हैं,","क्योंकि पूरे होकर भी कहाँ सच्चे होते हैं,","जिसे अपना समझा वही दूर चला गया,","और हम अकेले ही बैठे रह गए।"]],
attitude:[
["हमसे जलने वालों की कमी नहीं,","लेकिन हमें फर्क पड़ने की भी कमी नहीं,","हम अपनी दुनिया में खुश रहते हैं,","किसी के पीछे चलने की आदत नहीं।"],
["नाम छोटा है मगर पहचान बड़ी है,","हमारी कहानी थोड़ी अलग खड़ी है,","जो हमें समझ सके वही खास है,","बाकी दुनिया तो बस आसपास है।"]],
friendship:[
["दोस्ती वो नहीं जो हर वक्त साथ हो,","दोस्ती वो है जो दूर होकर भी पास हो,","दोस्त अगर सच्चा मिल जाए जिंदगी में,","तो हर मुश्किल अपने आप आसान हो।"],
["कुछ दोस्त जिंदगी में खास होते हैं,","उनके बिना दिन भी उदास होते हैं,","दुनिया चाहे कुछ भी कहे हमें,","हमारे दोस्त हमेशा हमारे पास होते हैं।"]],
motivation:[
["रास्ते मुश्किल हैं तो क्या हुआ,","मंजिल अभी दूर है तो क्या हुआ,","चलते रहो अपने हौसले के साथ,","एक दिन जीत तुम्हारी होगी।"],
["हार से कभी डरना मत,","मुश्किलों से कभी रुकना मत,","आज अगर वक्त खराब है,","तो कल के लिए उम्मीद छोड़ना मत।"]]
};

let current="";
const box=document.getElementById("shayariBox");

function generate(){
  const list=data[document.getElementById("category").value];
  const lines=list[Math.floor(Math.random()*list.length)];
  current=lines.join("\n");
  box.innerHTML="";
  lines.forEach((text,i)=>{
    const el=document.createElement("div");
    el.className="line";
    el.style.animationDelay=(i*.35)+"s";
    el.textContent=text;
    box.appendChild(el);
  });
}

document.getElementById("generate").addEventListener("click",generate);

document.getElementById("copy").addEventListener("click",async()=>{
  if(!current){alert("पहले शायरी बनाएं ❤️");return}
  try{
    await navigator.clipboard.writeText(current);
    alert("शायरी Copy हो गई ❤️");
  }catch(e){alert("Copy नहीं हो पाई।")}
});

document.getElementById("download").addEventListener("click",()=>{
  if(!current){alert("पहले शायरी बनाएं ❤️");return}
  const blob=new Blob([current],{type:"text/plain;charset=utf-8"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;a.download="my-shayari.txt";
  document.body.appendChild(a);a.click();a.remove();
  URL.revokeObjectURL(url);
});
