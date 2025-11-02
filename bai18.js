const tinh=(x,n)=>{
    let tong=0
    let mau=0
    for(let i=1;i<=n;i++){
        mau *= (i*2)
        tong +=(x**(i*2))/mau
    }
    return tong
}
console.log(tinh(3,6));
