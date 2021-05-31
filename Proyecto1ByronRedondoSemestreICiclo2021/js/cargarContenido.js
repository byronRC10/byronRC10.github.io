var morpho = "La mariposa Morpho Azul (Morpho peleides) es una de las mariposas \n\
 más grandes del mundo, con una envergadura de hasta 8 pulgadas de largo. \n\
 Las mariposas Morpho Azul son conocidas por el espectacular azul de la parte \n\
 superior de sus alas, que en realidad no se debe a un pigmento, sino a la \n\
 configuración de escamas que reflejan la luz de manera que produce un \n\
 aparente color azul iridiscente.";

var basilisco = "Este extraordinario reptil puede correr sobre el agua cuando \n\
se ve amenazado. El Basilisco corre solo con sus patas traseras en posición erecta, \n\
manteniendo siempre sus patas delanteras a los lados. Este basilisco es muy hábil en \n\
el agua ya que sus patas son largas y tienen los dedos unidos por membranas; cuando \n\
se mueve rápidamente, la lagartija puede atravesar una superficie de agua antes de hundirse.";

var tucan = "Tiene una longitud de 42 a 55 cm (17 a 22 pulgadas), por lo general pesa \n\
alrededor de 380 a 500 g (13-18 oz). Su pico es largo en comparación con el tamaño del tucán, \n\
con una longitud de hasta 16 cm. La cola mide la mitad e incluso en algunos la longitud de su \n\
cuerpo. Sus alas son cortas y redondeadas. . En la base tiene una línea negra, luego es de \n\
color verde siendo en la parte superior naranja y en la inferior azul celeste. El pico termina \n\
con una punta color rojo.";

var chisbala = "La ameiva centroamericana es una especie de lagarto que pertenece a la familia \n\
Teiidae. Es nativo del norte de Colombia, Panamá, Costa Rica, Nicaragua, Honduras, Guatemala, \n\
Belice, y el sur de México, y posiblemente El Salvador.";

var image;
        
function mostrarMorpho(){
        document.getElementById("parrafocontenido").innerHTML = morpho;
        image = document.getElementById("imagen");
                image.src = 'img/morpho.jpg';
         }

function mostrarBasilisco(){
        document.getElementById("parrafocontenido").innerHTML = basilisco;
        image = document.getElementById("imagen");
                image.src = 'img/basilisco.jpg';
        }

function mostrarTucan(){
        document.getElementById("parrafocontenido").innerHTML = tucan;
        image = document.getElementById("imagen");
                image.src = 'img/tucan.jpeg';
        }

function mostrarChisbala(){
        document.getElementById("parrafocontenido").innerHTML = chisbala;
        image = document.getElementById("imagen");
                image.src = 'img/chisbala.jpg';
        }







