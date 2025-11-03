const uoc=(n)=>{
    const uocso=[]
    for(let i=1;i<=n;i++){
        if(n%i===0 && i%2!==0){
            uocso.push(i)
        }
    }
    return uocso
}
console.log(uoc(30));