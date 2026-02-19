import {
  capitalizeText,
  toSlug,
  formatPriceEUR,
  formatDateISO,
} from "./index.js";

console.log(capitalizeText("ciao mondo"));
console.log(toSlug("Ciao Mondo Utilità"));
console.log(formatPriceEUR(1234.56));
console.log(formatDateISO("2026-02-19"));