const Tinh=(n)=>{
    let tich=1
    let tong=0
    for(let i=1;i<=n;i++){
    tich *=i
    tong +=tich
    }
    return tong
}
console.log(Tinh(3));