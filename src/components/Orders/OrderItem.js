import './OrderItem.css';

const OrderItem = (props) => {

    return (<div className="orderitem">
        <img src={props.image} alt="" className="orderitem__image" />
        <div className="orderitem__info">
            <div className="orderitem__head">
                <div className="orderitem__left">
                    <p className="orderitem__title">{props.title}</p>
                    <span className='orderitem__quantity'>Quantity: {props.quantity}</span>
                </div>
                <div className="orderitem__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </div>
            </div>
        </div>
    </div>
    )
}

export default OrderItem;