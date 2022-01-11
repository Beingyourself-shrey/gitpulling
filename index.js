const Express =require('express')

let app=Express();
app.get('/',(req,res)=>{
res.send("hello");
console.log("shrey");
})

app.listen(2000);

