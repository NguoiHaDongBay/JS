const Tinh=(n)=>{
    let tong=0
    for(let i=0;i<=n;i++){
        tong += 1/((2*i)+1);
    }
    return tong;
}
console.log(Tinh(3));