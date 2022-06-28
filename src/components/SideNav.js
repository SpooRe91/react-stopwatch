export const SideNavSearch = () => {

    return (
        <div id="side-nav" className="sidenav">
            <a href="google.com" id="side-nav-close">&times;</a>

            <div className="sidenav-content">
                <p>
                    Kuncen WB1, Wirobrajan 10010, DIY
                </p>
                <p>
                    <span className="fs-16 primary-color">(+68) 120034509</span>
                </p>
                <p>info@yourdomain.com</p>


                <div id="side-search" className="sidenav">
                    <a href="google.com" id="side-search-close">&times;</a>
                    <div className="sidenav-content">
                        <form action="GET">

                            <div className="input-group md-form form-sm form-2 pl-0">
                                <input className="form-control my-0 py-1 red-border" type="text" placeholder="Search"
                                    aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="input-group-text red lighten-3" id="basic-text1">
                                        <i className="fas fa-search text-grey" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}