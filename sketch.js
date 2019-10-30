let graph = new Graph();
var cities = {};
var totalCities = 7;
var adja = [0];
var recordDistance;
var bestEver;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  for (var i = 0; i < totalCities; i++) {
    var v = createVector(random(width, 2), random(height, 2));
    cities[i] = v;
    // a linha de baixo vai pegar a letra pelo valor da tabela asc; exemplo: 65 é a letra A
    graph.addNode(String.fromCharCode(65 + i));
  }
  //melhor caminho devolve uma lista com os pontos que pertencem ao melhor caminho
  
  
  bestEver = melhorCaminho(cities);
  var keys = [];
  //bestEver agora é uma lista com os pontos mais zikas
  for(i = 0; i < bestEver.length; i++){
      keys[i] = bestEver[i].charCodeAt(0) - 65;
      //keys é a lista dos indices dos pontos que estao na lista "cities"
  }
}



function melhorCaminho(points) {
  //a funcao addEdge esta adicionando a distancia do primeiro ponto ate o segundo ponto. Sintaxe -> addEdge(firstPoint, secondPoint, distance);
  graph.addEdge("A", "C", 100);
  graph.addEdge("A", "B", 3);
  graph.addEdge("A", "D", 7);
  graph.addEdge("D", "C", 3);
  graph.addEdge("D", "E", 8);
  graph.addEdge("E", "F", 10);
  graph.addEdge("B", "G", 9);
  graph.addEdge("E", "G", 50);
  
  return graph.findPathWithDijkstra("A", "E")[0];
}