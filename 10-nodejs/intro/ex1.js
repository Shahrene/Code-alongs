

//console.log(process.argv)



  //write a CLI program that sums two numbers passed in


 var total = 0;

 debugger

 for (var i = 2; i < process.argv.length; i++) {
   total = total + Number(process.argv[i]);
 }
 console.log(total);
