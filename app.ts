import { CompanyAccount } from "./class/CompanyAccount";
import { UserAccount } from "./class/UserAccount";
import { VipAccount } from "./class/VipAccount";


const company: CompanyAccount = new CompanyAccount('CoolCompany', 12365989)
const user: UserAccount = new UserAccount('Paulo', 123456)
const vip: VipAccount = new VipAccount('VIP')

// Company
console.log('Nome: ' + company.getName())
console.log('N° Conta: ' + company.getAccountNumber())
console.log('Saldo: ' + company.getBalance())

company.deposit(100)
company.withdraw(100)
company.getLoan(15000)

console.log('------------------------------')
// User
console.log('Nome: ' + user.getName())
console.log('N° Conta: ' + user.getAccountNumber())
console.log('Saldo: ' + user.getBalance())

user.deposit(100)
user.withdraw(100)


console.log('------------------------------')
// VIP
console.log('Nome: ' + vip.getName())
console.log('N° Conta: ' + vip.getAccountNumber())
console.log('Saldo: ' + vip.getBalance())

vip.deposit(100)
vip.withdraw(100)

console.log('------------------------------')
//inactive account
company.inactivateAccount()
try {
    console.log('Nome: ' + company.getName())
} catch (error) {
    console.log('conta inativa')
}

try {
    console.log('N° Conta: ' + company.getAccountNumber()) 
} catch (error) {
    console.log('conta inativa')
}

try {
    console.log('Saldo: ' + company.getBalance())
} catch (error) {
    console.log('conta inativa')
}

try {
    company.deposit(100)
} catch (error) {
    console.log('conta inativa')
}

try {
    company.withdraw(100)
} catch (error) {
    console.log('conta inativa')
}

try {
    company.getLoan(15000)
} catch (error) {
    console.log('conta inativa')
}






