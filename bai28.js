const uoc=(n)=>{
        if (n <= 0) {
        console.log("Số phải là nguyên dương.");
        return;
        }
    const uocso=[]
    let tong=0
    for(let i=1;i<=n;i++){
        if(n%i===0 && i<n){
            tong +=i
        }
    }
    return tong
}
console.log(uoc(30));