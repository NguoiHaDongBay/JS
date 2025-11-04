const uoc=(n)=>{
        const uocso=[]
    for(let i=1;i<=n;i++){
        if(n%i===0){
            uocso.push(i)
        
    }
    }
        if(uocso.length===2){
            console.log("Số nguyên tố");
            
        }
        else{
            console.log("ko phải số nguyên tố");
            
        }
}
console.log(uoc(8));