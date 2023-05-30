let usuario = Number(prompt('Ingrese un número entero'));

const convNumero = ((n) => {

    const numero_normal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numero_romano = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V','IV','I'];
    
    let resultado = '';

    numero_normal.forEach((element,index) => {
    
        while (n >= element) {
        resultado = resultado + numero_romano[index];
        n = n - element;

         }
    });
    return resultado; 
});

console.log('El número romano es:', convNumero(usuario));