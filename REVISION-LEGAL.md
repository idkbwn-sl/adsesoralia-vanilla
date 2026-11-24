# V10_TYC — revisión legal previa a producción

V10 original intacta. Solo se sustituyen los contenidos de aviso legal y privacidad, y se añade este fichero. No es certificación de cumplimiento ni aprobación jurídica.

## Comprobaciones pendientes imprescindibles
- Confirmar identidad, NIF y vigencia registral del titular mediante nota actualizada y documentación fiscal. Existen directorios que indican inactividad o cierre de hoja; el BORME histórico recoge reapertura en 2022. No inferir situación actual.
- Confirmar si la actividad de seguros se realiza como distribuidor, mediador, colaborador u otro papel, registro DGSFP/autonómico y obligaciones de información; comprobar titulaciones, colegios, autorizaciones y datos exigibles por art. 10 LSSI.
- Confirmar DPD si procede, bases jurídicas e intereses legítimos, destinatarios/encargados, contratos art. 28, transferencias y garantías, conservación y medidas de seguridad.
- Formulario sigue siendo mock: no usar datos reales. Antes de activar envío: HTTPS, backend seguro, información de primera capa, retención, control de acceso, pruebas y protección antispam. La lectura de privacidad no es consentimiento general.
- Auditar cookies y almacenamiento de todos los terceros en producción. El banner actual solo guarda una preferencia y no controla las peticiones. Si existen tecnologías no exentas, implantar consentimiento real o retirar dichas tecnologías. Revisar mapa, CDN, imágenes y WhatsApp, y considerar alojar recursos localmente.
- Confirmar textos con titular y asesor jurídico/protección de datos; retirar avisos de borrador únicamente tras completar verificaciones.

## Fuentes consultadas 24/11/2026
- https://adsesoralia.com/aviso-legal/ y https://adsesoralia.com/politica-de-privacidad/ (contenido legal no visible en extracción pública; datos de contacto sí).
- https://www.boe.es/diario_boe/txt.php?id=BOE-A-2022-11355 (NIF).
- https://www.boe.es/diario_borme/txt.php?id=BORME-A-2022-173-35 (datos históricos de registro).
- https://www.boe.es/diario_borme/txt.php?id=BORME-A-2023-47-35 (domicilio).
- https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758 (LSSI).
- https://eur-lex.europa.eu/eli/reg/2016/679/spa (RGPD).
- https://www.boe.es/eli/es/lo/2018/12/05/3 (LOPDGDD).
- Código fuente V10, assets/main.js y assets/contact-map.js.
