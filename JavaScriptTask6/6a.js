function calculateFarenheit(){ 
    var input =parseInt(document.getElementById("Celsius").value); 
    var Fahrenheit= ((input+40)*1.8)-40; 
    document.getElementById("outputFar").innerHTML ='Farenheit: ' +Fahrenheit ; 
    }

    function calculateCelcius(){ 
        var input =parseInt(document.getElementById("Farenheit").value); 
        var Celcius= (input-32) / 1.8;
        document.getElementById("outputCel").innerHTML ='Celsius: ' +Celcius ; 
        }  
