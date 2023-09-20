import { useLoaderData} from "react-router-dom";
import Card from "./Card";
    
const Category = () => {

    const category=useLoaderData() 
    const {meals}=category
    
    return (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5  ">
       {
           meals.map((item,inx)=><Card key={inx}item={item} ></Card>)
       }
   </div>
    );
};

export default Category;