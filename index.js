const balanceDisplay = document.getElementById("current-balance");
const depositDisplay = document.getElementById("deposit");
const withdrawDisplay = document.getElementById("withdraw");

const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

depositBtn.addEventListener("click", renderDeposit);
withdrawBtn.addEventListener("click", renderWithdraw);

const depositSubmitBtn = document.getElementById("deposit-submit-btn");
const withdrawSubmitBtn = document.getElementById("withdraw-submit-btn");

const depositInput = document.getElementById("deposit-input");
const withdrawInput = document.getElementById("withdraw-input");

const errorMessage = document.getElementById("error-message");

let currentBalance = 1000;
renderBalance();

function renderBalance() {
  balanceDisplay.innerText = `Current Balance: $${currentBalance}`;
}

function openWindow(window) {
  depositDisplay.style.display = "none";
  withdrawDisplay.style.display = "none";
  window.style.display = "flex";
}

function closeWindow(window) {
  window.style.display = "none";
}

function renderDeposit() {
  if (depositDisplay.style.display == "none") {
    depositInput.value = 0;
    openWindow(depositDisplay);
    depositSubmitBtn.addEventListener("click", deposit);
  } else {
    closeWindow(depositDisplay);
    depositSubmitBtn.removeEventListener("click", deposit);
  }
}

function deposit() {
  currentBalance += parseInt(depositInput.value);
  renderBalance();
  closeWindow(depositDisplay);
}

function renderWithdraw() {
  if (withdrawDisplay.style.display == "none") {
    withdrawInput.value = 0;
    errorMessage.style.display = "none";
    openWindow(withdrawDisplay);
    withdrawSubmitBtn.addEventListener("click", withdraw);
  } else {
    closeWindow(withdrawDisplay);
    withdrawSubmitBtn.removeEventListener("click", withdraw);
  }
}

function withdraw() {
  const amountToWithdraw = parseInt(withdrawInput.value);
  if (amountToWithdraw > currentBalance) {
    errorMessage.style.display = "block";
    return;
  }
  currentBalance -= amountToWithdraw;
  renderBalance();
  closeWindow(withdrawDisplay);
}
