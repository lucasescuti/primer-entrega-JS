
// Funciones //

function mostrarProductos(){
    alert(`Podrá ver nuestro catálogo completo en la consola:`)    
    for(let verduras of verduleria){
        
        console.log(verduras);}        
    }

function cantidadProductos(productos){
        let cantidad = Number(prompt("Ingrese kg a llevar"))
        for(i = 1; i <= cantidad; i++)
        {
            productos++;
        }  
    
            return productos;
    }


function saludar(){
    let nombre = prompt("¡Hola!. Por favor ingresa tu nombre");
    alert (`¡Bienvenid@ ${nombre} a verduleria El Greench`);
    
}



// Clases //

class arraydeFrutas{
    constructor(id, nombre,precio){
        this.id = id,        
        this.nombre = nombre,       
        this.precio = precio
    }
    
}

class arraydeVerduras{
    constructor(id, nombre,precio){
        this.id = id,        
        this.nombre = nombre,       
        this.precio = precio        
    }
      
}



let productosFrutas = []
const fruta1 = new arraydeFrutas(1, "Naranja", 50);
productosFrutas.push(fruta1)
const fruta2 = new arraydeFrutas(2, "Manzana", 100);
productosFrutas.push(fruta2)
const fruta3 = new arraydeFrutas(3, "Banana", 120);
productosFrutas.push(fruta3)
const fruta4 = new arraydeFrutas(4, "Frutilla", 150);
productosFrutas.push(fruta4)
const fruta5 = new arraydeFrutas(5, "Mandarina", 100);
productosFrutas.push(fruta5)


let productosVerduras = []
const verdura1 = new arraydeVerduras(1, "Tomate", 150);
productosVerduras.push(verdura1)
const verdura2 = new arraydeVerduras(2, "Papa", 60);
productosVerduras.push(verdura2)
const verdura3 = new arraydeVerduras(3, "Zapallo", 150);
productosVerduras.push(verdura3)
const verdura4 = new arraydeVerduras(4, "Lechuga", 40);
productosVerduras.push(verdura4)
const verdura5 = new arraydeVerduras(5, "Cebolla", 120);
productosVerduras.push(verdura5)


// Codigo //

const verduleria = [verdura1, verdura2, verdura3, verdura4, verdura5, fruta1, fruta2, fruta3, fruta4, fruta5];

saludar();
   
const ofertas = ["Naranja $50kg\n Manzana $100kg\n Banana $120kg\n Frutilla 150kg\n Mandarina $100kg "]; 

    ofertas.push("\n Tomate $100kg");
    ofertas.push("\n Papa $100kg");
    console.log(`Ofertas del dia:\n ${ofertas}`);


mostrarProductos();

let seccion = parseInt(prompt("Escoja la sección:\n 1. Frutas\n 2. Verduras"));


    if(seccion == 1){

        console.log([productosFrutas]);
             
        let lista = parseInt(prompt("Futas a seleccionar:\n 1. Naranja\n 2. Manzana\n 3. Banana\n 4. Frutilla\n 5. Mandarina\n 6. Finalizar Compra "))

        let naranja1 = 0, manzana1 = 0, banana1 = 0, frutilla1 = 0, mandarina1 = 0
        let naranja = 50, manzana = 100, banana = 120, frutilla = 150, mandarina = 100 


        while(lista !== 6){
    
            let lista = parseInt(prompt("Frutas a seleccionar:\n 1. Naranja\n 2. Manzana\n 3. Banana\n 4. Frutilla\n 5. Mandarina\n 6. Finalizar compra"));                                               
    
            if(lista !== 1 && lista !== 2 && lista !== 3 && lista !== 4 && lista !== 5 && lista !== 6){
       
                alert("Ha ingresado una opcion invalida");
            }

            else if( lista == 1){
                let buscado = productosFrutas.find(productosFrutas => productosFrutas.id === 1);
                console.log(buscado);                                            
                naranja1= cantidadProductos(naranja1); 
                console.log( `Sumaste ${naranja1}kg de ${fruta1.nombre}`)
            }

            else if( lista == 2){       
                let buscado = productosFrutas.find(productosFrutas => productosFrutas.id === 2);
                console.log(buscado);   
                manzana1 = cantidadProductos(manzana1);                
                console.log( `Sumaste ${manzana1}kg de ${fruta2.nombre}`)
                
            }
            else if( lista == 3){  
                let buscado = productosFrutas.find(productosFrutas => productosFrutas.id === 3);
                console.log(buscado);        
                banana1 = cantidadProductos(banana1);
                console.log( `Sumaste ${banana1}kg de ${fruta3.nombre}`)
            }    
            else if( lista == 4){   
                let buscado = productosFrutas.find(productosFrutas => productosFrutas.id === 4);
                console.log(buscado);       
                frutilla1 = cantidadProductos(frutilla1);
                console.log( `Sumaste ${frutilla1}kg de ${fruta4.nombre}`)
            }
            else if( lista == 5){   
                let buscado = productosFrutas.find(productosFrutas => productosFrutas.id === 5);
                console.log(buscado);       
                mandarina1 = cantidadProductos(mandarina1);                
                console.log( `Sumaste ${mandarina1}kg de ${fruta5.nombre}`)
            }

        // MENU FINALIZAR COMPRA

            if (lista == 6){ 
         
                let total= (mandarina1*mandarina)+(frutilla1*frutilla)+(banana1*banana)+(naranja1*naranja)+(manzana1*manzana);

                const peso = [naranja1, manzana1, mandarina1, frutilla1];

                    peso.push(banana1);

                let res = peso[0]+peso[1]+peso[2]+peso[3]+peso[4];
                    console.log(`El peso total de sus productos es de: ${res}kg`);
                    console.log (`El total a pagar por sus productos es de: $${total}`);
        
                let pago = prompt("Ingrese con cuanto va a pagar");
        
                    if(pago < total){
                        alert("Lo sentimos, tu dinero no alcanza para tu compra");
                    }
        
                    else if(pago > total){
                        let resultado1= pago-total
                            alert(`Tu vuelto es $${resultado1}. Gracias por tu compra`);
                    }     
        
                    else if (pago == total){
                        alert(`Pagaste justo. Gracias por tu compra`);
                     }  
                     break;
             }
    }   
}  
  
    
    else if(seccion === 2){

        console.log([productosVerduras]);

        let lista2 = parseInt(prompt("Verduras a seleccionar:\n 1. Tomate\n 2. Papa\n 3. Zapallo\n 4. Lechuga\n 5. Cebolla\n 6. Finalizar compra"))
    
    
        let tomate1 = 0, papa1 = 0, zapallo1 = 0, lechuga1 = 0, cebolla1 = 0
        let tomate = 150, papa = 60, zapallo = 150, lechuga = 40, cebolla = 120 
    
    
        while(lista2 !== 6){
    
        let lista2 = parseInt(prompt("Verduras a seleccionar:\n 1. Tomate\n 2. Papa\n 3. Zapallo\n 4. Lechuga\n 5. Cebolla\n 6. Finalizar compra"))
    
            if  (lista2 !== 1 && lista2 !== 2 && lista2 !== 3 && lista2 !== 4 && lista2 !== 5 && lista2 !== 6){
                alert("Ha ingresado una opcion invalida");
            }
    
            else if( lista2 == 1){
                let buscado = productosVerduras.find(productosVerduras => productosVerduras.id === 1);
                console.log(buscado);    
                tomate1= cantidadProductos(tomate1); 
                console.log( `Sumaste ${tomate1}kg de ${verdura1.nombre}`)   
            }
            else if( lista2 == 2){
                let buscado = productosVerduras.find(productosVerduras => productosVerduras.id === 2);
                console.log(buscado); 
                papa1 = cantidadProductos(papa1);
                console.log( `Sumaste ${papa1}kg de ${verdura2.nombre}`)
            }
            else if( lista2 == 3){
                let buscado = productosVerduras.find(productosVerduras => productosVerduras.id === 3);
                console.log(buscado); 
                zapallo1 = cantidadProductos(zapallo1);
                console.log( `Sumaste ${zapallo1}kg de ${verdura3.nombre}`)
            }
            else if( lista2 == 4){
                let buscado = productosVerduras.find(productosVerduras => productosVerduras.id === 4);
                console.log(buscado); 
                lechuga1 = cantidadProductos(lechuga1);
                console.log( `Sumaste ${lechuga1}kg de ${verdura4.nombre}`)
            }
            else if( lista2 == 5){
                let buscado = productosVerduras.find(productosVerduras => productosVerduras.id === 5);
                console.log(buscado); 
                cebolla1 = cantidadProductos(cebolla1);
                console.log( `Sumaste ${cebolla1}kg de ${verdura5.nombre}`)
            }
     
        // MENU FINALIZAR COMPRA

            if (lista2 == 6){  
                let total= (tomate1*tomate)+(papa1*papa)+(zapallo1*zapallo)+(lechuga1*lechuga)+(cebolla1*cebolla);
    
                const peso = [tomate1, papa1, zapallo1, lechuga1, cebolla1];
    
                let res = peso[0]+peso[1]+peso[2]+peso[3]+peso[4];
    
                    console.log(`El peso total de sus productos es de: ${res}kg`);
                    console.log (`El total a pagar por sus productos es de: $${total}`);
    
                let pago = prompt("Ingrese con cuanto va a pagar");
    
                if(pago < total){
                    alert("Lo sentimos, tu dinero no alcanza para tu compra");
                    
                }
    
                else if(pago > total){
                    let resultado1= pago-total
                    alert(`Tu vuelto es $${resultado1}. Gracias por tu compra`);
                }  
       
    
                else if (pago == total){
                    alert(`Pagaste justo. Gracias por tu compra`);
                    
                } 
                break;
            }
    }
}


