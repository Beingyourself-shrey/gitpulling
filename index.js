const Express =require('express')

let app=Express();
app.get('/',(req,res,next)=>{
res.send("hello");
next();
})
app.use((req,res)=>{
console.log("hello");
})
app.listen(2000);

