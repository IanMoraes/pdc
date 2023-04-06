import React from "react";
import InputMask from "react-input-mask";
import { TextFieldElement } from "react-hook-form-mui";

const ReactMaskedInput = (props) => {
    const { mask, ...other } = props;

    return <InputMask mask={mask}>{(inputProps) => <TextFieldElement {...inputProps} label="Telefone" variant="outlined" {...other} />}</InputMask>;
};

export default ReactMaskedInput;
