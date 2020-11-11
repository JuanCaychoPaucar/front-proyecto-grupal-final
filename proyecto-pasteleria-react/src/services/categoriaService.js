import { URL_BACKEND } from "../environments/environments";

export const getCategoriaById = async (categoria_id) => {
    const peticion = await fetch(`${URL_BACKEND}/categoria/${categoria_id}`);
    const data = await peticion.json();
    return data;
};