//function reverse (someString){
//    document.write(someString.split("").reverse().join(""));
//}
//reverse("akademia108")
//let numbers= [1, 2, 3, 4, 5, 6];
//function sumNumbers(toSum){
// let result= 0;
// for (let i=0; i<=toSum.length-1; i++){
//   result+=toSum[i];
//     
// }
// console.log(result);
//}
//sumNumbers(numbers);
// let jsonPracownicy= [
//        {"firstName": "Krystian", "lastName": "Dziopa"}, 
//        {"firstName": "Anna", "lastName": "Szapiel"},
//        {"firstName": "Piotr", "lastName": "Żmuda"}
//    ];
//jsonPracownicy.forEach(function(element, index){
//  console.log(element.firstName+" "+element.lastName+ " "+ index);
//})
class book {
    constructor(title, author, readen) {
        this.title = "title";
        this.author = "author";
        this.readen = "false";
    }
    describeBook() {
        let readString;
        if (this.readen == true) readString = " Readen";
        if (this.readen == false) readString = " Not Readen";
        console.log("Tytuł: " + this.title + " Autor: " + this.author + readString);
    }
}
let book1 = new book("It", "Stephen King", false);
let book2 = new book("The Witcher", "Sapkowski", false);
let book3 = new book("Blade Runner", "Philip Dick", true);
let allBooksList = [book1, book2, book3];
function numberOfReaden(booksList) {
    let howMany = 0;
    for (let i = 0; i < booksList.length; i++) {
        if (booksList[i].readen == true) howMany += 1;
        console.log(booksList[i].describeBook);
    }
    return howMany;
}
numberOfReaden(allBooksList);