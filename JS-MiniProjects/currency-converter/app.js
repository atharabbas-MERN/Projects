const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn  = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg =document.querySelector(".msg");

for (let select of dropdowns){
    for(curnCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = curnCode;
        newOption.value = curnCode;
        if(select.name ==="from" && curnCode ==="USD"){
            newOption.selected = "selected";
        }else if(select.name ==="to" && curnCode ==="INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    } select.addEventListener("change",(evt) =>{
        changeFlag(evt.target);
    })
}

const changeFlag = (element) =>{
    let curnCode = element.value;
    // console.log(curnCode);
    let countryCode = countryList[curnCode];
    // console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newSrc;
};

btn.addEventListener("click",async(evt) =>{
    evt.preventDefault();
    let amount = document.querySelector("form input");
    let amtVal = amount.value;
    // console.log(amtVal);
    if(amtVal ==="" || amtVal<1){
        amtVal = 1;
        amount.value = 1;
    }
    // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    // let response = await fetch(URL);
    // //console.log(response);
    // console.log(response['inr']);
    
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    console.log(toCurr.value);
    console.log(fromCurr.value);
    
    
    try {
        let response = await fetch(URL);
        let data = await response.json();
       
        
        
        // Accessing the target currency value
        let conversionRate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
        if (conversionRate) {
            let convertedAmount = amtVal * conversionRate;
            console.log(`Converted Amount: ${convertedAmount}`);
            msg.innerHTML =  `<p>${amtVal} ${fromCurr.value} = ${Math.round(convertedAmount*1000)/1000} ${toCurr.value}</p>`;
            // You can also display this value in the UI as needed
        } else {
            console.error("Conversion rate not found");
        }
    } catch (error) {
        console.error("Error fetching currency data:", error);
    }
    
    
    
});