
let products = []
class Product {
  constructor(name,desc,price,stock){
    this.id = Math.round(Math.random()*1000000)
    this.name = name,
    this.desc = desc,
    this.price = price, 
    this.stock = stock
  }
}
let productAdd = () =>{
  let productSave = true
  while(productSave){
    productSave  = confirm("desea guardar un producto")
    if(productSave){
       let name = prompt("Ingrese nombre del producto")
       let desc = prompt("Ingrese descripcion del producto")
       let Price = prompt("Ingrese precio del producto")
       let stock = prompt("Ingrese Stock del producto")
    
    let product = new Product(name,desc,Price,stock)
    products.push(product)
    }
  
  }
}

let productsView = () => {
  let productViewConfirm
  if(products.length){
    productViewConfirm = confirm("quiere ver la lista de producto")
   
   }
   if(productViewConfirm){
     let list = document.getElementById("list")
     products.forEach((product) =>{
      let li = document.createElement("li")
      li.innerText = `id: ${product.id} , Nombre: ${product.name} , Descripcion: ${product.desc} , Precio: ${product.price} ,Stock: ${product.stock}`
      list.append(li)
     })
    
   }
}
let productDelete = () =>{
  let productDelete = true
  while(productDelete){
    productDelete  = confirm("desea borrar un producto")
    if(productDelete){
      let name = prompt("ingrese el nombre del producto que desea eliminar")
      let index = products.findIndex(product => product.name == name)
      index != -1 && products.splice(index,1)
    }
  
  }
  
}
let productUpdate = () =>{
  let productUpdate = true
  while(productUpdate){
    productUpdate  = confirm("desea actualizar un producto")
    if(productUpdate){
      let name = prompt("ingrese el nombre del producto que desea actualizar")
      let index = products.findIndex(product => product.name == name)
      if (index != -1){
        let name = prompt("Ingrese nombre del producto")
        let desc = prompt("Ingrese descripcion del producto")
        let Price = prompt("Ingrese precio del producto")
        let stock = prompt("Ingrese Stock del producto")
        products[index] = new Product(name,desc,Price,stock) 
      }
    }
  
  }

}
productAdd()
productDelete()
productUpdate()
productsView()


