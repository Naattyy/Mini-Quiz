# 🐞 Bug Reporty – Mini Quiz
Tento dokument obsahuje identifikované chyby v aplikácii **Mini Quiz**.  
Každý bug obsahuje ID, názov, závažnosť, prioritu, prostredie, detailný popis, očakávaný a aktuálny výsledok.

---

## **BUG-001 – Kvíz sa dá odoslať bez označenia odpovede**
**Severity:** Low  
**Priority:** High  
**Environment:** Chrome 142, MacOS 15.6.1 

**Steps:**  
1. Spusti kvíz.  
2. Nevyber žiadnu odpoveď.  
3. Klikni na „Odoslať“.  

**Expected result:**  
Používateľ by mal dostať upozornenie alebo by sa kvíz nemal dať odoslať.  

**Actual result:**  
Kvíz sa odoslal a zobrazilo sa skóre 0.

---

## **BUG-002 – Farba zvýraznenia sa neresetuje po zmene odpovede**
**Severity:** Low  
**Priority:** Low  
**Environment:** Chrome 142, MacOS 15.6.1  

**Steps:**  
1. Vyber nesprávnu odpoveď (označí sa červenou).
2. Klikni na "Odoslať".
3. Vyber inú odpoveď – tentokrát správnu.  
4. Klikni na "Odoslať".  

**Expected result:**  
Zobrazí sa iba zelená farba správnej odpovede.  

**Actual result:**  
Červené zvýraznenie pôvodnej odpovede ostáva viditeľné.

---

**Actual result:**  
CSS chýba (v konzole sa zobrazujú 404 chyby).

---

> 📌 *Poznámka:* Tento dokument môžete doplniť o screenshoty uložené v priečinku `/screenshots` a pridať odkazy priamo k jednotlivým bugom.
