const uoc=(n)=>{
    const uocso=[]
    let tong=0
    for(let i=0;i<=n;i++){
        if(n%i===0){
            tong +=i
        }
    }
    if(tong===2*n){
            console.log("Số hoàn hảo");
            
        }
        else{ (tong!==2*n)
            console.log("KO hoàn hảo");
            
        }
}
console.log(uoc(6));