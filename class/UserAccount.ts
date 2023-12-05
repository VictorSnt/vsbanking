import { VsBankingAccount } from "./VsBankingAccount"


export class UserAccount extends VsBankingAccount {
    
    private document: number

    constructor(name: string, document: number){
        super(name)
        this.document = document

    }

}