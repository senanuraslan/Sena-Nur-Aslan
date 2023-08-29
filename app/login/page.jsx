"use client";
import React, { useState } from "react";
import "../globals.css";

import { useRouter, useSearchParams } from "next/navigation";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const history = useHistory();

  const handleLogin = () => {
    // Kullanıcı adı ve şifre doğrulama işlemi burada yapılabilir
    // Örneğin, bir API çağrısı kullanarak doğrulama yapılabilir

    if (username === "kullanici_adi" && password === "parola") {
      // Kullanıcı adı ve şifre doğru ise anasayfaya yönlendirme
      history.push("/anasayfa");
    } else {
      // Bilgiler yanlış ise hata mesajı
      setError("Kullanıcı adı veya şifre hatalı.");
    }
  };

  return (
    <div className="hero login-container">
      <div>
      <h2>Login Sayfası</h2>
      <div >
        <label>Kullanıcı Adı:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Şifre:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Giriş Yap</button>
      {error && <p>{error}</p>}
      <p className="error-message">{error}</p>
      <p className="registration-link">
        İlk defa giriş yapan kullanıcılar için <a href="/kayitol">kayıt ol sayfasına yönlendirme</a>.
      </p>
     
    </div>
    </div>
  );
}

export default LoginPage;
