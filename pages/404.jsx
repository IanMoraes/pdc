import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () => {
    const router = useRouter();

    return (
        <div>
            <h1>Ops! Algo deu errado.</h1>
            <p>Você será redirecionado para a página 404 em breve...</p>
            <Link href="/">Voltar para a página inicial</Link>
        </div>
    );
};

export default ErrorPage;
