function acont(name, amount, bankName) {
    var bankData = {
        name: name,
        amount: amount,
        bankName: bankName,
        limit: 200
    };
    alert("Ol\u00E1 ".concat(name, " seu saldo \u00E9 de ").concat(amount, " no baco ").concat(bankName));
    return bankData;
}
function seeLimit(amount, limit, money) {
    if (limit < money) {
        alert("Seu limite nao permite mais dinheiro");
    }
    else {
        alert("valor de ".concat(money, " adicionado na conta :").concat(amount));
    }
}
var newName = "Pedro";
var newAmount = 20;
var newBankName = "Nubank";
var aco = acont(newName, newAmount, newBankName);
seeLimit(aco.amount, aco.limit, aco.limit);
