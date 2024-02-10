let h1= document.createElement('h1');
document.querySelector(".container").appendChild(h1);
h1.innerHTML = "This project is about a counter.";

let h2= document.createElement('h2');
document.querySelector(".container").appendChild(h2);
h2.innerHTML = 'You have to click "+" to increase your battery level and "-" to decrease that.<br/>Remind, you can select a number between 0 and 100.';

let section1= document.createElement('section');
section1.setAttribute("class","row");
document.querySelector(".container").appendChild(section1);

let divminusBtn = document.createElement('div');
divminusBtn.setAttribute("class","col-3");
section1.appendChild(divminusBtn);
let minusBtn = document.createElement('button');
minusBtn.textContent = "-";
divminusBtn.appendChild(minusBtn);

let showNumber = document.createElement('div');
showNumber.setAttribute("class","col-6 showNumber");
showNumber.innerHTML= "0";
section1.appendChild(showNumber);

let divplusBtn = document.createElement('div');
divplusBtn.setAttribute("class","col-3");
section1.appendChild(divplusBtn);
let plusBtn = document.createElement('button');
plusBtn.textContent = "+";
divplusBtn.appendChild(plusBtn);

let section2= document.createElement('section');
document.querySelector(".container").appendChild(section2);

let divbatteryCharge = document.createElement('div');
divbatteryCharge.setAttribute("class","batteryCharge");
section2.appendChild(divbatteryCharge);

let batteryColor = document.createElement('div');
batteryColor.setAttribute("class","batteryColor");
divbatteryCharge.appendChild(batteryColor);

let errorMsg = document.createElement('div');
errorMsg.setAttribute("class","errorMsg");
document.querySelector(".container").appendChild(errorMsg);

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

