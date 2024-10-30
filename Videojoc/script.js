let vida = 100;
const pocio = 20;
const CDF = 50;

function mostraVida() {
    console.log("La meva vida es:" + vida)
    if (vida == 0) {
        console.log("Estàs mort babau")
    }
}

function atac() {
    let dany;
    let torn = Math.floor(Math.random() * 3);
    if (torn == 0) {
        atacEnemic("Atac bàsic");
    }
    else if (torn == 1) {
        atacEnemic("Dispar enemic");
    }
    else if (torn == 2) {
        atacEnemic("RPG enemic");
    }
}
function atacEnemic(atac) {
    let sangrat;
    let sangratGrau;
    console.log(atac)
    if (vida <= 0) {
        dany = 0;
        console.log("Estas mort")
        console.log("pren té un ibuprofè")
    }
    if (atac == "Atac bàsic") {

        dany = 10;
    }
    else if (atac == "Dispar enemic") {

        dany = 10;
        sangrad =5;
    }
    else if (atac == "RPG enemic") {

        dany = 10;
        sangratGrau =8;
    }
    vida -= dany
    console.log("Has sigut atacat:")
    console.log("La meva vida es:" + vida)
}
function beurepocio() {
    if (vida == 100) {
        console.log("Tens la vida al maxim")
    }
    else if (vida == 90) {
        vida += 10
        console.log("La meva vida es:" + vida)
    }
    else if (vida == 0) {
        console.log("estas mort la poció no té efecte")
        console.log("La meva vida es:" + vida)
    }
    else {
        vida += pocio
        console.log("La teva vida a aumentat por una poció:")
        console.log("La meva vida es:" + vida)
    }
}
function CDL() {
    if (vida == 0) {
        vida += 50
        console.log("T'has menjat una cola de fenix, hara tens 50 punt de vida")
    } else if (vida >= 10) {
        console.log("No té efecte perque no estàs mort")
    }
}
function vendaje(){
if{

}
}

function botiquin(){

}