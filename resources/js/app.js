 document.getElementById("demo").innerHTML = "Hello JavaScript";
 document.getElementById("demo").style.fontSize = "35px";

 // salida de datos
 window.alert("Hola, como estas?");
 window.alert(5+2);
 console.log(6+2);

 // Declaracion de variables
 let a,b,c;
 const M = 8;
 a = 5;
 b = 6;
 c = a + b + M;
 document.getElementById("demo").innerHTML = c;

 // tipos de datos
 let num = 24; // numero entero
 let name = "Luis Vejarano"; // cadena de caracteres
 let km = 14.5; //numero  decimal
 let persona = {firsName: "Ana", lastName:"Perez"}; //objeto

 let y = 17 + "POO";  // JS trata al numero como una cadena
 let q = "17" + "POO";

 // operadores aritmeticos
 let num1 = 8; num2 = 4;
 let suma, resta, multiplicacion, division;
 suma = num1 + num2;
 resta = num1 - num2;
 multiplicacion = num1 * num2;
 division = num1 / num2;
 document.getElementById("operaciones").innerHTML = " la suma es : " + suma + " la resta es : " + resta + " la multiplicacion es: "+ multiplicacion + " la division es: " + division;

 // operadores de comparacion
 let edad = 24;
 document.getElementById("comparacion").innerHTML = (edad >= 18);

 // operadores logicos
 let num4 = 6, num5 = 3;
 document.getElementById("logicos").innerHTML = 
 (num4 < 10 && num5 > 1) + "<br>" + (num4 < 10 && num5 < 1);

 // funciones
 function myFunction(){
    document.getElementById("demo").innerHTML = "New paragraph";
 }
 
