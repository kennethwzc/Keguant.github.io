const LoanCalculator = (() => {
  const principalInput = document.getElementById("principal");
  const interestInput = document.getElementById("interest");
  const resultElement = document.getElementById("result");
  const tenure = document.getElementById("tenure");

  function handleFormSubmission(event) {
    event.preventDefault();
    const principal = parseFloat(principalInput.value.replace(/[^0-9.-]+/g,""));
    const interest = parseFloat(interestInput.value.replace(/[^0-9.-]+/g,"")) / 100;
    const numberOfPayments = tenure.value * 12;
    const monthlyInterestRate = interest / 12;

    const monthlyPayment =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    resultElement.textContent = `$${monthlyPayment.toFixed(2)} per month`;
  }

  function init() {
    const formElement = document.getElementById("loan-form");
    formElement.addEventListener("submit", handleFormSubmission);
  }

  return { init };
})();

LoanCalculator.init();
