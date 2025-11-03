const uoc=(n)=>{
    const uocso=[]
    let tong=1
    for(let i=1;i<=n;i++){
        if(n%i===0){
            tong *=i
        }
    }
    return tong
}
console.log(uoc(30));