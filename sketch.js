// variáveis da bolinha 
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

// velocidade da bolinha 
let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;

// variáveis da raquete 
 let xRaquete = 5;
 let yRaquete = 150;
 let raqueteComprimento = 10;
 let raqueteAltura = 90;

// variáveis do oponente 
 let xRaqueteOponente = 585;
 let yRaqueteOponente = 150;
 let velocidadeYOponente;


let colidiu = false;
 
// placar do jogo
 let meusPontos = 0;
 let pontosDoOponente = 0; 

// sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisãoRaquete();
  verificaColisãoRaquete(xRaquete, yRaquete);
  mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
      verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);

  incluiPlacar();
  marcaPonto();
  
}

function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro);
} 

function movimentaBolinha(){
   xBolinha += velocidadeXBolinha;
   yBolinha += velocidadeYBolinha;
}

 function verificaColisaoBorda(){
   if (xBolinha + raio > width || 
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height ||
    yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
 }

 function mostraRaquete(x, y){
     rect(x, y, raqueteComprimento, raqueteAltura);

 }

 function mostraRaqueteOponente(){
     rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);

 }

 function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
 }

 function verificaColisãoRaquete(){
   if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
     velocidadeXBolinha *= -1;
     raquetada.play();
   }
   
 }

 function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
   }
 }



 function movimentaRaqueteOponente(){
  if(keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
 }

 

 function incluiPlacar(){
   stroke(color (215, 315));
   textAlign(CENTER)
   textSize(20);
   fill(color (0, 250, 154));
   rect(150, 10, 40, 20);
      fill(color (255, 215, 0));
   text(meusPontos, 170, 26);
      fill(color (0, 250, 154));
   rect(450, 10, 40, 20);
      fill(color (255, 215, 0));
   text(pontosDoOponente, 470, 26);
 }
 
 function marcaPonto(){
   if (xBolinha > 595){
     meusPontos += 1;
     ponto.play();
   }
   if (xBolinha < 10){
     pontosDoOponente += 1;
     ponto.play();
   }
 }
 
 






