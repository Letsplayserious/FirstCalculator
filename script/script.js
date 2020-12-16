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