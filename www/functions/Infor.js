export function run(valor) {
    // O 'valor' já vem sem aspas e sem parênteses
    console.log("LOG DO APP:", valor);
    document.getElementById('console-output').innerHTML += `Mensagem: ${valor}\n`;
}
