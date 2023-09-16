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