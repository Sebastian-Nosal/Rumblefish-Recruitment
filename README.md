# Raport z działania aplikacji

## Testy przeglądarki

Zgodnie z poleceniem, aplikacja działa poprawnie na przeglądarkach Chrome w wersjach na PC i Android. Ręcznie przetestowałem ją na następujących urządzeniach:

- Komputer (Windows 10) z wyświetlaczem 24" – Chrome i Firefox
- Laptop 12" – Chrome
- Tablet 12" – Chrome
- Telefon 7" – Chrome
- Emulatory w narzędziach deweloperskich przeglądarki Firefox

Na żadnym z powyższych urządzeń nie wystąpiły problemy z funkcjonowaniem aplikacji ani deformacjami interfejsu użytkownika uniemożliwiającymi pracę.

## Obsługa gestów i mechanizmu przeciągania

Według dostępnych mi informacji, Chrome (PC) nie obsługuje gestów związanych z dotykiem. Dlatego, poza obsługą gestów na urządzeniach mobilnych, zrealizowałem skrypt oparty o mechanizm przeciągania elementów, który działa podobnie.

## Testy integracyjne z backendem

Testy integracyjne z backendem można wykonać np. za pomocą `json-server` i mockowania adresu URL. Nie implementowałem tego, ponieważ:

- Pobieranie danych z API jest wykomentowane.
- Komunikacja z serwerem jest udawana (linie kodu odpowiedzialne za obsługę zapytań HTTP zastępowane są statycznymi odpowiedziami).

## System informowania o błędach

Został wykonany system informowania o błędach działania aplikacji. Z powodu braku komunikacji z API, błędy nie mają możliwości wystąpienia. Niemniej, system ten został przeze mnie przetestowany zarówno ręcznie, jak i za pomocą automatycznych testów.

