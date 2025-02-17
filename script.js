document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const signinBtn = document.getElementById("signinBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginForm = document.getElementById("loginForm");
    const bankGUI = document.getElementById("bankGUI");

    const checkBalanceBtn = document.getElementById("checkBalanceBtn");
    const depositBtn = document.getElementById("depositBtn");
    const withdrawBtn = document.getElementById("withdrawBtn");

    const checkBalanceSection = document.getElementById("checkBalanceSection");
    const depositSection = document.getElementById("depositSection");
    const withdrawSection = document.getElementById("withdrawSection");

    const transactionMessage = document.getElementById("transactionMessage"); // New element to display status

    let currentUser = null;

    // Hide bankGUI by default
    bankGUI.style.display = "none";

    // Define Account class
    class Account {
        constructor(userName, userPass) {
            this.userName = userName;
            this.userPass = userPass;
            this.balance = 0.0; // Each account starts with 0 balance
        }

        checkPassword(pass) {
            return this.userPass === pass;
        }

        deposit(amount) {
            if (amount > 0) {
                this.balance += amount;
                return `Deposited: ₱${amount.toFixed(2)}`;
            } else {
                return "Invalid deposit amount.";
            }
        }

        withdraw(amount) {
            if (amount > 0 && amount <= this.balance) {
                this.balance -= amount;
                return `Withdrawn: ₱${amount.toFixed(2)}`;
            } else {
                return "Invalid withdrawal amount or insufficient balance.";
            }
        }

        getBalance() {
            return this.balance;
        }
    }

    // Dummy accounts for testing (in a real app, this would come from a backend or local storage)
    const accounts = [
        new Account("admin", "1234"),
        new Account("user1", "password")
    ];

    // Login functionality
    loginBtn.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check for correct credentials
        for (let acct of accounts) {
            if (acct.userName === username && acct.checkPassword(password)) {
                currentUser = acct;
                alert("Login successful!");
                loginForm.style.display = "none"; // Hide loginForm
                bankGUI.style.display = "block";  // Show bankGUI
                updateBalanceDisplay(); // Update balance on login
                return;
            }
        }

        alert("Incorrect username or password!");
    });

    // Logout functionality
    logoutBtn.addEventListener("click", function () {
        bankGUI.style.display = "none";
        loginForm.style.display = "block"; // Show loginForm again
        // Clear input fields for security
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        currentUser = null; // Clear current user
    });

    // Show Check Balance Section
    checkBalanceBtn.addEventListener("click", function () {
        // Hide all sections first
        hideAllSections();
        // Show the Check Balance section
        checkBalanceSection.style.display = "block";
        // Call updateBalanceDisplay() to ensure the current balance is shown
        updateBalanceDisplay();
    });

    // Deposit money
    depositBtn.addEventListener("click", function () {
        // Hide all sections first
        hideAllSections();
        // Show the Deposit section
        depositSection.style.display = "block";
    });

    // Withdraw money
    withdrawBtn.addEventListener("click", function () {
        // Hide all sections first
        hideAllSections();
        // Show the Withdraw section
        withdrawSection.style.display = "block";
    });

    // Submit Deposit
    document.getElementById("depositSubmitBtn").addEventListener("click", function () {
        const depositAmount = parseFloat(document.getElementById("depositAmount").value);
        if (isNaN(depositAmount) || depositAmount <= 0) {
            transactionMessage.textContent = "Please enter a valid amount to deposit.";
        } else {
            const result = currentUser.deposit(depositAmount); // Perform the deposit
            transactionMessage.textContent = result; // Show result on the page
            updateBalanceDisplay();  // Update balance display after deposit
            document.getElementById("depositAmount").value = ""; // Clear input
        }
    });

    // Submit Withdrawal
    document.getElementById("withdrawSubmitBtn").addEventListener("click", function () {
        const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
            transactionMessage.textContent = "Please enter a valid amount to withdraw.";
        } else {
            const result = currentUser.withdraw(withdrawAmount); // Perform the withdrawal
            transactionMessage.textContent = result; // Show result on the page
            updateBalanceDisplay();  // Update balance display after withdrawal
            document.getElementById("withdrawAmount").value = ""; // Clear input
        }
    });

    // Function to update balance display automatically
    function updateBalanceDisplay() {
        if (currentUser) {
            document.getElementById("balanceDisplay").textContent = `₱${currentUser.getBalance().toFixed(2)}`;
        }
    }

    // Function to hide all sections in bankGUI
    function hideAllSections() {
        checkBalanceSection.style.display = "none";
        depositSection.style.display = "none";
        withdrawSection.style.display = "none";
    }
});
