class User {
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }

    makeDeposit(amount) {
        this.accountBalance += amount;
    }

    makeWithdrawal(amount) {
        this.accountBalance -= amount;
    }

    displayBalance() {
        console.log(`User: ${this.name}, Balance: $${this.accountBalance}`)
    }
}

const ellie = new User("Ellie", "ellie@gmail.com");
const henry = new User("Henry", "henry@gmail.com");
const charlene = new User("Charlene", "charlene@gmail.com")

// console.log(ellie.name);
// console.log(henry.name);

// ellie.makeDeposit(100)
// ellie.makeDeposit(200)
// henry.makeDeposit(50)
// console.log(henry.displayBalance())

ellie.makeDeposit(100)
ellie.makeDeposit(200)
ellie.makeDeposit(300)
ellie.makeWithdrawal(200)
ellie.displayBalance()

henry.makeDeposit(100)
henry.makeDeposit(200)
henry.makeWithdrawal(50)
henry.makeWithdrawal(50)
henry.displayBalance()

charlene.makeDeposit(100)
charlene.makeWithdrawal(50)
charlene.makeWithdrawal(50)
charlene.makeWithdrawal(50)
charlene.displayBalance()