// nav-menu

const toggler = document.querySelector(".nav__toggler")
const navbar = document.querySelector(".nav")
toggler.addEventListener("click",(e)=>{
    navbar.classList.toggle("nav__expended")
});


// -------------------
// services-section 

const tabs = document.querySelectorAll(".tab");
const tabContents= document.querySelectorAll(".tab-content");
tabs.forEach((tab)=>{
    tab.addEventListener("click",(e)=>{
        const targeTabContent= document.querySelector(`#${tab.dataset.tabTarget}`);


        // Remove Previous Activated Classes
        tabs.forEach((tab)=>tab.classList.remove("active"));
        tabContents.forEach((tabContent)=>tabContent.classList.remove("active"));


        // Add New Active Classes
        tab.classList.add("actives");
        targeTabContent.classList.add("active");
    });
});
