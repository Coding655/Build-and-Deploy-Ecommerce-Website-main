function calculateCardsOne (){
    /* get Price */
const getPriceField = document.getElementById('get-price');
const getPriceValue = getPriceField.innerText;
const getPriceParse = parseFloat(getPriceValue)
// console.log(getPriceParse)

    /* quantity */
    const setQuantityField = document.getElementById('input-quantity');
    const setQuantityValue = setQuantityField.value;
    const setQuantity = parseFloat(setQuantityValue);
    setQuantityField.value = '';
    // console.log(setPriceValue)
    const totalCalculation = getPriceParse * setQuantity;
    // console.log(totalCalculation) 
      
        /* set price */

    const setCalculationField = document.getElementById('set-price');
    const setCalculation = setCalculationField.innerText;
    // setQuantityField.value = '';
    setCalculationField.innerText = totalCalculation;
    // console.log(setCalculation) 




}

calculateCardsOne();


