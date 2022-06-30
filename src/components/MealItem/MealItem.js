export const MealItem = (props) => {

    let { name, price } = props.children;

    return (
        <div className="container">
            <img className="meal" src={props.src} alt="" />
            <div className="already-reg">
                <h4>{name}</h4>
                <h4 className="already-reg">${price}</h4>
            </div>
        </div>);
};