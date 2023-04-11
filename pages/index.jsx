import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Link from "../components/Link";
import { useRouter } from "next/router";
import useUserDataStore from "../stores/useUserDataStore";
const Index = () => {
    const router = useRouter();
    const { userData, setData, setLocalStore, getLocalStore } = useUserDataStore();

    useEffect(() => {
        setLocalStore(JSON.stringify(router.query));
        setData(router.query);
    }, [router.query]);

    return (
        <>
            <p>Olá, {userData.nome}</p>
            <Link href="/bolsistas/bolsistas" as="/bolsistas/bolsistas.html">
                Formulário
            </Link>
        </>
    );
};

export default Index;
