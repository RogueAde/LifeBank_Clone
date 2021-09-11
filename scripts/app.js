const menuIcon = document.querySelector(".hamburger img");
const mainSectionNavs= document.querySelector(".main-section--article");
const sideBar= document.querySelector(".main-sidebar");


function lilac() {
    if(menuIcon.getAttribute("src") == "images/hamburger-icon.svg"){
        menuIcon.setAttribute("src", "images/close-hamburger-icon.svg")
        mainSectionNavs.style.display= "none" ;
        sideBar.style.display= "block";
        setTimeout(()=> {
            sideBar.style.opacity= "1";
        }, 150)
        
    } else{
        menuIcon.setAttribute("src", "images/hamburger-icon.svg")
        sideBar.style.display= "none";
        sideBar.style.opacity= "0";
        mainSectionNavs.style.display= "block" ;
    }  
}


