import React from "react";
import thankYou from "assets/images/thank.jpg";

function FinalThank() {
  return (
    <div className="form-review__thank-you">
      <div className="form-review__thank-you__container">
        <div className="form-review__thank-you__left">
          <p> Thank you for your collaboration.</p>
        </div>
        <div className="form-review__thank-you__right">
          <img src={thankYou} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FinalThank;
