const Tinh=(n)=>{
    let Tich=1
    for(let i=1;i<=n;i++){
        Tich *= i*(i+1)
    }
    return Tich
}
console.log(Tinh(3));
