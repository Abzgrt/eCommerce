import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname, value, onChange, onBlur} = props;
  return (
    <div className="form-floating mt-3">
      <input
        type={type}
        className={`form-control ${classname}`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default CustomInput;