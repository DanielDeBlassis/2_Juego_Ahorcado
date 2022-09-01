///////////////////////////////
////////LÓGICA DE JUEGO////////
///////////////////////////////

//compruebo si me trae el diccionario
console.log(diccionario);

///creo un número aleatorio para elegir la palabra
var nroAzar = Math.floor(Math.random() * diccionario.length)

console.log(diccionario[nroAzar]);

//asigno la palabra a una variable
var palabraAzar = diccionario[nroAzar];

//cuento los aciertos
var aciertos = 0;

//imprime las líneas para el input
//input modelo --> <input type="text" class="input" maxlength="1" onkeypress="return soloLetras(event)" onkeyup="javascript:this.value=this.value.toUpperCase();" onkeyup="if (this.value.length == this.getAttribute('maxlength')){ input2.focus()}" required pattern="A-Za-z" title="Ingrese Letra">
function pintaInputs() {
    var areaInput = document.getElementById("contenedor-guiones");
    var guiones = "";

    for (let i = 0; i < palabraAzar.length; i++) {
        guiones += `<input id="${'posicion' + i}" type="text" class="input" maxlength="1" value="" onkeypress="return soloLetras(event)" onkeypress='return (event.keyCode >= 65 && event.keyCode <= 90);'  onkeyup="javascript:this.value=this.value.toUpperCase();" required pattern="[A-Za-z]" title="Ingrese Letra" disabled>`; //muestra el valor <input type="text" class="input" maxlength="1" value="${palabraAzar[i]}" onkeypress="return soloLetras(event)" onkeyup="javascript:this.value=this.value.toUpperCase();" onkeyup="if (this.value.length == this.getAttribute('maxlength')){ input2.focus()}" required pattern="A-Za-z" title="Ingrese Letra"></input>
    }

    areaInput.innerHTML = guiones;
}
pintaInputs();

//array con todas las letras ingresadas
var letrasIngresadas = [];

var intento = 1;

function comprobar(){

    var inputLetra = document.getElementById("letra-comprobar");

    var letraAComprobar = document.getElementById("letra-comprobar").value;

    var imgPatibulo = document.getElementById("cont-patibulo");

    var areaAusentes = document.getElementById("letras-ausentes");

    if(letraAComprobar != null && letraAComprobar != "" && letraAComprobar.length === 1){

    if (intento < 7) {
        if (letraEsta(letraAComprobar)) {
            if (yaFueTecleado(letraAComprobar.toUpperCase())) {
                alert("Ya fue tecleado.");
                inputLetra.value = "";
            } else {
                colocarLetra(letraAComprobar.toUpperCase());
                letrasIngresadas.push(letraAComprobar.toUpperCase());
                inputLetra.value = "";

                if(palabraAzar.length === aciertos){
                    showWin();
                    showWinMessage();
                    intentos = 8;
                }
            }

        }else {
            //agrego las letras ingresadas a un array para verificar y no descontar intentos
            if (yaFueTecleado(letraAComprobar.toUpperCase())) {
                alert("Ya fue tecleado. Pruebe con otra letra.");
                inputLetra.value = "";
            } else {
                imgPatibulo.innerHTML = `<img src="${'img/patibulo-' + intento + '.svg'}" alt="Patíbulo" title="Patíbulo">`;
                areaAusentes.value += letraAComprobar.toUpperCase() + " ";
                letrasIngresadas.push(letraAComprobar.toUpperCase());
                inputLetra.value = "";
                intento += 1;
            }
        }
    }else if(intento === 7){
        imgPatibulo.innerHTML = `<img src="${'img/patibulo-' + intento + '.svg'}" alt="Patíbulo" title="Patíbulo">`;
        areaAusentes.value += letraAComprobar.toUpperCase() + " ";
        showLose();
        showLoseMessage();
        intento += 1;
        imgPatibulo.innerHTML = `<img src="img/patibulo-8.png" alt="Patíbulo" title="Patíbulo">`;
        inputLetra.value = "";
    }

    }else{
        if(letraAComprobar === null){
            alert("Error! Ingrese una letra.");
        }else if(letraAComprobar.length > 1){
            alert("Error! Ingrese una sola letra por favor.");
        }else{
            alert("Error! Intente de nuevo.");
        }
    }
}

//comprueba si ya fue tecleado y no lo cuenta
function yaFueTecleado(letra) {
    for (let i = 0; i < letrasIngresadas.length; i++) {
        if (letra.toUpperCase() === letrasIngresadas[i]) {
            return true;
        }
    }
    return false;
}

//comprobar si la letra está
function letraEsta(letra) {
    for (let i = 0; i < palabraAzar.length; i++) {
        if (letra.toUpperCase() === palabraAzar[i]) {
            return true;
        }
    }
    return false;
}
//coloca la letra en su lugar
function colocarLetra(letra) {
    for (let i = 0; i < palabraAzar.length; i++) {
        if (letra.toUpperCase() === palabraAzar[i]) {
            var ubicacion = document.getElementById(`${"posicion" + i}`);
            aciertos += 1; //cuenta las coincidencias
            ubicacion.value = palabraAzar[i];//
        }
    }
}


//comparar palabra elegida con el tecleo
function letraTecleada() {
    var input = document.addEventListener("keydown", function (event) {
        console.log(event);
    })
    for (let i = 0; i < palabraAzar.length; i++) {
        if (input.key == palabraAzar[i]) {
            /* Pinta la letra en el input */
            var letra = document.getElementById(`${"posicion" + i}`);
            letra.value = palabraAzar[i];
        }
    }
}

// ////////////VALIDACIÓN DEL TEXTAREA////////////
//comprueba que solo sean ingresadas letras
function soloLetras(event) {

    tecla = (document.all) ? event.keyCode : event.which;
    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }
    //Solo se aceptan letras
    patron = /[A-Za-z]/;

    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}


///////////////NUEVO JUEGO/////////////////
function nuevoJuego(){
    location.reload();
}

//////////////DESISTIR////////////////////
function desistir(){
    document.location.href = 'inicio.html';
}


///////////EXTRAS/////////////
//bandera de españa
var banderaEspania = document.querySelector("#spain");

//bandera de brasil
var banderaBrasil = document.querySelector("#brasil");


//activo el botón de español ya que la página está así por defecto
banderaEspania.style.filter = "drop-shadow(0px 0px 10px black)";

//Función para cambiar el idioma
function cambiarEspaniol() {
    banderaEspania.style.filter = "drop-shadow(0px 0px 10px black)";
    banderaBrasil.style.removeProperty("filter");
    location.reload();
}

function cambiarPortugues() {
    banderaBrasil.style.filter = "drop-shadow(0px 0px 10px black)";
    banderaEspania.style.removeProperty("filter");

    //nuevo juego
    var nuevo = document.getElementById("btn-nuevo");
    nuevo.innerText = "";
    nuevo.innerHTML = `<p class="texto-boton-nuevo">Novo Jogo</p>`;

    //traduzco el footer
    var footer = document.getElementById("footer");
    footer.innerHTML = `<p id="creditos">&copy Ícones da Espanha e do Brasil criados por Freepik - <a href="https://www.flaticon.com/" target="_blank" rel="nofollow noreferrer noopener"><em>Flaticon</em></a></p>`;

    //traduzco las reglas
    var reglas = document.getElementById("rules-dialog");
    reglas.innerHTML = `<div class="contenedor-close-info"><i onclick="closeWindow()" class="fas fa-window-close"
    id="close-reglas"></i></div>
    <div class="cont-text-dialog-rules">
    <h2>Desafio #2 <b>Jogo da Forca</b></h2><br>
    <h5>-Requisitos:</h5><br>
    <ul class="lista">
    <li>Deve funcionar apenas com letras maiúsculas;</li>
    <li>Letras com acentos ou caracteres especiais não devem ser usadas;</li>
    <li>Ao completar ou desenhar a forca, uma mensagem "Game Over" deve ser exibida no
        tela;</li>
    <li>Se a palavra correta for completada antes do fim das tentativas, ela deve ser
        exibiu uma mensagem de "Você ganhou, Parabéns!" na tela.</li>
    <li>A página deve ter hífens indicando cada letra da palavra, separados por um
        espaço;</li>
    <li>Para iniciar o jogo a página deve ter um botão "Iniciar Jogo";</li>
    <li>Não deve ser possível digitar números no jogo.</li>
    <li>As letras erradas devem aparecer na tela, mas não podem aparecer repetidamente;</li>
    <li>As letras corretas devem aparecer na tela acima dos hífens, na posição
        correto em relação à palavra.</li>
    </ul><br>
    <h5>-Extras:</h5><br>
    <ul class="lista">
        <li>A página deve ter um campo para inserir texto para adicionar
            novas palavras ao jogo e um botão "Adicionar palavra".</li>
    </ul>
    </div>`;

    //traduzco el acerca de
    var acercaDe = document.getElementById("info-dialog");
    acercaDe.innerHTML = `<div class="contenedor-close-info"><i onclick="closeWindow()" class="fas fa-window-close" id="close-info"></i></div>
    <div class="cont-text-dialog-info"><p class="t-dialog-info">Olá! Meu nome é Daniel De Blassis e criei este aplicativo que corresponde ao desafio nº 2 do programa Alura ONE.</p><br>
    <p class="t-dialog-info"><a href="https://github.com/DanielDeBlassis/2_Juego_Ahorcado" target="_blank"
            rel="nofollow noreferrer noopener">Aqui</a> você pode encontrar o repositório do projeto.
    </p></div>`;

    //traduzco el placeholder
    var aclara = document.getElementById("areaTexto");
    aclara.placeholder = "Maximo 8 letras...";

    //traduzco el texto de advertencia
    var advertencia = document.getElementById("cont-advert");
    advertencia.innerHTML = `<p class="texto-advertencia"><i id="exclamacion" class="fa fa-exclamation-circle"
    aria-hidden="true"></i> Maximo 8 letras</p>`;
}


//Abre la ventana de Reglas y estado del juego
//defino la variable
var ventana;
var contDialogo;
var contDialogInfo = document.getElementById('contenedor-dialogo-info');
var contDialogRules = document.getElementById('contenedor-dialogo-rules');

//Abre la ventana de Reglas
function showRules() {
    ventana = document.getElementById("rules-dialog");
    contDialogo = document.getElementById('contenedor-dialogo-rules');
    contDialogo.style.removeProperty("display");
    contDialogo.style.display = "block";
    ventana.show();
}

//Abre la ventana de información
function showInfo() {
    ventana = document.getElementById("info-dialog");
    contDialogo = document.getElementById('contenedor-dialogo-info');
    contDialogo.style.removeProperty("display");
    contDialogo.style.display = "block";
    ventana.show();
}

//
//Abre la ventana al perder el juego
function showLose() {
    ventana = document.getElementById("lose-dialog");
    contDialogo = document.getElementById('contenedor-juego-perdido');
    ventana.innerHTML = `<div class="contenedor-close-info">
                          <i onclick="closeWindow()" class="fas fa-window-close" id="close-reglas"></i>
                          <h1>Fin del Juego</h1><br>
                          <p>La palabra era: ${palabraAzar}</p></div>`;
    contDialogo.style.removeProperty("display");
    contDialogo.style.display = "block";

    ventana.show();
}

function showLoseMessage(){
    var mensaje = document.getElementById("mensaje-lose");
    mensaje.style.removeProperty("display");
}

//
//Abre la ventana al ganar el juego
function showWin() {
    ventana = document.getElementById("win-dialog");
    contDialogo = document.getElementById('contenedor-juego-ganado');
    contDialogo.style.removeProperty("display");
    contDialogo.style.display = "block";

    ventana.show();
}

function showWinMessage(){
    var mensaje = document.getElementById("mensaje-win");
    mensaje.style.removeProperty("display");
}

//Cierra la ventana que se encuentre abierta
function closeWindow() {
    contDialogo.style.removeProperty("display");
    contDialogo.style.display = "none";
    ventana.close();
}

