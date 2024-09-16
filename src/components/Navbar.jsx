import React from 'react'; // Importujemy React, który jest potrzebny do tworzenia komponentów w React.

function Navbar({ setFormType }) {
  // Navbar to komponent funkcyjny, który przyjmuje props `setFormType`.
  // `setFormType` jest funkcją przekazaną z komponentu nadrzędnego (App),
  // która pozwala na przełączanie między formularzem logowania a rejestracji.

  return (
    <nav className="navbar"> {/* Główny kontener nawigacji */}
      <ul>
        {/* Każdy element listy (li) reprezentuje link, który przełącza typ formularza. */}
        {/* Gdy klikniemy na "Logowanie", wywołujemy funkcję setFormType z argumentem 'login', co spowoduje zmianę widoku na formularz logowania. */}
        <li onClick={() => setFormType('login')}>Logowanie</li>

        {/* Podobnie, kliknięcie na "Rejestracja" przełącza widok na formularz rejestracji */}
        <li onClick={() => setFormType('register')}>Rejestracja</li>
      </ul>
    </nav>
  );
}

export default Navbar; // Eksportujemy komponent, aby mógł być używany w innych częściach aplikacji.

{/*
    Na co warto zwrócić uwage:

    1:  props (setFormType): setFormType to funkcja przekazana z komponentu nadrzędnego (App).
        Dzięki niej, klikając na odpowiedni element (logowanie lub rejestracja), możemy przełączać typ formularza. W momencie kliknięcia setFormType('login') lub setFormType('register') zmienia stan w App, co powoduje wyświetlenie odpowiedniego formularza.

    2:  Zdarzenia onClick: Dla każdego elementu nawigacyjnego (li) definiujemy zdarzenie onClick. 
        Po kliknięciu zmienia ono typ formularza, co powoduje wyświetlenie formularza logowania lub rejestracji.

    3:  Organizacja kodu: Komponent jest bardzo prosty, ale efektywny. Działa jako interfejs użytkownika
        do zmiany widoku formularza poprzez funkcję setFormType.

    4:  Możliwe rozszerzenia: Możesz dodać style, aby lepiej wyróżnić aktywny element (np. logowanie
        lub rejestracja) za pomocą klas CSS. Można również dodać ikony lub animacje, aby interakcja była bardziej atrakcyjna wizualnie.
    */}