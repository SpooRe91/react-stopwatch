export const WelcomeDishItem = (props) => {
    return (
        <div className="col-4">
            <a href="google.com" className="thumb-menu">
                <img className="img-fluid img-cover" src={props.src} alt="#" />
                <h6 style={{ color: "green" }}>Australian Organic Beef</h6>
            </a>
        </div>
    );
}