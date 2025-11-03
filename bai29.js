const uoc=(n)=>{
    if (n <= 0) {
        console.log("Số phải là nguyên dương.");
        return;
    }
    const uocso=[]
    for(let i=1;i<=n;i++){
        if(n%i===0 && i%2!==0 ){
            uocso.push(i)
        }
    }
    let max=uocso[0]
    for(let k=1;k<=uocso.length;k++){
        if(uocso[k]>max){
            max=uocso[k]
        }
    }
    return max
}
console.log(uoc(30));