import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
    
  return <input value={props.value} onChange={props.handleChange} />;
}
