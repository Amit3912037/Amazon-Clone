import { ref, child, get } from "firebase/database";
import { Fragment, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import db from "../../firebase";
import AuthContext from "../../store/auth-context";
import LoadingSpinner from "../UI/LoadingSpinner";
import Order from "./Order";

import './Orders.css'



const Orders = () => {

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userEmail } = useContext(AuthContext);
  const history = useHistory();

  const username = userEmail.replace('.', '');


  useEffect(() => {

     setIsLoading(true);
   
    const dbRef = ref(db);
    get(child(dbRef, `users/${username}/orders`)).then((snapshot) => {
      if (snapshot.exists()) {
        const ordersData = snapshot.val();
        let ordersArray = [];
        for (const key in ordersData) {
          ordersArray.push({
            orderDetails: ordersData[key],
            orderId: key
          })
        }
        setOrders(ordersArray);
      }
      setIsLoading(false);
    }).catch((error) => {
      alert(error);
      setIsLoading(false);
    });
   
  }, [username])


  return (
    <Fragment>
    {
      isLoading && <LoadingSpinner/>
    }
      {!isLoading && orders.length === 0 && (
        <div className="no__orders">
          <h3>You have not ordered anything</h3>
          <p>Place your first order</p>
          <h1 onClick={() => { history.push('/') }} className="explore__link" >Explore products</h1>
        </div>
      )}
      {
        !isLoading && orders.length !== 0 && (
          <div className='orders'>
            <h1 className="orders__heading">Your Orders</h1>
            <div className='orders__order'>
              {orders?.map(order => (
                <Order
                  key={order.orderId}
                  id={order.orderId}
                  orderDetails={order.orderDetails}
                />
              ))}
            </div>
          </div>
        )
      }
    </Fragment>
  )
}
export default Orders;