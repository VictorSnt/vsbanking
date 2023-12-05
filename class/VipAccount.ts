import { VsBankingAccount } from "./VsBankingAccount";


export class VipAccount extends VsBankingAccount{

    constructor(name: string){
        super(name)
    }

    deposit = (amount: number): void => {
        this.statusValidation()
        let balance = this.getBalance()
        balance += amount + 10
        this.setBalance(balance)
        console.log(`Foi realizado um deposito de R$ ${amount} e o saldo atual é R$ ${this.getBalance()}`)
    }
}