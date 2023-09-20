import { Link, useLoaderData } from "react-router-dom";
import CategoryTab from "./CategoriTab";


const Home = () => {
    const allCategoriesOb = useLoaderData()
    const { categories
    } = allCategoriesOb
    return (
        <div>
            <Link to='/' className="flex justify-center mb-7"><button className="bg-yellow-600 text-3xl p-2 rounded-xl ">Home Meal</button></Link>
            <CategoryTab categories={categories}></CategoryTab>
        </div>
    );
};

export default Home;