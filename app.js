
    const login= 'bikeyrouniyar'
    const api_key= 'R_278d30ec749c4b06b3ffc4aac90fee78';
    //const go = 'https://google.com/'
    const http=require('http');
    const app=require('express')();
    const server=http.createServer(app);
  


    var csv = require("csvtojson");
    const request = require('request');
    var async = require('async');
    var json2csv = require('json2csv').parse;
    var fs = require("fs");
    let json;
    server.listen(8080);
    //create a server object:
    app.get('/download', function (req, res) {
             csv()
            .fromFile('input.csv')
            .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
            let array=[];
            
           
            async.each(jsonArrayObj,function(obj,callback){
                let url='http://api.bitly.com/v3/shorten?format=json&login='+login+'&apikey='+api_key +'&longUrl=' +  obj.link;
                request(url, { json: true }, (err, resp, body) => {
                     if (err) { callback(err,null) }
                     console.log("======>"+body.data.url);
                     obj['bitlink']=body.data.url;
                      array.push(obj);
                   //    console.log(i)
                     callback(null,body.data.url);
                     //let csvToJson = require('convert-csv-to-json');
                   });
                  
                   
            }, function(err,data){
                  if(err){
                    console.log(err)

                  }
                  else{
                    console.log(array)
                    var header=['link','bitLink'];
                    var headerFields={header};
                    var csv = json2csv(array, headerFields);
                    var fileName='output.csv'
                    fs.writeFile(fileName, csv, function(err) {
                        if (err){
                            console.log(err)
                        }
                    res.download(fileName, function(err) {
                            if (err) {
                                return UtilService.responseError(res, "Something went wrong!", 400);
                            }
                          
                        });
                    });
                  }
               });
           })
     })
    
    // http.createServer(function (req, res) {
    //     csv()
    // .fromFile('input.csv')
    // .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
    //    let array=[];
      
           
    //         async.each(jsonArrayObj,function(obj,callback){
    //             let url='http://api.bitly.com/v3/shorten?format=json&login='+login+'&apikey='+api_key +'&longUrl=' +  obj.link;
    //             request(url, { json: true }, (err, resp, body) => {
    //                  if (err) { callback(err,null) }
    //                  console.log("======>"+body.data.url);
    //                  obj['bitlink']=body.data.url;
    //                   array.push(obj);
    //                //    console.log(i)
    //                  callback(null,body.data.url);
    //                  //let csvToJson = require('convert-csv-to-json');
    //                });
                  
                   
    //         }, function(err,data){
    //               if(err){
    //                 console.log(err)

    //               }
    //               else{
    //                 console.log(array)
    //                 var header=['link','bitLink'];
    //                 var headerFields={header};
    //                 var csv = json2csv(array, headerFields);
    //                 var fileName='output.csv'
    //                 fs.writeFile(fileName, csv, function(err) {
    //                     if (err){
    //                         console.log(err)
    //                     }
    //                 res.(fileName, function(err) {
    //                         if (err) {
    //                             return UtilService.responseError(res, "Something went wrong!", 400);
    //                         }
                          
    //                     });
    //                 });
    //               }
    //            });
    //        })
    // }).listen(8080); //the server object listens on port 8080
    
    // csv()
    // .fromFile('input.csv')
    // .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
    //    let array=[];
      
           
    //         async.each(jsonArrayObj,function(obj,callback){
    //             let url='http://api.bitly.com/v3/shorten?format=json&login='+login+'&apikey='+api_key +'&longUrl=' +  obj.link;
    //             request(url, { json: true }, (err, resp, body) => {
    //                  if (err) { callback(err,null) }
    //                  console.log("======>"+body.data.url);
    //                  obj['bitlink']=body.data.url;
    //                   array.push(obj);
    //                //    console.log(i)
    //                  callback(null,body.data.url);
    //                  //let csvToJson = require('convert-csv-to-json');
    //                });
                  
                   
    //         }, function(err,data){
    //               if(err){
    //                 console.log(err)

    //               }
    //               else{
    //                 console.log(array)
    //                 var header=['link','bitLink'];
    //                 var headerFields={header};
    //                 var csv = json2csv(array, headerFields);
    //                 var fileName='output.csv'
    //                 fs.writeFile(fileName, csv, function(err) {
    //                     if (err){
    //                         console.log(err)
    //                     }
    //                 console.log('written')
    //                 });
    //               }
    //            });
    //        })
       
    
        


    

    //  function call(jsonArrayObj){
       
    //      return new Promise(function(resolve,reject){
    //         let array=[];
    //         for(let i of jsonArrayObj){
    //             let url='http://api.bitly.com/v3/shorten?format=json&login='+login+'&apikey='+api_key +'&longUrl=' + i.link;
    //                     // console.log('url   ', url)
    //                     return new Promise(function(resolve,reject){
    //                     request(url, { json: true }, (err, resp, body) => {
    //                       if (err) { reject(err) }
    //                        resolve(body.data.url);
    //                     //    console.log(i)
                          
    //                       //let csvToJson = require('convert-csv-to-json');
    //                     });
                    
    //     //             })
    //     //             .then((res)=>{
    //     //                 i['bitlink']=res;
    //     //                 array.push(i)
    //     //                 return array;
    //     //             })
    //     //     }
    //     //     resolve(array);
    //     //  })
        
    //     console
    // }
  
    // const request = require('request');
    // const fs = require('fs');
    // function processFile(inputFile) {
    //         let readline = require('readline')
    //         let instream = fs.createReadStream(inputFile)
    //         let outstream = new (require('stream'))()
    //         let rl = readline.createInterface(instream, outstream);
    //         //app.get('/', (resp,req )=> {
    //     rl.on('line', function (data) {
    //         let url='http://api.bitly.com/v3/shorten?format=json&login='+login+'&apikey='+api_key +'&longUrl=' + data;
    //         console.log('url   ', url)
    //         request(url, { json: true }, (err, resp, body) => {
    //           if (err) { return console.log(err); }
    //           console.log(body.data.url);
    //           //let csvToJson = require('convert-csv-to-json');
 
    //           let json = csvToJson.getJsonFromCsv("input.csv");
    //           for(let i=0; i<json.length;i++){
    //               console.log(json[i]);
    //           }     

    //           //  resp.send(body.data.url)
              
    //           });  
    //     });
    // //})
    //     app.listen(3000);
        
    // }
    // processFile('input.csv');
      
  
 
  




//  var bitlyData = {};
//     bitlyData['login'] = 'bikeyrouniyar';
//     bitlyData['apiKey'] = 'R_278d30ec749c4b06b3ffc4aac90fee78';
//     bitlyData['longUrl'] = 'https://google.com';
//     bitlyData['format'] = "json";
//     $.ajax({
//         url: 'http://api.bitly.com/v3/shorten?',
//         data: bitlyData,
//         success: function (data){
//             console.log(JSON.stringify(data));
//         },
//         error: function(e) {
//             alert("err:"+JSON.stringify(e))
//     }
//     });    







