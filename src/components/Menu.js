import { MenuItem } from "./MenuItem";

export const Menu = () => {
    return (
        <section id="gtco-menu" className="section-padding">
            <div className="container">
                <div className="section-content">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <div className="heading-section text-center">
                                <span className="subheading">
                                    Specialties
                                </span>
                                <h2>
                                    Our Menu
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 menu-wrap">
                            <div className="heading-menu">
                                <h3 className="text-center mb-5">Breakfast</h3>
                            </div>

                            <MenuItem src="img/breakfast-1.jpg" />

                        </div>

                        <div className="col-lg-4 menu-wrap">
                            <div className="heading-menu">
                                <h3 className="text-center mb-5">Breakfast</h3>
                            </div>

                            <MenuItem src="img/breakfast-1.jpg" />

                        </div>

                        <div className="col-lg-4 menu-wrap">
                            <div className="heading-menu">
                                <h3 className="text-center mb-5">Breakfast</h3>
                            </div>

                            <MenuItem src="img/breakfast-1.jpg" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}