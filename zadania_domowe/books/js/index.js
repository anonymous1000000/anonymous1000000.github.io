class book{
  constructor(title, author, readen){
  this.title=title;
  this.author=author;
  this.readen= false;
  }
  readBook(){
    this.readen=true;
  }
  describeBook(){
    let readString;
    if(this.readen=== true) readString=" Readen";
    if(this.readen=== false) readString=" Not readen";
    console.log("Title: "+this.title+" Author: "+this.author+readString);
  }
}
let book1= new book("It", "Stephen King");
let book2= new book("The Witcher", "Sapkowski");
let book3= new book("Blade Runner", "Philip Dick");
book3.readBook();
// console.log(book3);
let allBooksList= [book1, book2, book3];
function numberOfReaden(booksList){
  let howMany=0;
  for (let i=0; i<booksList.length; i++){
    if(booksList[i].readen==true) howMany+=1;
    console.log(booksList[i].describeBook());
  }
  console.log(howMany);
}
numberOfReaden(allBooksList);