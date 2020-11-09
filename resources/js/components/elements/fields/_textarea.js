import React from "react";
import { Field } from "formik";

const TextareaField = ({ className, name, displayName, type="text", ...extraparams }) => {
    const tagId = `${name}_id`;
    return (
        <Field name={name}>
            {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                meta
            }) => (
                <div className={`form-group ${className}`}>
                    <label htmlFor={tagId}>{displayName}</label>
                    <textarea
                        className="form-control"
                        type={type}
                        placeholder={displayName}
                        {...field}
                        {...extraparams}
                    />
                    {meta.touched && meta.error && (
                        <div className="text-danger">{meta.error}</div>
                    )}
                </div>
            )}
        </Field>
    );
};

export default TextareaField;
