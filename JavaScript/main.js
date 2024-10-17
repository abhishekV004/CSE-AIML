// Importing named exports
import { add, subtract, PI } from "./javasc(3).js";

// Importing default export
import multiply from "./javasc(3).js";

// Importing everything as an object (optional)
import * as jadoo from "./javasc(3).js";

// Exporting (if needed)
export { add, subtract, PI, multiply };

// Testing outputs
console.log("Add: ", add(5, 3));                // Named import
console.log("Subtract: ", subtract(5, 3));      // Named import
console.log("PI: ", PI);                        // Named import
console.log("Multiply: ", multiply(5, 3));      // Default import

// Testing using the jadoo namespace (optional)
console.log("Add (from jadoo): ", jadoo.add(5, 3));
console.log("Subtract (from jadoo): ", jadoo.subtract(5, 3));
console.log("PI (from jadoo): ", jadoo.PI);
console.log("Multiply (from jadoo): ", jadoo.multiply(5, 3));
