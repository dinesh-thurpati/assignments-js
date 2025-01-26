//wap to check alphabet is vowel or not

let n = "u"     //01
if (n = "a" ,"e" ,"i","o","u"){
    console.log("alphabet is vowel")   
} else{
    console.log("it is not vowel")
}


let n1 = "x"     //02
if(n1 = ("a,e,i,o,u"))  { 
     console.log("it is  vowel")   
} else{
    console.log("it is not vowel")
}


//wapcheck number dividible by 3
let n2 = Number(prompt("enter the number"))
if(n2%3===0){
    console.log("number is divisible by 3 ")
} else{
    console.log("number is not dividible by 3")
}



//wap to print hello if divided by 5
let n3 = Number(prompt("enter number"))
switch(true){
    case n3%5===0 :
    console.log("HELLO!")
    break ;
    default:
        break;

}


//using switch  case find number positive,negative or zero
let n4 = -23
switch(true){
    case n4>0 :
        console.log("positive number")
        break ;
        case n4<0 :
            console.log("negative number")
            break;

            default :
            console.log("zero")
            break;
}


//using ternary condition statement find wheter the person is 6 feet tall 
let n5 = Number(prompt("enter height"))
let person = n5>=6 ? "taller" : "shorter"
console.log(person)

