import { useState } from "react";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function Login() {

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [errores, setErrores] = useState({});

    const validarFormulario = () => {

        const nuevosErrores = {};

        if (correo.trim() === "") {
            nuevosErrores.correo = "El correo es obligatorio";
        } else if (!correo.includes("@")) {
            nuevosErrores.correo = "Debe ingresar un correo válido";
        }
        if (password.trim() === "") {
            nuevosErrores.password = "La contraseña es obligatoria";
        } else if (password.length < 8 ) {
            nuevosErrores.password = "La contraseña debe tener al menos 8 caracteres";
        }

        setErrores(nuevosErrores);

        return Object.keys(nuevosErrores).length === 0;
    };

    const registrarUsuario = async () => {

        if (!validarFormulario()) {
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, correo, password);

            alert("Usuario registrado correctamente");
        } catch (error) {
            console.error(error);

            alert("Error al registrar usuario");
        } 
    };

    const iniciarSesion = async () => {
        
        if (!validarFormulario()) {
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, correo, password);

            alert("Sesión iniciada correctamente");
        } catch (error) {
            console.error(error);

            alert("Credenciales incorrectas");
        }

    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <div className="mb-3">

                <label className="form-label"> Correo </label>

                <input
                   type="email"
                   className="form-control"
                   value={correo}
                   onChange={(event) =>
                     setCorreo(event.target.value)
                   }
                   />
                   {errores.correo && (
                    <p className="text-danger">
                       {errores.correo}
                    </p>
                    )}
            </div>

            <div className="mb-3">

                <label className="form-label"> Contraseña </label>
                
                <input
                   type="password"
                   className="form-control"
                   value={password}
                   onChange={(event) =>
                     setPassword(event.target.value)
                   }
                   />
                   {errores.password && (
                    <p className="text-danger">
                       {errores.password}
                    </p>
                    )}
            </div>

            <button className="btn btn-success me-2" onClick={registrarUsuario}> Registrarse </button>

            <button className="btn btn-primary" onClick={iniciarSesion}> Iniciar Sesión </button>
        </div>
    );
}

export default Login;