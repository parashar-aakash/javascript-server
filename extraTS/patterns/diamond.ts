export default function createDimondShape(size : number){
    for(let i: number=1;i<=size;i++){
        for(var s=size-1;s>=i;s--){
        // process.stdout.write(" ");
        }
        for(var j : number=1;j<=i;j++){
        // process.stdout.write("* ")
        }
        console.log();
        }
        
        if(i==size+1){
        for(var i : number=0;i<=size-1;i++){
        for(var s: number=1;s<=i;s++){
        // process.stdout.write(" ");
        }
        for(var j: number=i;j<=size-1;j++){
        // process.stdout.write("* ");
        }
        console.log();
        }
        }
    }
    
    // createDimondShape(5);