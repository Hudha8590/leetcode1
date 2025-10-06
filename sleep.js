async function sleep(millis){
    return new Promise((resolve)=>setTimeout(resolve,millis))
}
let t=Date.now();
sleep(100).then(()=>{
    console.log(Date.now()-t);
    
});
sleep(200)
.then(()=>{
    console.log("wait 100ms!");
    
})