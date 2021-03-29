import React, { Fragment } from 'react';

export const Data = () =>{
    return(
        <Fragment>
                <div className="data">
                <h2>Healthcare Data </h2>
                <div className="data-flex">
                    <div className="data-item">
                        <div className="data-box">
                         <h3> <span>01. </span> Gateway Currency</h3>
                        <p>Focusing on quality health care services means ensuring patient health management at a superior level at all times. However, federal rules and regulations are making processes even more tedious and lengthy. Due to this, keeping such processes intact and still providing.</p>
                        </div>
                        <div className="data-img">
                        <img src={"./img04.jpg"} />
                        </div>
                    </div>
                    <div className="data-item">
                    <div className="data-img">
                        <img src={"./img05.png"} />
                        </div>
                        <div className="data-box">
                         <h3> <span>02. </span> Bearer Health Records</h3>
                        <p>In the healthcare sector, critical patient data and information remains scattered across different departments and systems. Due to this, crucial data is not accessible and handily available in times of need. The existing healthcare ecosystem cannot be considered.</p>
                        </div>
                    </div>
                    <div className="data-item">
                        <div className="data-box">
                         <h3> <span>03.</span>Network Security</h3>
                        <p>Many healthcare facilities today are still dependent on outdated systems for keeping patient records. These systems hold the functionality of keeping local records of the patient data. This can make it difficult for the doctor to diagnose which is time-consuming for the doctor tedious.</p>
                        </div>
                        <div className="data-img">
                        <img src={"./img06.png"} />
                        </div>
                    </div>
                </div>
                </div>
        </Fragment>
    )
}