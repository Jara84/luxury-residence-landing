# El Cerro Boutique Residence — landing de venta

Sitio de una sola página para la venta del apartamento **El Cerro Boutique Residence**
(Cerro Nutibara, Medellín). Publicado en <https://elcerroresidence.com>.

## Stack

- React 19 + TypeScript, empaquetado con Vite
- Tailwind CSS 4
- i18next (español por defecto, inglés disponible)
- Despliegue automático a S3 + CloudFront con GitHub Actions

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + build de producción en dist/
npm run preview  # sirve el build local
```

## Imágenes

Las fotos optimizadas viven en `public/img/` y se sirven por ruta directa
(no pasan por el bundler). Cada foto existe en tres archivos:

| Archivo | Uso |
|---|---|
| `<nombre>-800.webp`  | móviles |
| `<nombre>-1600.webp` | escritorio y pantallas retina |
| `<nombre>-1600.jpg`  | respaldo para navegadores sin WebP |

Para añadir una foto: exportarla a esos tres tamaños con el mismo prefijo,
dejarla en `public/img/` y referenciarla por su nombre base con el componente
`<Picture name="mi-foto" ... />`. **No** subir originales de cámara al repo:
un JPG de 4032 px pesa ~2,5 MB y hunde el tiempo de carga.

## Analítica

La página envía eventos a Google Analytics 4 solo si existe la variable
`VITE_GA_ID` en tiempo de build.

- Local: copiar `.env.example` a `.env.local` y poner el ID.
- Producción: crear la variable `VITE_GA_ID` en
  *GitHub → Settings → Secrets and variables → Actions → Variables*.

Eventos personalizados definidos en `src/lib/analytics.ts`:

| Evento | Cuándo se dispara |
|---|---|
| `contact_whatsapp` | clic en cualquier botón de WhatsApp (incluye de qué sección salió) |
| `contact_call`     | clic en el botón de llamar |
| `download_brochure`| descarga del PDF |
| `view_gallery_image` | apertura de una foto en la galería |

## Contacto

Teléfono, WhatsApp y textos de los mensajes están centralizados en
`src/lib/contact.ts`. Cambiarlos ahí los cambia en toda la página.

## Textos

Todo el copy está en `src/i18n/es.ts` y `src/i18n/en.ts`.
**Los dos archivos deben tener exactamente las mismas claves**: si una clave
existe solo en uno de ellos, la página muestra el nombre técnico de la clave
en pantalla en lugar del texto.

## Despliegue

Cada push a la rama `feature/internationalization` construye el sitio y lo
sincroniza con el bucket de S3, invalidando la caché de CloudFront.
Ver `.github/workflows/deploy.yml`.
