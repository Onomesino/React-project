import React, { Component } from 'react';

class HorizonFacilities extends Component {
    render(props) {
        return (
            <>
                <h3 className="hall">{this.props.name} FACILITIES</h3>

                <div className="row">
                    <div className="col-sm-6 col-md-3">
                        <div className="thumbnail">
                            <img className="fre" src="images/confrence.webp" alt="confrence room" />
                            <div className="caption">
                                <h3>confrence Room</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Autem amet quisquam provident fuga, impedit ex repellendus ducimus
                                    cum similique perspiciatis fugiat vero ratione blanditiis!
                                    Aspernatur dolorem repudiandae pariatur. Earum, maxime!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="thumbnail">
                            <img src="images/service.jpeg" alt="service office" />
                            <div className="caption">
                                <h2>Service Office</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Voluptatem animi doloribus, enim error neque necessitatibus et deleniti fuga nemo,
                                    atus omnis blanditiis distinctio pariatur facilis porro,
                                    temporibus voluptates aperiam. Quibusdam!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="thumbnail">
                            <img className="con" src="images/virtual.jpeg" alt="virtual officr" />
                            <div className="caption">
                                <h2>Virtual Office</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Voluptatem animi doloribus, enim error neque necessitatibus et deleniti fuga nemo,
                                    natus omnis blanditiis distinctio pariatur facilis porro,
                                    temporibus voluptates aperiam. Quibusdam!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="thumbnail">
                            <img className="met" src="images/meeting.jpeg" alt="meeting room" />
                            <div className="caption">
                                <h2>Meeting Room</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Quibusdam veniam dolores excepturi quaerat vel illum necessitatibus sequi! Libero
                                    aliquam eveniet tenetur inventore labore tempore incidunt obcaecati,
                                    voluptatibus aut minima molestiae!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HorizonFacilities;
