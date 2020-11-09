import React from "react";
import { Field } from "formik";

const CheckboxField = ({
    className,
    name,
    displayName,
    type = "text",
    ...extraparams
}) => {
    const tagId = `${name}_id`;
    return (
        <Field name={name}>
            {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                meta
            }) => (
                <React.Fragment>
                    <div className={`form-group ${className}`}>
                        <div className="form-check ml-1">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={tagId}
                                {...field}
                                {...extraparams}
                            />
                            <label className="form-check-label" htmlFor={tagId}>
                                {displayName}
                            </label>
                            {meta.touched && meta.error && (
                                <div className="text-danger">{meta.error}</div>
                            )}
                        </div>
                    </div>
                </React.Fragment>
            )}
        </Field>
    );
};

export default CheckboxField;
