var showNumber = document.querySelector(".showNumber");
var plusBtn = document.querySelector(".plusBtn");
var minusBtn = document.querySelector(".minusBtn");
var batteryColor = document.querySelector(".batteryColor")
var errorMsg = document.querySelector(".errorMsg");

var number = 0;

function batteryCharge(number) {
    var backgroundColor = "";
    if (number<30) {
        backgroundColor = "red";
    }
    else if (number<70) {
        backgroundColor = "yellow";
    }
    else {
        backgroundColor = "green";
    }
    return backgroundColor;
}

plusBtn.addEventListener("click", function(){
    if (number<100) 
        { number++;
        errorMsg.innerHTML = "";
        showNumber.style.fontSize = 35+"px";
        showNumber.innerHTML = number;
        batteryColor.style.width = number+"%";
        batteryColor.style.backgroundColor = batteryCharge(number);}
    else 
        {showNumber.style.fontSize = 25+"px";
            showNumber.innerHTML = "error!";
            errorMsg.innerHTML = "you can't select a nummer so high!";
        }
});

minusBtn.addEventListener("click", function(){
    if (number>0) 
        {number--;
        errorMsg.innerHTML = "";
        showNumber.style.fontSize = 35+"px";
        showNumber.innerHTML = number;
        batteryColor.style.width = number+"%";
        batteryColor.style.backgroundColor = batteryCharge(number);}
    else 
        {showNumber.style.fontSize = 25+"px";
            showNumber.innerHTML = "error!";
            errorMsg.innerHTML = "you can't select a nummer so low!";
        }
});

