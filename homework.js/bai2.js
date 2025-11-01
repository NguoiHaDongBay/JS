const TinhS=(n)=>{
    let tong=0
    for(let i=1;i<=n;i++){
        tong += i*i
    }
    return tong;
}
console.log(TinhS(5));