import {
  isValidEmail,
  isStrongPassword,
  hasMinLength,
  isNumericString,
} from "./index.js";

console.log(isValidEmail("mario@example.com"));
console.log(isStrongPassword("MyStrongPass123!"));
console.log(hasMinLength("abcdef", 5));
console.log(isNumericString("123456"));