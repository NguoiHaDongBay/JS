const giathua=(k)=>{
    let tich=1
    for (let i=2;i<=k;i++) {
        tich *=i
    }
    return tich
}
const tinh=(n)=>{
    let tong=0
    for (let i = 1; i <= n; i++){
        const gt=giathua(i)
        tong=Math.sqrt(gt+tong)
    }
    return tong
}
console.log(tinh(3));
