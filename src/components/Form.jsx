import React, { useState } from 'react'; // Importujemy React i hook useState, aby zarządzać stanem formularza

// Komponent Form obsługujący zarówno formularz logowania, jak i rejestracji
function Form({ formType }) {
  // Używamy useState do zarządzania stanem formularza, początkowo ustawiamy puste pola
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '', // Pole "name" używane tylko w formularzu rejestracji
  });

  // Funkcja handleChange obsługuje aktualizowanie wartości inputów w formularzu
  const handleChange = (e) => {
    const { name, value } = e.target; // Pobieramy nazwę i wartość aktualizowanego inputu
    // Aktualizujemy stan formData, używając spread operator, aby nadpisać tylko zmienione pole
    setFormData({
      ...formData,// ... to spread datam rozbija nam na pojedyńcze wartości
      [name]: value,
    });
  };

  // Funkcja handleSubmit obsługuje wysyłanie formularza
  const handleSubmit = (e) => {
    e.preventDefault(); // Zapobiegamy domyślnemu odświeżeniu strony przy wysłaniu formularza
    // Sprawdzamy, czy formularz jest do logowania, czy rejestracji i wyświetlamy odpowiedni alert
    if (formType === 'login') {
      alert('Użytkownik został pomyślnie zalogowany!');
    } else if (formType === 'register') {
      alert('Użytkownik został pomyślnie zarejestrowany!');
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Obsługa wysłania formularza */}
      {/* Jeśli formType to "register", wyświetlamy pole do wpisania imienia */}
      {formType === 'register' && (
        <div>
          <label>Imię:</label>
          <input
            type="text"
            name="name"
            value={formData.name} // Wiążemy wartość inputu z obiektem formData
            onChange={handleChange} // Aktualizujemy stan na podstawie wprowadzonej wartości
          />
        </div>
      )}
      {/* Pole do wprowadzenia emaila, wyświetlane zarówno w formularzu logowania, jak i rejestracji */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email} // Wiążemy wartość inputu z obiektem formData
          onChange={handleChange} // Aktualizujemy stan na podstawie wprowadzonej wartości
        />
      </div>
      {/* Pole do wprowadzenia hasła, wyświetlane zarówno w formularzu logowania, jak i rejestracji */}
      <div>
        <label>Hasło:</label>
        <input
          type="password"
          name="password"
          value={formData.password} // Wiążemy wartość inputu z obiektem formData
          onChange={handleChange} // Aktualizujemy stan na podstawie wprowadzonej wartości
        />
      </div>
      {/* Przyciski: "Zaloguj się" lub "Zarejestruj się", w zależności od formType */}
      <button type="submit">
        {formType === 'login' ? 'Zaloguj się' : 'Zarejestruj się'}
      </button>
    </form>
  );
}

export default Form;

{/*
  Na co warto zwrócić uwagę:

  1: useState: Hook useState zarządza stanem formularza, który zawiera pola email,
     password, a w przypadku rejestracji także name. Na początku każde z tych pól jest pustym stringiem.

  2: Funkcja handleChange: Każde pole formularza jest połączone ze stanem komponentu. Funkcja handleChange
     aktualizuje odpowiednie pole w stanie w zależności od wartości wprowadzonej przez użytkownika.
     Dzięki temu każde wpisanie danych przez użytkownika aktualizuje odpowiedni fragment stanu.

  3: Renderowanie warunkowe: Fragment {formType === 'register' && (...)} sprawia, że pole name pojawia się 
     w przypadku, gdy formularz jest formularzem rejestracyjnym. Dla formularza logowania to pole jest pomijane.

  4: Funkcja handleSubmit: W momencie wysyłania formularza (kliknięcia przycisku), ta funkcja sprawdza, czy użytkownik
     chce się zalogować czy zarejestrować.
     W zależności od typu formularza (logowanie/rejestracja), wyświetlany jest odpowiedni komunikat w alert.
     
  5: Przycisk: Tekst przycisku zmienia się dynamicznie w zależności od wartości formType. Dla formularza logowania
     jest to "Zaloguj się", a dla rejestracji - "Zarejestruj się".

  */}
