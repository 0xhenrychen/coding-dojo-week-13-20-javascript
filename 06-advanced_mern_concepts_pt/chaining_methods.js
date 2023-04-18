class User {
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }

    makeDeposit(amount) {
        this.accountBalance += amount;
        return this;
    }

    makeWithdrawal(amount) {
        this.accountBalance -= amount;
        return this;
    }

    displayBalance() {
        console.log(`User: ${this.name}, Balance: $${this.accountBalance}`);
    }
}

const ellie = new User("Ellie", "ellie@gmail.com");
const henry = new User("Henry", "henry@gmail.com");
const charlene = new User("Charlene", "charlene@gmail.com")

// ellie.makeDeposit(100)
// ellie.makeDeposit(200)
// ellie.makeDeposit(300)
// ellie.makeWithdrawal(200)
// ellie.displayBalance()

ellie.makeDeposit(100).makeDeposit(200).makeDeposit(300).makeWithdrawal(200).displayBalance()

// henry.makeDeposit(100)
// henry.makeDeposit(200)
// henry.makeWithdrawal(50)
// henry.makeWithdrawal(50)
// henry.displayBalance()

henry.makeDeposit(100).makeDeposit(200).makeWithdrawal(5).makeWithdrawal(50).displayBalance()

// charlene.makeDeposit(100)
// charlene.makeWithdrawal(50)
// charlene.makeWithdrawal(50)
// charlene.makeWithdrawal(50)
// charlene.displayBalance()

charlene.makeDeposit(100).makeWithdrawal(50).makeWithdrawal(50).makeWithdrawal(50).displayBalance()