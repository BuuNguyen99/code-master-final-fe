import React, { useState } from "react";
import teamwork from "assets/images/teamwork.png";
import FormRevivewInput from "./Form";
import FinalThank from "./final";

function FormRevivew() {
  const [stepPage, setStepPage] = useState(null);
  return (
    <div className="form-review">
      <div className="container">
        {stepPage < 4 ? (
          <div className="form-review__container">
            <div className="form-review__left">
              <img src={teamwork} alt="" />
            </div>

            <div className="form-review__right">
              <>
                <div className="header-form">
                  <h3> Teamwork Evaluation Form</h3>
                  <p>
                    Employee Name: <span>Thanh Ngaan</span>
                  </p>
                  <div className="icon">
                    <p className="required">Note:</p>
                    <p>
                      Evaluation Criteria: 1 = Bad, 2 = Normal, 3 = Good, 4 =
                      Very Good
                    </p>
                  </div>
                </div>
                <FormRevivewInput setStepPage={setStepPage} />
              </>
            </div>
          </div>
        ) : (
          <FinalThank />
        )}
      </div>
    </div>
  );
}

export default FormRevivew;
