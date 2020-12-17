/* Значения из текстовых инпутов */
const totalCost = document.getElementById('total-cost'),
      anInitialFee = document.getElementById('an-initial-fee'),
      creditTerm = document.getElementById('credit-term');

/* Значения из range инпутов */
const totalCostRange = document.getElementById('total-cost-range'),
      anInitialFeeRange = document.getElementById('an-initial-fee-range'),
      creditTermRange = document.getElementById('credit-term-range');

/*  Итоговые значения  */ 
const totalAmountOfCredit = document.getElementById("amount-of-credit"),
      totalMonthlyPayment = document.getElementById("amount-of-income"),
      totalRecommendedIncome = document.getElementById("advisable-amount");

/*  Все range  */
const inputsRange = document.querySelectorAll(".input-range");

/*  Все кнопки с процентной ставкой:  */
const bankBtns = document.querySelectorAll(".bank");

const assignValue = () => {
    totalCost.value = totalCostRange.value;
    anInitialFee.value = anInitialFeeRange.value;
    creditTerm.value = creditTermRange.value;
};

assignValue();

const banks = [
    {
        name:"alfa",
        precents: 8.7
    },
    {
        name:"sber",
        precents:8.9

    },
    {
        name:"pochta",
        precents:7.9

    },
    {
        name:"tinkoff",
        precents:9.2

    }

];

let currentPrecent = banks[0].precents;

for (let item of bankBtns){
    item.addEventListener("click", ()=>{
        for (let item of bankBtns){
            item.classList.remove("active");
        }
        item.classList.add("active");
        takeActiveBank(item);
    })
}



const takeActiveBank = currentActive =>{
    const dataAttrValue = currentActive.dataset.name;
    const currentBank = banks.find(bank => bank.name === dataAttrValue);
    currentPrecent = currentBank.precents;
    console.log(currentPrecent);
}

for (let input of inputsRange){
    input.addEventListener('input', ()=>{
        assignValue();
        console.log(totalCost.value);
    })
}

const calculation = (totalCost = 0, anInitialFee = 100000, creditTerm = 1)=>{
    /*
    ЕП - ежемесячный платеж
    РК - размер кредита
    ПС - процентная ставка
    КМ - количество месяцев  

    ЕП = (РК+(РК/100)*ПС)/12*КМ)/КМ
    */ 

    let monthlyPayment; //Ежемесячный платеж
    let lounAmount = totalCost - anInitialFee; // Размер кредита
    let interestRate = currentPrecent; // процентная ставка
    let numberOfYears = creditTerm; // количество лет
    let numberOfMonths = 12*numberOfMonths;// количество месяцев

    
}

// for of 
// for in
// const dataAttrValue = currentActive.dataset.name;
// find, filter, map
// построчно объяснить всю логику программы;
// Распределить этапы по пунктам, и описать, что нужно для того или иного пункта программы
// assignValue();