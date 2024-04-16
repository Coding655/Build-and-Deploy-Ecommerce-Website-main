function inputValueById (element){
    const inputField  = document.getElementById(element);
    const inputValue  = inputField.value;
    const input = parseFloat(inputValue);
    inputField.value = '';

}
function TextValueById (text){
    const textField = document.getElementById(text);
    const textValue = textField.innerText;
    // const text = parseFloat(textValue);
}
function setValueById (setId){
const SetField = document.getElementById(setId);
const setValue = SetField.innerText;
// const total = element * text ;
// SetField.innerText = total;


}
document.getElementById('eventHandler').addEventListener('click', function(){
    const inputTotal = inputValueById('input-quantity-1');
    const textTotal =   TextValueById('price-1');
    const setValue = setValueById('set-price-1');
    const totalAmount = inputTotal * textTotal;
    // setValue = totalAmount;
    console.log(totalAmount)
})
   


// setCalculationTwo ()