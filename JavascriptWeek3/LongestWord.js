
console.log(LongestWord("kasha masha dashavasha"));
function LongestWord(string){
    
    if(typeof string !== 'undefined' && string.length > 0){
        let words = string.split(" ");
       return  words.sort( function (a,b) { return b.length - a.length;})[0]; //sorts an array by words length;
    }
    else return null;
}