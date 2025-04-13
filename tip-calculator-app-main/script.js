// Input Elements
const billInput = document.getElementById('bill-input');
const peopleInput = document.getElementById('people-input');
const customPercent = document.getElementById('custom-percent');
const resetButton = document.getElementById('reset-button');

// Display Elements
const amountDisplay = document.getElementById('amount-value');
const totalDisplay = document.getElementById('total-value');

// Tip Buttons
const tipButtons = document.querySelectorAll('.tip-button');

// Variables to store values
let tipValue = 0;
let billValue = 0;
let peopleValue = 1;
let isTipButtonClicked = false;

// Initialize input handling
function initializeInputHandlers() {
    // Handle Bill Input
    billInput.addEventListener('input', () => {
        if (billInput.value.length > 5) {
            billInput.value = billInput.value.slice(0, 5);
        }
        billValue = Number(billInput.value);
        calculateTip();
        updateResetButtonState();
    });




    // Handle People Input
    peopleInput.addEventListener('input', () => {
        if (peopleInput.value === '') {
            peopleValue = 1;
        } else {
            peopleValue = Number(peopleInput.value);
        }

        if (peopleInput.value.length > 2) {
            peopleInput.value = peopleInput.value.slice(0, 2);
        }

        calculateTip();
        updateResetButtonState();
    });

    // Handle Custom Tip Input
    customPercent.addEventListener('input', () => {
        tipButtons.forEach((btn) => btn.classList.remove('clicked'));
        isTipButtonClicked = false;
        if (customPercent.value.length > 3) {
            customPercent.value = customPercent.value.slice(0, 3);
        }

        tipValue = Number(customPercent.value);
        calculateTip();
        updateResetButtonState();
    });

    setupTipButtons();
}
initializeInputHandlers();



// Handle Tip Button Clicks
function setupTipButtons() {
    tipButtons.forEach((button) => {
        button.addEventListener('click', function () {
            customPercent.value = ''; // Clear custom input
            tipButtons.forEach((btn) => btn.classList.remove('clicked'));
            isTipButtonClicked = true;
            this.classList.add('clicked');
            tipValue = Number(this.textContent.replace('%', ''));
            calculateTip();
            updateResetButtonState();
        });
    });
}

// Calculate Tip and Total
function calculateTip() {
    const errorMessage = document.querySelector('.error');

    if (peopleValue <= 0) {
        errorMessage.style.display = 'block';
        peopleInput.classList.add('errorAlert');
        return;
    } else {
        errorMessage.style.display = 'none';
        peopleInput.classList.remove('errorAlert');
    }

    const perPersonBill = billValue / peopleValue;
    const tipAmount = (perPersonBill * tipValue) / 100;
    const totalAmount = perPersonBill + tipAmount;

    amountDisplay.innerText = `$${tipAmount.toFixed(2)}`;
    totalDisplay.innerText = `$${totalAmount.toFixed(2)}`;
}

// Reset Button State and Functionality
function updateResetButtonState() {
    // Activate or deactivate button
    const isActive =
        billInput.value.length > 0 ||
        peopleInput.value.length > 0 ||
        customPercent.value.length > 0 ||
        isTipButtonClicked

    if (isActive) {
        resetButton.classList.add('active');
    } else {
        resetButton.classList.remove('active');
    }

    // Reset Functionality
    resetButton.onclick = () => {
        billInput.value = '';
        peopleInput.value = '';
        customPercent.value = '';
        amountDisplay.innerText = '$0.00';
        totalDisplay.innerText = '$0.00';
        tipValue = 0;
        billValue = 0;
        peopleValue = 1;
        tipButtons.forEach((btn) => btn.classList.remove('clicked'));
        resetButton.classList.remove('active');
    };
}


