import { nanoid } from "nanoid";

/**
 * 
 * @param {Number} bytes - a number, 1 megabyte is equal to 1,048,576 bytes. 
 * @returns 
 */
export function bytesToMegabytes(bytes) {
    return (bytes / (1024 * 1024)).toFixed(2); // Returns the result with 2 decimal places
  }
  



/**
 * 
 * @param  {...any} inputs Example of inputs: "apple","fruit", 12, 5
 * @returns 
 */
export const SKUGenerator = (...inputs) => {
  let result = "";
  
  for (const input of inputs) {
    result += (input.toString().substring(0, 3) + nanoid().substring(0, 5));
  }

  return result
}


/**
 * 
 * @param {String} property - eg: item.name
 * @param {Number} textLimitInCharacters default is 15
 * @returns 
 */
export const truncateStringWithEllipsis = (property, textLimitInCharacters = 100) => (
  property.length > textLimitInCharacters
  ? `${property.slice(0, textLimitInCharacters)}...`
  : property
)

/**
 * 
 * @param {Number} number 
 * @returns if typeof number returns a number formatted with commas as thousands separators based on the user's locale setting. Else if not a number return the number unchanged
 */
export function addCommasToNumber(number) {
  if (typeof number !== "number") {
    return number; // Return unchanged if it's not a number
  }
  // toLocaleString automatically formats your number with commas as thousands separators based on the user's locale setting
  return number.toLocaleString();
}