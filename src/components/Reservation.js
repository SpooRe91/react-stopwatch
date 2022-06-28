export const Reservation = () => {
    return (
        <section id="gtco-reservation" className="bg-fixed bg-white section-padding overlay">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="section-content bg-white p-5 shadow">
                            <div className="heading-section text-center">
                                <span className="subheading">
                                    Reservation
                                </span>
                                <h2>
                                    Book Now
                                </h2>
                            </div>
                            <form method="post" name="contact-us" action="">
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="name" name="name"
                                            placeholder="Name" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="email" name="email"
                                            placeholder="Email" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="number" className="form-control" id="phoneNumber" name="phoneNumber"
                                            placeholder="Phone" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group date" id="datetimepicker4" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input"
                                                data-target="#datetimepicker4" placeholder="Date" />
                                            <div className="input-group-append" data-target="#datetimepicker4"
                                                data-toggle="datetimepicker">
                                                <div className="input-group-text">
                                                    <span className="lnr lnr-calendar-full"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 form-group">
                                        <div className="input-group date" id="datetimepicker3" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input"
                                                data-target="#datetimepicker3" placeholder="Time" />
                                            <div className="input-group-append" data-target="#datetimepicker3"
                                                data-toggle="datetimepicker">
                                                <div className="input-group-text">
                                                    <span className="lnr lnr-clock"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12 form-group">
                                        <select className="form-control" id="selectPerson">
                                            <option></option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>

                                    <div className="col-md-12 form-group">
                                        <textarea className="form-control" id="message" name="message" rows="6"
                                            placeholder="Your Message ..."></textarea>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button className="btn btn-primary btn-shadow btn-lg" type="submit"
                                            name="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>)
}