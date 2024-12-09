const myCheckBox = document.getElementById("mycheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paybalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
  if(myCheckBox.checked){
    subResult.textContent = `you are subscribed! choose your payment method`;
  }else{
    subResult.textContent =`you are not subscribed!`;
  }
  if(visaBtn.checked){
   
    if(!myCheckBox.checked){
      subResult.style.background = "red"
    }else{
      paymentResult.textContent = `you paying with visa`;
    }
  }
  if(masterCardBtn.checked){
   
    if(!myCheckBox.checked){
      subResult.style.background = "red"
    }else{
      paymentResult.textContent = `you paying with mastercard`;
    }
  }
  if(paybalBtn.checked){
   
    if(!myCheckBox.checked){
      subResult.style.background = "red"
    }else{
      paymentResult.textContent = `you paying with paybal`;
    }
  }
}
