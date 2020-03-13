window.alert('bem-vindo a camisaria educafro');
let vnome = window.prompt('Digite o nome:');
let idade = (prompt("Qual é a sua idade?"));
let genero = prompt("Qual é o seu gênero? Digite 1 para feminino. Digite 2 para masculino.");
if (idade < 28) {
    if (genero == '1') {
        document.write(`Seja bem-vinda, ${vnome} ! Você é ${28 - parseInt(idade)} anos mais jovem do que Sirllon.`);
    } else if (genero == "2") {
        document.write(`Seja bem-vindo, ${vnome} ! Você é ${28 - parseInt(idade)} anos mais jovem do que Sirllon.`);
    }
    /*else if (generousu == "3") 
    {
        document.write(`Olá, ${nomeusu} ! Seu gênero é outros  e em relação a mim, Juliana, você é ${(idadeju - idadeusu)} anos mais jovem.`);
    }*/
} else if (idade > 28) {
    if (genero == '1') {
        document.write(`Seja bem-vinda, ${vnome} ! Você é ${parseInt(idade)-28} anos mais velho do que Sirllon.`);
    } else if (genero == "2") {
        document.write(`Seja bem-vindo, ${vnome} ! Você é ${parseInt(idade)-28} anos mais velho do que Sirllon.`);
    }
} else if (idade == 28) {
    if (genero == '1') {
        document.write(`Seja bem-vinda, ${vnome} ! Tem a mesma idade que o Sirllon.`);
    } else if (genero == "2") {
        document.write(`Seja bem-vindo, ${vnome} ! Tem a mesma idade que o Sirllon.`);
    }
}