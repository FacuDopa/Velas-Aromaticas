
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries<br/><br/>// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyA9m-3PWGw09Xl5TsiVSLtWnWKR5IVNbis",
authDomain: "velas-aromaticas-ca1e6.firebaseapp.com",
projectId: "velas-aromaticas-ca1e6",
storageBucket: "velas-aromaticas-ca1e6.appspot.com",
messagingSenderId: "512036855225",
appId: "1:512036855225:web:196282aab0a1be28aeea68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()


export const cargarDB = async () => {
   const promise = await fetch("./json/prod.json")
   const productos = await promise.json()
   productos.forEach( async(prod) => {
      await addDoc(collection (db, 'productos'), {
         nombre: prod.nombre,
         descripcion: prod.descripcion,
         imagenCard: prod.imagenCard,
         esencia: prod.esencia,
         esencia1: prod.esencia1,
         esencia2: prod.esencia2,
         esencia3: prod.esencia3,
         esencia4: prod.esencia4,
         precio: prod.precio,
         stock: prod.stock,
         idCategoria: prod.idCategoria

      })
   })
};

export const añadirPDB = async () => {
   await addDoc(collection(db, 'productos'), {
      // nombre: 'Velas',
      // descripcion: 'Velas aromaticas con varios perfumes',
      // imagenCard: '',
      // esencia: 'Lavanda',
      // esencia1: 'Limón',
      // esencia2: 'Coco',
      // esencia3: 'Vainilla',
      // precio: '400',
      // stock: '3',
      // idCategoria: 'Velas',

      nombre: "Frasquitos con fosforos",
      descripcion: "Frasquito con 20 fosforos para prender velas, sahumerios",
      imagenCard: "https://firebasestorage.googleapis.com/v0/b/velas-aromaticas-ca1e6.appspot.com/o/img%2FIMG-20230803-WA0020.jpg?alt=media&token=5bdd0215-f1e2-4a39-ba89-9fe77bacc40f",
      precio:"800",
      stock: "100",
      idCategoria: "Accesorios"
   })
}

export const getProducts = async() => {
   const productos = await getDocs( collection (db, 'productos'))
   const items = productos.docs.map(prod => {
      return {...prod.data(), id: prod.id}
   })
   return items
}

export const getOrdenC = async() => {
   const productos = await getDocs( collection (db, 'ordenCompra'))
   const items = productos.docs.map(prod => {
      return {...prod.data(), id: prod.id}
   })
   return items
}

export const getProduct = async(id) => {
   const producto = await getDoc( doc (db, 'productos', id))
   const item = {...producto.data(), id: producto.id}
   return item
}



export const getOrdenCompra = async(idCompra) => {
   const compra = await getDoc(doc(db, 'ordenCompra', idCompra))
   const item = {...compra.data(), id: compra.id}
   return item
}

export const uptadeProduct = async(id, info) => {
   await updateDoc(doc(db, 'productos', id), info) 
}

export const deleteProduct = async(id) => {
   await deleteDoc(doc(db, 'productos', id))
}

export const createOrdenCompra = async(cliente, productos, precioTotal, fecha) => {
   const ordenCompra = await addDoc(collection(db, 'ordenCompra'), {
      datosCliente: cliente,
      productos: productos,
      fecha: fecha,
      estado: 'pendiente',
      precioTotal: precioTotal
   })
   return(ordenCompra)
}