import React, { Fragment } from 'react';

export const About = () =>{
    return(
        <Fragment>
            <div className="features">
                <h2>Patientory features</h2>
                <div className="feature-flex">
                    <div className="feature-item">
                        <div className="feature-box">
                        <img src={"./Vector Smart Object.png"} />
                        <p>Real Time</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-box">
                        <img src={"./Vector Smart Object.png"} />
                        <p>Blockchain Tech</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-box">
                        <img src={"./Privacy_icon.png"} />
                        <p>Privacy</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-box">
                        <img src={"./Technology_icon.png"} />
                        <p>Technology</p>
                        </div>
                    </div>
                </div>
                <div className="information">
                    <div className="info-item">
                        <h4>Benefit of Real Time Protection</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                    </div>
                    <div className="info-item">
                        <h4>What is Blockchain Tech?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                    </div>
                    <div className="info-item">
                        <h4>Privacy of your data </h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                    </div>
                    <div className="info-item">
                        <h4>Blockchain technology revolutionizes in medical</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam volutpat. Ut wisi enim ad minim veniam.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}