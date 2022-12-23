var fs = require('fs');

fs.readFile('Books.json', async (err, data) => {
    data = await JSON.parse(data.toString());
    var size = data.length;
    // console.log(data);
    fs.writeFile('MapBook.json', "[", (err)=>console.log(err));
    data.forEach((each,ind,data)=>{
        fs.appendFile('MapBook.json', `{"${each.keywords}":${each.id}}${size-ind!==1?",":""}`,(err)=>console.log(err));
    });
    fs.appendFile('MapBook.json', "]", (err)=>console.log(err));
});
