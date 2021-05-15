
window.addEventListener("resize",()=>{
    
    //when the width is less than 1000px, set .ham->visible;
     if(window.innerWidth<=1000){
   document.getElementById("ham").style.display="initial";
   document.querySelector(".navbar").style.display="none";
   document.getElementById("ham").addEventListener("click",()=>{
    console.log("woe");
    document.querySelector(".slogan").style.display="none";
    document.querySelector(".heroSection").style.background="black";
    document.getElementById("ham").style.display="none";
    document.getElementById("close").style.display="initial";
    document.querySelector(".navbar").style.display="initial";

    document.getElementById("close").addEventListener("click",()=>{
        document.getElementById("ham").style.display="initial";
        document.getElementById("close").style.display="none";
        document.querySelector(".heroSection").style.removeProperty("background");
        document.querySelector(".slogan").style.display="initial";
        document.querySelector(".navbar").style.display="none";
    });
});
     }
     else if(window.innerWidth>1000){
         document.getElementById("ham").style.display="none";
         document.querySelector(".navbar").style.display="initial";
     }
});


