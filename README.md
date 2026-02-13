# HUMAYA - Dulces del Alma 🍯

**Humaya** es una landing page moderna y responsiva para una marca de dulces artesanales con más de 50 años de tradición. El proyecto destaca la calidad de sus productos (orgánicos, sin TACC y sin conservantes) y ofrece una experiencia interactiva al usuario.

## 🚀 Características

- **Diseño Responsivo:** Adaptado para dispositivos móviles, tablets y desktop utilizando Bootstrap 5 y CSS personalizado.
- **Sección de Productos:** Catálogo visual de productos destacados con detalles técnicos.
- **API de Recetas Dinámica:** Integración con la API de Spoonacular para mostrar recetas relacionadas con "dulce de leche" en tiempo real.
- **Slider Interactivo:** Carrusel de recetas propio desarrollado con JavaScript Vanilla (ES6 Modules).
- **Formulario de Contacto:** Diseño funcional para captación de consultas.
- **Mapa y Geolocalización:** Ubicación de locales mediante Google Maps embebido.

## 🛠️ Tecnologías utilizadas

- **HTML5** & **CSS3** (Módulos de CSS para un mantenimiento limpio).
- **Bootstrap 5.3:** Para la estructura de grillas y componentes base.
- **JavaScript (ES6):** Uso de `async/await`, `fetch` y módulos de JS.
- **Spoonacular API:** Para la obtención de datos dinámicos de recetas.
- **Google Fonts:** Tipografía "Montserrat" para una estética limpia.

## 📦 Instalación y Configuración

Si deseas clonar y ejecutar este proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/humaya.git
   ```

2. **Configurar la API Key:**
   Este proyecto requiere una API Key de [Spoonacular](https://spoonacular.com/food-api).
   - Crea un archivo llamado `apiKey.js` dentro de la carpeta `/js`.
   - Agrega el siguiente contenido:
     ```javascript
     const APY_KEY = "TU_API_KEY_AQUÍ";
     export default APY_KEY;
     ```

3. **Ejecutar el proyecto:**
   Debido al uso de **JavaScript Modules**, es necesario abrir el proyecto a través de un servidor local. 
   - Si usas VS Code, se recomienda la extensión **Live Server**.
   - Haz clic derecho en `index.html` -> *Open with Live Server*.

## 📂 Estructura de Carpetas

```text
HUMAYA/
├── css/              # Hojas de estilo modulares (navbar, home, recetas, etc.)
├── img/              # Recursos visuales organizados por sección
├── js/
│   ├── main.js       # Lógica principal y manejo de API
│   └── apiKey.js     # Configuración de credenciales (excluida en gitignore)
├── index.html        # Estructura principal
└── README.md         # Documentación del proyecto
```

## ✒️ Autor

- **Tu Nombre** - *Desarrollo y Maquetación* - [GitHub](https://github.com/Antonela89)
- **Profesora:** Flores Gisela.

---
*Este proyecto fue realizado como parte de la formación en Maquetado Web.*

