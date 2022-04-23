//Themes
function Themes(sel) {
    /*alert(sel.options[sel.selectedIndex].text);*/
    themecm=sel.options[sel.selectedIndex].text
    console.log(themecm)
    const themeSwitchBtn= document.querySelector(".theme-format-text")
    var formatValue = formatSwitchBtn.getAttribute("Themes");
    const theme222= document.querySelector(".format-switch-btn2")
    const color = document.querySelector(".Color-picker");
   

    if(themecm==="Theme1"){
        document.body.style.backgroundColor = 'rgb(134, 131, 131)';

        themeSwitchBtn.setAttribute("Themes","Theme1")
        themeSwitchBtn.addEventListener("click",()=>{
        themeSwitchBtn.classList.remove("Theme2")
        themeSwitchBtn.classList.remove("Theme3")
        themeSwitchBtn.classList.toggle("Theme1");
        const themes22 = document.querySelector(".time2");
        themes22.classList.remove("active");
        const datev = document.querySelector(".date");
        datev.classList.remove("theme2");
        color.classList.remove("tc2");
        });
    }

    if(themecm==="Theme2"){
        document.body.style.backgroundColor = '#2f363e';
        themeSwitchBtn.setAttribute("Themes","Theme2")
        themeSwitchBtn.addEventListener("click",()=>{
        themeSwitchBtn.classList.remove("Theme1")
        themeSwitchBtn.classList.remove("Theme3")
        themeSwitchBtn.classList.toggle("Theme2");
        const themes22 = document.querySelector(".time2");
        themes22.classList.toggle("active");
        const datev = document.querySelector(".date");
        datev.classList.toggle("theme2");
        
       color.classList.toggle("tc2");
        
        });
    }

    if(themecm==="Theme3"){
        
        themeSwitchBtn.setAttribute("Themes","Theme3")
        themeSwitchBtn.addEventListener("click",()=>{
        themeSwitchBtn.classList.remove("Theme2")
        themeSwitchBtn.classList.remove("Theme1")
        themeSwitchBtn.classList.toggle("Theme3");
        const themes22 = document.querySelector(".time2");
        themes22.classList.remove("active");
        const datev = document.querySelector(".date");
        datev.classList.remove("theme2");
        color.classList.remove("tc2");
        
        });
    }
}


