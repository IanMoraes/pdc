import { QueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
});

class Users {
    constructor() {}
    
    static fetch() {
        return useQuery(["getUsers"], async () => await api.get("/"));
    }

}

export default Users;
