const express = require('express');

const app = express();

app.get('/',(req,res,next)=>{
    console.log(req.url);
    console.log(req.method);
    res.send('i am the home route');
});

app.post('/',(req,res,next)=>{
    console.log(req.url);
    console.log(req.method);    
});

app.delete('/',(req,res,next)=>{
    console.log(req.url);
    console.log(req.method);
});

app.listen(3000,()=>{
    console.log('Server started on port 3000...');
})