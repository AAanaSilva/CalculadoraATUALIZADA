function limpar() {
    document.getElementById("xA").value = "";
    document.getElementById("yA").value = "";
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("display").value = ""
}

function calculardistanciapontoereta() {
    var xA = Number(document.getElementById("xA").value); 
    var xB = Number(document.getElementById("xB").value);
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);

    var partetop = ((a * xA) + (b * xB) + (c))
    var partebottom = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    var resultado = partetop / partebottom 


}