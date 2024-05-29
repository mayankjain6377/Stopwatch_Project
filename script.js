let hr=document.querySelector("#hr");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");
let count=document.querySelector("#count");
let startbtn=document.querySelector("#start");
let stopbtn=document.querySelector("#stop");
let resetbtn=document.querySelector("#reset");
let clock =document.querySelector(".clock");
 hr=0;
 min=0;
sec=0;
 count=0;


startbtn.addEventListener("click",()=>{
    timer=true;
    stopwatch(); 
});
resetbtn.addEventListener("click",()=>{
    timer=false;
    hr=0;
    min=0;
   sec=0;
    count=0;
    document.querySelector("#hr").innerHTML="00";
    document.querySelector("#min").innerHTML="00";
    document.querySelector("#sec").innerHTML="00";
    document.querySelector("#count").innerHTML="00";
});
stopbtn.addEventListener("click", () => {
    timer = false;
    stopwatch();
});
function stopwatch(){

    if(timer){
        count++;
        if(count==100)
            {
                sec++;
                count=0;
            }
        if(sec==60)
            {
                min++;
                count=0;
                sec=0;
            }
        if(min==60)
            {
                hr++;
                count=0;
                sec=0;
                min=0;
            }

            let hrString = hr; 
            let minString = min; 
            let secString = sec; 
            let countString = count; 
      
            if (hr < 10) { 
                hrString = "0" + hrString; 
            } 
      
            if (min < 10) { 
                minString = "0" + minString; 
            } 
      
            if (sec < 10) { 
                secString = "0" + secString; 
            } 
      
            if (count < 10) { 
                countString = "0" + countString; 
            } 
            document.querySelector("#hr").innerHTML=hrString;
            document.querySelector("#min").innerHTML=minString;
            document.querySelector("#sec").innerHTML=secString;
            document.querySelector("#count").innerHTML=countString;
            // min.innerHTML=minString;
            // sec.innerHTML=secString;
            // count.innerHTML=countString;


            setTimeout(stopwatch,10);
        }
        
    }


clock.addEventListener("click",()=>{
    window.location.href = "/03_digital_clock/index.html";
})


