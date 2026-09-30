# Ejercicio 3: Selectores CSS

## Visualización del Ejercicio

Para visualizar este ejercicio con Live Server:

1. Asegúrate de tener la extensión **Live Server** instalada en VS Code
2. Abre el archivo [src/index.html](../src/index.html)
3. Haz clic derecho sobre el archivo y selecciona **"Open with Live Server"**
4. En la página principal, haz clic en el enlace **"Ejercicio 3: Selectores CSS"**

---

## Objetivo

Aprende a utilizar diferentes tipos de selectores CSS para aplicar estilos específicos a elementos HTML. Los selectores permiten ser más precisos al aplicar estilos.

---

## Tipos de Selectores a usar:

1. **Selector de etiqueta**: `p`, `h1`, `div`
2. **Selector de clase**: `.mi-clase`
3. **Selector de ID**: `#mi-id`
4. **Selector descendente**: `div p`
5. **Selector hijo directo**: `ul > li`
6. **Selector de atributo**: `[type="text"]`
7. **Selector de pseudo-clase**: `:hover`, `:first-child`

---

## Tarea

1. Crea un archivo `src/ejercicio-3/selectores.html` con los siguientes elementos:
   - Un título `h1` con texto "Selectores CSS"
   - Un párrafo con clase `destacado` y texto "Párrafo con clase destacado"
   - Un div con ID `contenedor` que contenga:
     - Un párrafo con texto "Párrafo dentro de contenedor"
     - Una lista `ul` con 3 elementos `li`
   - Un input de tipo texto con placeholder "Escribe aquí"
   - Un párrafo adicional con texto "Párrafo normal"

2. Crea un archivo `src/ejercicio-3/selectores.css` con los siguientes estilos:
   - `h1`: color azul y tamaño de fuente 28px
   - `.destacado`: color rojo y font-weight bold
   - `#contenedor`: border de 2px sólido negro y padding de 15px
   - `#contenedor p`: color verde
   - `ul > li`: list-style-type square
   - `[type="text"]`: border de 1px sólido gris y padding de 5px
   - `li:first-child`: color morado

3. Agrega un enlace en [src/index.html](../src/index.html) para acceder a este ejercicio:
   ```html
   <a href="ejercicio-3/selectores.html">Ejercicio 3: Selectores CSS</a>
   ```

## Probar su ejercicio

Utilizar el test en que verifique:
   - El archivo HTML enlaza correctamente al CSS
   - Los elementos HTML están presentes
   - Los estilos CSS se aplican correctamente verificando la sintaxis de los selectores

---

## Puntuación

Este ejercicio vale **58 puntos** en total, distribuidos de la siguiente manera:

- **Test 3.1**: Archivos HTML y CSS existen (4 puntos)
- **Test 3.2**: Enlace CSS correcto (2 puntos)
- **Test 3.3**: Estructura HTML básica (6 puntos)
- **Test 3.4**: Contenedor y listas (6 puntos)
- **Test 3.5**: Estilos h1 y clase (4 puntos)
- **Test 3.6**: Estilos ID contenedor (4 puntos)
- **Test 3.7**: Selectores avanzados (6 puntos)
- **Test 3.8**: Validación HTML (6 puntos)
- **Test 3.9**: Verificación completa de selectores (6 puntos)
- **Test 3.10**: Bonus por completar todo correctamente (14 puntos)

Cada test aprobado suma puntos parciales a tu calificación final de 100 puntos.

---

## Ejemplo esperado:

El HTML debe tener una estructura clara con todos los elementos mencionados y el CSS debe aplicar los estilos correctamente a cada selector.

## Ejecución de Pruebas

Para ejecutar las pruebas localmente:

```bash
npm install
npm test
```
