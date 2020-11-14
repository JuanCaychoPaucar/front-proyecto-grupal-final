import React from 'react';

const ClienteFormularioLogin = () => {
    return (
        <form action="" className="needs-validation" noValidate>
            <div className="form-row">
                <div className="col-md-12 mb-3 mt-3">
                    <label htmlFor="inputEmail">Correo</label>
                    <input type="email" className="form-control input-login" id="inputEmail" placeholder="Ingrese correo"
                        required />
                    <div className="invalid-tooltip">
                        Por favor, ingresar datos correctos.
                    </div>
                </div>

                <div className="col-md-12 mb-3 mt-3">
                    <label htmlFor="inputPasswd">Contraseña</label>
                    <input type="password" className="form-control input-login" id="inputPasswd"
                        placeholder="Ingrese contraseña" required />
                    <div className="invalid-tooltip">
                        Por favor, ingresar datos correctos.
                    </div>
                </div>
            </div>
            <button className="btn btn-outline-success mb-3" type="submit">Iniciar Sesión</button>
        </form>
    )
}

export default ClienteFormularioLogin;
