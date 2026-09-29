fetch('js/datos.json') 
.then(res => res.json()) 
.then(obras => {

    const btnCargar = document.querySelector("#btnCargar"); 
    const btnFondo = document.querySelector("#btnFondo"); 
    let miFondo = document.querySelector("body");

    btnCargar.addEventListener("click", cargarObras); 
    btnFondo.addEventListener("click", cambiarFondo);

    function cargarObras() {

        for (let obra of obras) { 
            document.querySelector("section").innerHTML += 
            `<div class="obra">  
                <h2>${obra.Obra}</h2> 
                <p>El artista es: ${obra.Artista}</p> 
 
                <button>${obra.año}</button> 
                <button id="btnInfo${obra.año}">Ver ficha tecnica</button> 
            </div>` 
        } 
 
        const btnInfo1934 = document.getElementById("btnInfo1934"); 
        const btnInfo1942 = document.getElementById("btnInfo1942"); 
        const btnInfo1928 = document.getElementById("btnInfo1928"); 
 
        function info1934() { 
            btnInfo1934.innerHTML = "Tecnica: Temple sobre arpillera. Dimensiones: 180 x 250 cm."; 
        } 
 
        function info1942() { 
            btnInfo1942.innerHTML = "Tecnica: Oleo sobre masonite. Dimensiones: 54,6 x 43,2 cm."; 
        } 
 
        function info1928() { 
            btnInfo1928.innerHTML = "Tecnica: Oleo sobre Tela. Dimensiones: 85,3 x 73 cm."; 
        } 
 
        btnInfo1934.addEventListener("click", info1934); 
        btnInfo1942.addEventListener("click", info1942); 
        btnInfo1928.addEventListener("click", info1928); 
    }

   function cambiarFondo() {
    miFondo.classList.toggle("fondoNuevo");
}

})