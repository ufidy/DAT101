"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const AccountType = {
    Normal: "Brukskonto",
    Savings: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensjonskonto"
}

printOut("Brukskonto, Sparekonto, Kredittkonto, Pensjonskonto");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount {
#type;

constructor(accountType, type) {
    this.accountType = accountType;
    this.#type = type;
}

setType(newType) {
    this.#type = newType;
}
    
toString() {
    return `Account Type: ${this.accountType}, Type: ${this.#type}`;
}
set accountType(newType) {
            this._accountType = newType;
        }

get accountType() {
            return this._accountType;
        }
}

const myAccount = new TAccount(AccountType.Normal, "Brukskonto");
printOut(myAccount.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount1 {
    #type;
    #balance;

    constructor(accountType, type, balance) {
        this.accountType = accountType;
        this.#type = type;
        this.#balance = balance;
    }
    setType(type) {
            this.#type = type;
        }

   toString() {
    return `Account Type: ${this.accountType}, Type: ${this.#type}, Balance: ${this.#balance}`;
}
    set accountType(newType) {
            this._accountType = newType;
        }

    get accountType() {
            return this._accountType;
        }


    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (amount > this.#balance) {
            printOut("Insufficient funds");
        } else {
            this.#balance -= amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}
const myAccount1 = new TAccount1(AccountType.Savings, "Sparekonto", 0);

myAccount1.deposit(100);
printOut("Deposit of 100, new balance: " + myAccount1.getBalance());

myAccount1.withdraw(25);
printOut("Withdraw of 25, new balance: " + myAccount1.getBalance());

printOut("My account balance is: " + myAccount1.getBalance());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount2 {
    #type;
    #balance
    #withdrawCount;

    constructor(accountType, type, balance, withdrawCount = 0) {
        this.accountType = accountType;
        this.#type = type;
        this.#balance = balance;
        this.#withdrawCount = withdrawCount;
    }
    
    setType(type) {
        printOut("Account type changed from " + this.#type + " to " + type);
        this.#withdrawCount = 0; // Reset withdraw count on type change    
        this.#type = type;
        }
   
    toString() {
    return `Account Type: ${this.accountType}, Type: ${this.#type}, Balance: ${this.#balance}`;
    }
    set accountType(newType) {
            this._accountType = newType;
        }

    get accountType() {
            return this._accountType;
    }

        
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (this.#type === AccountType.Savings && this.#withdrawCount >= 3) {
            printOut("You can't withdraw more than 3 times from a Sparekonto");
            return; // STOP execution of the method
        }
            if (this.#type === AccountType.Pension) {
            printOut("You can't withdraw from a Pensjonskonto");
            return; // STOP execution of the method
        }
        if (amount > this.#balance) {
            printOut("Insufficient funds");
            return; // STOP execution of the method
        }
        // If we reach here, the withdrawal can proceed
            this.#balance -= amount;
            this.#withdrawCount += 1;
            printOut("Withdraw of " + amount + ", new balance: " + this.getBalance());
        }
 getBalance() {
        return this.#balance;
    }
}

const myAccount2 = new TAccount2(AccountType.Savings, "Sparekonto", 75);
    
myAccount2.deposit(25);
printOut("Deposit of 25, new balance: " + myAccount2.getBalance());

myAccount2.withdraw(30);
myAccount2.withdraw(30);
myAccount2.withdraw(30);
myAccount2.withdraw(10); // This should be blocked

myAccount2.setType(AccountType.Pension); // Change to Pensionskonto
myAccount2.withdraw(10); // This should be blocked

myAccount2.setType(AccountType.Savings); // Change to Sparekonto
myAccount2.withdraw(10); // This should'nt be blocked, since the switch between accounts should reset the counter.

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const CurrencyTypes = {
    NOK: {value: 1.0000, name: "Norske kroner", denomination: "kr"},
    USD: {value: 0.0985, name: "United States dollar", denomination: "$"},
    EUR: {value: 0.1091, name: "Europieske euro", denomination: "€"},
    GBP: {value: 0.0847, name: "Pound sterling", denomination: "£"},
    INR: {value: 7.8309, name: "Indiske rupee", denomination: "₹"},
    AUD: {value: 0.1581, name: "Australienske dollar", denomination: "A$"},
    PHP: {value: 6.5189, name: "Filippinske peso", denomination: "₱"},
    SEK: {value: 1.0580, name: "Svenske kroner", denomination: "kr"},
    CAD: {value: 0.1435, name: "Canadiske dollar", denomination: "C$"},
    THB: {value: 3.3289, name: "Thailandske baht", denomination: "฿"}
}   

class TAccount3 {
    #type;
    #balance;
    #withdrawCount;
    #currency;

    constructor(accountType, type, balance = 0, withdrawCount = 0) {
        this.accountType = accountType;
        this.#type = type;
        this.#balance = balance;
        this.#withdrawCount = withdrawCount;
        this.#currency = CurrencyTypes.NOK; //Default currency
    }
    
    setType(type) {
        printOut("Account type changed from " + this.#type + " to " + type);
        this.#withdrawCount = 0; // Reset withdraw count on type change    
        this.#type = type;
        }
    
    toString() {
    return `Account Type: ${this.accountType}, Type: ${this.#type}, Balance: ${this.#balance}`;
    }
    set accountType(newType) {
            this._accountType = newType;
        }

    get accountType() {
            return this._accountType;
    }
        
    setCurrency(currency) {
        this.#currency = currency;
    }
     

    getCurrency() {
        return this.#currency;
    }    

        
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (this.#type === AccountType.Savings && this.#withdrawCount >= 3) {
            printOut("You can't withdraw more than 3 times from a Sparekonto");
            return; // STOP execution of the method
        }
            if (this.#type === AccountType.Pension) {
            printOut("You can't withdraw from a Pensjonskonto");
            return; // STOP execution of the method
        }
        if (amount > this.#balance) {
            printOut("Insufficient funds");
            return; // STOP execution of the method
        }
        // If we reach here, the withdrawal can proceed
            this.#balance -= amount;
            this.#withdrawCount += 1;
            printOut("Withdraw of " + amount + ", new balance: " + this.getBalance());
        }
 getBalance() {
        return this.#balance;
    }
}

const myAccount3 = new TAccount3(AccountType.Savings, "Brukskonto", 0);
myAccount3.setCurrency(CurrencyTypes.NOK);
myAccount3.deposit (150);
printOut("Deposit of 150" + myAccount3.getCurrency().denomination + ", new balance: " + myAccount3.getBalance() + myAccount3.getCurrency().denomination);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount4 {
    #type;
    #balance;
    #withdrawCount;
    #currency;

    constructor(accountType, type, balance, withdrawCount = 0) {
        this.accountType = accountType;
        this.#type = type;
        this.#balance = balance;
        this.#withdrawCount = withdrawCount;
        this.#currency = CurrencyTypes.NOK; // Default currency is NOK
    }
    
    setType(type) {
        printOut("Account type changed from " + this.#type + " to " + type);
        this.#withdrawCount = 0; // Reset withdraw count on type change    
        this.#type = type;
        }
toString() {
    return `Account Type: ${this.accountType}, Type: ${this.#type}, Balance: ${this.#balance}`;
    }
    set accountType(newType) {
            this._accountType = newType;
        }

    get accountType() {
            return this._accountType;
    }
        
    setCurrency(newCurrency) {
        const newBalance =this.#balance * (newCurrency.value / this.#currency.value);
        printOut("The account currency has changed from " + this.#currency.name + " to " + newCurrency.name + ".");
        printOut("New balance is " + newBalance.toFixed(2) + newCurrency.denomination);
        this.#balance = newBalance;
        this.#currency = newCurrency;
    }
     

    getCurrency() {
        return this.#currency;
    }    

        
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (this.#type === AccountType.Savings && this.#withdrawCount >= 3) {
            printOut("You can't withdraw more than 3 times from a Sparekonto");
            return; // STOP execution of the method
        }
            if (this.#type === AccountType.Pension) {
            printOut("You can't withdraw from a Pensjonskonto");
            return; // STOP execution of the method
        }
        if (amount > this.#balance) {
            printOut("Insufficient funds");
            return; // STOP execution of the method
        }
        // If we reach here, the withdrawal can proceed
            this.#balance -= amount;
            this.#withdrawCount += 1;
            printOut("Withdraw of " + amount + ", new balance: " + this.getBalance());
        }
 getBalance() {
        return this.#balance;
    }
}

const myAccount4 = new TAccount4(AccountType.Normal, "Brukskonto", 150);

myAccount4.setCurrency(CurrencyTypes.USD);
myAccount4.setCurrency(CurrencyTypes.EUR);
myAccount4.setCurrency(CurrencyTypes.NOK);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount5 {
    #type;
    #balance;
    #withdrawCount;
    #currency;

    constructor(accountType, type, balance, withdrawCount = 0) {
        this.accountType = accountType;
        this.#type = type;
        this.#balance = balance;
        this.#withdrawCount = withdrawCount;
        this.#currency = CurrencyTypes.NOK; // Default currency is NOK
    }
    
    setType(type) {
        printOut("Account type changed from " + this.#type + " to " + type);
        this.#withdrawCount = 0; // Reset withdraw count on type change    
        this.#type = type;
        }

    toString() {
    return `Account Type: ${this.accountType}, Type: ${this.#type}, Balance: ${this.#balance}`;
    }
    set accountType(newType) {
            this._accountType = newType;
        }

    get accountType() {
            return this._accountType;
    }
        
    setCurrency(newCurrency) {
        const newBalance =this.#balance * (newCurrency.value / this.#currency.value);
        printOut("The account currency has changed from " + this.#currency.name + " to " + newCurrency.name + ".");
        printOut("New balance is " + newBalance.toFixed(2) + newCurrency.denomination);
        this.#balance = newBalance;
        this.#currency = newCurrency;
    }
     

    getCurrency() {
        return this.#currency;
    }    

        
    deposit(amount, currency = this.#currency) {
        const originalAmount = amount;
        const originalCurrency = currency.name;
        
     if (currency !== this.#currency) {
            amount = amount * (this.#currency.value / currency.value);
            printOut("Depositing " + originalAmount + " " + originalCurrency);
        } else {
           printOut(`Deposited ${originalAmount} ${this.#currency.name}`); 
        }
            this.#balance += amount;
            printOut("New balance: " + this.#balance.toFixed(2) + this.#currency.denomination);

    }
    withdraw(amount, currency=this.#currency) {
        const originalAmount = amount;
        const originalCurrency = currency.name;
        
        if (this.#type === AccountType.Savings && this.#withdrawCount >= 3) {
            printOut("You can't withdraw more than 3 times from a Sparekonto");
            return; // STOP execution of the method
        }
            if (this.#type === AccountType.Pension) {
            printOut("You can't withdraw from a Pensjonskonto");
            return; // STOP execution of the method
        }

        if (currency !== this.#currency) {
            amount = amount * (this.#currency.value / currency.value);
            printOut(`Withdrawal ${originalAmount} ${originalCurrency}`);
        } else {
           printOut(`Withdrawal ${originalAmount} ${this.#currency.name}`); 
        }

        if (amount > this.#balance) {
            printOut("Insufficient funds");
            return; // STOP execution of the method
        }

          // If we reach here, the withdrawal can proceed
            this.#balance -= amount;
            this.#withdrawCount += 1;
            printOut(`Withdrawal of ${amount.toFixed(2)} ${this.#currency.denomination}, ` + `new balance: ${this.balance.toFixed(2)} ${this.currency.denomination}`);
        
    } 

 getBalance() {
        return this.#balance;
    }
}
const myAccount5 = new TAccount5(AccountType.Normal, "Brukskonto", 200);
myAccount5.deposit(12, CurrencyTypes.USD);
myAccount5.withdraw(10, CurrencyTypes.GBP);

myAccount5.setCurrency(CurrencyTypes.CAD);
myAccount5.setCurrency(CurrencyTypes.INR);

myAccount5.withdraw(150.11, CurrencyTypes.SEK);

printOut(newLine);
