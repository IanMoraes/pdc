import React from "react";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { FormContainer, SelectElement, TextFieldElement } from "react-hook-form-mui";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MaskedInput from "../../../Inputs/MaskedInput";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function FormStep2({ onNext, onBack }) {
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

    const options_estado = [
        {
            id: "1",
            label: "GO",
        },
        {
            id: "2",
            label: "TO",
        },
    ];

    return (
        <FormContainer defaultValues={{}} resolver={yupResolver(schema)} onSuccess={(FormData) => handleSubmit(FormData)}>
            <Grid container justifyContent="center" alignItems="center" sx={{ mt: 1, mb: 1 }} spacing={3} direction="row">
                <Grid item md={12} xs={12} sx={{ textAlign: "center" }}>
                    <Typography>Dados Residenciais</Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <MaskedInput fullWidth label="CEP" name="cep" mask="0000-000" placeholder="00000-000" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextFieldElement fullWidth label="Rua" name="rua" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextFieldElement fullWidth label="Complemento" name="complemento" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextFieldElement fullWidth label="Bairro" name="bairro" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <SelectElement fullWidth label="Estado" name="estado" options={options_estado} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <SelectElement fullWidth label="Cidade" name="cidade" options={options_estado} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <MaskedInput fullWidth label="Telefone" name="telefone" mask="(00) 00000-0000" placeholder="(00) 00000-0000" />
                </Grid>
                <Grid item md={6} xs={12}></Grid>
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

export default FormStep2;
