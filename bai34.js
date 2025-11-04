const tinh=(n)=>{
    let tong=0
    for(let i=1;i<=n;i++){
        tong=Math.sqrt(i+tong)
    }
    return tong
}
console.log(tinh(6));