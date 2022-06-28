export const MenuItem = (props) => {
    return (
        <div className="menus d-flex align-items-center">
            <div className="menu-img rounded-circle">
                <img className="img-fluid" src={props.src} alt="" />
            </div>
            <div className="text-wrap">
                <div className="row align-items-start">
                    <div className="col-8">
                        <h4>Egg Sandwich</h4>
                    </div>
                    <div className="col-4">
                        <h4 className="text-muted menu-price">$30</h4>
                    </div>
                </div>
                <p>Meat Ball, Mie</p>
            </div>
        </div>
    );
};