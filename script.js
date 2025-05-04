// Write your code here
const bulb1 =document.querySelector("#lightbulb1");
const bulb2 =document.querySelector("#lightbulb2");
const bulb3 =document.querySelector("#lightbulb3");

const subtitle =document.querySelector(".subtitle");

let count=0;
function handleClick(bulb) {
    count+=1;
    const times = count === 1 ? "time" : "times";
    subtitle.textContent = `You've clicked the lights ${count} ${times}`;
    bulb.classList.toggle("active");
}    
bulb1.addEventListener("click", () => handleClick(bulb1));
bulb2.addEventListener("click", () => handleClick(bulb2));
bulb3.addEventListener("click", () => handleClick(bulb3));