const formatSwitchBtn = document.querySelector(".format-switch-btn");
const formatSwitchBtn2 = document.querySelector(".format-switch-btn2");
const themes22 = document.querySelector(".time2");

formatSwitchBtn.addEventListener("click",()=>{
    formatSwitchBtn.classList.toggle("active");

    var formatValue = formatSwitchBtn.getAttribute("data-format");

    if(formatValue === "12"){
        formatSwitchBtn.setAttribute("data-format","24")
    }
    else{
        formatSwitchBtn.setAttribute("data-format","12")
    }
});

function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
    
        sec = now.getSeconds(),
        pe = "AM";
        
        var formatValue = formatSwitchBtn.getAttribute("data-format");
        if(formatValue == "12"){
            if(hou >= 12){
                hou = hou - 12
                pe = "PM";
            }
            if(hou == 0){
                hou = 12
            
            }
        }
        if(formatValue == "24"){
            
            pe = "";
        }
        Number.prototype.pad=function(digits){
            for(var n =this.toString(); n.length < digits; n=0 +n);
            return n
        }
        var months = ["January", "February", "March", "April", "May", "June","July","August", "September", "October", "November", "December"]
        var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        var ids = ["dayname","monthname","daynum","year","hour", "minute","second", "dayornight"]
        var values = [week[dname], months[mo], dnum, yr, hou.pad(2), min.pad(2),sec.pad(2) , pe];
        for(var i=0; i<ids.length; i++) 
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()",1)
}

/*document.addEventListener("click",(e)=>{// click Anywhere Function
    if(e.target.id !=="active-menu"){
        dotMenu.classList.remove("active")
    }
})*/
