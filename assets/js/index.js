const form = document.querySelector('.formulario')

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura')

    const peso1 = Number(inputPeso.value);
    const altura1 = Number(inputAltura.value);

    if(!peso1){
        setResltado(`Peso Inválido!`)
        return;
    }
    if(!altura1){
        setResltado(`Altura inválida!`)
        return;
    }

    const imc = getImc(peso1, altura1);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu Imc é ${imc} ${nivelImc}`;

    setResltado(msg, true);

    console.log(imc, nivelImc)

});

function getNivelImc(imc){

    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade de grau 1', 'Obesidade de grau 2', 'Obesidade de grau 3']

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel [4];
    if (imc >= 29.9) return nivel [3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5)  return nivel[0];
}
function getImc(peso,altura){
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}
function criaP(){

    const p = document.createElement('p');
    return p;
}
function setResltado(msg,isValid){
    const resultado = document.querySelector('.resposta');
    resultado.innerHTML = '';

    const p = criaP();
    

    if(isValid){
        p.classList.add('.paragrafo-resultado');
    }else{
        p.classList.add('.bad');
    }
    p.innerHTML = msg;

    resultado.appendChild(p)

}