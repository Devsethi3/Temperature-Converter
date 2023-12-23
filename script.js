const submit = document.querySelector("button");
const overlay = document.getElementById('overlay');
const errorMessage = document.getElementById('error-message')

submit.addEventListener("click", () => {
  const inputTemperature = Number(document.getElementById("num").value);
  const unit = document.getElementById("unit").value;

  if(document.getElementById("num").value == ''){
    errorMessage.classList.add('show-message');
    overlay.classList.add('show-overlay');
    setTimeout(function(){
      errorMessage.classList.remove('show-message');
      overlay.classList.remove('show-overlay');
    },1500)
    document.getElementById("result").textContent = '';
  }
  let convertedTemperature;

  if (unit === "Celcius") {
    convertedTemperature = (inputTemperature * 9/5) + 32;
    document.getElementById("result").textContent = `${inputTemperature} degrees Celcius = ${convertedTemperature} degrees fahrenheit.`;
  } else if (unit === "Fahrenheit") {
    convertedTemperature = (inputTemperature - 32) * 5 / 9;
    document.getElementById("result").textContent = `${inputTemperature} degrees Fahrenheit = ${convertedTemperature.toFixed(2)} degrees Celcius`;
  } else{
    document.getElementById("result").textContent = `Please Select Valid Unit`;
  }
});
