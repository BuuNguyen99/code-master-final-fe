import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useHistory } from "react-router";

function FromUser({ onAddUser, isLoading }) {
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last name is required"),
    onboardDate: Yup.string()
      .required("Onboard Date is required")
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "Onboard Date  must be a valid date in the format YYYY-MM-DD"
      ),
    officalDate: Yup.string()
      .required("Offical Date is required")
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "Offical Date must be a valid date in the format YYYY-MM-DD"
      ),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    const dataUser = {
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      onboard_at: data.onboardDate,
      official_at: data.officalDate,
    };

    onAddUser(dataUser);
  }

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row row my-5">
            <div className="form-group col-5">
              <label className="required">First Name</label>
              <input
                name="firstName"
                type="text"
                {...register("firstName")}
                className={`form-control form-control-lg ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                placeholder="First Name"
              />
              <div className="invalid-feedback">
                {errors.firstName?.message}
              </div>
            </div>
            <div className="form-group col-5">
              <label className="required">Last Name</label>
              <input
                name="lastName"
                type="text"
                {...register("lastName")}
                className={`form-control form-control-lg ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                placeholder="Last Name"
              />
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            </div>
          </div>
          <div className="form-row row my-5">
            <div className="form-group col">
              <label className="required">Onboard Date</label>
              <input
                name="onboardDate"
                type="date"
                {...register("onboardDate")}
                className={`form-control ${
                  errors.onboardDate ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.onboardDate?.message}
              </div>
            </div>
            <div className="form-group col">
              <label className="required">Email</label>
              <input
                name="email"
                type="text"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Email"
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
          </div>
          <div className="form-row row my-5">
            <div className="form-group col">
              <label className="required"> Offical Date</label>
              <input
                name="officalDate"
                type="date"
                {...register("officalDate")}
                className={`form-control ${
                  errors.officalDate ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.officalDate?.message}
              </div>
            </div>
          </div>
          <div className="form-group my-5">
            <button type="submit" className="btn btn-primary mr-1">
              {isLoading && (
                <div class="spinner-border text-light" role="status" />
              )}
              Save
            </button>
            <button
              type="button"
              onClick={() => history.goBack()}
              className="btn btn-secondary mx-5"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FromUser;