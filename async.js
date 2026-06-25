// async function getQuote() {
//     const response = await fetch("https://dummyjson.com/quotes/random",{
//         method: 'GET',
//         headers:{
//             "content-type":"application/json"
//         }
//     } )
//     const data=response.json()
//     console.log(data) 
// }
// async function displayQuote(){
//     const Quote=await getQuote()
//     console.log(Quote)
// }
// displayQuote()
// async function getQuote() {
//     try {
//         const respnse = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=2mGbCngA7PyBISDWjGNIxFttjavJPt26fLxcqaca", {
//             method: 'GET',
//             headers: {
//                 "content-type": "application/json"
//             }
//         })

//         const data = respnse.json()
//         console.log(data)
//     } catch (error) {
//         console.log(`this is the error ${error}`)
//     }
// }
// async function displayQuote(){
//     const Quote=await getQuote()
//     console.log(Quote)
// }
// displayQuote()
// class car {
//     constructor(brand, year) {
//         this.brand = brand
//         this.year = year
//     }
//     age() {
//         const date = new Date()
//         return date.getFullYear() - this.year
//     }
//     brandName() {
//         return this.brand
//     }
// }
// const mycar2 = new car("Nissan", 2019)
// console.log(mycar2.brandName())
// console.log(mycar2.age())
// const mycar3 = new car("BMW", 2022)
// console.log(mycar3.brandName())
// console.log(mycar3.age())
// class counter {
//     constructor() {
//         this.startValue = 0
//     }
//     increment() {
//         return this.startValue += 1
//     }
//     decrement() {
//         return this.startValue -= 1
//     }
//     getValue() {
//         return this.startValue
//     }
// }
// const count = new counter()
// count.increment()
// count.increment()
// count.increment()
// console.log(count.getValue())
// count.decrement()
// console.log(count.getValue())
class BankAccount {
    constructor(owner,balance) {
        this.owner=owner
        this.balance = balance
    }
deposit(amount){
    this.balance=this.balance+amount;
    console.log(this.owner+" deposited " +amount+". New balance:"+this.balance)
}
withdraw(amount){
    if(amount>this.balance){
        console.log("Insufficient balance!")
    }else{
this.balance=this.balance-amount
    console.log(this.owner+" withdrew "+amount+". New balance: "+ this.balance)
    }   
}
checkBalance(){
    console.log(this.owner+"'s balance is: "+this.balance)
}
borrowLoan(amount){
    this.balance=this.balance+amount;
    console.log(`${this.owner} borrowed a loan of ${amount}. New balance is: ${this.balance}`)
}
}
let norenaAccount=new BankAccount("Norena",1000);
norenaAccount.checkBalance();
norenaAccount.deposit(500);
norenaAccount.withdraw(200);
norenaAccount.borrowLoan(1000);
norenaAccount.withdraw(5000);
