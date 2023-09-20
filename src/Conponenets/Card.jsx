import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Card = ({item}) => {
     const {strMealThumb,strMeal,idMeal}=item
     const navigate=useNavigate()
    const handleDetails=()=>{
            navigate(`/:category/${idMeal}`)
    }
    return (
        <div>
            <div>
               <div className="card w-90 bg-base-100 shadow-xl p-2">
   <figure><img src={strMealThumb} alt="Shoes" /></figure>
   <div className="card-body">
     <h2 className="card-title text-2xl font-semibold mt-3">
       {strMeal}
     </h2>
     <button onClick={handleDetails} className="text-base mt-3 bg-red-400 p-1 rounded-lg">Show Details</button>
   </div>
 </div>
</div>
        </div>
    );
};

Card.propTypes={
    item: PropTypes.object.isRequired
}
export default Card;