import './item.css'

function ItemLista(props){
    return (
        <li className={props.class}><img src={props.img} alt={props.alt}/>{props.nome}</li>
    )
}

export default ItemLista