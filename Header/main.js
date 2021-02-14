window.addEventListener("scroll",function(){
    const logoImage=document.querySelector
    (".logo img");
    const mainNav=document.getElementById
    ("mainNav");
    if (window.pageXOffset>0){
        logoImage.style.height="64px";
        mainNav.classList.add('bg-black');
        mainNav.classList.add('txt-white');
    }
    else{
        logoImage.style.height="84px";
        mainNav.classList.remove('bg-black');
        mainNav.classList.remove('txt-white');
    }
});