'use client'
import React, { useState } from 'react';
import './LoginForm.css'; // Importa tu archivo CSS con estilos
import { IngresarSistema } from '@/utils/Conexionsw';
import { Guardar, Session } from '@/utils/UseSession';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitLoginForm = (data) => {
    console.log("HELLO")
    const datos = {'username':data.username, 'password':data.password};
    IngresarSistema(datos).then((info)=>{
      if(info && info.token){
        const data = [info.username]
        Guardar('username',username);
        Session(info.token);
        console.log("Bienvenido")
      }else{
        console.log("No se pudo iniciar")
      }
    })
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Iniciar Sesión</h2>
        <label htmlFor="username">Nombre de Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="button" onClick={submitLoginForm}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;