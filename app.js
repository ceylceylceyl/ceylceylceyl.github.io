const progress = document.querySelector(".progress-done")
const cudi = document.querySelector("#cudi")
const testDegeri = 20
const full = 200

let finalValue = 0
let max = 0

function getSetDate() {
    var date = new Date();
    document.getElementById("p1").innerHTML = date;
}

function changeProgress(days) {
    progress.style.width = `${(10-days) / 10 * 100}%`;
}

function changeDistance(days) {
    cudi.style.marginLeft = `${(10-days) * 7}%`
}

// setInterval(getSetDate,1000) 

var countDownDate = new Date("Sep 14, 2022 13:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("p1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  changeProgress(days);
  changeDistance(days)
   
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("p1").innerHTML = "MURRG";
  }
}, 1000);
