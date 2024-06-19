// null operator
// const idade = 0;


// document.body.innerHTML = 'Sua idade é: ' + (idade ?? 'Não informado');



// objetos 

// const user = {
//     name: 'Diego',
//     idade: 27,
//     addres:{
//         street: 'Rua teste',
//         number: 176,
//     },
// };

// desestruturação

// const addres = user.addres;

// document.body.innerHTML = JSON.stringify(addres);
// document.body.innerHTML = JSON.stringify(Object.values(user))

// document.body.innerHTML = JSON.stringify(Object.entries(user))


function consultaEndereco(){
    let cep = document.getElementById('cep').value;
    if(cep.length !== 8){
        alert("Cep inávlido");
        return;
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(
        function(response){
            response.json().then(function(data){
                console.log(data);
                mostrarEndereco(data);
            })
        }
    );
}
function mostrarEndereco(dados){
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p>Endereço: ${dados.logradouro} </p>
                            <p>Complemento: ${dados.complemento}</p>
                            <p>Bairro: ${dados.bairro}</p>
                            <P>Cidade: ${dados.localidade} - ${dados.uf}</p>
    `
}