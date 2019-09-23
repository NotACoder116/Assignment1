function isEqual(objA, objB) {       
var aProps = Object.getOwnPropertyNames(objA);     
var bProps = Object.getOwnPropertyNames(objB);  
   
if (aProps.length != bProps.length) {         
    return false;     
}     
 for (var i = 0; i < aProps.length; i++) {         
     
     var propName = aProps[i];        
     if (objA[propName] !== objB[propName]) {             
         return false;         
     }     
} 
return true; 
}  // Output: true
var obj1={
  a:1,
  b:2,
  
}
var obj2={
  b:2,
  a:1,
}

console.log(isEqual(obj1, obj2));