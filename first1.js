
const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies ";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("from btn");
const fromCurr = document.querySelector(".from.select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");





for (let select of dropdown){
    for( currCode in countryList){
          let newOption =document.createElement("option");
        newOption.innerText = currCode;
        newOption.value =currCode;
        if(select.name === "from " && currCode === "USD"){
            newOption.selected = 'selected';
        }else if (select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) =>{
        updateflag(evt.target);
    })
}
 


const updateflag = (element) =>{
    let currCode =element.value;
    let countrycode = countryList[currCode];
    let newsrc =` https://flagsapi.com/${contryycode}/flat/64.png`; 
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};

btn.addEventListener("click",(evt) => {
    evt.preventDefault();
    let ammount = document.querySelector(".ammount input");
    if (amtval === " " || amtval <1){
        amtval =1;
        ammount.value ="1";
    };

     

    const URL =` ${BASE_URL}/${fromCrr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response =  fetch(URL);
    let data =  response.json();
    let rate = data [toCurr.value.toLowerCase()];
    console.log (rate);
    let finelAmmount = amtval*rate;

    msg.innerText=`${amtval} ${fromCurr.value }=${finelAmmount} ${toCurr.value} `;
        
})

  

