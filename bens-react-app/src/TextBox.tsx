import React, { ChangeEvent } from 'react';
import { isPropertySignature } from 'typescript';
// import logo from './logo.svg';
// import './App.css';

function TextBox(props: {label: string, change : Function}) {
    const changeHandler = (event : ChangeEvent<HTMLInputElement>) => {
        props.change(event.target.value)
    }
  return (
    <div className="TextBox">
      <header className="TextBox-header">
      </header>
      <label>
          {props.label}
      </label>
      <input onChange={(e) => changeHandler(e)} type="text"/>
    </div>
  );
}

export default TextBox;