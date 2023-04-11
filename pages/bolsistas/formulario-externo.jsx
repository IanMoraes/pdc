import React from "react";
import SignUpExternalForm from "../../components/Forms/SignUpExternalForm/SignUpExternalForm";
import { Container, Paper } from "@mui/material";

function Bolsistas() {
    return (
        <>
            <Paper sx={{ padding: 4 }} elevation={6}>
                <SignUpExternalForm />
            </Paper>
        </>
    );
}

export default Bolsistas;
