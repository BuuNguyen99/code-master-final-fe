import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ prevStep, nextStep, handleFormData, values }) => {
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
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
              <div class="form-group">
                <textarea
                  class="form-control"
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
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  name="anything"
                  defaultValue={values.anything}
                  type="text"
                  placeholder="Your answer"
                  onChange={handleFormData("anything")}
                />
              </div>
            </Form.Group>
            <div className="button-group">
              <Button variant="primary" onClick={prevStep} className="mx-5">
                Previous
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepThree;
