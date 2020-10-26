export default function triangle(n : number) { 
    for (var i : number = 0; i < n; i++) { 
      var str : string= ''; 
      for (var j :number = 1; j < n-i; j++) { 
        str = str + ' '; 
      } 
      for (var k :number = 1; k <= (2*i+1); k++) { 
        str = str + '*'; 
      } 
      console.log(str); 
    } 
  }