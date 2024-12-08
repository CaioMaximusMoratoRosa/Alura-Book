async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCEPConvertido = await consultaCEP.json()
    if(consultaCEPConvertido.erro){
        throw Error ("CEP não existe")
    }
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');
    var bairro = document.getElementById('bairro');

    cidade.value = consultaCEPConvertido.localidade;
    logradouro.value = consultaCEPConvertido.logradouro;
    estado.value = consultaCEPConvertido.uf;
    bairro.value = consultaCEPConvertido.bairro;

    console.log(consultaCEPConvertido);
    return consultaCEPConvertido;
    } catch(erro){
        mensagemErro.innerHTML = `<P>ISSO NÃO EXISTE</P>`;
        console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));