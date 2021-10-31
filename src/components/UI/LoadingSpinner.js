import spinner from '../../images/spinning-loading.gif';

import './LoadingSpinner.css';

const LoadingSpinner=()=>{
    return(
        <div className="spinner">
          <img src={spinner} alt="Loading" />
        </div>
      
    )
}

export default LoadingSpinner;