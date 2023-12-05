import { UserAccount } from "./UserAccount"


export class CompanyAccount extends UserAccount {

    constructor(name: string, document: number){
        super(name, document)
    }

    getLoan = (amount: number): void => {
        this.statusValidation()
        this.setBalance(amount)
        console.log(`pegou um emprestimo de ${amount}`)
    }

}