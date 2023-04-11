import React, { useEffect } from "react";
import useSweetAlert from "../../../hooks/useSweetAlert";
import { Button, Grid, Typography } from "@mui/material";
import { FormContainer, PasswordElement, TextFieldElement } from "react-hook-form-mui";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MaskedInput from "../../Inputs/MaskedInput";
import { OrgaoExpedidorMask } from "../../../utils/masks";

function SignUpExternalForm() {
    const schema = yup.object().shape({
        email: yup.string().email("Formato inválido!").required("E-mail é obrigatório"),
    });

    const handleSubmit = (FormData) => {
        console.log(FormData);
        //mutate(FormData);
    };

    return (
        <FormContainer defaultValues={{}} resolver={yupResolver(schema)} onSuccess={(FormData) => handleSubmit(FormData)}>
            <Grid container justifyContent="center" alignItems="center" sx={{ mt: 1, mb: 1 }} spacing={3} direction="row">
                <Grid item md={12} xs={12} sx={{ textAlign: "center" }}>
                    <Typography>Dados Gerais</Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextFieldElement fullWidth label="E-mail" name="email" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextFieldElement fullWidth label="Login" name="login" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <MaskedInput fullWidth label="CPF" name="cpf" mask="zzzz-asaz" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <MaskedInput fullWidth label="RG" name="rg" mask="aaaaaa" />
                </Grid>
                <Grid item md={10} xs={12} sx={{ display: "flex", justifyContent: "right" }}>
                    <Button type="submit" variant="contained">
                        Login
                    </Button>
                </Grid>
            </Grid>
        </FormContainer>
    );
}

export default SignUpExternalForm;
