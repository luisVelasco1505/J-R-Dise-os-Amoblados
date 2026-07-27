# J&R Diseños & Amoblados — Sitio web

Sitio web estático (HTML, CSS y JS vanilla, sin frameworks ni paso de build) para la
empresa de muebles a medida J&R Diseños & Amoblados.

## Cómo abrir el proyecto localmente

Al ser un sitio 100% estático, no requiere instalación de dependencias ni compilación.
Alcanza con servirlo con cualquier servidor local:

**Opción A — Live Server (VS Code)**
1. Instalá la extensión "Live Server" en VS Code.
2. Abrí la carpeta `jyr-amoblados/` en VS Code.
3. Click derecho sobre `index.html` → "Open with Live Server".

**Opción B — npx serve**
```bash
cd jyr-amoblados
npx serve .
```
Luego abrí la URL que indique la terminal (por defecto `http://localhost:3000`).

> No abras `index.html` con doble clic directamente desde el explorador de archivos
> (`file://`): los módulos de JavaScript (`type="module"`) requieren que el sitio se
> sirva por HTTP.

## Estructura de carpetas

```
jyr-amoblados/
├── index.html
├── favicon.ico
├── README.md
└── assets/
    ├── css/
    │   ├── base.css          Reset, variables :root, tipografía base, utilidades
    │   ├── layout.css        Header, footer, contenedores, grillas de sección
    │   ├── components.css    Botones, cards, formulario, testimonios, etc.
    │   └── main.css          @import de los tres anteriores, en ese orden
    ├── js/
    │   ├── nav.js                    Menú móvil / burger
    │   ├── blueprint-animation.js    Animación SVG del plano técnico del hero
    │   ├── form.js                   Validación y envío del formulario de contacto
    │   └── main.js                   Punto de entrada (type="module") que inicializa todo
    ├── img/
    │   ├── logo.svg           Logo placeholder
    │   └── gallery/           Fotos de proyectos (placeholder.svg de momento)
    └── fonts/                 Reservada por si se decide alojar tipografías localmente
```

Las tipografías (Archivo, Inter, Space Mono) se cargan actualmente desde Google Fonts
mediante `<link>` en el `<head>` de `index.html`, con `preconnect` para optimizar la carga.

## Datos placeholder pendientes de completar

Todos estos puntos están marcados en el código con comentarios `<!-- COMPLETAR: ... -->`
para ubicarlos fácilmente. Antes de publicar el sitio, el cliente debe reemplazar:

- **Teléfono / WhatsApp**: el número `5491100000000` aparece en el botón "WhatsApp" del
  header, en los CTA del hero, en la sección de contacto, en el footer y en el botón
  flotante de WhatsApp. Buscar `5491100000000` en `index.html` y reemplazar en todas
  las apariciones por el número real (formato internacional, sin espacios ni signos).
- **Dirección**: placeholder "Av. Siempre Viva 1234, Ciudad, Provincia" en la sección
  de contacto y en el footer.
- **Email**: placeholder `contacto@jyramoblados.com` en la sección de contacto y en el
  footer.
- **Horario de atención**: confirmar el horario real (actualmente "Lunes a viernes de
  9 a 18 hs").
- **Mapa**: reemplazar el bloque placeholder de la sección de contacto por un mapa
  embebido real (ej. iframe de Google Maps) con la dirección definitiva.
- **Logo**: `assets/img/logo.svg` es un placeholder con las iniciales "J&R". Reemplazar
  por el logo definitivo de la marca (manteniendo el nombre de archivo o actualizando
  la referencia en `index.html`).
- **Favicon**: `favicon.ico` es un placeholder generado con las iniciales "J&R".
  Reemplazar por el favicon definitivo si la marca define uno distinto.
- **Fotos de catálogo**: las 6 tarjetas de la sección Catálogo usan
  `assets/img/gallery/placeholder.svg`. Reemplazar cada una por una foto real de
  cocinas, placares, living/comedor, dormitorios, oficinas y carpintería general.
- **Fotos de galería**: los 7 ítems de la sección Galería también usan el mismo
  placeholder. Reemplazar por fotos reales de proyectos terminados (respetar los
  tamaños wide/tall definidos en el HTML para mantener el efecto masonry).
- **Testimonios**: las 3 citas y los 3 nombres de clientes ("María G.", "Julián P.",
  "Laura D.") son placeholders. Reemplazar por testimonios reales (con autorización
  del cliente para publicar su nombre).
- **Formulario de contacto**: el envío está simulado en `assets/js/form.js`. Hay un
  comentario `COMPLETAR` en ese archivo indicando dónde conectar un servicio real
  (ej. Formspree) o un backend propio para que las consultas lleguen de verdad.
- **Imagen para Open Graph**: `og:image` en `index.html` apunta al placeholder de
  galería. Reemplazar por una foto real de la planta o de un proyecto destacado.
- **Indicadores de rendimiento**: la sección "Una fabrica, no un taller" (banda azul
  oscuro debajo de la marquesina) muestra 4 numeros de capacidad industrial (m2 de
  planta, puntos de control de calidad, turnos de produccion, % de entregas en
  plazo). Son valores de ejemplo — hay que confirmarlos o reemplazarlos por los
  datos reales de la empresa antes de publicar el sitio.

## Notas técnicas

- Paleta de marca: azul marino (`--color-navy` / `--color-navy-dark`) como color
  institucional, azul acero (`--color-steel`) para botones y enlaces, y un celeste
  de acento (`--color-accent`) para detalles sobre fondos oscuros. Todos los tokens
  están definidos una sola vez en `assets/css/base.css`.
- No hay build ni bundler: los archivos se sirven tal cual.
- El JS está separado en módulos ES (`nav.js`, `blueprint-animation.js`, `form.js`),
  todos importados desde `assets/js/main.js` con `type="module"`.
- El CSS sigue metodología BEM y mobile-first, con variables definidas una sola vez
  en `base.css`.
- Se respeta `prefers-reduced-motion` (deshabilita la animación del plano técnico y
  la marquesina de materiales) y se definen estados `:focus-visible` en todos los
  elementos interactivos.
