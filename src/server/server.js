let express =require('express')
let app=express();


app.get('/chat',function(req,res){
    res.send('Hello world')
})


app.listen(2344)