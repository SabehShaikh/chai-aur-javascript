const accountId = 144553;
let accountEmail = "sabeh123@gmail.com"
var accountPassword = "12345"

accountCity = 'Karachi'
let accountState;  // undefined



// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Lahore"

console.log(accountId)

/* 
Prefer not to use var
because of issue in block scope & function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])