const Tinh=(n)=>{
    let tong=0
    for(let i=1;i<=n;i++){
        tong += (2*i+1)/(2*i+2)
    }
    return tong
}
console.log(Tinh(3));
