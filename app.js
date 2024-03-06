const enterBtn = document.querySelector("#btn")
const amountInput = document.querySelector("#amount")
const fromSelect = document.querySelector("#from")
const toSelect = document.querySelector("#to")
const resultInput = document.querySelector("#result")
const baseURl = "https://api.freecurrencyapi.com/v1/latest?base_currency=";




enterBtn.addEventListener("click", async () =>{
    const fromValue = fromSelect.options[fromSelect.selectedIndex].value;
    const toValue = toSelect.options[toSelect.selectedIndex].value;
    // console.log(fromValue);
    // console.log(toValue);
    const jsonData = await getApiData(baseURl,fromValue);
    // console.log(jsonData);
    
    const amountValue = !amount.value ?  1 : amount.value;
    const fromValueNumber = jsonData.data[fromValue];
    const toValueNumber = jsonData.data[toValue];
    const result = fromValueNumber == 1 ? (Number(amountValue) * Number(toValueNumber) ) : "Error!" ;
    
    
    resultInput.value = result.toFixed(2) + " " + toValue;
    
    
    
    // console.log('amountValue :>> ', amountValue);
    // console.log('fromValueNumber :>> ', fromValueNumber);
    // console.log('toValueNumber :>> ', toValueNumber);
    // console.log('result :>> ', result);
    
    
    
})

const getApiData = async(url,currency) => {
    const jsonData = await ( await fetch(url + currency,{
        method:"GET",
        headers:{
            apikey: "fca_live_kwYvpFCuQXDTfkPwpyKcSvhoTsUD0m93EAc6o8Lc"
        }
    })).json();
    console.log(jsonData);
    return jsonData;
}

amountInput.onkeydown = (e)=> {
    if(e.keyCode == 13){
        enterBtn.click();
    }
}







