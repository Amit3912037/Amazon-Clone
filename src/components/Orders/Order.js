import OrderItem from './OrderItem';

import './Order.css'

const Order = (props) => {
    return (
        <div className="order__container">
            <div className="order__header">
                <p className="order__datails"> <strong className='order__id'> Order Id : {props.id} </strong></p>
                <p className='order__total'><span className="order__amount">$ {props.orderDetails.totalAmount.toFixed(2)}</span> ({props.orderDetails.totalItems} items) </p>
            </div>
            {
                props.orderDetails.orderItems.map(orderItem => (
                    <OrderItem
                        key={orderItem.id}
                        id={orderItem.id}
                        image={orderItem.image}
                        price={orderItem.price}
                        rating={orderItem.rating}
                        title={orderItem.title}
                        quantity={orderItem.quantity}
                    />
                ))}
        </div>
    )
}

export default Order;