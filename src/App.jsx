import React, { useState } from 'react'; // Importujemy React i useState, aby móc zarządzać stanem aplikacji.
import Navbar from './components/navbar'; // Import komponentu Navbar, który wyświetla pasek nawigacyjny.
import Footer from './components/footer'; // Import komponentu Footer, który wyświetla stopkę.
import Form from './components/Form'; // Import komponentu Form, który będzie wyświetlał formularze logowania i rejestracji.
import './App.css'; // Import pliku CSS z głównymi stylami aplikacji.

function App() {
  // Używamy useState, aby zarządzać aktualnie wyświetlanym formularzem (logowanie lub rejestracja).
  // Początkowy stan to 'login', co oznacza, że formularz logowania jest domyślnie wyświetlany.
  const [formType, setFormType] = useState('login');

  return (
    <div>
      {/* Navbar z przekazaniem funkcji setFormType, która będzie zmieniać widoczny formularz na logowanie lub rejestrację. */}
      <Navbar setFormType={setFormType} />

      <main>
        <div className="form-container">
          {/* Jeśli formType jest 'login', wyświetla się formularz logowania. */}
          {formType === 'login' && (
            <div className="form-box">
              <h2>Logowanie</h2>
              {/* Komponent Form wyświetla formularz logowania z przekazaniem props formType="login". */}
              <Form formType="login" />
            </div>
          )}

          {/* Jeśli formType jest 'register', wyświetla się formularz rejestracji. */}
          {formType === 'register' && (
            <div className="form-box">
              <h2>Rejestracja</h2>
              {/* Komponent Form wyświetla formularz rejestracji z przekazaniem props formType="register". */}
              <Form formType="register" />
            </div>
          )}
        </div>
      </main>

      {/* Wyświetlamy komponent Footer na dole strony. */}
      <Footer />
    </div>
  );
}

export default App;
{/*
  Na co warto zwrócić uwagę:
  1: useState: Zmienna formType zarządza tym, który formularz (logowania lub rejestracji) ma być wyświetlony.
     Zmieniamy ten stan za pomocą funkcji setFormType, przekazanej do komponentu Navbar.

  2: Renderowanie warunkowe: W zależności od wartości formType, aplikacja renderuje albo formularz logowania,
     albo formularz rejestracji. Używamy tutaj renderowania warunkowego z wykorzystaniem operatora &&,
     który wyświetla element tylko wtedy, gdy warunek jest spełniony.

  3: Przekazywanie props: Do komponentu Form przekazywany jest props formType, dzięki czemu komponent wie,
     czy ma obsługiwać logowanie czy rejestrację.

  4: Organizacja komponentów: Struktura kodu jest czytelna i zorganizowana — główna aplikacja (App) zawiera
     główne komponenty: Navbar, Form, oraz Footer. Każdy z tych komponentów ma swoją odpowiedzialność.

  5: Styling: App.css jest importowany w tym pliku, co zapewnia stylizację aplikacji. Dobre zarządzanie
     stylami pozwala na łatwe kontrolowanie wyglądu aplikacji bez mieszania stylów z logiką komponentów.

  */}