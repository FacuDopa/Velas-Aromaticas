import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal)

export const alerta = (item, totalPrice) => {
   console.log('entra al alert');
   MySwal.fire({
      title: 'Gracias por elegirnos, su encargo fue realizado',
      html: <p>Su compra de ID:{item.id} por un total de {new Intl.NumberFormat('de-DE').format(totalPrice)} fue realizada con exito</p>,
      icon: 'success'
   })
}