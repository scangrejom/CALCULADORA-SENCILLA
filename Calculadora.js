function renderizarGUI(){

const divCalculadora= document.createElement("div");
divCalculadora.setAttribute("id", "calculadora");
divCalculadora.setAttribute("class", "text-center");
divCalculadora.setAttribute("style", "width: 80%");
document.body.appendChild(divCalculadora);


const divPantalla= document.createElement("div");
divPantalla.setAttribute("id", "pantalla");

divCalculadora.appendChild(divPantalla);

const Datos= document.createElement("input");
Datos.setAttribute("id", "Datos");
Datos.setAttribute("type", "text");
Datos.setAttribute("value", "0");
Datos.setAttribute("disabled", "true");
Datos.setAttribute("class","from-control text-right");
Datos.setAttribute("style", "background-color", "grey");
divPantalla.appendChild(Datos);

const divBotones= document.createElement("div");
divBotones.setAttribute("id", "botones")
divCalculadora.appendChild(divBotones);



}

renderizarGUI();
