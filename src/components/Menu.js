import { useState } from "react";
import { MealItem } from "./MealItem/MealItem";

export const Menu = () => {


    let breakfast = useState(
        [{ name: "Eggs", price: 30 },
        { name: "Pasta", price: 45 },
        { name: "Fish", price: 43 }]);

    let [breakfastState, setBreakfast] = breakfast;

    //-------------------//
    let lunch = useState(
        [{ name: "Soup", price: 30 },
        { name: "Beef", price: 45 },
        { name: "Chicken", price: 43 }]);
    //-------------------//

    let [lunchState, setLunch] = lunch;

    //-------------------//
    let dinner = useState(
        [{ name: "Veggie", price: 30 },
        { name: "Lasagna", price: 45 },
        { name: "Steak", price: 43 }]);

    let [dinnerState, setDinner] = dinner;

    return (
        <section id="gtco-menu" className="already-reg">
            <div className="container">
                <span className="subheading">
                    Specialties
                </span>
                <h2>
                    Our Menu
                </h2>
            </div>

            <div className="row">
                <h3 className="text-center mb-5">Breakfast</h3>
                {breakfastState.map(el => <MealItem src="img/hero-1.jpg" >{el}</MealItem>)}
            </div>

            <div className="col-lg-4 menu-wrap">
                <h3 className="text-center mb-5">Lunch</h3>
                {lunchState.map(el => <MealItem src="img/hero-2.jpg" >{el}</MealItem>)}
            </div>

            <div className="col-lg-4 menu-wrap">
                <h3 className="text-center mb-5">Dinner</h3>
                {dinnerState.map(el => <MealItem src="img/hero-3.jpg">{el}</MealItem>)}
            </div>
        </section >
    );
}