export const CanvasOverlay = () => {

    return (
        <div id="canvas-overlay">

            <div class="boxed-page">

                <div class="hero">
                    <div class="container">
                        <div class="row d-flex align-items-center">
                            <div class="col-lg-6 hero-left">
                                <h1 class="display-4 mb-5">We Love Delicious Foods!</h1>
                                <div class="mb-2">
                                    <a class="btn btn-primary btn-shadow btn-lg" href="google.com" role="button">Explore Menu</a>
                                    <a class="btn btn-icon btn-lg" href="https://player.vimeo.com/video/33110953"
                                        data-featherlight="iframe" data-featherlight-iframe-allowfullscreen="true">
                                        <span class="lnr lnr-film-play"></span>
                                        Play Video
                                    </a>
                                </div>

                                <ul class="hero-info list-unstyled d-flex text-center mb-0">
                                    <li class="border-right">
                                        <span class="lnr lnr-rocket"></span>
                                        <h5>
                                            Fast Delivery
                                        </h5>
                                    </li>
                                    <li class="border-right">
                                        <span class="lnr lnr-leaf"></span>
                                        <h5>
                                            Fresh Food
                                        </h5>
                                    </li>
                                    <li class="">
                                        <span class="lnr lnr-bubble"></span>
                                        <h5>
                                            24/7 Support
                                        </h5>
                                    </li>
                                </ul>

                            </div>
                            <div class="col-lg-6 hero-right">
                                <div class="owl-carousel owl-theme hero-carousel">
                                    <div class="item">
                                        <img class="img-fluid" src="img/hero-1.jpg" alt="" />
                                    </div>
                                    <div class="item">
                                        <img class="img-fluid" src="img/hero-2.jpg" alt="" />
                                    </div>
                                    <div class="item">
                                        <img class="img-fluid" src="img/hero-3.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}