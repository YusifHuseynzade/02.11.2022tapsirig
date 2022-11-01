/*Bir nece arrayi birlesdirmek ucun concat function yaratmaq ve bu arrayi sort etmek*/ 

function concatFunction(argument){
    argument = Array.prototype.slice.call(arguments);
    var newArr = argument.reduce( function(previous, next) {
       return previous.concat(next);
    });
    newArr.sort(function(x,y) {return x-y})
    return newArr;
}
console.log(concatFunction([1,2,3,4],[2,4,6,8],[6,8,11,-8],[-6,-4,-3,-2]))

/*Flat metodu ile array icindeki arraylari birlesdirib bir array yaratmaq ve bu arrayi sort etmek*/
let arr = [[1,2,3,4],[2,4,6,8],[6,8,11,-8],[-6,-4,-3,-2]]
let newarr = arr.flat()
newarr.sort(function(x,y) {return x-y})
console.log(newarr)

/*Concat ve Spread operatorlari vasitesile array icindeki arraylari birlesdirib bir array yaratmaq ve bu arrayi sort etmek*/
let newarr2 = Array.prototype.concat(...arr)
newarr2.sort(function(x,y) {return x-y})
console.log(newarr2)

/*Concat ve flat metodlarini birlikde istifade ederek bir array daxilindeki arraylari ve diger bir nece arrayi birlesdirib bir array yaratmaq ve bu arrayi sort etmek*/
let array1 = [[7,2,3],[11,18,20],[22,33,44]];
let array2 = [3,4,5];
let array3 = [4,-4,9];
let array4 = [[8,11,42,-5],[-14,-25,64,15]];

let arrayflat = array1.flat()
let arrayflat2 = array4.flat()

let arrays = arrayflat.concat(array2,array3,arrayflat2)

arrays.sort(function(a,b) { return a-b})

console.log(arrays)

/*Spread operatoru vasitesile arraylari birlesdirib bir array yaratmaq ve bu arrayi sort etmek*/
let newarray = [...array2,...array3]
newarray.sort(function(a,b) { return a-b})
console.log(newarray)



let accordion = document.getElementsByClassName("accordion-content");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let body = this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  }); 
}