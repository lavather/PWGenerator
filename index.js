const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//create a for loop that creates an array out of random numbers up to the amount of spaces previously defined

//create random numbers out of this array

let randomNumber=Math.floor(Math.random()*characters.length)
console.log(randomNumber)

//make a for loop for the defined number x for amount of characters:





//create a for loop that counts down and creates a new array with the correct characters from the randomly selected spot in the original array
//figure out a way to get the number assigned to n from user input
//create a text field that takes user input


function startGenerating(){
    
    let generatedPassword1=[]
    let generatedPassword2=[]
    let nEl=document.getElementById("length")
    x=Number(nEl.value)
    for (n=x; n>0; n--){
        randomNumber1=Math.floor(Math.random()*characters.length)
        randomNumber2=Math.floor(Math.random()*characters.length)
        let spot1=characters[randomNumber1]
        let spot2=characters[randomNumber2]
        generatedPassword1.push(spot1)
        generatedPassword2.push(spot2)
    }
    let characterEl=document.getElementById("character-el")
    let characterEl2=document.getElementById("character-el2")
    characterEl.textContent=generatedPassword1.join('')
    characterEl2.textContent=generatedPassword2.join('')
}





