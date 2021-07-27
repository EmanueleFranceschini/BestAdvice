let mainContent = document.querySelector("#main-content");
let btn = document.querySelector("#btn");
let count = 0;

btn.addEventListener("click", getAdvice);

function getAdvice() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.adviceslip.com/advice", true);
  xhr.onload = function() {
    if(this.status == 200) {
      let response = JSON.parse(this.responseText);
      if (count == 0) {
        count++;
        let advice =  document.createElement("div");
        advice.innerText = response.slip.advice;
        advice.className = "advice";
        mainContent.appendChild(advice);
      }
      else {
        document.querySelector(".advice").innerText = response.slip.advice;
      }
    }
  }
  console.log(xhr)
  xhr.send();
}
