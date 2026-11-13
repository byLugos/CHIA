// Contador de visitas con GoatCounter (gratis, sin cookies, funciona en GitHub Pages).
// Pon aquí el código de tu cuenta: si tu panel es https://chia.goatcounter.com,
// el código es "chia". Mientras esté vacío, el contador no se muestra ni cuenta.
// Pasos de configuración: ver REGISTRO.md → "Contador de visitas".
export const CODIGO_GOATCOUNTER = "";

export const goatcounter = CODIGO_GOATCOUNTER
  ? {
      // Script que registra cada visita
      script: "https://gc.zgo.at/count.js",
      endpoint: `https://${CODIGO_GOATCOUNTER}.goatcounter.com/count`,
      // Total de visitas de todo el sitio (requiere activar en GoatCounter:
      // Settings → "Allow adding visitor counts on your website")
      total: `https://${CODIGO_GOATCOUNTER}.goatcounter.com/counter/TOTAL.json`,
    }
  : null;
