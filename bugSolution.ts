function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

function addSafe(a: number, b: number): number {
  return Number(a) + Number(b);
}

let result1 = add(10, 20); // Correct usage
console.log(result1); // Output: 30

try {
  let result2 = add("hello", 20); //Throws Error
} catch(e) {
  console.error(e)
}
let result3 = addSafe(10, "20"); //Safe usage, but may result in data loss if not handled correctly
console.log(result3); // Output: 30