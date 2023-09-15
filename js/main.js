//vista en front end: 
// carrosuel (boostrast) contiene cards (boostrast) 
// ver botones antes y despues de carrousel
// cada card corresponde a una receta 
// card necesesito: img / titulo / descripcion / preparacion
// la receta la obtengo de la api

const btnAnterior = document.querySelector(".carousel-control-prev");
const btnSiguiente = document.querySelector(".carousel-control-next");

btnAnterior.addEventListener("click", ()=> {
    console.log("click");
});

btnSiguiente.addEventListener("click", ()=> {
    console.log("click");
})


const obtenerRecetas = async () => {
    try {
        const respuesta = await fetch('https://api.edamam.com/search?q=caramel&app_id=a28bb00e&app_key=8e72c1f02f82a9df52bc0aaab2a8e47f')
        // console.log(respuesta);

        if(respuesta.status === 200) {
            const datos = await respuesta.json();
            // console.log(datos);

            let recetas = "";

            datos.hits.forEach(receta => {
                // console.log(receta);
                recetas += `
                <div class="card">
                    <img src="${receta.recipe.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${receta.recipe.label}</h5>
                        <a href="${receta.recipe.url}" class="btn botonPreparacion">Preparación</a>
                    </div>
                </div>`
            })
            document.getElementById("recetas").innerHTML = recetas;

        } else {
            console.error('Error en la respuesta de la API:', respuesta.status);
        }

    } catch (error) {
        console.log('Error de la solicitud:', error);
    }
}

obtenerRecetas();

/* <div class="card" style="width: 18rem;">
                    <img src="${receta.recipe.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${receta.recipe.label}</h5>
                    <p class="card-text">unas deliciosa opcion para acompañar las meriendas, ese antojo de media noche o compartir con amigos.</p>
                    <a href="${receta.recipe.url}" class="btn botonPreparacion">Preparación</a>
                </div>` */