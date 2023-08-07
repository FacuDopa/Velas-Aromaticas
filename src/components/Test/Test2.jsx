
export const Test2 = ({items}) => {

    console.log(items.productos.length);

    return (
        <div>
            <h1>{items.estado}</h1>
            <p>{items.datosCliente.celular}</p>
            <p>{items.productos[0].nombre}</p>
        </div>
    );
};