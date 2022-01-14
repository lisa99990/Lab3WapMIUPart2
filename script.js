function calcTip(){
    var amount = document.getElementById('subtotal');
    var tipPercentage = document.getElementById("tip");
    document.getElementById("total").innerHTML = "$"+parseFloat(amount.value)*parseFloat(tipPercentage.value)/100;

}