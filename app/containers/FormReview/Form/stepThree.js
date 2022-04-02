import React, { memo, useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import saga from "containers/HomePage/saga";
import reducer from "containers/HomePage/reducer";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import { createStructuredSelector } from "reselect";
import { submitReview } from "../../HomePage/actions";
import { makeSelectDataSubmitForm } from "../../HomePage/selectors";

// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({
  prevStep,
  nextStep,
  handleFormData,
  values,
  dataSubmitForm,
  onSubmitReview,
  decoded,
  handleCheckProblems,
}) => {
  useInjectReducer({ key: "home", reducer });
  useInjectSaga({ key: "home", saga });

  const submitFormData = (e) => {
    e.preventDefault();

    const data = {
      reviewer_id: decoded?.reviewer_id,
      user_id: decoded?.userId,
      teamwork: values?.teamwork,
      communication: values?.communication,
      problem_solving: values?.anything,
      speaking: values?.isWork,
      improving_points: values?.coWorker,
      keep_going_points: values?.coWorkerImprove,
    };
    onSubmitReview(data, handleCallBackSubmit);
    nextStep();
  };

  const handleCallBackSubmit = (error) => {
    if (error) {
      return;
    }
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Form onSubmit={submitFormData} className="form-evaluation">
            <Form.Group className="mb-5">
              <Form.Label>
                What you think your co-worker can do better/need to improve?
                (Điểm bạn thấy đồng nghiệp nên cải thiện để làm tốt hơn)
              </Form.Label>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  name="coWorkerImprove"
                  defaultValue={values.coWorkerImprove}
                  type="text"
                  placeholder="Your answer"
                  onChange={handleFormData("coWorkerImprove")}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-5">
              <Form.Label>
                Do you have anything want to tell him/her?
              </Form.Label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="teamwork1"
                  id="teamwork1"
                  checked={values?.anything === 1}
                  onClick={() => handleCheckProblems(1)}
                />
                <label className="form-check-label" for="teamwork1">
                  Bad
                </label>
              </div>
              <div className="form-check">
                <input
                  checked={values?.anything === 2}
                  className="form-check-input"
                  type="radio"
                  name="teamwork2"
                  id="teamwork2"
                  onClick={() => handleCheckProblems(2)}
                />
                <label className="form-check-label" for="teamwork2">
                  Normal
                </label>
              </div>
              <div className="form-check">
                <input
                  checked={values?.anything === 3}
                  className="form-check-input"
                  type="radio"
                  name="teamwork3"
                  id="teamwork3"
                  onClick={() => handleCheckProblems(3)}
                />
                <label className="form-check-label" for="teamwork3">
                  Good
                </label>
              </div>
              <div className="form-check">
                <input
                  checked={values?.anything === 4}
                  className="form-check-input"
                  type="radio"
                  name="teamwork4"
                  id="teamwork4"
                  onClick={() => handleCheckProblems(4)}
                />
                <label className="form-check-label" for="teamwork4">
                  Very Good
                </label>
              </div>
            </Form.Group>
            <div className="button-group">
              <Button variant="primary" onClick={prevStep} className="mx-5">
                Previous
              </Button>
              <Button variant="primary" type="submit" className="btn-save-form">
                {dataSubmitForm?.isFetching && (
                  <div class="spinner-border text-light" role="status" />
                )}{" "}
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  dataSubmitForm: makeSelectDataSubmitForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitReview: (dataSubmit, callBack) =>
      dispatch(submitReview(dataSubmit, callBack)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(StepThree);
