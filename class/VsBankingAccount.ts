export abstract class VsBankingAccount {

    private readonly accountNumber: number
    private readonly name: string 
    private balance: number = 0
    private status: boolean = true

    constructor(name: string){
        this.name = name
        this.accountNumber = this.generateAccountNumber()
        

    }

    private generateAccountNumber = (): number => {
        let currentSeconds = new Date().getSeconds()
        return currentSeconds * currentSeconds
    }

    protected statusValidation = (): boolean => {
        if(this.status) return this.status 
        throw new Error('Essa conta se encontra cancelada')
    }
    
    getName = (): string => {
        this.statusValidation()

        return this.name
    }

    getAccountNumber = (): number => {
        this.statusValidation()
        return this.accountNumber
    }

    getBalance = (): number => {
        this.statusValidation()
        
        return this.balance
    }

    protected setBalance = (value: number): void => {
        this.balance = value
    }

    deposit = (amount: number): void => {
        this.statusValidation()
        this.balance += amount
        console.log(`${this.name} realizou um deposito de R$ ${amount} e o saldo atual é R$ ${this.balance}`)
        
    }

    withdraw = (amount: number): void => {
        this.statusValidation()
        if (this.balance < amount) throw new Error('Saldo insuficiente para saque')
        this.balance -= amount
        console.log(`${this.name} realizou um saque de R$ ${amount} e o saldo atual é R$ ${this.balance}`)
        
    }

    inactivateAccount = (): void => {this.status = false}
 
}