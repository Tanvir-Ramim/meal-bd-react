import PropTypes from 'prop-types';
import { Link, NavLink, Outlet, useNavigate, useNavigation } from 'react-router-dom';

const CategoryTab = ({categories}) => {
    // console.log(categories)
    const navigation=useNavigation()
    return (
        <div >
            
            <div className='flex gap-4 flex-wrap justify-center'>
            {
                categories.map(item=><NavLink to={`/${item.strCategory}`} key={item.idCategory}  className={({ isActive, isPending }) =>
                 isActive ? "bg-green-400 text-2xl  p-2 rounded-lg" : "bg-red-600 text-2xl  p-2 rounded-lg"
              }><button className=''>{item.strCategory}</button></NavLink>)
            }
            </div>
            {
                navigation.state==="loading"?<p className=''>ramim....</p> :<Outlet></Outlet>
            }
        </div>
    );
};

CategoryTab.propTypes={
    categories: PropTypes.array
}

export default CategoryTab;