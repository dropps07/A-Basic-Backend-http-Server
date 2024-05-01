//Code begins... Ps:- code is written by me without any help after learning it ofc

const path = require('path');
    const fs = require('fs');
    const express = require('fs');
    const app = express();

    //this code is going to read and retrive the file 
    app.get('dir..name','filename',function(res, res){
        fs.read(path.join('..dirName/:fileName',function(err, data){
            if(err){
                res.status(500).json({error:"File Not retrived"});
            }
            return res.json('files')
        }));
    });

    // this code is going to take the file form the dir
    app.get('..dirr','fileName..',function(req, res){
        const filePath = path.join('dirr/:filename',res.params.filename);
        fs.readFile('..fileName','utf-8', function(err, data){
            if(err){
                res.status(404).json({error:"file not found"})
            }
            return res.send(data)
        });
});

    //this code is going to find out the route of the dir/file

    app.all('*',function(req, res){
        res.statuc(404).send('Route not found') 
    });



    module.express =app;
    

