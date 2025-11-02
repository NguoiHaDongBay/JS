const tinh=(x,n)=>{
    let tong=0
    let mau=1
    for(let i=0;i<=n;i++){
        mau +=i
        tong += (x**i)/mau
    }
    return tong
}
console.log(tinh(2,3));
