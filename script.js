// let temperature = 54;
// const maxTemp = 66;
// const minTemp = 50;
 
let humidityLevel = -1;  
let fanSpeed = -1;  

const temperatureDisplay = document.getElementById('temperature-value');
const dialRing = document.querySelector('.ring');
const humidityDots = document.querySelectorAll('.humidity-dots .dot');
const fanDots = document.querySelectorAll('.fan-dots .dot');

// function updateTemperature(change) {
//     temperature = Math.min(maxTemp, Math.max(minTemp, temperature + change));
//     temperatureDisplay.innerText = temperature;

    
//     const percentage = ((temperature - minTemp) / (maxTemp - minTemp)) * 100;
//     dialRing.style.background = `conic-gradient(#00d1ff ${percentage}%, #1d1d1d ${percentage}%)`;
// }

function updateHumidity(change) {
    humidityLevel = Math.min(3, Math.max(0, humidityLevel + change));
    humidityDots.forEach((dot, index) => {
        dot.classList.toggle('active', index <= humidityLevel);
    });
}

function updateFanSpeed(change) {
    fanSpeed = Math.min(3, Math.max(0, fanSpeed + change));
    fanDots.forEach((dot, index) => { 
        dot.classList.toggle('active', index <= fanSpeed);
    });
}

document.getElementById('humidity-up').addEventListener('click', () => updateHumidity(1));
document.getElementById('humidity-down').addEventListener('click', () => updateHumidity(-1));
document.getElementById('fan-up').addEventListener('click', () => updateFanSpeed(1));
document.getElementById('fan-down').addEventListener('click', () => updateFanSpeed(-1));
// document.getElementById('temp-up').addEventListener('click', () => updateTemperature(1));
// document.getElementById('temp-down').addEventListener('click', () => updateTemperature(-1));

$(document).ready(function() {
    $('.add-water').click(function () {       
      var th = $('.count-water');     
      th.val(+th.val() + 1);
    });
    $('.sub-water').click(function () {
      var th = $('.count-water');     
            if (th.val() > 1) th.val(+th.val() - 1);
    });

    $('.add-fan').click(function () {       
      var th = $('.count-fan');     
      th.val(+th.val() + 1);
    });
    $('.sub-fan').click(function () {
      var th = $('.count-fan');     
            if (th.val() > 1) th.val(+th.val() - 1);
    });
    $('.add-temperature').click(function () {       
      var th = $('.count-temperature');     
      th.val(+th.val() + 1);
    });
    $('.sub-temperature').click(function () {
      var th = $('.count-temperature');     
            if (th.val() > 1) th.val(+th.val() - 1);
    });
    $('.add-temperature').click(function () {       
      var th = $('.count-temperature-s');     
      th.val(+th.val() + 1);
    });
    $('.sub-temperature').click(function () {
      var th = $('.count-temperature-s');     
            if (th.val() > 1) th.val(+th.val() - 1);
    });
});
$(document).ready(function() {

  var percent = .85,
      speed = 10,
    props = {
      x: 0
    };

  startCircularProgress(percent, speed);

  function startCircularProgress(percentage, speed) {
    TweenMax.to(props, speed, {
      x: percentage,
      ease: Power3.easeOut,
      onUpdate: function() {
        console.log(props.x);
        drawProgress(props.x);
      }
    });
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  };

  function drawProgress(percent) {

    if (isNaN(percent)) {
      return;
    }

    percent = clamp(parseFloat(percent), 0, 1);

    // 360 loops back to 0, so keep it within 0 to < 360
    var angle = clamp(percent * 360, 0, 359.99999);
    var paddedRadius = 49 + 1;
    var radians = (angle * Math.PI / 180);
    var x = Math.sin(radians) * paddedRadius;
    var y = Math.cos(radians) * -paddedRadius;
    var mid = (angle > 180) ? 1 : 0;
    var pathData = 'M 0 0 v -%@ A %@ %@ 1 '.replace(/%@/gi, paddedRadius) +
      mid + ' 1 ' +
      x + ' ' +
      y + ' z';

    var bar = document.getElementsByClassName('progress-radial-bar')[0];
    bar.setAttribute('d', pathData);
  };

});