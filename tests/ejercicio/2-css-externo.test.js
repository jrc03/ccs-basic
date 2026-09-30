const fs = require('fs');
const path = require('path');

describe('Ejercicio 2 - CSS Externo', () => {
  const htmlFilePath = path.join(__dirname, '../../src/ejercicio-2/css-externo.html');
  const cssFilePath = path.join(__dirname, '../../src/ejercicio-2/estilos.css');
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

  test('El archivo HTML enlaza correctamente al CSS externo', () => {
    expect(html).toMatch(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']estilos\.css["'][^>]*>/);
  });

  test('El HTML contiene etiqueta header', () => {
    expect(html).toMatch(/<header>/);
  });

  test('El HTML contiene etiqueta nav', () => {
    expect(html).toMatch(/<nav>/);
  });

  test('El HTML contiene etiquetas de enlace (a)', () => {
    expect(html).toMatch(/<a[^>]*href=["']#["'][^>]*>/);
  });

  test('El HTML contiene etiqueta main', () => {
    expect(html).toMatch(/<main>/);
  });

  test('El HTML contiene etiquetas de párrafo (p)', () => {
    expect(html).toMatch(/<p>/);
  });

  test('El HTML contiene etiqueta div', () => {
    expect(html).toMatch(/<div>/);
  });

  test('El CSS contiene estilos para header', () => {
    expect(css).toMatch(/header\s*\{[^}]*background-color:\s*#333[^}]*\}/);
  });

  test('El CSS contiene estilos para nav ul', () => {
    expect(css).toMatch(/nav\s+ul\s*\{[^}]*list-style:\s*none[^}]*\}/);
  });

  test('El CSS contiene estilos para nav li', () => {
    expect(css).toMatch(/nav\s+li\s*\{[^}]*display:\s*inline[^}]*\}/);
  });

  test('El CSS contiene estilos para enlaces (a)', () => {
    expect(css).toMatch(/a\s*\{[^}]*color:\s*#007bff[^}]*\}/);
  });

  test('El CSS contiene estilos para main', () => {
    expect(css).toMatch(/main\s*\{[^}]*margin:\s*20px[^}]*\}/);
  });

  test('El CSS contiene estilos para párrafos (p)', () => {
    expect(css).toMatch(/p\s*\{[^}]*font-size:\s*16px[^}]*\}/);
  });

  test('El CSS contiene estilos para div', () => {
    expect(css).toMatch(/div\s*\{[^}]*border:\s*2px\s+solid\s+#007bff[^}]*\}/);
  });

  test('El CSS contiene estilos hover para enlaces', () => {
    expect(css).toMatch(/a:hover\s*\{[^}]*color:\s*#0056b3[^}]*\}/);
  });
});