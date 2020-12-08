var names = [
    "2. Me " ,
    "3. Brother  " ,
    "4. Mom " ,
    "5. Dad " ,
    "5. Grandma " ,
    "1. Full Family"
  ];
  
  var Pic = [
   "me.jpeg",
  "bro.jpeg" ,
    "mom.jpeg",
    "Dad.jpeg" ,
    "granny.jpeg" ,
    "full_family.jpeg"
  ];
    
  var i = 0 ;
  
  function nextslide(){
    document.getElementById("album").src = Pic [i] ;
    document.getElementById("names").innerHTML = names[i] ;
    i++ ;
    if (i==6) {
      i=0;
    }
  }
  
    
    
  