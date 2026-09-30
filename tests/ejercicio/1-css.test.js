const fs = require('fs');
const path = require('path');

describe('Ejercicio 1 - CSS', () => {
  const filePath = path.join(__dirname, '../../src/ejercicio-1/css.html');
  let html;

  beforeAll(() => {    
    expect(fs.existsSync(filePath)).toBe(true);
    html = fs.readFileSync(filePath, 'utf8');
  });

  test('El archivo HTML existe', () => {
    expect(fs.existsSync(filePath)).toBe(true);
  });

  test('Contiene un h1 con estilo inline', () => {
    expect(html).toMatch(/<h1[^>]*style=["'][^"']*color:\s*red;[^"']*["'][^>]*>Texto con CSS inline<\/h1>/);
  });

  test('Contiene un p con clase cabecera', () => {
    expect(html).toMatch(/<p[^>]*class=["']cabecera["'][^>]*>Texto con CSS en la cabecera<\/p>/);
  });

  test('Contiene CSS en la cabecera para la clase cabecera', () => {
    expect(html).toMatch(/<style>[\s\S]*\.cabecera\s*\{[\s\S]*color:\s*blue;[\s\S]*font-weight:\s*bold;[\s\S]*\}[\s\S]*<\/style>/);
  });
});