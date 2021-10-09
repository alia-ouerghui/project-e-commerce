function getRandomImage() {  

    var randomImage = [];  
      
    //insert the URL of images in array  
    randomImage[0] =  "https://www.dreamsfashion.net/images/thumbs/0001410_gilet-longue-pour-femme-voilee_415.jpeg"    ;  
    randomImage[1] = "http://www.turkishfashion.net/re_collections/1494507448_offer_18301089_1634134253293484_3104151848083476385_n.jpg";  
    randomImage[2] =  "https://www.tesetturgiyimmodelleri.com/wp-content/uploads/2018/05/alvina-kapusonlu-esofman-tunik.jpg"    ;  
    randomImage[3] = "https://i.pinimg.com/474x/e0/23/9e/e0239e23daed51356eeab1944ee013e9.jpg";  
    randomImage[4] =  "https://i.pinimg.com/originals/3c/1b/0a/3c1b0a9adc8a9f05c2fe16a5e34490ac.jpg"    ;  
     
    var number = Math.floor(Math.random()*randomImage.length);  
       
    return document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'" />';  
    }  










