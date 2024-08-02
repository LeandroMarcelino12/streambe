let edad = parseInt(prompt("ingrese su edad"));
let edad_max = parseInt(prompt("ingrese su edad maxima"));
let bananitas_dolca_por_dia = parseInt(prompt("ingrese cuantas bananitas dolca se comera por dia."));

let años_restantes = edad_max - edad;
let resultado_final = años_restantes * 365 * bananitas_dolca_por_dia;
let precio_total = resultado_final * 625 

alert("Necesitaras " + resultado_final + " bananitas dolca para que te alcancen hasta los " + edad_max + " años, y el total en pesos seria de $" + precio_total);


