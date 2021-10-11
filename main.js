var basket =[]
var openModal= function(){
  
    basket.forEach(function(product) {
        var tr = $("#trb");
        
         //  tr.append('<td> <img src='+ product['image'] + '></td>'); 
    tr.append('<tr><td> '+ product['name'] + '</td> <td> '+ product['Price'] + '</td></tr>'); 
          
    });
   
   
}
var closeModal = function(){
  
   $("#trb").children().remove()
}

     var collection = [];
     collection[0] =  "./image/im.jpg"    ;  
     collection[1] = "./image/im.jpg";  
     collection[2] =  "./image/im.jpg"    ;  
     collection[3] = "./image/im.jpg";  
     collection[4] =  "./image/im.jpg"    ;  
     
     var Products = [
     
        product1={
        name: "Alvina",
        Price:100,
        image:collection[0]
        }
        ,
        product2={
        name: "Kayra",
        Price:150,
        image:collection[1]
            
        },
            
        product3={
        name: "kareena",
        Price:200,
        image:collection[2]
                },
        
        product4={
        name: "modanisa",
        Price:300,
        image:collection[3]
        },
        product5={
        name: "zara",
        Price:250,
        image:collection[4]
                        }
        ]
          
     function addToBasket(product){
        
        
      
        this.basket.push(product);
      
    }
        
        
     var addProduct1 = function(){

            
            addToBasket(Products[0]);
            
            
            };
            var addProduct2 = function(){

               
                addToBasket(Products[1]);
                
                
                };
                var addProduct3 = function(){

                   
                    addToBasket(Products[2]);
                    
                    
                    };
                    var addProduct4 = function(){

                        
                        addToBasket(Products[3]);
                        
                        
                        };
    
   
     
    
    















 


    

    




















