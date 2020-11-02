import React from "react";
import { Formik } from "formik";
import HNav from "./../elements/navbars/hNav";

const GateWay = (props) => {
  const [profile, setProfile] = React.useState();
  React.useEffect(() => {
    let googleAccessToken = sessionStorage.getItem("GoogleAccessToken");
    if (googleAccessToken) {
      googleAccessToken = JSON.parse(googleAccessToken);
      console.log("--== googleAccessToken ", googleAccessToken);
      const { profileObj } = googleAccessToken;
      setProfile(profileObj);
    }
  }, []);

  console.log("--== profile ", profile);

  return (
    <React.Fragment>
      <HNav displaySidebar={"block"} {...props} />
      <main>
        <div className="container-fluid" style={{ height: "100vh" }}>
          {profile && (
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="row col-12">
                <div className="col-sm-10 offset-md-2 col-md-8">
                  <div className="card">
                    <div className="card-body">
                      <Formik
                        initialValues={{
                          ...profile,
                          mobileNumber: "8105555322",
                          orgCode: "115133619703025886313001",
                          isNewOrgRequest: false,
                        }}
                        validate={(values) => {
                          const errors = {};
                          if (!values.mobileNumber) {
                            errors.mobileNumber = "Required";
                          } else if (
                            !/^[789][0-9]{9}$/i.test(values.mobileNumber)
                          ) {
                            errors.mobileNumber = "Invalid Mobile Number";
                          }

                          if (!values.orgCode && !values.isNewOrgRequest) {
                            errors.orgCode =
                              "Provide Organization Code, to enroll as employee or create your a new organization as an admin";
                          } else if (values.orgCode && values.isNewOrgRequest) {
                            errors.orgCode =
                              "Provide Organization Code, to enroll as employee or create your a new organization as an admin";
                          }

                          return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                          props.history.push("/features/dashboard/home");
                        }}
                      >
                        {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                        }) => (
                          <form onSubmit={handleSubmit}>
                            <div className="row">
                              <div className="form-group col-sm-12 col-md-6">
                                <label htmlFor="givenName">Given Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="givenName"
                                  name="givenName"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.givenName}
                                  disabled
                                />
                              </div>
                              <div className="form-group col-sm-12 col-md-6">
                                <label htmlFor="familyName">Family Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="familyName"
                                  name="familyName"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.familyName}
                                  disabled
                                />
                              </div>
                              <div className="form-group col-sm-12 col-md-6">
                                <label htmlFor="email">Email</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="email"
                                  name="email"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                  disabled
                                />
                              </div>
                              <div className="form-group col-sm-12 col-md-6">
                                <label htmlFor="mobileNumber">Mobile</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="mobileNumber"
                                  placeholder="Mobile Number"
                                  name="mobileNumber"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.mobileNumber}
                                />
                                <span className="text-danger">
                                  {errors.mobileNumber &&
                                    touched.mobileNumber &&
                                    errors.mobileNumber}
                                </span>
                              </div>
                              <div className="col-sm-12 col-md-12">
                                <hr />
                                <div className="form-group">
                                  <label htmlFor="orgCode">
                                    Organization Code
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="orgCode"
                                    placeholder="Organization Code"
                                    name="orgCode"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.orgCode}
                                  />
                                </div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="isNewOrgRequest"
                                    name="isNewOrgRequest"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.isNewOrgRequest}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="isNewOrgRequest"
                                  >
                                    Request for New Organization Registration
                                  </label>
                                </div>
                                <span className="text-danger">
                                  {errors.orgCode &&
                                    touched.orgCode &&
                                    errors.orgCode}
                                </span>
                              </div>
                            </div>
                            <div className="d-flex justify-content-end">
                              <button
                                className="btn btn-primary"
                                disabled={
                                  isSubmitting || Object.keys(errors).length > 0
                                }
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </React.Fragment>
  );
};

export default GateWay;
