/*function menuShow() {
    const menuMobile = document.querySelector('.menu-mobile');
    const icon =  document.getElementById('icon');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        icon.classList.replace("fa-bars", "fa-xmark-large");
    }else{
        menuMobile.classList.add("open");
        icon.classList.replace("fa-xmark-large", "fa-bars");
    }
   
        
}
*/

function menuShow() {
    const icon =  document.getElementById('icon-menu');
    const menu= document.querySelector(".menu-mobile");
    if(menu.classList.contains("menu-close")){
        menu.classList.remove("menu-close");
        icon.classList.replace("fa-bars", "fa-xmark");
    }else{
        menu.classList.add("menu-close");
        icon.classList.replace("fa-xmark", "fa-bars");
    }
   
        
}