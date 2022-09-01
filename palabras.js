////////Palabras provisorias
var diccionario;
diccionario = [
    "ALEMANIA",
    "ALBANIA",
    "ANGOLA",
    "AUSTRIA",
    "ARMENIA",
    "BRASIL",
    "BELGICA",
    "BELICE",
    "BOLIVIA",
    "BURUNDI",
    "CHILE",
    "COLOMBIA",
    "CHAD",
    "CHINA",
    "CROACIA",
    "CUBA",
    "ECUADOR",
    "EGIPTO",
    "ERITREA",
    "ESTONIA",
    "ETIOPIA",
    "FRANCIA",
    "GRECIA",
    "GHANA",
    "HAITI",
    "HONDURAS",
    "ITALIA",
    "IRAN",
    "IRAQ",
    "INDIA",
    "ISLANDIA",
    "IRLANDA",
    "PERU",
    "POLONIA",
    "PORTUGAL",
    "SUIZA",
    "URUGUAY",
    "ZAMBIA"
];


var nuevasPalabras = JSON.parse(localStorage.getItem("palabrasAgregadas"));


for(let i = 0; i < nuevasPalabras.length; i++){
    diccionario.push(nuevasPalabras[i]);
}