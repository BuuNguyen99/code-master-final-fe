import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({
  nextStep,
  handleFormData,
  values,
  handleChangeCheckBoxTeamwork,
  handleChangeCheckBoxIsWork,
}) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Form onSubmit={submitFormData} className="form-evaluation">
            <div>
              <Form.Group className="mb-5">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  style={{ border: error ? "2px solid red" : "" }}
                  name="email"
                  defaultValue={values.email}
                  type="text"
                  placeholder="Your email"
                  onChange={handleFormData("email")}
                />
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>Teamwork</Form.Label>
                <p className="text-content">
                  Measures how well this individual gets along with fellow
                  employees, respects the rights of other employees and shows a
                  cooperative & supporting spirit (Đo lường mức độ hòa hợp của
                  cá nhân này với các nhân viên đồng nghiệp, tôn trọng quyền của
                  những người khác và thể hiện tinh thần hợp tác, giúp đỡ lẫn
                  nhau)
                </p>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="teamwork1"
                    id="teamwork1"
                    checked={values?.teamwork === 1}
                    onClick={() => handleChangeCheckBoxTeamwork(1)}
                  />
                  <label class="form-check-label" for="teamwork1">
                    Bad
                  </label>
                </div>
                <div class="form-check">
                  <input
                    checked={values?.teamwork === 2}
                    class="form-check-input"
                    type="radio"
                    name="teamwork2"
                    id="teamwork2"
                    onClick={() => handleChangeCheckBoxTeamwork(2)}
                  />
                  <label class="form-check-label" for="teamwork2">
                    Normal
                  </label>
                </div>
                <div class="form-check">
                  <input
                    checked={values?.teamwork === 3}
                    class="form-check-input"
                    type="radio"
                    name="teamwork3"
                    id="teamwork3"
                    onClick={() => handleChangeCheckBoxTeamwork(3)}
                  />
                  <label class="form-check-label" for="teamwork3">
                    Good
                  </label>
                </div>
                <div class="form-check">
                  <input
                    checked={values?.teamwork === 4}
                    class="form-check-input"
                    type="radio"
                    name="teamwork4"
                    id="teamwork4"
                    onClick={() => handleChangeCheckBoxTeamwork(4)}
                  />
                  <label class="form-check-label" for="teamwork4">
                    Very Good
                  </label>
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Do you want to work with him/her?</Form.Label>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="isWork1"
                    id="isWork1"
                    checked={values?.isWork === 1}
                    onClick={() => handleChangeCheckBoxIsWork(1)}
                  />
                  <label class="form-check-label" for="isWork1">
                    Yes
                  </label>
                </div>
                <div class="form-check">
                  <input
                    checked={values?.isWork === 2}
                    class="form-check-input"
                    type="radio"
                    name="isWork2"
                    id="isWork2"
                    onClick={() => handleChangeCheckBoxIsWork(2)}
                  />
                  <label class="form-check-label" for="isWork2">
                    No
                  </label>
                </div>
                <div class="form-check">
                  <input
                    checked={values?.isWork === 3}
                    class="form-check-input"
                    type="radio"
                    name="isWork3"
                    id="isWork3"
                    onClick={() => handleChangeCheckBoxIsWork(3)}
                  />
                  <label class="form-check-label" for="isWork3">
                    Anyway
                  </label>
                </div>
              </Form.Group>
            </div>
            <div className="button-group">
              <Button variant="primary" type="submit">
                Continue
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;
