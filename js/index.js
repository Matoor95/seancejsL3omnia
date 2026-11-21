const prenom="Omar";
const nom="Mohamed";
const message="Bonjour votre prenom est  " +prenom + " et votre nom est  " + nom+ " ";
const message2=`Bonjour votre prenom est ${prenom} et votre nom est ${nom}`
console.log(message2);
let age=25;
age=26;
5==="5";  // compare valeur et type  false 
console.log(age);
// condition
let note =12;
if(note>=16){
    console.log('admis avec mention tres bien')
}
else if(note>=10){
    console.log("admis")
}
else{
    console.log("ajournee");
}
// condition ternaire
const status=note >=10? "admis": "ajourne";
console.log(status);
// function
function addiontionner(a, b){
    return a +b;

}
console.log(addiontionner(12,13));
// liste 
const notes = [12, 15, 9, 18];
notes.push(14);
console.log(notes);