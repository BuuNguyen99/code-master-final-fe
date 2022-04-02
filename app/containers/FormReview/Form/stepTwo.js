import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({
  nextStep,
  handleFormData,
  handleChangeCheckBoxCommunitation,
  prevStep,
  values,
}) => {
  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <>
      <Card>
        <Card.Body>
          <Form onSubmit={submitFormData} className="form-evaluation">
            <Form.Group className="mb-5">
              <Form.Label>Communication</Form.Label>
              <p className="text-content">
                Measures how well this individual gets along with fellow
                employees, respects the rights of other employees and shows a
                cooperative & supporting spirit (Đo lường mức độ hòa hợp của cá
                nhân này với các nhân viên đồng nghiệp, tôn trọng quyền của
                những người khác và thể hiện tinh thần hợp tác, giúp đỡ lẫn
                nhau)
              </p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="teamwork1"
                  id="teamwork1"
                  checked={values?.communication === 1}
                  onClick={() => handleChangeCheckBoxCommunitation(1)}
                />
                <label class="form-check-label" for="teamwork1">
                  Bad
                </label>
              </div>
              <div class="form-check">
                <input
                  checked={values?.communication === 2}
                  class="form-check-input"
                  type="radio"
                  name="teamwork2"
                  id="teamwork2"
                  onClick={() => handleChangeCheckBoxCommunitation(2)}
                />
                <label class="form-check-label" for="teamwork2">
                  Normal
                </label>
              </div>
              <div class="form-check">
                <input
                  checked={values?.communication === 3}
                  class="form-check-input"
                  type="radio"
                  name="teamwork3"
                  id="teamwork3"
                  onClick={() => handleChangeCheckBoxCommunitation(3)}
                />
                <label class="form-check-label" for="teamwork3">
                  Good
                </label>
              </div>
              <div class="form-check">
                <input
                  checked={values?.communication === 4}
                  class="form-check-input"
                  type="radio"
                  name="teamwork4"
                  id="teamwork4"
                  onClick={() => handleChangeCheckBoxCommunitation(4)}
                />
                <label class="form-check-label" for="teamwork4">
                  Very Good
                </label>
              </div>
            </Form.Group>
            <Form.Group className="mb-5">
              <Form.Label>
                What you think your co-worker are doing good and should keep
                going? (Điểm bạn thấy đồng nghiệp đang làm tốt nên tiếp tục phát
                huy)
              </Form.Label>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  name="coWorker"
                  defaultValue={values.coWorker}
                  type="text"
                  placeholder="Your answer"
                  onChange={handleFormData("coWorker")}
                />
              </div>
            </Form.Group>
            <div className="button-group">
              <Button variant="primary" onClick={prevStep} className="mx-5">
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Continue
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;
