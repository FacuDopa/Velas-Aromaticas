import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../firebase/firebase';
import { CardDetail } from '../CardDetail/CardDetail';

export const CardDetailContainer = () => {

    const [producto , setProducto] = useState([])

    const {id} = useParams()

    useEffect(() => {
        getProduct(id)
        .then(item => setProducto(item))
    }, [id])

    return (
        <>
            <CardDetail  item={producto}/>
        </>
    );
}