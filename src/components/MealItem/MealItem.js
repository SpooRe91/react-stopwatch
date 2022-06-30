import { useState } from "react";

export const MealItem = (props) => {

    let { name, price } = props.children;
    const [priceOfMeals, setPrices] = useState(0);
    const [numberMeals, setNumberMeals] = useState(0);

    let clickHandler = (e) => {
        setPrices(n => n + price);
        setNumberMeals(n => n + 1);
    };

    const clearHandler = (e) => {
        setPrices(0)
        setNumberMeals(0)
    };

    if (numberMeals === 10) {
        clickHandler = null;
    };

    return (
        <div className="container">
            <img className="meal" src={props.src} alt="" />
            <div className="already-reg">
                <h4>{name}</h4>
                <h4 className="already-reg">${price}</h4>
            </div>

            <button onClick={clickHandler} name="buy">
                Total:${priceOfMeals} Orders:{numberMeals} {numberMeals === 10 && "Max. count reached!"}
            </button>
            <button onClick={clearHandler} name="clear">Clear counter</button>
        </div>);
};