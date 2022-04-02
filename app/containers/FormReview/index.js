import React, { useEffect, useState } from "react";
import teamwork from "assets/images/teamwork.png";
import FormRevivewInput from "./Form";
import FinalThank from "./final";
import { useHistory, useLocation } from "react-router-dom";
import jwt from "jsonwebtoken";

function FormRevivew() {
  const history = useHistory();
  const search = useLocation().search;
  const [dataToken, setDataToken] = useState(null);

  const [stepPage, setStepPage] = useState(null);

  useEffect(() => {
    const dataUrl = new URLSearchParams(search).get("data");

    if (dataUrl) {
      const decoded = jwt.verify(dataUrl, "secretKey");
      setDataToken(decoded);
    } else {
      history.push("/");
    }
  }, []);
  return (
    <>
      {dataToken && (
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
                      <p style={{ margin: 0 }}>
                        Employee Name:{" "}
                        <span>
                          {dataToken?.first_name} {dataToken?.last_name}
                        </span>
                      </p>
                      <p style={{ margin: 0 }}>
                        Email: <span>{dataToken?.email}</span>
                      </p>
                      <div className="icon">
                        <p className="required">Note:</p>
                        <p>
                          Evaluation Criteria: 1 = Bad, 2 = Normal, 3 = Good, 4
                          = Very Good
                        </p>
                      </div>
                    </div>
                    <FormRevivewInput
                      setStepPage={setStepPage}
                      decoded={dataToken}
                    />
                  </>
                </div>
              </div>
            ) : (
              <FinalThank />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default FormRevivew;
