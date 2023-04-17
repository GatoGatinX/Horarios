'use client'
import "../app/styles/login.css"
import jwt from 'jsonwebtoken'
import Cookie from "js-cookie";
import { useState } from "react";
import userData from "../app/data/Users.json";

function page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    //Agregar cookie
    //posible fuente:   https://www.perplexity.ai/search/008beeb4-3a33-4eee-9e39-fed1c7e2cc0d?s=u
    e.preventDefault();
    const user = userData.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      console.log("Inicio de sesión exitoso");
      const userJson = JSON.stringify(user.username);
      console.log(userJson)
      const userObj = JSON.parse(userJson);
      console.log(userObj)
      const token = jwt.sign({ userObj }, 'secreto');
      Cookie.set('token', token, { expires: 1 });
      const tokenFromCookie = Cookie.get('token');
      try {
        const decoded = jwt.verify(tokenFromCookie, 'secreto');
        console.log(decoded);
      } catch (err) {
        console.error(err);
      }
      window.alert("A ver ")
      window.location.replace("/edit/1");
    } else {
      window.alert("Error: Usuario o contraseña invalidos");
    }
  };

  return (
    <div className="login-html">
      <form onSubmit={handleLogin}>
        <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
        <label htmlFor="tab-1" className="tab">Iniciar sesión</label>
        <label className="sign-up" />
        <label className="tab"></label>
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label htmlFor="user" className="label">Usuario</label>
              <input required id="user" type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">Contraseña</label>
              <input required id="pass" type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="group">
              <button type="submit" className="button">Ingresar</button>
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
              <a href="../forgot">¿Olvidaste la contraseña?</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default page
