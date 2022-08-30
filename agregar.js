//Array de palabras
var palabras = [];


//Agregar palabra
function agregar(event){

    var palabraIngresada = document.getElementById("areaTexto");
    if(palabraIngresada.value != "" && palabraIngresada.value != null){
        if(palabraEsta(palabraIngresada.value.toUpperCase())){
            showError();
            palabraIngresada.value = "";
        }else{
            palabras.push(palabraIngresada.value.toUpperCase());
            showSuccess();
            palabraIngresada.value = "";
        }
    }else{
        showErrorNull();
        palabraIngresada.value = "";
    }
}

//Guardar y empezar juego
function guardarEmpezar(event){
    localStorage.setItem("palabrasAgregadas", JSON.stringify(palabras));
    document.location.href = 'ahorcado.html';
}

//Cancelar
function cancelar(event){
    document.location.href = 'inicio.html';
}

//comprueba que solo sean ingresadas letras
function soloLetras(event) {
    tecla = (document.all) ? event.keyCode : event.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    //Solo se aceptan letras mayúsculas
    patron = /[A-Za-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

//Comprueba que la palabra no haya sido agregada anteriormente
function palabraEsta(palabra){
    for(let i = 0; i < palabras.length; i++){
        if(palabra === palabras[i]){
            return true;
        }
    }
    return false;
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

    //agregar palabra
    var agregar = document.getElementById("btn-agregar");
    agregar.innerText = "";
    agregar.innerHTML = `<p class="texto-boton-agregar">
                         Adicionar palavra</p>`;

    //guardar palabra
    var guardar = document.getElementById("btn-guardar");
    guardar.innerText = "";
    guardar.innerHTML = `<p class="texto-boton-guardar">
    Salve e Comece</p>`;

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
    aclara.placeholder = "Máximo 8 letras...";

    //traduzco el texto de advertencia
    var advertencia = document.getElementById("cont-advert");
    advertencia.innerHTML = `<p class="texto-advertencia"><i id="exclamacion" class="fa fa-exclamation-circle"
    aria-hidden="true"></i> Máximo 8 letras</p>`;

    //traduzco el showSuccess
    var exito = document.getElementById("success-dialog");
    exito.innerHTML = `<div class="contenedor-close-info"><i onclick="closeWindow()" class="fas fa-window-close"
                            id="close-info"></i></div>
                    <div class="cont-text-dialog-success">
                        <p>Palavra Adicionada &nbsp;</p>
                        <i class="fas fa-check-circle" id="logo-success"></i>
                    </div>`;

    //traduzco el showError
    var error = document.getElementById("error-dialog");
    error.innerHTML = `<div class="contenedor-close-info"><i onclick="closeWindow()" class="fas fa-window-close"
                            id="close-info"></i></div>
                    <div class="cont-text-dialog-error">
                        <p>Erro! Essa palavra já foi adicionada... por favor, tente outra. &nbsp;</p>
                        <i class="fas fa-exclamation-triangle" id="logo-error"></i>
                    </div>`;

    //traduzco el showErrorNull
    var errorNull = document.getElementById("error-null-dialog");
    errorNull.innerHTML = `<div class="contenedor-close-info"><i onclick="closeWindow()" class="fas fa-window-close"
                            id="close-info"></i></div>
                    <div class="cont-text-dialog-error-null">
                        <p>Erro! O campo está vazio. &nbsp;</p>
                        <i class="fas fa-exclamation-triangle" id="logo-error-null"></i>
                    </div>`;
}


//Abre la ventana de Reglas
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

//Abre la ventana de palabra agregada
function showSuccess() {
    ventana = document.getElementById("success-dialog");
    contDialogo = document.getElementById('contenedor-dialogo-success');
    contDialogo.style.removeProperty("display");
    contDialogo.style.display = "block";
    ventana.show();
}

//Abre la ventana de error por palabra existente
function showError() {
    ventana = document.getElementById("error-dialog");
    contDialogo = document.getElementById('contenedor-dialogo-error');
    contDialogo.style.removeProperty("display");
    contDialogo.style.display = "block";
    ventana.show();
}

//Abre la ventana de error por valor nulo
function showErrorNull() {
    ventana = document.getElementById("error-null-dialog");
    contDialogo = document.getElementById('contenedor-dialogo-error-null');
    contDialogo.style.removeProperty("display");
    contDialogo.style.display = "block";
    ventana.show();
}

//Cierra la ventana que se encuentre abierta
function closeWindow() {
    contDialogo.style.removeProperty("display");
    contDialogo.style.display = "none";
    ventana.close();
}




