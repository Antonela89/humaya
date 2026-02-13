import {APY_KEY}  from "../apiKey.js";

const slide = document.querySelector('.slide');
const puntos = document.querySelectorAll('.punto');

puntos.forEach((punto, i) => {
    punto.addEventListener('click', () => {
        let operacion = i * -90;
        slide.style.transform = `translateX(${operacion}%)`;

        document.querySelector('.punto.activo')?.classList.remove('activo');
        punto.classList.add('activo');
    });
});

const obtenerRecetas = async () => {
    const busqueda = 'dulce de leche';

    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APY_KEY}&query=${busqueda}&language=es&addRecipeInformation=true&number=9`;

    try {
        const respuesta = await fetch(url);

        if (respuesta.ok) {
            const datos = await respuesta.json();
            let recetas = "";

            console.log(datos.results);
            
            datos.results.forEach(receta => {
                recetas += `
                <div class="item">
                    <div class="card">
                        <img src="${receta.image}" class="card-img-top" alt="${receta.title}">
                        <div class="card-body">
                            <h5 class="card-title">${receta.title}</h5>
                            <a href="${receta.sourceUrl}" target="_blank" class="btn botonPreparacion">Preparación</a>
                        </div>
                    </div>
                </div>`;
            });

            const recetasElement = document.getElementById("recetas");
            if (recetasElement) {
                recetasElement.innerHTML = recetas;
            }
            
        } else {
            if(respuesta.status === 402) {
                console.error('Límite de la API alcanzado (Spoonacular Free tiene límite diario)');
            } else {
                console.error('Error en la respuesta:', respuesta.status);
            }
        }

    } catch (error) {
        console.log('Error de red o CORS:', error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
obtenerRecetas();
});