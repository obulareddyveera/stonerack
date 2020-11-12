import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { InputField, CheckboxField, TextareaField } from "./../elements/fields";
import {
    addStaffAsync,
    oauthSelector,
    doAuthorizationCheck
} from "./oauthSlice";

import HNav from "./../elements/navbars/hNav";

const formValidation = values => {
    const errors = {};
    if (!values.phone) {
        errors.phone = "Required";
    } else if (!/^[789][0-9]{9}$/i.test(values.phone)) {
        errors.phone = "Invalid Mobile Number";
    }

    if (values.isNewOrgRequest) {
        if (!values.orgName) {
            errors.orgName = "Required";
        }
        if (!values.orgAddress) {
            errors.orgAddress = "Required";
        }
    } else {
        if (!values.code) {
            errors.code =
                "Provide Organization Code, to enroll as employee or create your a new organization as an admin";
        }
    }

    return errors;
};

const GateWay = props => {
    const dispatch = useDispatch();
    const oauth = useSelector(oauthSelector);

    const { profile } = oauth;
    React.useEffect(() => {
        let googleAccessToken = sessionStorage.getItem("GoogleAccessToken");
        if (googleAccessToken) {
            googleAccessToken = JSON.parse(googleAccessToken);
            const { profileObj } = googleAccessToken;
            dispatch(doAuthorizationCheck(profileObj));
        }
    });

    React.useEffect(() => {
        if (profile) {
            if (profile.code && !profile.isActiveOrg) {
                props.history.push({
                    pathname: "/features/dashboard/app",
                    state: { profile }
                });
            } else if (profile.code && profile.isActiveOrg) {
                props.history.push({
                    pathname: "/features/dashboard/org",
                    state: { profile }
                });
            }
        }
    }, [profile]);

    const onHandleSubmit = params => {
        dispatch(addStaffAsync(params));
    };

    const getDisableState = (errors, touched) => {
        if (Object.keys(errors).length > 0) {
            return true;
        } else if (Object.keys(touched).length === 0) {
            return true;
        }

        return false;
    };

    console.log("--== profile ", profile);
    return (
        <React.Fragment>
            <HNav displaySidebar={"block"} {...props} />
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-12 mt-5">
                        {profile && (
                            <Formik
                                initialValues={{
                                    ...profile
                                }}
                                validate={formValidation}
                            >
                                {({ values, errors, touched }) => {
                                    return (
                                        <form>
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <InputField
                                                            className="col-sm-12 col-md-6"
                                                            name="name"
                                                            displayName="Name"
                                                            disabled
                                                        />
                                                        <InputField
                                                            className="col-sm-12 col-md-6"
                                                            name="familyName"
                                                            displayName="Family Name"
                                                            disabled
                                                        />
                                                    </div>
                                                    <div className="row">
                                                        <InputField
                                                            className="col-sm-12 col-md-6"
                                                            name="email"
                                                            displayName="Email"
                                                            disabled
                                                        />
                                                        <InputField
                                                            className="col-sm-12 col-md-6"
                                                            name="phone"
                                                            displayName="Mobile"
                                                        />
                                                    </div>
                                                    <CheckboxField
                                                        className="col-12 mt-3 m-1"
                                                        name="isNewOrgRequest"
                                                        type="checkbox"
                                                        displayName="Request for New Organization Registration"
                                                    />
                                                    {values.isNewOrgRequest ? (
                                                        <React.Fragment>
                                                            <InputField
                                                                className="col-12  m-1"
                                                                name="orgName"
                                                                displayName="Organization Name"
                                                            />
                                                            <TextareaField
                                                                className="col-12  m-1"
                                                                name="orgAddress"
                                                                displayName="Address"
                                                            />
                                                        </React.Fragment>
                                                    ) : (
                                                        <InputField
                                                            className="col-12  m-1"
                                                            name="code"
                                                            displayName="Organization Code"
                                                        />
                                                    )}
                                                </div>
                                                <div className="card-footer d-flex justify-content-end">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        disabled={getDisableState(
                                                            errors,
                                                            touched
                                                        )}
                                                        onClick={() =>
                                                            onHandleSubmit(
                                                                values
                                                            )
                                                        }
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GateWay;
