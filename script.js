let mostrarResultado = document.getElementById("mostrarResultado");
let pcEscolha =  document.getElementById("pcEscolha");
let pedra = document.getElementById("pedra");
let papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");
let vitoria = document.getElementById("vitoria");
let derrota = document.getElementById("derrota");
let empate = document.getElementById("empate");
let resete = document.getElementById("resete");


resete.onclick = function(){
    pcEscolha.reset();
    mostrarResultado.reset();
}

let comparador = function(objeto){
    let maquina = [1,2,3];
    console.log(objeto)
    let aleatorio = maquina[Math.floor(Math.random() * maquina.length)];
    

    if(aleatorio === 1){
        maquina = "Pedra!"
    }
    else if(aleatorio === 2){
        maquina = "Papel!"
    }else if(aleatorio === 3){
        maquina = "Teseoura!"
    }

    if(objeto == 'pedra'){
        if(maquina == "Pedra!"){
            pcEscolha.escolhaPc.value = maquina;
            mostrarResultado.empt.value =+ mostrarResultado.empt.value +1; 
            alert("! Deu empate");
        }
        else if(maquina == "Papel!"){
            pcEscolha.escolhaPc.value = maquina;
            mostrarResultado.der.value =+ mostrarResultado.der.value +1; 
            alert("! Derrota !");
        }

        else{
            pcEscolha.escolhaPc.value = maquina;
            mostrarResultado.vit.value =+ mostrarResultado.vit.value +1 ; 
            alert("! Vitoria !");
        }
    }

    if(objeto == 'papel'){
        if(maquina == "Papel!"){
            pcEscolha.escolhaPc.value = maquina;
            mostrarResultado.empt.value =+ mostrarResultado.empt.value +1; 
            alert("! Deu empate");
        }
        else if(maquina == "Teseoura!"){
            pcEscolha.escolhaPc.value = maquina;
            mostrarResultado.der.value =+ mostrarResultado.der.value +1; 
            alert("! Derrota !");
        }

        else {
            pcEscolha.escolhaPc.value = maquina;
            mostrarResultado.vit.value =+ mostrarResultado.vit.value +1; 
            alert("! Vitoria !");
        }
    }
    if(objeto == 'tesoura'){
        if(maquina == "Teseoura!"){
            pcEscolha.escolhaPc.value = maquina;
            mostrarResultado.empt.value =+ mostrarResultado.empt.value +1; 
            alert("! Deu empate");
        }
        else if(maquina == "Pedra!"){
            pcEscolha.escolhaPc.value = maquina;
            mostrarResultado.der.value =+ mostrarResultado.der.value +1;  
            alert("! Derrota !");
        }

        else{
            pcEscolha.escolhaPc.value = maquina;
            mostrarResultado.vit.value =+ mostrarResultado.vit.value +1; 
            alert("! Vitoria !");
        }
    }
}

pedra.onclick = function() {
    comparador("pedra");
}
papel.onclick = function() {
    comparador("papel");
    
}

tesoura.onclick = function() {
    comparador("tesoura");
    
}



