/*window.alert('bem-vindo ao Leão educafro');
let vnome = window.prompt('Digite o nome:');
let renda = (prompt("Qual é a sua renda?"));
//let genero = prompt("Qual é o seu gênero? Digite 1 para feminino. Digite 2 para masculino.");
if (renda <= 1500) {
    document.write(`Olá, ${vnome}! Você não pagará imposto.`);
} else if (renda <= 2500) {
    document.write(`Olá, ${vnome}! Você pagará R$ ${renda*0.025} reias de imposto.`);
} else if (renda > 2500) {
    document.write(`Seja bem-vindo, ${vnome} ! Você pagará R$ ${renda*0.05} reais de imposto.`);
}*/
let vnome = ['camisa', 'calca', 'terno', 'vestido', 'blusa'];
let vpreco = ['20', '30', '40', '50', '60']
while (x > 5) {
    window.alert(vnome[x] + "<br>" + vpreco[x]);
    x = x + 1;
}
for (let index = 0; index < Array.length; index++) {
    const element
}