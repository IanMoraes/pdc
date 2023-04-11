import React, { useEffect } from "react";
import useSweetAlert from "../../../../hooks/useSweetAlert";
import { Button, Grid, Typography, IconButton, Tooltip } from "@mui/material";
import { AutocompleteElement, CheckboxButtonGroup, DatePickerElement, FormContainer, PasswordElement, SelectElement, TextFieldElement } from "react-hook-form-mui";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MaskedInput from "../../../Inputs/MaskedInput";
import Pokemons from "../../../../services/Pokemons";
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

    const options_banco = [
        {
            id: "1",
            label: "GO",
        },
        {
            id: "2",
            label: "TO",
        },
    ];
    const options_tipo_conta = [
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
                    <Typography>Dados Bancários</Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <AutocompleteElement label="Banco" name="instituicao_vinculacao" options={options_banco} />
                </Grid>

                <Grid item md={6} xs={12}>
                    <SelectElement fullWidth label="Cidade" name="cidade" options={options_tipo_conta} />
                </Grid>
                <Grid item md={3} xs={12}>
                    <TextFieldElement fullWidth label="Agência" name="agencia" />
                </Grid>
                <Grid item md={3} xs={12}>
                    <TextFieldElement fullWidth label="Dígito Ver. da Agência" name="digito_verificador_agencia" />
                </Grid>
                <Grid item md={3} xs={12}>
                    <MaskedInput fullWidth label="Conta" name="conta" mask="xxxxxxxxxxxx" definitions={{ x: /^[1-9.]$/ }} />
                </Grid>
                <Grid item md={3} xs={12}>
                    <TextFieldElement fullWidth label="Dígito Ver. da Conta" name="digito_verificador_conta" />
                </Grid>
                <Grid item md={6} xs={6} sx={{ display: "flex", justifyContent: "left" }}>
                    <Tooltip title="Retroceder">
                        <IconButton variant="contained" color="primary" onClick={onBack}>
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item md={6} xs={6} sx={{ display: "flex", justifyContent: "right" }}>
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
