function displayName()
{
    document.write("CAMILO RINCON ANIME VIVA ");
}

function sayHello()
{
    document.write("Hola que tal");
}

function displayScore(){
    var playScore = 2018;
    document.write("<p> La puntuacion del jugador es:" + playScore + "</p>");

}
function displayScore(thePlayesScore){
    thePlayesScore += 100;// Añadiria 100 puntos
    document.write("<b>"+thePlayesScore+"</b>")
}