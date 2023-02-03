import React from "react";
import { InputText } from "primereact";
export default function InputAtom({props}) {

  return (
    <div>
      {props.label && (
        <label htmlFor={props.label}>
          {props.label}
        </label>
      )}

      <InputText
        disabled={props?.editUserData?.id}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        id={props.label}
        aria-describedby={`${props.label}-help`}
        placeholder={props.placeholder}
        className={`${props.className} ${props.error && "p-invalid block"}`}
      />

      {props.error && (
        <small id={`${props.error}-help`} className="p-error block">
          {props.error}
        </small>
      )}
    </div>
  );
}
