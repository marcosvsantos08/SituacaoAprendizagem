const usuarioInput = window.document.getElementById("usuario")
const senhaInput = window.document.getElementById("senha")
const mensagem = window.document.getElementById("msgerro")
let mostraDados=document.getElementById("mostraDados")
let nomeEdit= document.getElementById("nomeEdit");
let userEdit= document.getElementById("userEdit")
let usuarios = JSON.parse(localStorage.users)
mensagem.style.color = 'red'

function logar() {
    if (usuarioInput.value == ''|| senhaInput.value ==''){
        mensagem.innerHTML = 'Insira todas as Informações.'
    } else {
        mensagem.innerHTML ='Usuário ou senha inválidos.'
    }
    usuarios.forEach((item)=>{
        if(usuarioInput.value == item.usuario && senhaInput.value == item.senha){
            mensagem.innerHTML=''
            localStorage.setItem('pessoalogada', JSON.stringify(item))
            alert("usuario logado")
        }     
    })
}
function dados(){
    let userlog=JSON.parse(localStorage.getItem("pessoalogada"))
    mostraDados.innerHTML=`Nome: ${userlog.nome} <br> Usuario: ${userlog.usuario} `
}
