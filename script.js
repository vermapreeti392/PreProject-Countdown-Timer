let inp = document.getElementById('timeCount');
let curntTime = document.getElementById('current-time');
let currentVal = 0;
let initialTimeVal = null;
inp.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        currentVal = "";
        currentVal = Math.floor(inp.value);

        if (currentVal>0 && Number.isInteger(currentVal)) {
            SetTimer(currentVal)
        }        
        else {
            curntTime.innerText = 0
        }
        
    }
})
function SetTimer(currentVal) {
    clearInterval(initialTimeVal);
    initialTimeVal = setInterval(() => {
        curntTime.innerText = `Countdown : ${currentVal--}`
        if (currentVal < 0) {                
            clearInterval(initialTimeVal)
            inp.value="";
        }
    }, 1000);
}
