const accountId = 144242
let accountEmail = "aanubhav.bhutani@gmail.com"
var accountPassword = "12345"
accountCity = "Gurgaon"


// accountId = 14 // constant cannot be reassigned a value

console.table([accountId,accountEmail,accountPassword,accountCity])

// Don't use var
// As var jo hai, uska scope se koi rishta nhi to kahi aur same  variable se naam bana lia to ye waala variable change ho skta hai 
// But let use krne se ek scope aajaata hai bich me jisse ye dikkat ni aati.