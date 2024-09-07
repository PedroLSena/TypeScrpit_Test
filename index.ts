function acont(name:string, amount:number, bankName: string){
    const bankData = {
        name,
        amount,
        bankName,
        limit: 200
    }

    alert(`Olá ${name} seu saldo é de ${amount} no baco ${bankName}`);

    return bankData;
}

function seeLimit(amount:number, limit: number, money: number){
    if (limit < money) {
        alert("Seu limite nao permite mais dinheiro");
    }else{
        alert(`valor de ${money} adicionado na conta :${amount}`);
    }
}

const newName: string = "Pedro"
const newAmount: number = 20;
const newBankName: string = "Nubank"

const aco = acont(newName, newAmount, newBankName);

seeLimit(aco.amount,aco.limit,aco.limit)

