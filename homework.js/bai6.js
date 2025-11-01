const Tinh=(n)=>{
    let tong=0
    for(let i=1;i<=n;i++){
        tong += 1/(i*(i+1))
    }
    return tong
}
console.log(Tinh(3));
