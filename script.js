const player = document.getElementById("player");
const block1 = document.getElementById("block1");
var score = 0;
var flag = 0;

document.getElementById("score").innerText = score; 


function jump() {
    if(player.classList != "jump") { //verifica se o objeto player tem a classe jump

        player.classList.add("jump"); //adiciona a classe jump

        setTimeout(function () {
            player.classList.remove("jump"); //remove a classe depois de 0.5s
        }, 500)
    }
}

let isAlive = setInterval(function () {
    
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top")); //le a posicao top do player para a variavel PlayerTop

    let block1Left = parseInt(window.getComputedStyle(block1).getPropertyValue("left")); //le a posicao left do obstaculo para a variavel block1Left

    if(block1Left < 130 && block1Left > 50 && playerTop >= 250) { //verifica se houve colisao
      alert("GAME OVER");
      location.reload(); //recarrega a pagina
    }

    if(block1Left < 0 && flag == 0) { //verifica se player passou pelo obstaculo
        flag = 1; //limita contagem do score em 1
        score = score + 1; //soma score
        document.getElementById("score").innerText = score; 
    }

    if(block1Left > 0 && flag == 1) { //verifica se o obstaculo ja passou pelo player
        flag = 0; //reseta limitador do score
    }

}, 10);
    

document.addEventListener("keydown", function (event) {
    jump();
});


