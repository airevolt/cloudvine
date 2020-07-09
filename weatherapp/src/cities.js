const fs = require('fs')

var parse = require('csv-parse')

const data = {}

fs.createReadStream('worldcities.csv')
.pipe(
    parse({
        delimiter: ','
    })
)
.on('data', function(dataRow){
    data[dataRow[0]] = [dataRow[1],dataRow[3]]
})
.on('end', function(){
    // fs.writeFile('cityObjects.txt',String(data),(err) =>{
    //     if(err) throw err;
    // })
})
fs.writeFile