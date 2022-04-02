import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    // if (
    //   validator.isEmpty(values.firstName) ||
    //   validator.isEmpty(values.lastName)
    // ) {
    //   setError(true);
    // } else {
    //   nextStep();
    // }
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-5">
              <Form.Label className="required">
                What you think your co-worker can do better/need to improve?
                (Điểm bạn thấy đồng nghiệp nên cải thiện để làm tốt hơn)
              </Form.Label>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  name="coWorkerImprove"
                  defaultValue={values.coWorkerImprove}
                  type="text"
                  placeholder="Your email"
                  onChange={handleFormData("coWorkerImprove")}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-5">
              <Form.Label className="required">
                Do you have anything want to tell him/her?
              </Form.Label>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  name="anything"
                  defaultValue={values.anything}
                  type="text"
                  placeholder="Your email"
                  onChange={handleFormData("anything")}
                />
              </div>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepThree;
