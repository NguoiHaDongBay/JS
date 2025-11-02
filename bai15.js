const tinh=(n)=>{
    let tong=0
    let mauso=0
    for(let i=1;i<=n;i++){
        mauso += i;
        tong += 1/(mauso)
    }
    return tong;
}
console.log(tinh(3));