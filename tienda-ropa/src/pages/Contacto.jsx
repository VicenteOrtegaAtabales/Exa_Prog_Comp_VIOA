import { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function Contacto() {
    
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");

    const [errores, setErrores] = useState({});

    const validator = new SimpleReactValidator();

    const enviarFormulario = async (event) => {
        event.preventDefault();

        const nuevosErrores = {};

        if (nombre.trim() === "") {
            nuevosErrores.nombre = "El nombre es obligatorio";
        }
        if (correo.trim() === "") {
            nuevosErrores.correo = "El correo es obligatorio";
        } else if (!correo.includes("@")) {
            nuevosErrores.correo = "Correo inválido";
        }
        if (telefono.trim() === "") {
            nuevosErrores.telefono = "El teléfono es obligatorio";
        }
        if (mensaje.trim() === "") {
            nuevosErrores.mensaje = "El mensaje es obligatorio"
        }

        setErrores(nuevosErrores);

        if (Object.keys(nuevosErrores).length === 0) {

            try {
                await addDoc(
                    collection(db, "contactos"),
                    {
                        nombre,
                        correo,
                        telefono,
                        mensaje,
                        fecha: new Date()
                    }
                );

                alert("Formulario enviado correctamente")

                setNombre("");
                setCorreo("");
                setTelefono("");
                setMensaje("");
                setErrores("");
                
            } catch (error) {
                console.error(
                    "Error al guardar:", error
                );
            }
        }

    };

    return (
        <div className="container mt-5">

            <h1>Contacto</h1>

            <form onSubmit={enviarFormulario}>
                <div className="mb-4">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                    />
                    {errores.nombre && (
                        <p className="text-danger">
                            {errores.nombre}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="form-label">Correo</label>
                    <input
                        type="email"
                        className="form-control"
                        value={correo}
                        onChange={(event) => setCorreo(event.target.value)}
                    />
                     {errores.correo && (
                        <p className="text-danger">
                            {errores.correo}
                        </p>
                     )}
                </div>
                <div className="mb-4">
                    <label className="form-label">Teléfono</label>
                    <input
                        type="tel"
                        className="form-control"
                        value={telefono}
                        onChange={(event) => setTelefono(event.target.value)}
                    />
                     {errores.telefono && (
                        <p className="text-danger">
                            {errores.telefono}
                        </p>
                     )}
                </div>
                <div className="mb-4">
                    <label className="form-label">Mensaje</label>
                    <textarea
                        className="form-control"
                        value={mensaje}
                        onChange={(event) => setMensaje(event.target.value)}
                    />
                     {errores.mensaje && (
                        <p className="text-danger">
                            {errores.mensaje}
                        </p>
                     )}
                </div>
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default Contacto;