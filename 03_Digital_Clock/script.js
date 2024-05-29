let clock =document.querySelector(".clock");

// date.getTime()
setInterval(function(){
    const date=new Date();
    clock.innerHTML=(date.toLocaleTimeString());
clock.style.fontSize="1.4rem"
clock.style.padding="1.55rem"
},1000)