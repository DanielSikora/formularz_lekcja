import React, { useState } from 'react'; // Importujemy React i useState, aby móc zarządzać stanem aplikacji.
import Navbar from './components/navbar'; // Import komponentu Navbar, który wyświetla pasek nawigacyjny.
import Footer from './components/footer'; // Import komponentu Footer, który wyświetla stopkę.
import './App.css'; // Import pliku CSS z głównymi stylami aplikacji.
import LoginApp from './components/LoginApp';
import RegisterApp from './components/RegisterApp';

function App() {
  // Używamy useState, aby zarządzać aktualnie wyświetlanym formularzem (logowanie lub rejestracja).
  // Początkowy stan to 'login', co oznacza, że formularz logowania jest domyślnie wyświetlany.
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div>
      {/* Navbar z przekazaniem funkcji setFormType, która będzie zmieniać widoczny formularz na logowanie lub rejestrację. */}
      <Navbar setFormType={setCurrentPage} />

      <main>
        {currentPage === 'login' && <LoginApp />}
        {currentPage === 'register' && <RegisterApp />}
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