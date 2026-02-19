import lodash from "lodash";
import isEmail from "validator/lib/isEmail.js";
import isStrongPassword from "validator/lib/isStrongPassword.js";
import isNumeric from "validator/lib/isNumeric.js";

export function isValidEmail(value) {
  return isEmail(lodash.toString(value));
}

export function hasMinLength(value, minLength = 8) {
  return lodash.toString(value).length >= minLength;
}

export function isNumericString(value) {
  return isNumeric(lodash.toString(value));
}

export function isStrongPasswordValue(value) {
  return isStrongPassword(lodash.toString(value));
}

export { isStrongPasswordValue as isStrongPassword };