//    en el cotizador el costo del seguro depende del presio del auto es decir si es menor a 135000, el precio sera obtenido de la tabla dependiendo de la tabla de precios 
//   el porcentaje podra se seleccionado hasta por un monto maximo de 12% a criterio del vendedor ;<----
//    si el precio es mayor a 135000 el precio del seguro sera igual al 12% del valor total del auto
class PrecioSeguroAut {
  constructor(precio, interes, año) {
      this.precio = precio
      this.interes = interes
      this.año = año
  }

  cotizador () { 
    if (this.precio <= 135000){
     let  porcentaje = this.interes * .01;
      let costoSeg =  this.precio * porcentaje;
       return costoSeg
      } else {
        let porcentaje = (12 * .01) * this.precio;
        return porcentaje
       }
     } 
   
   }
const cotizacionuno = new PrecioSeguroAut(
  parseInt(prompt("ingrese precio del auto")), 
  parseInt(prompt("ingrese interes de la tabla")), 
  parseInt(prompt("ingrese año de fabricacion")))

console.log(cotizacionuno);
document.write(`el precio de su seguro es ${cotizacionuno.cotizador()} y el año de fabricacion es ${cotizacionuno.año} <br>`);
