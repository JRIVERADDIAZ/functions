//    en el cotizador el costo del seguro depende del presio del auto es decir si es menor a 135000, el precio sera obtenido de la tabla dependiendo de la tabla de precios 
//   el porcentaje podra se seleccionado hasta por un monto maximo de 12% a criterio del vendedor ;<----
//    si el precio es mayou a 135000 el precio del seguro sera igual al 12% del valor total del auto
// por decreto el presidento otorogo un subcidio dependiendo el año de fabricacion del auto quedando de la siguiente forma 
//si el auto esta en el rango de fabribacion esta: entre 1980 y 1992 se hara un descuento de 1300
//                                                 entre 1993 y 1998 se hara un descuento de 1000      
//                                                 entre 1999 y 2005 se hara un descuento de 900
let añoDelAuto = parseInt(prompt("inserte año del auto"));
/**
 * 
 * @description esta funcion retornara el valor del seguro auto mensual 
 */
let costoDelSeguro = () => {
    let costoDelAuto = parseInt(prompt("inserte costo del auto "));
    let costoDelInteres = parseInt(prompt("inserte interes  de la tabla por  auto "));
        if (costoDelAuto <= 135000){ 
       let porcentaje = costoDelInteres * .01;
       let costoSeg = costoDelAuto  * porcentaje;
       return costoSeg;}
       else {
        let porcentaje = (12 * .001) * costoDelAuto;
        return porcentaje;
        }
       
       }
/**
 * 
 * @description esta funcion retornara el descuento en caso de que el auto este en el rango indicado para ser elegible 
 */
let promoAutoViejo = () => {
    switch(añoDelAuto){
     case añoDelAuto: añoDelAuto <= 2005 && añoDelAuto >= 1999;
     return costo - 900; 
     break ;
     case añoDelAuto: añoDelAuto <= 1998 && añoDelAuto >= 1993;
      return costo - 1000; 
     break ;
     case añoDelAuto: añoDelAuto <= 1992 && añoDelAuto >= 1980;
      return costo - 1300; 
     break ;
    default : return costo;
    }
}
       
       let costo = costoDelSeguro();
        document.write(`el precio de su seguro es ${costo} <br>`);
       let promo = promoAutoViejo();
        document.write(`el descuento por el año del carro es: ${promo} <br>`);

       

