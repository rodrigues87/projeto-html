const texto1object= document.getElementById("texto1")
const texto2object = document.getElementById("texto2")
const tabelaObject = document.getElementById("tabelaId")


removerObjetoDaTela(texto2object);



function funcaoAoClicar() {
    removerObjetoDaTela(texto1object);
    adicionarObjetoDaTela(texto2object);
    modificarTabela(tabelaObject);
}

function voltar(){
    removerObjetoDaTela(texto2object);
    adicionarObjetoDaTela(texto1object);
    retornarTabela(tabelaObject);
}

function removerObjetoDaTela(object) {
    object.style.display = 'none'
}

function adicionarObjetoDaTela(object) {
    object.style.display = 'block'
}

function modificarTabela(tabelaObject) {
    tabelaObject.style.background = 'rebeccapurple';
    tabelaObject.style.color = '#ffffff';
}

function retornarTabela(tabelaObject) {
    tabelaObject.style.background = '#ffffff';
    tabelaObject.style.color = '#000000';
}