import React from "react";

const CheckBox = ({title,state,onChange}) => {
  return (
    <>
      <input
        type="checkbox"
        checked={state}
        onChange={onChange}
      />
      <label className="font-bold">{title}</label>
    </>
  );
};

export default CheckBox;
