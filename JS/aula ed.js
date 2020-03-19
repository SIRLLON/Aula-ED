window.alert('bem-vindo ao exercicios do ED da educafrotech');
let vnome = window.prompt('Digite o nome:');
let data = (prompt("Qual é a sua data de nascimento?"));
var d = new Date()
let nasci = d.getFullYear() - data;
let genero = prompt("Qual é o seu gênero? Digite 1 para feminino. Digite 2 para masculino.");
if (nasci <= 10) {
    if (genero == '1') {
        document.write(`Seja bem-vinda, ${vnome} ! Você é criança.`);
    } else if (genero == "2") {
        document.write(`Seja bem-vindo, ${vnome} ! Você é criança.`);
    }
    /*else if (generousu == "3") 
    {
        document.write(`Olá, ${nomeusu} ! Seu gênero é outros  e em relação a mim, Juliana, você é ${(nasciju - nasciusu)} anos mais jovem.`);
    }*/
} else if (nasci <= 16) {
    if (genero == '1') {
        document.write(`Seja bem-vinda, ${vnome} ! Você é adolescente.`);
    } else if (genero == "2") {
        document.write(`Seja bem-vindo, ${vnome} ! Você é adolescente.`);
    }
} else if (nasci <= 28) {
    if (genero == '1') {
        document.write(`Seja bem-vinda, ${vnome} ! Você é jovem.`);
    } else if (genero == "2") {
        document.write(`Seja bem-vindo, ${vnome} !Você é jovem.`);
    }
} else if (nasci <= 55) {
    if (genero == '1') {
        document.write(`Seja bem-vinda, ${vnome} ! Você é maduro.`);
    } else if (genero == "2") {
        document.write(`Seja bem-vindo, ${vnome} !Você é maduro.`);
    }
} else if (nasci > 55) {
    if (genero == '1') {
        document.write(`Seja bem-vinda, ${vnome} ! Você é idoso.`);
    } else if (genero == "2") {
        document.write(`Seja bem-vindo, ${vnome} !Você é idoso.`);
    }
}