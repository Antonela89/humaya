const slide = document.querySelector('.slide');
const puntos = document.querySelectorAll('.punto');

puntos.forEach((punto, i) => {
    puntos[i].addEventListener('click', () => {

        let posicion = i;
        let operacion = posicion * -30;

        slide.style.transform=`translateX(${operacion}%)`

        puntos.forEach((punto, i) => {
            puntos[i].classList.remove('activo');
        })
        puntos[i].classList.add('activo');
    })
    
});

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
                <div class="item">
                    <div class="card">
                        <img src="${receta.recipe.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${receta.recipe.label}</h5>
                            <a href="${receta.recipe.url}" class="btn botonPreparacion">Preparación</a>
                        </div>
                    </div>
                </div>`     
            })

            const recetasElement = document.getElementById("recetas");
            recetasElement.innerHTML = recetas;
            
        } else {
            console.error('Error en la respuesta de la API:', respuesta.status);
        }

    } catch (error) {
        console.log('Error de la solicitud:', error);
    }
}

// la función obtenerRecetas() se ejecute una vez que el documento HTML esté listo.
document.addEventListener("DOMContentLoaded", () => {
    obtenerRecetas();
});


/* <div class="card" style="width: 18rem;">
                    <img src="${receta.recipe.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${receta.recipe.label}</h5>
                    <p class="card-text">unas deliciosa opcion para acompañar las meriendas, ese antojo de media noche o compartir con amigos.</p>
                    <a href="${receta.recipe.url}" class="btn botonPreparacion">Preparación</a>
                </div>` */