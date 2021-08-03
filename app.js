let
  mainCont = document.querySelector("#main-content")
  btn = document.querySelector("#btn")
  exists = false
  advice = document.querySelector(".advice")
  url = "https://api.adviceslip.com/advice"
  btnIcon = document.querySelector(".fas.fa-lightbulb")
  eListeners = ["click", "mouseenter", "mouseleave", "mousedown", "mouseup", "touchstart", "touchend"];


eListeners.forEach(e => btn.addEventListener(e, eventsHandler));


function eventsHandler() {

  if (event.type == "click") {
    // -- resetting BTN animation --
    if (advice != undefined) {
      advice.style.animation = "none";
    }
    // -- XHR call to fetch data from the API --
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function() {
      url += "?t=" + (new Date()).getTime();
      if (this.status == 200) {
        let response = JSON.parse(this.responseText);
        if (exists === false) {
          exists = true;
          advice = document.createElement("p");
          advice.innerHTML = `<i class="fas fa-quote-left"></i> ${response.slip.advice}`;
          advice.className = "advice";
          mainCont.appendChild(advice);
          }
        else {
          document.querySelector(".advice").innerHTML = `<i class="fas fa-quote-left"></i> ${response.slip.advice}`;
        }
        advice.style.animation = "adviceAnimation ease-in 0.4s forwards";
      }
    }
    xhr.send();
  }

  else if (event.type == "mouseenter") {
    btn.style.transform = "scale(1.05)";
    btn.style.transition = "transform 0.1s";
    btnIcon.style.transform = "scale(1.05)";
    btnIcon.style.transition = "transform 0.1s";

  }

  else if (event.type == "mouseleave") {
    btn.style.transform = "scale(1)";
    btnIcon.style.transform = "scale(1)";
  }

  else if (event.type == "mousedown") {
    btn.style.borderColor = "var(--lightbulbCol)";
  }

  else if (event.type == "mouseup") {
    btn.style.borderColor = "black";
  }

  else if (event.type == "touchstart") {
    btn.style.transform = "scale(1.05)";
    btn.style.transition = "transform 0.1s";
    btn.style.borderColor = "var(--lightbulbCol)";
    btnIcon.style.transform = "scale(1.05)";
    btnIcon.style.transition = "transform 0.1s";
  }

  else if (event.type == "touchend") {
    btn.style.transform = "scale(1)";
    btn.style.borderColor = "black";
    btnIcon.style.transform = "scale(1)";

  }
}
