//More Options
const dotMenu = document.querySelector(".dot-menu");
const MoreO = document.querySelector(".box");
const Con = document.querySelector(".content");
MoreO.addEventListener("click",()=>{
    MoreO.classList.toggle("More-Options-Active");
    Con.classList.toggle("Content-Active");
    dotMenu.classList.toggle("active");
});