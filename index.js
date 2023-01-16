const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomNumber=Math.floor(Math.random()*characters.length)

function startGenerating(){
    
    let generatedPassword1=[]
    let generatedPassword2=[]
    let nEl=document.getElementById("length")
    x=Number(nEl.value)
    if (x>32){
        x=32
    }
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

function copyToClipboard(element) {
    let text = element.textContent;
    let textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}

// Event listener for "character-el"
let copyTarget = document.getElementById("character-el");
copyTarget.addEventListener("click", function() {
    copyToClipboard(copyTarget);
});

// Event listener for "character-el2"
let copyTarget2 = document.getElementById("character-el2");
copyTarget2.addEventListener("click", function() {
    copyToClipboard(copyTarget2);
});


