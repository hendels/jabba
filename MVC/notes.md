# MVC = model view controller

## MODEL (SERWER Z DB)::: 
    dodawanie / pobieranie danych z DB
    modyfikowanie danych z lub do DB
    rozmawia tylko z kontrolerem
## VIEW :::
    user widzi tylko to co podaje mu VIEW
    React może tym być, podaje HTMLa / CSSa
    rozmawia tylko z controller
## CONTROLLER (OSOBNY SERWER bez DB)::: 
    procesuje zapytania GET/POST/PUT/DESTROY
    zawiera w sobie cała logikę komunikacji serwera z DB
    Middleman:
        bierze info od usera
        procesuje informacje i rozmawia z baza danych
        odbiera informacje z DB
        gada z VIEW i przekazuje mu dane
POMIEDZY VIEW A CONTROLLER >> ROUTE PROCESSING, czyli zarzadzanie sciezkami na stronie