const tinh=(x,n)=>{
    let tong =0
    let lt=1
    for(let i=1;i<=n;i++){
        lt *=x
        tong += lt
    }
    return tong
}
console.log(tinh(2,5));
