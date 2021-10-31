import { Link } from 'react-router-dom';

import './CheckoutSuccess.css';
import successIcon from "../../images/success-icon.png";

const CheckoutSuccess = () => {
    return (
        <div className="order__success">
            <h1>Order Placed Successfully</h1>
            <Link to='/'>
                <img className="success__img" src={successIcon} alt="" />
            </Link>
        </div>
    )
}

export default CheckoutSuccess;