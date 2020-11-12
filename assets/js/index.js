const navSlide=()=>{
    const bu=document.querySelector(".burger");
    const na=document.querySelector(".nav-links");
    const navLinks=document.querySelectorAll(".nav-links li");


    bu.addEventListener("click",()=>{
        na.classList.toggle('nav-active');
        navLinks.forEach((element,index) => {
            if(element.style.animation){
                element.style.animation="";
            }else{
                element.style.animation="navLinkFade 0.5s ease forwards "+(index/7)+"s";
            }
            
          
    
            
        });
        bu.classList.toggle('toggle');

    });

}
navSlide();
