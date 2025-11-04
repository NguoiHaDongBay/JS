const tinh=(n)=>{
    let tong=0
    for(let i=n-1;i>=1;i--){
        tong=Math.sqrt(i+tong)
    }
    return tong
}
console.log(tinh(6));