import lodash from "lodash";
import { format } from "date-fns";

export function capitalizeText(text) {
  return lodash.startCase(String(text).toLowerCase());
}

export function toSlug(text) {
  return lodash.kebabCase(String(text));
}

export function formatPriceEUR(value) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(Number(value));
}

export function formatDateISO(dateValue) {
  return format(new Date(dateValue), "yyyy-MM-dd");
}