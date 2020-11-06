import { url_api } from "./../variables.js";

export const postProduct = (objProduct) => {
    return fetch(`${url_api}/productos`, {
        method: "POST",
        body: JSON.stringify(objProduct),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const putProduct = (objProduct) => {
    let objProductNuevo = {
        id: objProduct.id,
        category: objProduct.category,
        name: objProduct.name,
        price: objProduct.price,
        picture: objProduct.picture,
    };

    return fetch(`${url_api}/productos/${objProduct.id}`, {
        method: "PUT",
        body: JSON.stringify(objProductNuevo),
        headers: {
            "Content-type": "Application/json",
        },
    });
};

export const deleteProductById = (id) => {
    return fetch(`${url_api}/productos/${id}`, {
        method: "DELETE",
    });
};
