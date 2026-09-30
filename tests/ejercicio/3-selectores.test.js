const fs = require('fs');
const path = require('path');

describe('Ejercicio 3 - Selectores CSS', () => {
  const htmlFilePath = path.join(__dirname, '../../src/ejercicio-3/selectores.html');
  const cssFilePath = path.join(__dirname, '../../src/ejercicio-3/selectores.css');
  let html;
  let css;

  beforeAll(() => {
    expect(fs.existsSync(htmlFilePath)).toBe(true);
    expect(fs.existsSync(cssFilePath)).toBe(true);
    html = fs.readFileSync(htmlFilePath, 'utf8');
    css = fs.readFileSync(cssFilePath, 'utf8');
  });

  test('El archivo HTML existe', () => {
    expect(fs.existsSync(htmlFilePath)).toBe(true);
  });

  test('El archivo CSS existe', () => {
    expect(fs.existsSync(cssFilePath)).toBe(true);
  });

  test('El archivo HTML enlaza correctamente al CSS', () => {
    expect(html).toMatch(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']selectores\.css["'][^>]*>/);
  });

  test('El HTML contiene título h1 con "Selectores CSS"', () => {
    expect(html).toMatch(/<h1[^>]*>Selectores CSS<\/h1>/);
  });

  test('El HTML contiene párrafo con clase "destacado"', () => {
    expect(html).toMatch(/<p[^>]*class=["']destacado["'][^>]*>Párrafo con clase destacado<\/p>/);
  });

  test('El HTML contiene div con ID "contenedor"', () => {
    expect(html).toMatch(/<div[^>]*id=["']contenedor["'][^>]*>/);
  });

  test('El HTML contiene párrafo dentro del contenedor', () => {
    expect(html).toMatch(/<div[^>]*id=["']contenedor["'][^>]*>[\s\S]*<p[^>]*>Párrafo dentro de contenedor<\/p>[\s\S]*<\/div>/);
  });

  test('El HTML contiene lista ul con elementos li', () => {
    expect(html).toMatch(/<ul>[\s\S]*<li>[\s\S]*<\/li>[\s\S]*<\/ul>/);
  });

  test('El HTML contiene al menos 3 elementos li', () => {
    const liMatches = html.match(/<li>/g);
    expect(liMatches).toBeTruthy();
    expect(liMatches.length).toBeGreaterThanOrEqual(3);
  });

  test('El HTML contiene input de tipo texto', () => {
    expect(html).toMatch(/<input[^>]*type=["']text["'][^>]*>/);
  });

  test('El HTML contiene párrafo normal adicional', () => {
    expect(html).toMatch(/<p[^>]*>Párrafo normal<\/p>/);
  });

  test('El CSS contiene estilos para h1 con color azul y tamaño 28px', () => {
    expect(css).toMatch(/h1\s*\{[\s\S]*color:\s*blue[\s\S]*\}/);
    expect(css).toMatch(/h1\s*\{[\s\S]*font-size:\s*28px[\s\S]*\}/);
  });

  test('El CSS contiene estilos para la clase destacado con color rojo y bold', () => {
    expect(css).toMatch(/\.destacado\s*\{[\s\S]*color:\s*red[\s\S]*\}/);
    expect(css).toMatch(/\.destacado\s*\{[\s\S]*font-weight:\s*bold[\s\S]*\}/);
  });

  test('El CSS contiene estilos para el ID contenedor con border y padding', () => {
    expect(css).toMatch(/#contenedor\s*\{[\s\S]*border:\s*2px solid black[\s\S]*\}/);
    expect(css).toMatch(/#contenedor\s*\{[\s\S]*padding:\s*15px[\s\S]*\}/);
  });

  test('El CSS contiene selector descendente #contenedor p con color verde', () => {
    expect(css).toMatch(/#contenedor\s+p\s*\{[\s\S]*color:\s*green[\s\S]*\}/);
  });

  test('El CSS contiene selector hijo directo ul > li con list-style square', () => {
    expect(css).toMatch(/ul\s*>\s*li\s*\{[\s\S]*list-style-type:\s*square[\s\S]*\}/);
  });

  test('El CSS contiene selector de atributo [type="text"] con border y padding', () => {
    expect(css).toMatch(/\[type=["']text["']\]\s*\{[\s\S]*border:\s*1px solid grey?[\s\S]*\}/);
    expect(css).toMatch(/\[type=["']text["']\]\s*\{[\s\S]*padding:\s*5px[\s\S]*\}/);
  });

  test('El CSS contiene pseudo-clase li:first-child con color morado', () => {
    expect(css).toMatch(/li:first-child\s*\{[\s\S]*color:\s*purple[\s\S]*\}/);
  });

  test('El HTML tiene estructura DOCTYPE válida', () => {
    expect(html).toMatch(/<!DOCTYPE html>/i);
  });

  test('El HTML tiene etiqueta html con atributo lang', () => {
    expect(html).toMatch(/<html[^>]*lang=["'][^"']*["'][^>]*>/);
  });

  test('El HTML tiene meta charset UTF-8', () => {
    expect(html).toMatch(/<meta[^>]*charset=["']UTF-8["'][^>]*>/);
  });

  test('El CSS usa diferentes tipos de selectores correctamente', () => {
    const selectorTypes = [
      /h1\s*\{/,
      /\.destacado\s*\{/,
      /#contenedor\s*\{/,
      /#contenedor\s+p\s*\{/,
      /ul\s*>\s*li\s*\{/,
      /\[type=["']text["']\]\s*\{/,
      /li:first-child\s*\{/
    ];
    
    selectorTypes.forEach((selector) => {
      expect(css).toMatch(selector);
    });
  });
});