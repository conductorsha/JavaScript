console.log(search([5,10,4,2,3,5,12, 40, 20 , 100], 100));

function search(sequence, numberToFind){
    arrLen = sequence.length;
    sequence.sort((a, b) => a - b);
    l=0;
    r = arrLen-1;

    while(l<=r){
        m = Math.round((l+r)/2);
        if(sequence[m]==numberToFind){ return m;}
        else{
            if(sequence[m]>=numberToFind){ r=m-1;}
            else {l = m+1;}
        }
    }
return -1;
}