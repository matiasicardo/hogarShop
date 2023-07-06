const misProductos = [
    {
        id:"1",
        nombre:"E2020",
        idCat:"1",
        precio:500,
        img:"../src/imagenes/E2020.png",
        desc:"Fijo hasta 32"
,        stock: "6"
 ,   },
    {
        id:"2",
        nombre:"E4040",
        idCat:"1",
        precio:800,
        img:"../src/imagenes/SOPORTE-TV-LCD-E4040-01.png",
        desc:"Fijo hasta 55"
,        stock: "6"
 ,   },
    {
        id:"3",
        nombre:"L2022",
        idCat:"2",
        precio:800,
        img:"../src/imagenes/L2022.png",
        desc:"Fijo e inclinable hasta 32",
        stock: "6",
    },
    {
        id:"4",
        nombre:"L4044",
        idCat:"2",
        precio:1200,
        img:"../src/imagenes/SOPORTE-LED-LCD-L4044-010.png",
        desc:"Fijo e inclinable hasta 55",
        stock: "6",
    },
    {
        id:"5",
        nombre:"L40",
        idCat:"3",
        precio:2000,
        img:"../src/imagenes/L40.png", 
        desc:"Movil hasta 32",
        stock: "6",
    },
    {
        id:"6",
        nombre:"L43",
        idCat:"3",
        precio:2500,
        img:"../src/imagenes/L43.png",
        desc:"Movil hasta 32"
    },
    {
        id:"7",
        nombre:"L74",
        idCat:"3",
        precio:3000,
        img:"../src/imagenes/L74_02.png",
        desc:"Movil hasta 55"
    },
    {
        id:"8",
        nombre:"L75",
        idCat:"3",
        precio:3500,
        img:"../src/imagenes/L75.png",
        desc:"Movil hasta 55",
        stock: "6",
    },
    {
        id:"9",
        nombre:"L85",
        idCat:"3",
        precio:5000,
        img:"../src/imagenes/L85.png",
        desc:"Movil hasta 65",
        stock: "6",
    }
]

// esta funcion se utiliza para gestionar TODOS los productos
export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(misProductos)
      }, 200)
    })
}
  
//esta funcion se utilzia pra gestionar SOLO UN producto
export const getUnProducto = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const producto = misProductos.find((prod) => prod.id === id)
        resolve(producto)
      }, 200)
    })
}
  
//Creamos una funcion que retorne TODA UNA categoria
export const getCategoria = (idCategoria) => {
   return new Promise((resolve) => {
      setTimeout(() => {
        const producto = misProductos.filter((prod) => prod.idCat === idCategoria)
        resolve(producto)
      }, 200)
    })
}
