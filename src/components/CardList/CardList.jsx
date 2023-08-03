import { Cards } from "../Cards/Cards";
import { CardCart } from "../CardCart/CardCart";

export const CardList = ({products, Pcarrito}) => {

    return (
        <>
            {Pcarrito === 'plantillaCarrito'
                ?
                    products.map(producto => <Cards item={producto} key={producto.id}/>)
                :
                    products.map(producto => <CardCart item={producto} key={producto.id}/>)    
            }
        </>
    )
}