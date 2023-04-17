'use client'
import "../../app/styles/rec.css"
import { useState } from "react";
import userData from "../data/Users.json"

function page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = userData.restore.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      const user1 = userData.users.find(
        b => b.username === username
      );
      alert("la contraseña es:\n" + (user1.password));
    } else {
      window.alert("Error: Usuario o Clave invalidos");
    }
  };
  return (
    <div className="login-html">
      <title> Formulario de recuperación</title>
      <link rel="stylesheet" href="css/rec.css" />
      <form onSubmit={handleLogin} id="loginform">
        <div id="contenedor"><div id="central"><div id="login">
          <div className="titulo">Recuperar</div>
          <input required id="user" type="text" className="input" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input required id="pass" type="password" className="input" placeholder="Clave" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="button">Mostrar Clave</button>
        </div>
          <div className="inferior">
            <a href="../">Volver</a>
          </div></div></div>
      </form>
    </div>
  );
}

export default page
