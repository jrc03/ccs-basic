# Ejercicios básicos de CSS

Este repositorio contiene una carpeta llamada "ejercicios" donde encontrarás un archivo por cada ejercicio a realizar. Cada ejercicio incluye pruebas automatizadas para autocorrección y calificación automática.

## Visualización de Ejercicios con Live Server

Para visualizar los ejercicios en tu navegador:

1. **Instala la extensión Live Server** en VS Code (si no la tienes)
   - Abre VS Code
   - Ve a la pestaña de extensiones (Ctrl+Shift+X)
   - Busca "Live Server" y haz clic en instalar

2. **Inicia Live Server**
   - Abre el archivo [src/index.html](src/index.html)
   - Haz clic derecho sobre el archivo
   - Selecciona **"Open with Live Server"**
   - Tu navegador se abrirá automáticamente mostrando la página principal

3. **Navega por los ejercicios**
   - En la página principal verás enlaces a cada ejercicio
   - Haz clic en cualquier ejercicio para visualizarlo
   - Los cambios que hagas se reflejarán automáticamente en el navegador

---

## Estructura del Proyecto

```
./
├── ejercicios/          # Ejercicios a realizar.
├── src/                 # Aquí trabajarás tus archivos HTML y CSS.
├── tests/              # Pruebas automatizadas (no tocar ni modificar nada).
├── .github/workflows/  # Configuración de GitHub Actions (no tocar ni modificar nada).
└── package.json        # Dependencias para las pruebas (no tocar ni modificar nada).
```

## Ejercicios

### Ejercicio 1: Uso de CSS (8 puntos)

Aprende a aplicar estilos CSS de dos formas diferentes:
- **CSS inline** usando el atributo `style`
- **CSS en la cabecera** usando la etiqueta `<style>`

Crea un archivo HTML que demuestre ambas técnicas aplicando estilos a textos.

**Puntuación desglosada:**
- Test 1.1: Archivo HTML existe (2 puntos)
- Test 1.2: CSS inline (2 puntos)
- Test 1.3: Párrafo con clase (2 puntos)
- Test 1.4: CSS en cabecera (2 puntos)

### Ejercicio 2: CSS Externo (34 puntos)

Aprende a usar archivos CSS externos para aplicar estilos a varios elementos HTML:
- Enlazar un archivo CSS externo con `<link rel="stylesheet">`
- Aplicar estilos usando selectores de etiquetas HTML (header, nav, main, p, div, a)
- Crear efectos hover en enlaces

**Puntuación desglosada:**
- Test 2.1: Archivos existen (4 puntos)
- Test 2.2: Enlace CSS (2 puntos)
- Test 2.3: Estructura HTML (6 puntos)
- Test 2.4: Estilos header y nav (6 puntos)
- Test 2.5: Estilos enlaces (4 puntos)
- Test 2.6: Estilos main, p y div (6 puntos)
- Test 2.7: Estilos hover (2 puntos)
- Test 2.8: Verificación completa (4 puntos)

### Ejercicio 3: Selectores CSS (58 puntos)

Domina los diferentes tipos de selectores CSS:
- Selector de etiqueta, clase e ID
- Selectores descendentes y de hijo directo
- Selectores de atributo y pseudo-clases
- Aplicar estilos específicos usando cada tipo de selector

**Puntuación desglosada:**
- Test 3.1: Archivos existen (4 puntos)
- Test 3.2: Enlace CSS (2 puntos)
- Test 3.3: Estructura HTML básica (6 puntos)
- Test 3.4: Contenedor y listas (6 puntos)
- Test 3.5: Estilos h1 y clase (4 puntos)
- Test 3.6: Estilos ID contenedor (4 puntos)
- Test 3.7: Selectores avanzados (6 puntos)
- Test 3.8: Validación HTML (6 puntos)
- Test 3.9: Verificación completa (6 puntos)
- Test 3.10: Bonus por completar todo (14 puntos)

**TOTAL: 100 puntos**

---

## Sistema de Calificación Parcial

Este repositorio utiliza **calificación parcial** con GitHub Classroom. Esto significa:

- ✅ **Obtienes puntos por cada test que apruebes**, no necesitas aprobar todo el ejercicio
- 📊 **Los puntos se acumulan**: cada test individual suma a tu calificación total
- 🎯 **Máximo 100 puntos**: suma de todos los ejercicios
- 💯 **Números enteros**: todos los puntajes son valores enteros para facilitar el cálculo

Puedes ver tu progreso después de cada commit en la pestaña "Actions" de tu repositorio en GitHub. 

## Ejecución de Pruebas

Para ejecutar las pruebas localmente:

```bash
npm install
npm test
```

## Cómo Usar Este Repositorio

1. Clona el repositorio en tu máquina local o codespace.
2. Navega a la carpeta del proyecto.
3. Instala las dependencias ejecutando `npm install`.
4. Completa los ejercicios siguiendo las instrucciones en los archivos .md de cada ejercicio ubicados en la carpeta ejercicios.
5. Ejecuta las pruebas utilizando `npm test` para verificar tu trabajo.

¡Buena suerte y diviértete aprendiendo CSS!

