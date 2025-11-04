const so=(n)=>{
    let bp=Math.sqrt(n)
    if(bp===Math.floor(bp))//số nguyên
        {
            console.log("Số chính phương");
            
        }
        else{ 
            console.log("KO phải số chính phương");
            
        }
}
console.log(so(4));