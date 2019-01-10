function alphabeticalOrder(str){
    
        var arr = str.split('');
        var sorted = arr.sort();
        return sorted.join('');
      
}

console.log(alphabeticalOrder("webmaster"));