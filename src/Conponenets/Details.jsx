import { useLoaderData } from "react-router-dom";


const Details = () => {
    const detailsData=useLoaderData()
    const {meals}=detailsData
    const {idMeal,strMeal,strCategory,strArea,strMealThumb,strInstructions}=meals[0]
    console.log(idMeal,strMeal,strCategory)
    return (
        <div>
            <img className="w-[500px]" src={strMealThumb} alt="" />
            <h1>Area: {strArea}</h1>
            <h2>Category : {strCategory}</h2>
            <p className="">{strInstructions}</p>

        </div>
    );
};

export default Details;