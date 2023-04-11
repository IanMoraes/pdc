import React from "react";
import { Grid, Typography, IconButton, Tooltip } from "@mui/material";
import {FormContainer} from "react-hook-form-mui";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MultipleFilesSelect from "../../../Inputs/MultipleFilesSelect";
function FormStep4({ onNext, onBack }) {
    const schema = yup.object().shape({
        cep: yup.string().min(8, "CEP inválido").required("Digite um CEP!"),
        rua: yup.string().required("Digite a rua!"),
        complemento: yup.string().required("Digite o Complemento!"),
        bairro: yup.string().required("Digite o bairro!"),
        estado: yup.string().required("Selecione o estado"),
        cidade: yup.string().required("Selecione a cidade"),
        telefone: yup.string().required("Digite o telefone!"),
    });

    const handleSubmit = (FormData) => {
        console.log(FormData);
        onNext();
    };



    return (
        <FormContainer defaultValues={{}} resolver={yupResolver(schema)} onSuccess={(FormData) => handleSubmit(FormData)}>
            <Grid container justifyContent="center" alignItems="center" sx={{ mt: 1, mb: 1 }} spacing={3} direction="row">
                <Grid item md={12} xs={12} sx={{ textAlign: "center" }}>
                    <Typography>Dados Bancários</Typography>
                </Grid>
                <Grid item md={6} xs={6}>
                    <MultipleFilesSelect name="files"/>
                </Grid>
                <Grid item md={6} xs={6}>
                </Grid>
                <Grid item md={7} xs={6} sx={{ display: "flex", justifyContent: "left" }}>
                    <Tooltip title="Retroceder">
                        <IconButton variant="contained" color="primary" onClick={onBack}>
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item md={5} xs={6} sx={{ display: "flex", justifyContent: "right" }}>
                    <Tooltip title="Avançar">
                        <IconButton type="submit" variant="contained" color="primary">
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </FormContainer>
    );
}

export default FormStep4;
