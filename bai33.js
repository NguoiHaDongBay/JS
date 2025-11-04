const tinh=(n)=>{
    let tong=0
    for(let i=1;i<=n;i++){
        tong=Math.sqrt(2+tong)
    }
    return tong
}
console.log(tinh(2));
