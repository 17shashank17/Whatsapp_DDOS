window.addEventListener('load', setTimeout(go, 10000));

function go(){
    const timeout = setInterval(_ => {
        const msg_box = document.querySelector('._3u328');
        const msg = 'you are under attack';
        event=document.createEvent("UIEvents");
        msg_box.innerHTML=msg.replace();
        event.initUIEvent("input", true, true, window, 1); 
        msg_box.dispatchEvent(event);
        const btn = document.querySelector('._3M-N-');
        //console.log('doing');
        //console.log(msg_box);
        //msg_box.innerHTML = msg;
        //msg_box.send_keys();
        btn.click();
    }, 10);
}