// document.getElementById("myinput").oninput = function() {
//     var value = (this.value-this.min)/(this.max-this.min)*100
//     this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
//   };


const lengthRange= document.getElementById('lengthRange');
const lengthNumber =document.getElementById('lengthNumber');
const includeUpperCaseElement = document.getElementById('upperCase');
const includeNumberElement = document.getElementById('number');
const includeSymbolElement = document.getElementById('symbols');

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65 ,90);
const LOWER_CASE_CHAR_CODES = arrayFromLowToHigh(97 ,122);
const NUMBER_CHAR_CODES =arrayFromLowToHigh(48 , 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58 ,64)).concat(arrayFromLowToHigh(91,95));

const passwordDisplay = document.getElementById('password');
const copy = document.getElementById('copy');

const form = document.getElementById('form');



lengthNumber.addEventListener('input',syncCharacterAmount);
lengthRange.addEventListener('input',syncCharacterAmount);


const faqs= document.querySelectorAll('.faq');

faqs.forEach((faq) =>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })

})
function syncCharacterAmount(e){
    
    const value = e.target.value;
    if(value<=7)
    {
        lengthRange.style["background-color"] = "rgb(225, 128, 128)";
        // lengthMessage.innerText="Oh no, it is a bit weak. Make it stronger by adding length";
      
    }
    if(value>7){
        lengthRange.style["background-color"] ="#607eaa";
        // lengthMessage.innerText="Medium, but could be stronger.";
    }
    lengthRange.value = value;
    lengthNumber.value = value;
}



function arrayFromLowToHigh(low , high){
    const array=[];
    for(let i = low ;i<=high ; i++)
    {
        array.push(i);
    }
    // console.log(array);
    return array;
    
}



function generatePassword(lengthRange , includeUpperCase ,includeNumber ,includeSymbol)
{
    let charCodes =LOWER_CASE_CHAR_CODES;
    document.getElementById('alert').innerText="";

    console.log(includeUpperCase);
    if(includeUpperCase)charCodes= charCodes.concat(UPPERCASE_CHAR_CODES);
        
    if(includeNumber)charCodes =charCodes.concat((NUMBER_CHAR_CODES));

    if(includeSymbol)charCodes =charCodes.concat(SYMBOL_CHAR_CODES);
           

    let passwordCharacters=[];

    for(let i=0; i<lengthRange ; i++){
        let character = charCodes[Math.floor(Math.random()*charCodes.length)];
        console.log("character :",character);
        passwordCharacters.push(String.fromCharCode(character));
    }

    // console.log(passwordCharacters);
    return passwordCharacters.join("");

}

form.addEventListener('submit' , e =>{
    e.preventDefault();
    const length = lengthNumber.value;
   includeUpperCase =includeUpperCaseElement.checked;
   includeNumber =includeNumberElement.checked;
   includeSymbols =includeSymbolElement.checked;
   console.log("Symbol checked?",includeSymbols);
  
    const passWord= generatePassword( length , includeUpperCase , includeNumber , includeSymbols);
   
     passwordDisplay.innerHTML=passWord;

})






//  function copyFunction(){
    
// // var copyText =document.getElementById("password");
//  passwordDisplay.select();
//  passwordDisplay.setSelectRange(0,99999);
// //  for mobile devices
// console.log("copied")
// navigator.clipboard.writeText(passwordDisplay.value)
// alert.apply("text copied");
//  }
 

copy.addEventListener('click' , e =>
{
  
copytext=passwordDisplay.innerText;

navigator.clipboard.writeText(copytext);

console.log("done!");
(document.getElementById("alert").innerText="copied to clipboard!");

e.preventDefault();


});


// function copyfunction(){

// element.preventDefault;

// copytext=passwordDisplay.innerText;

// navigator.clipboard.writeText(copytext);

// console.log("done!");
// document.getElementById("alert").innerText="copied!";

// }

