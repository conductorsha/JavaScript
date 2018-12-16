
const fs = require('fs');

if(process.argv[2] == 'undefined'){
    console.log('Please provide dir path as parameter');
}
else{
    checkDirectory(process.argv[2])
};

function checkDirectory(path){
    fs.watch(path, (changeEvent, fileName) =>{
        if(changeEvent == 'change'){
            fs.readFile(fileName, 'utf-8', (err, data) =>{
                if(err){console.log(err); return}
                else{console.log(data);}
            });
        }
    });
}