import { createContext, useContext, useState } from "react";

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {
   
   const [carrito, setCarrito] = useState([])
   
   const isInCart = (id) => {
      return carrito.find(prod => prod.id === id)
   }

   const addItem = (producto, cantidad) => {
      if (isInCart(producto.id)) {
         const indice = carrito.findIndex(prod => prod.id === producto.id)
         const aux = [...carrito]
         aux[indice].cant = cantidad
         setCarrito(aux)
      }else{
         const productoCart = {
            ...producto,
            cant: cantidad
         }

         setCarrito([...carrito, productoCart])
      }
   }

   const removeItem = (id) =>{
      setCarrito(carrito.filter(prod => prod.id !== id))
   }

   const emptyCart = () => {
      setCarrito([])
   }

   const getItemQuantity = () => {
      return carrito.reduce((acum, prod) => acum += prod.cant, 0)
   }

   const totalPrice = () => {
      return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
   }

   console.log(carrito);

   return (
      <CarritoContext.Provider value={{carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
         {props.children}
      </CarritoContext.Provider>
   );
};