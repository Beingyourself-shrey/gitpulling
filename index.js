const Express =require('express')

let app=Express();
app.get('/',(req,res)=>{
res.send("hello");
})

app.listen(2000);

