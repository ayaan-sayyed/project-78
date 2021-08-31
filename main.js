var Images = [
"20191103_162650.png",

"20191104_111255.png",

"Dadaji's Photo.png",

"20191103_163701.png"
 ];



var Names = [
    "SALEHA SAYYED (MY MOM)",
    "FIROZ SAYYED (MY DAD)",
    "MOHAMMED SHAFI (MY GRANDFATHER)",
    "AYAAN SAYYED (ME)"
    ];

var i = 0;
function update() { 
document.getElementById("Hello").innerHTML =Names[i];
document.getElementById("bye bye").src=Images[i];
i++;
if (i == 4)
    
      i=0;
}