import React, { useEffect } from "react";
import {  Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { AutocompleteElement, RadioButtonGroup, DatePickerElement, FormContainer, PasswordElement, SelectElement, TextFieldElement } from "react-hook-form-mui";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MaskedInput from "../../../Inputs/MaskedInput";
import { _validacaoCPF } from "../../../../utils/validations";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function FormStep1({ onNext }) {
    const schema = yup.object().shape({
        email: yup.string().email("Formato inválido!").required("E-mail é obrigatório"),
        login: yup.string().min(4, "Mínimo de 4 caracteres!").required("Login é obrigatório"),
        sexo: yup.string().required("Selecione o sexo!"),
        cpf: yup
            .string()
            .test("cpf", "CPF inválido", (value) => _validacaoCPF(value))
            .required("Digite um CPF!"),
        rg: yup.string().required("Digite o RG!"),
        oe: yup.string().required("Digite o Órgão Expedidor!"),
        estado_civil: yup.string().required("Selecione o Estado Civil!"),
        data_nascimento: yup.string().required("Selecione a data de nascimento!"),
        nome_mae: yup.string().required("Digite o nome da mãe!"),
        formacao: yup.string().required("Selecione uma formação!"),
    });

    const handleSubmit = (FormData) => {
        console.log(FormData);
        onNext();
    };

    const options_sexo = [
        {
            id: "1",
            label: "Feminino",
        },
        {
            id: "2",
            label: "Masculino",
        },
    ];
    const options_usuario_estrangeiro = [
        {
            id: "1",
            label: "Sim",
        },
        {
            id: "2",
            label: "Não",
        },
    ];

    const options_newsletters = [
        {
            id: "1",
            label: "Feminino",
        },
        {
            id: "2",
            label: "Masculino",
        },
    ];

    const options_estado_civil = [
        {
            id: "",
            label: "--",
        },
        {
            id: "1",
            label: "Casado",
        },
        {
            id: "2",
            label: "Desquitado",
        },
        {
            id: "3",
            label: "Desquitado",
        },
        {
            id: "4",
            label: "Divorciado",
        },
        {
            id: "5",
            label: "Outros",
        },
        {
            id: "6",
            label: "Solteiro",
        },
        {
            id: "7",
            label: "Viúvo",
        },
    ];
    const options_instituicao_vinculacao = [
        {
            id: "0",
            label: "Oi",
        },
        {
            id: "1",
            label: "Casado",
        },
    ];

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
                    <RadioButtonGroup label="Usuário Estrangeiro" name="usuario_estrangeiro" options={options_usuario_estrangeiro} row />
                </Grid>
                <Grid item md={6} xs={12}>
                    <RadioButtonGroup label="Sexo" name="sexo" options={options_sexo} row />
                </Grid>
                <Grid item md={6} xs={12}>
                    <RadioButtonGroup label="Deseja receber nossas newsletters?" name="newsletters" options={options_newsletters} row />
                </Grid>
                <Grid item md={6} xs={12}>
                    <MaskedInput fullWidth label="CPF" name="cpf" mask="000.000.000-00" placeholder="000.000.000-00" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <MaskedInput fullWidth label="RG" name="rg" mask="aaaaaa" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <MaskedInput fullWidth label="Órgão Expedidor" name="oe" mask="xxxxxxxxxxxxx" placeholder="pc-GO" definitions={{ x: /^[A-Za-z-]$/ }} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <SelectElement fullWidth label="Estado Civil" name="estado_civil" options={options_estado_civil} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <DatePickerElement label="Data de Nascimento" name="data_nascimento" inputProps={{ fullWidth: true }} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextFieldElement fullWidth label="Nome da mãe" name="nome_mae" />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextFieldElement fullWidth label="PIS" name="pis" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <MaskedInput fullWidth label="Celular" name="celular" mask="(00) 00000-0000" placeholder="(00) 00000-0000" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <AutocompleteElement label="Instituição de Vinculação" name="instituicao_vinculacao" options={options_instituicao_vinculacao} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextFieldElement fullWidth label="Matrícula" name="matricula" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <SelectElement fullWidth label="Formação" name="formacao" options={options_estado_civil} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextFieldElement fullWidth label="Curriculum Lattes" name="lattes" />
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

export default FormStep1;
