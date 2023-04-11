import { Container } from "@mui/material";
import React from "react";
import Header from "./Header/Header";
export default function Layout({ children }) {
    return (
        <>
            <Container maxWidth="xl">
                <Header />
                {children}
            </Container>
        </>
    );
}
