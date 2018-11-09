
var vegetable ={
    color : "red",
    name : "tomato",
    price : 110,
    whatThePrice : function(){
        console.log(this.price);
    },
    whatTheNameAndColor : function(){
        console.log(this.name);
        console.log(this.color);
    }

}



printobjectdetails(vegetable);

function printobjectdetails(vegan){
    for(let i in vegan ){
        console.log(i, " ", typeof(vegan[i]));
    }
}