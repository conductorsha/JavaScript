console.log(returnAlphabetic("wa"));

function returnAlphabetic(text){
    
    return text.split("").sort().join("");
}