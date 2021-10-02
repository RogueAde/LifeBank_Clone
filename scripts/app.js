const menuIcon = document.querySelector(".hamburger img");
const mainSectionNavs= document.querySelector(".main-section--article");
const sideBar= document.querySelector(".main-sidebar");
const allsections = document.querySelector("#allDisabled") ;


function lilac() {
    if(menuIcon.getAttribute("src") == "images/hamburger-icon.svg"){
        allsections.style.display = "none";
        menuIcon.setAttribute("src", "images/close-hamburger-icon.svg") ;
        mainSectionNavs.style.display= "none" ;
        sideBar.style.display= "block";
        setTimeout(()=> {
            sideBar.style.opacity= "1";
        }, 150)
        
    } else{
        menuIcon.setAttribute("src", "images/hamburger-icon.svg")
        allsections.style.display = "block";
        sideBar.style.display= "none";
        sideBar.style.opacity= "0";
        mainSectionNavs.style.display= "block" ;
    }  
}

gsap.from(
    "#section2 article",
    {
        scrollTrigger: {
            trigger: "#section2",
            start: "top 50%",
            snap: 1/3
           },
        x: "-100vw",
        duration: 2
    }
)
gsap.from(
    "#section3 article",
    {
        scrollTrigger: {
            trigger: "#section3",
            start: "top 50%",
            snap: 1/3
           },
        y: "-100vh",
        duration: 2
    }
)
gsap.from(
    "#section4 article",
    {
        scrollTrigger: {
         trigger: "#section4",
         start: "top 50%",
         snap: 1/3
        },
        opacity: 0,
        scale: 0.3,
        duration: 2
    }
)

