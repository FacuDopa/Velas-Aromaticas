import { useState, useEffect } from "react";
import { CardList } from "../CardList/CardList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../firebase/firebase";
import { BarraBusqueda } from "../BarraBusqueda/BarraBusqueda";

export const CardListContainer = () => {

    const [productos, setProductos] = useState([])
    const [busqueda, setBusqueda] = useState("")

    const {idCategoria} = useParams()

    function serchingTerm(term){
        return function(x){
            return x.nombre.toLowerCase().toString().includes(term) || !term;
        }
    }

    useEffect(() => {

        const serch = (items) =>{
            if (busqueda !== '') {
                const filtrado = items.filter(serchingTerm(busqueda.toLowerCase()))
                const productList = <CardList products={filtrado} Pcarrito={'plantillaCarrito'}/>
                setProductos(productList)
            }
        }

        if(idCategoria) {
            getProducts()
            .then(items => {
                const products = items.filter(prod => prod.idCategoria === idCategoria)
                const productList = <CardList products={products} Pcarrito={'plantillaCarrito'}/>
                setProductos(productList)
                // serch(items)
            })
        }else{
            getProducts()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0)
                const productList = <CardList products={products} Pcarrito={'plantillaCarrito'}/>
                setProductos(productList)
                serch(items)
            })
        }
    }, [idCategoria, busqueda]);
    
    return (
        <>  
            <BarraBusqueda Categoria={idCategoria} busq={busqueda} setBusq={setBusqueda}/>
            <div className="row card-productos">
                {productos}
            </div>

        </>

    );
};