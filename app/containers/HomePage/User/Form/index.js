import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { format, parseISO } from "date-fns";

function FromUser({ id, onAddUser, isLoading, dataUserDetail, onUpdateUser }) {
  const history = useHistory();

  const formatDate = (date) => {
    if (date) return format(parseISO(date), "yyyy-MM-dd");
  };

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
  const { register, handleSubmit, setValue, formState } = useForm(formOptions);
  const { errors } = formState;

  useEffect(() => {
    if (dataUserDetail) {
      setValue("firstName", dataUserDetail?.firstName || "");
      setValue("lastName", dataUserDetail?.lastName || "");
      setValue(
        "onboardDate",
        dataUserDetail?.onboardAt ? formatDate(dataUserDetail?.onboardAt) : ""
      );
      setValue(
        "officalDate",
        dataUserDetail?.officialAt ? formatDate(dataUserDetail?.officialAt) : ""
      );
      setValue("email", dataUserDetail?.email || "");
    }
  }, [dataUserDetail]);
  function onSubmit(data) {
    const dataUser = {
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      onboard_at: data.onboardDate,
      official_at: data.officalDate,
    };

    if (dataUserDetail) {
      delete dataUser.email;
      console.log("111");
      onUpdateUser(id, dataUser, handleCallBackEditUser);
      return;
    }
    onAddUser(dataUser, handleCallBackUser);
  }

  const handleCallBackUser = (error) => {
    if (error) {
      toast.error("Create User Failured");
      return;
    }
    toast.success("Create User Successfully");
    history.push("/");
  };

  const handleCallBackEditUser = (error) => {
    if (error) {
      toast.error("Update User Failured");
      return;
    }
    toast.success("Update User Successfully");
    history.push("/");
  };

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
            <div className="form-group col-4">
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
            <div className="form-group col-6">
              <label className="required">Email</label>
              <input
                disabled={dataUserDetail}
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
            <div className="form-group col-10">
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
          <div className="form-group my-5 group-form-button">
            <button
              type="submit"
              className="btn btn-primary mr-1 btn-save-form"
            >
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
