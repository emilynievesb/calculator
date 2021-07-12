let n1=(prompt("Ingrese los numeros a sumar, separados con comas"));
n1= n1.split(",")
let suma=0
for (let i=0;i<n1.length;i++){
    suma+=parseFloat(n1[i])
}
alert(`la suma total de estos números es ${suma}`)
