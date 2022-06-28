export const NavBar = () =>
    <nav id="navbar-header" className="navbar navbar-expand-lg">
        <div className="container">
            <a className="navbar-brand navbar-brand-center d-flex align-items-center p-0 only-mobile" href="/">
                <img src="img/logo.png" alt="google.com" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="lnr lnr-menu"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav d-flex justify-content-between">
                    <li className="nav-item only-desktop">
                        <a className="nav-link" id="side-nav-open" href="google.com">
                            <span className="lnr lnr-menu"></span>
                        </a>
                    </li>
                    <div className="d-flex flex-lg-row flex-column">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">About</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="google.com" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Special Dishes
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="special-dishes.html">Beef Steak Sauce</a>
                                <a className="dropdown-item" href="special-dishes.html">Salmon Zucchini</a>
                            </div>
                        </li>
                    </div>
                </ul>

                <a className="navbar-brand navbar-brand-center d-flex align-items-center only-desktop" href="google.com">
                    <img src="img/logo.png" alt="google.com" />
                </a>
                <ul className="navbar-nav d-flex justify-content-between">
                    <div className="d-flex flex-lg-row flex-column">
                        <li className="nav-item active">
                            <a className="nav-link" href="menu.html">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="team.html">Team</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link" href="reservation.html">Reservation</a>
                        </li>
                    </div>
                    <li className="nav-item">
                        <a id="side-search-open" className="nav-link" href="public/images/chef-1">
                            <span className="lnr lnr-magnifier"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>