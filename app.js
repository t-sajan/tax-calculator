const monthlySalary = document.querySelector("#salary");
const marriageStatus = document.querySelector("#maritial-status");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function () {
  if (monthlySalary.value == "" || monthlySalary.value < 0 ) {
    alert("Please Enter Valid Salary!");
    return false;
  }
  let userMonthlySalary = monthlySalary.value;
  let userYearlySalary = userMonthlySalary * 12;
  let maritialStatus = marriageStatus.value;
  if(maritialStatus == "Unmarried"){
    let calculatedYearlyTax = calculateIndividualSalary(userYearlySalary);
    let calculatedMonthlyTax = (calculatedYearlyTax/12).toFixed(2);
    alert(`Your Annual income is NRS ${userYearlySalary} and Yearly Tax Deduction is NRS ${calculatedYearlyTax}/- which results in monthly TDS of NRS ${calculatedMonthlyTax}/-`);
  } else {
    let calculatedYearlyTax = calculateCoupleSalary(userYearlySalary);
    let calculatedMonthlyTax = (calculatedYearlyTax/12).toFixed(2);
    alert(`Your Annual income is NRS ${userYearlySalary} and Yearly Tax Deduction is NRS ${calculatedYearlyTax}/- which results in monthly TDS of NRS ${calculatedMonthlyTax}/-`);
  }
  
});

function calculateIndividualSalary(yearlySalary) {
  let yearlyTax = 0;
  console.log(`your yearly salary is ${yearlySalary}`);
  if (yearlySalary <= 400000) {
    yearlyTax = 0.01 * yearlySalary;
    console.log(`your yearly tax is ${yearlyTax}`);
  } else if (yearlySalary <= 500000) {
    yearlyTax = 4000 + (0.1 * (yearlySalary - 400000));
    console.log(`your yearly tax is ${yearlyTax}`);
  } else if (yearlySalary <= 700000) {
    yearlyTax = 4000 + 10000 + (0.2 * (yearlySalary - 500000));
    console.log(`your yearly tax is ${yearlyTax}`);
  } else if (yearlySalary <= 2000000) {
    yearlyTax = 4000 + 10000 + 40000 + (0.3 * (yearlySalary - 700000)) ;
    console.log(`your yearly tax is ${yearlyTax}`);
  } else if (yearlySalary > 2000000) {
    yearlyTax = 4000 + 10000 + 40000 + 390000 + (0.36 * (yearlySalary - 2000000));
    console.log(`your yearly tax is ${yearlyTax}`);
  }
  return yearlyTax;
}

function calculateCoupleSalary(yearlySalary) {
  let yearlyTax = 0;
  console.log(`your yearly salary is ${yearlySalary}`);
  if (yearlySalary <= 450000) {
    yearlyTax = 0.01 * yearlySalary;
    console.log(`your yearly tax is ${yearlyTax}`);
  } else if (yearlySalary <= 550000) {
    yearlyTax = 4500 + (0.1 * (yearlySalary - 450000));
    console.log(`your yearly tax is ${yearlyTax}`);
  } else if (yearlySalary <= 750000) {
    yearlyTax = 4500 + 10000 + (0.2 * (yearlySalary - 550000));
    console.log(`your yearly tax is ${yearlyTax}`);
  } else if (yearlySalary <= 2000000) {
    yearlyTax = 4500 + 10000 + 40000 + (0.3 * (yearlySalary - 750000)) ;
    console.log(`your yearly tax is ${yearlyTax}`);
  } else if (yearlySalary > 2000000) {
    yearlyTax = 4500 + 10000 + 40000 + 375000 + (0.36 * (yearlySalary - 2000000));
    console.log(`your yearly tax is ${yearlyTax}`);
  }
  return yearlyTax;
}
