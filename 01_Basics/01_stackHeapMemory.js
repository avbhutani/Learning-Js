let arr = [1,2,3,4,5]

let myName = "Anubhav Bhutani"
let myBrotherName = "Shivansh Madaan"
// So now we are storing the details of the person in an object such as the name, upi id, email id, etc etc
// We can store the details of multiple people in an array of objects
// So we are storing all the users in the array which can  be easily accessed and then the details of the user can be accessed by the index of the user in the array
// It would make it very easy to access the details of each of the user very easily.
let user1 = {
    "name": "Anubhav Bhutani",
    "dob": "1998-01-01",
    "upi": "anubhavbhutani@ybl",
    "address": "Delhi, India",
    "email": "anubhavbhutani@gmail.com",
    "phone": "9999999999"
}

let user2 = {
    "name": "Krrish Bhutani",
    "dob": "1998-01-01",
    "upi": "krrishbhutani@ybl",
    "address": "Delhi, India",
    "email": "krrishbhutani@gmail.com",
    "phone": "9999999998"
}
let user3 = {
    "name": "Shivansh Madaan",
    "dob": "2016-14-08",
    "upi": "shivanshmadaan@ybl",
    "address": "Delhi, India",
    "email": "shivanshmadaan@gmail.com",
    "phone": "9999999997"
}
const users = [user1,user2,user3];

console.log(users[0].name);
console.log(users[1].name);
console.log(users[2].name);


let user4 = user2
// So agar hum primitive data types ko kisi aur variable ko assign krenge to vo jo hai vo reference hi pass hoga uss particular object ka, yaani uska address hi pass hoga. 
// Address pass hogya agar, yaani humaare paas jo hai uss particular memory ka access hai, to yaani hum uss particular memory ke jo methods aur variables hai unko access aur edit bhi kr skte hai.
// Analogy - Ki agar tumhaara ek ghr hai, agar uss ghr me tumne kisi aur ko ghusa dia, to ab vo tumhaari table ko dekh skta hai, tumhaare kitchen ko dekh skta hai, tumhaare poore ghr ko bech bhi skta hai. To ye analogy smjho.

// Primitive data types me, agar hum kisi aur variable ko assign krenge to vo copy hojaega, yaani vo ek naya variable banega, aur usme vo value store hogi, to agar hum usse change krenge to uss variable ka value hi change hoga, uss particular memory ka nhi.
// Analogy - Meine kisi aur ko apne jesa ek ghr lekr dedia, to ab vo apne ghr me kuch bhi change krega to mere ghr me faraq nhi pdega, kyunki obviously hum dono ka jo address hai vo alag hai aur uske kuch change krne se meri chiz me faraq nhi aayega kuch.