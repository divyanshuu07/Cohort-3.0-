// const { program } = require('commander');
const fs = require('fs');

// program
//   .argument('<input file>');

// program.parse();

const filePath=process.argv[2];

fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err){
        console.error('Error h vro',err);
        return;
    }
    let ans=0;
    for(let i=0;i<data.length;i++){
        if(data[i]==" ") ans++;
    }
    console.log(ans+1);
})

