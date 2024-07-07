// function can(){
//    // console.log("can");
// }

// can();
// can();
// can();

// const zeynepece =function(){
//     //console.log("zeynepece");
// }


//zeynepece();

//parametre verme

// const cihan =function(ad,soyad)
// {
//     console.log("ad: "+ad+" soyad:"+soyad);
//     console.log(`ad soyad ${ad} ${soyad}`);
    
// }

// cihan("hakan","enis");

//return 

// const karealani = function(kenar){
//     let alan=kenar**2;
//    console.log(alan);
//    return alan;
// }

// const sonuc= karealani(6);

// console.log(sonuc);

//ARROW FUNCTION

// const karealani =(kenar) =>{
//     return kenar**2;
// }

// const sonuc=karealani(6);
// console.log(sonuc);

const fatura=(urunler,vergi)=>{
    let toplam = 0;
    for(let i = 0; i< urunler.length; i++)
    {
        toplam += urunler[i] +urunler[i] * vergi;
    }
    return toplam;

}
console.log(fatura([10,20,30],0.25));