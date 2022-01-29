function toplamIndex( sayilar,hedef) {
    for (let i = 0; i < sayilar.length; i++) {
        
        for (let j = i+1; j < sayilar.length; j++) {
            
            if((sayilar[i]+sayilar[j])===hedef){
                sayilar = [i,j]
                return sayilar;
            }
        }
        
    }
}
console.log(toplamIndex([2,5,15,9,24,,3,4],20));
