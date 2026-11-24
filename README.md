# Adsesoralia — rediseño estático

Abrir `index.html` después de extraer el ZIP. No requiere compilación, frameworks ni servidor. Opcional: `python -m http.server 8000` desde esta carpeta.

## Estructura
Siete documentos HTML independientes; `assets/style.css`, `assets/main.js` y cinco ilustraciones SVG originales. La navegación mantiene los nombres de las rutas públicas. El formulario, teléfono, correo y mapa son acciones de demostración; no se transmiten datos. La preferencia de cookies se guarda localmente cuando el navegador lo permite.

## Verificación
Se revisaron las siete rutas públicas enlazadas desde la web original. Se comprobó la existencia de todos los enlaces y recursos relativos, la sintaxis JavaScript y se renderizaron los siete documentos con CSS/JS integrados en Chromium a 390, 768 y 1440 px: sin desbordamiento horizontal ni errores JS. Se probó la confirmación mock del formulario. La navegación real en Chromium estaba bloqueada por el entorno.

## Límites de esta entrega
Los textos proceden de la versión anterior y se cotejaron las secciones públicas visibles; no se certifica igualdad textual absoluta. El contenido de los documentos legales y el formulario original dinámico no estaba disponible para inspección completa. Los legales enlazan a su versión oficial. El sitemap no fue accesible. El naranja #ff914d es aproximado, no un valor corporativo certificado. Las imágenes y logotipos originales siguen referenciados a su sitio por bloqueo de descarga; las ilustraciones SVG son locales. Las capturas muestran los recursos alternativos offline. Para cerrar una entrega de producción con fidelidad completa, hace falta la exportación original del sitio y sus recursos, con autorización de uso.

V3: composición editorial, logo SVG reconstruido visualmente (no es el vector maestro original), WhatsApp fijo simulado. Se conservan los textos de V2.


## V4
Logo original aportado por el cliente, recortado y con transparencia (PNG ampliado, no vectorizado). Fotografías sin superposición de ilustraciones; fallback solamente si falla la foto externa. Tres accesos de igual jerarquía y proporción. WhatsApp circular, acción simulada. Se mantienen los textos de V3 y los recursos remotos existentes.


## Ajustes de la entrega V5
- Base: ZIP V4 editado por el usuario.
- WhatsApp real: https://wa.me/34633129231 (móvil publicado en la web corporativa); abre en otra pestaña. No se ha comprobado que tenga cuenta activa.
- CTA blanco sobre naranja oscuro #b8490c para contraste accesible; naranja de marca #ff914d conservado en los demás elementos.
- Favicon generado a partir de assets/favicon.png, que se conserva.
- Formulario: mantiene los campos de V4 y señala los obligatorios. Envío simulado. La web original no expone los campos dinámicos en la consulta disponible, por lo que no se ha podido verificar la equivalencia exacta.
- Mapa Leaflet / OpenStreetMap: requiere Internet. Se obtiene la posición del portal 161 mediante Nominatim al pulsar Cargar mapa, sin coordenadas estimadas. Si no hay coincidencia exacta se ofrece enlace de búsqueda. No se ha podido verificar el resultado remoto desde este entorno. En producción, fijar las coordenadas verificadas para evitar consultas de geocodificación repetidas.


V6: CTA #ff914d con texto blanco solicitado (contraste inferior a WCAG AA para texto normal); WhatsApp +34828709291; mapa automático CARTO/OSM con respaldo Google Maps por dirección, requiere conexión; sin enlace externo adicional. No se ha verificado visualmente la carga de proveedores externos.

## V7
- SVG de WhatsApp recuperado literalmente del ZIP V4 personalizado; enlace +34 828 70 92 91 intacto.
- Eliminado el botón Volver arriba y sus eventos/estilos.
- Mapa: iframe oficial OSM, sin Google Maps, CARTO, Leaflet ni claves. Vista general inmediata; geocodificación exacta mediante Nominatim si está disponible, con caché local. Si no se encuentra el portal, se conserva la vista general y dirección escrita sin marcador inventado. Los servicios públicos OSM tienen políticas de uso y disponibilidad; probar desde el dominio publicado con conexión a Internet. No se ha podido verificar la coordenada ni la carga externa en este entorno. La capa oficial no permite personalizar el color del marcador.

## V8
Mapa MapLibre GL JS 4.7.1 (BSD-3-Clause) con OpenFreeMap Positron, sin clave ni registro, atribución automática compacta y marcador #ff914d. Zoom 14. Centro inicial tomado del enlace facilitado; se intenta geocodificar la dirección exacta con Nominatim, sin afirmar que el centro inicial sea exacto. Si no carga el mapa vectorial, se recupera el iframe oficial OSM (atribución y marcador nativos). Requiere conexión; no se ha podido probar la carga de proveedores externos en este entorno. Eliminadas flechas ↗ de botones y enlaces en las siete páginas y del estado restaurado del formulario.
