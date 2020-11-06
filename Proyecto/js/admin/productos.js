import { url_api } from "./variables.js";
import { postProduct, putProduct, deleteProductById } from "./service/servicio-productos.js";

const tbody = document.getElementById("tbody-prod");
const form = document.getElementById("formProd");
const category = document.getElementById("inputCategory");
const name = document.getElementById("inputName");
const price = document.getElementById("inputPrice");
const image = document.getElementById("inputImg");
const btnAction = document.getElementById("btnAction");

let modo = "crear";
let productos = [];
let ProductoGlobal = {};


form.onsubmit = (e) => {
    e.preventDefault();
    if (name.value.trim() === "" || category.value.trim() === "" || price.value.trim() === "" || image.value.trim() === "") {
        Swal.fire({
            title: "ERROR!",
            text: "Todos los campos deben estar llenados",
            icon: "error",
        });
        return;
    }
    if (modo === "crear") {
        Swal.fire({
            title: "¿Crear?",
            text: "¿Seguro que desea ingresar un producto?",
            icon: "info",
            showCancelButton: true,
        }).then((response) => {
            console.log(response);
            if (response.isConfirmed) {
                let objProduct = {
                    category: category.value.trim(),
                    name: name.value.trim(),
                    price: price.value.trim(),
                    picture: image.value.trim(),
                };
                postProduct(objProduct).then((peticion) => {
                    peticion.json().then((data) => {
                        if (data.id) {
                            Swal.fire({
                                title: "Hecho",
                                text: "Registro creado exitosamente",
                                icon: "success",
                                timer: 1500,
                                showConfirmButton: false,
                            });
                            console.log(data);
                            category.value = "";
                            name.value = "";
                            price.value = "";
                            image.value = "";
                            getProduct();
                        }
                    });
                });
            }
        });
    } else {
        // Modo Editar
        let objProduct = {
            id: ProductoGlobal.id,
            category: ProductoGlobal.category,
            name: ProductoGlobal.name,
            price: ProductoGlobal.price,
            picture: ProductoGlobal.picture,
        };
        putProduct(objProduct).then((peticion) => {
            peticion.json().then((data) => {
                console.log(data);
                getProduct();
                modoCrear();
            });
        });
    }
};

const modoCrear = () => {
    ProductoGlobal = {};
    modo = "crear";
    btnAction.innerText = "Crear Producto";
    name.value = "";
};

const modoEditar = (producto) => {
    ProductoGlobal = { ...producto };
    modo = "editar";
    btnAction.innerText = "Guardar Cambios";
    category.value = ProductoGlobal.category;
    name.value = ProductoGlobal.name;
    price.value = ProductoGlobal.price;
    image.value = ProductoGlobal.picture;
};

const eliminar = (id) => {
    Swal.fire({
        title: "¿Eliminar?",
        text: "¿Seguro que desea eliminar un producto?",
        icon: "warning",
        showCancelButton: true,
    }).then((rpta) => {
        if (rpta.isConfirmed) {
            deleteProductById(id).then((peticion) => {
                peticion.json().then((data) => {
                    if (data.id) {
                        Swal.fire({
                            title: "¡Éxito!",
                            text: "Registro eliminado exitosamente",
                            icon: "success",
                            timer: 1500,
                            showConfirmButton: false,
                        });
                        console.log(data);
                        getProduct();
                    }
                });
            });
        }
    });
};

const dibujarTabla = () => {
    tbody.innerHTML = "";
    productos.forEach((Producto) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${Producto.id}</td>
                        <td>${Producto.category}</td>
                        <td>${Producto.name}</td>
                        <td>${Producto.price}</td>
                        <td>
                            <img src="${Producto.picture}" alt="" width="150"/>
                        </td>`;

        let tdBotones = document.createElement("td");

        let btnEditar = document.createElement("button");
        btnEditar.classList.add("btn", "btn-warning", "mr-2");
        btnEditar.innerText = "Editar";
        btnEditar.onclick = () => {
            modoEditar(Producto);
        };

        let btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "btn-danger");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.onclick = () => {
            eliminar(Producto.Producto_id);
        };

        tdBotones.appendChild(btnEditar);
        tdBotones.appendChild(btnEliminar);

        tr.appendChild(tdBotones);
        tbody.appendChild(tr);
    });
};

const getProduct = () => {
    fetch(`${url_api}/productos`).then((peticion) => {
        peticion.json().then((data) => {
            console.log(data);
            productos = [...data];
            dibujarTabla();
        });
    });
};
getProduct();
