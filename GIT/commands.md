http://onlywei.github.io/explain-git-with-d3/


#### configuration:
git config --global user.name "hendels"
git config --global user.email przemy@gmail.com

git config --unset --global user.email
git config user.name - sprawdzenie nazwy uzytkownika w repo

git add . / -A / all
* git branch - pokazuje w ktorej jestes galezi aktualnie - czy master czy jakiejs innej
* git show - pokazuje co zmienil ostatni commit
* git status 
* git log - historia commitow - na gorze najnowszy
    - git log --oneline // w jednej lini podstawowe informacje
    - git log --oneline 10 // ile linii (od najnowszych)
    - git log --since "2019"
    - git log --grep "plik.txt" / "deleted / Updated" --- CASE SENSITIVE
* porzucenie terminala: ---> nacisnij "q"
---------------------------------
* git commit: 
    - git commit -m "some description" < for any branch / master & other-origin
    - tworzy obiekt commita w bazie
    - tworzy informacje o nowym commicie w galezi w ktorej jestesmy
    - ustawia HEAD na najnowsza zmiane
    - git commit -m "description" --- dodaje do mastera 
    - SHIFT + ENTER sprawia ze lamiemy linie [#useful]
    - git commit --amend -m "nowy komentarz" - umozliwia edytowanie poprzedniego commita
---------------------------------    
* git diff - pokazuje roznice wzgledem modyfikacji

------------------------------
* git rm plik.txt - usuwa plik w danym commicie - czyli jezeli plik wystepowal w innym commicie a usuniemy go w
 aktualnym, to zawsze mozemy do niego wrocic
    - git rm --cached plik.txt - usuwamy plik z indeksu - nie fizycznie, plik taki uzyskuje stan niesledzony, dalej 
    sobie siedzi w katalogu ale nie jest commitowany ani nic z nim nie jest robione
    
    
* git mv index.txt index.html --- zmieniamy nazwe pliku z param1 na param2   

---
* git checkout --file // ogolnie to zamienia pliki na te z indeksu (zakomitowane wczesniej)
    - git checkout --*.txt , wszystkie pliki z rozszerzeniem
    - git checkout 5a33dd2 - przywrocenie calego commita z przeszlosci do aktualnego stanu
    - git checkout branch-name - przelaczamy sie na inna galaz
---
* git reset HEAD - jest czytelne, usuwa pliki ze staging area, przywracamy stan indeksu do stanu po ostatnim commicie
    - git reset -- plik.txt
    - git reset HEAD plik.txt
---
* git merge branch-name - mergujemy branch-name (np, master) z galezian a ktorej aktualnie jestesmy
---
* git push origin branch_name
