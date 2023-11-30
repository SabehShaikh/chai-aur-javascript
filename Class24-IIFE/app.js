// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  console.log("DB Connected");
})(); // SEMI COLON IS IMPORTANT

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Sabeh");

// () ()

/* Encapsulation--> IIFE can be used to create a private scope for variables.
 This helps in avoiding polluting the global scope and preventing variable name conflicts */
