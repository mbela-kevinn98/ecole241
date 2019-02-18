
let nombre1;
let nombre2;
nombre1 = prompt('Entrez le premier nombre');
nombre2 = prompt('Entrez le deuxième nombre');
if(nombre1 < nombre2){
   console.log(nombre2);
}else if(nombre1 > nombre2){
   console.log(nombre1);   
}else{
    console.log("les nombres égaux");
}