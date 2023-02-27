Esercizio di oggi: Carosello Mono Array
nome repo: js-array-carousel
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell’esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz’ora, così da non perdere di vista il focus dell’esercizio.
Consigli del giorno:
1. Costruiamo del carosello una versione statica contenente solamente un’immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in JS. Potremo quindi usarli come “template”.
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (starà a voi capire quale) rispondete a questa domanda: “Quanti cicli servono?”
Ricordate: il primo push dovrà essere un file README.md contenente la risoluzione dell’esercizio in linguaggio naturale!


MILESTONE 1
------------
HTML 
1. Creo container per immagini
2. Inserisco um img per una immagine d'esempio
3. Creo due div per prev e next

CSS
1. do uno sfondo al container
2. do uno sfondo ai div prev e next
3. Posiziono il container e assegno proprietà specifiche
4. Posiziono i due div per prev e next e assegno proprietà specifiche
5. Do proprietà alla immagine, display none e object-fit

MILESTONE 2
-------------
HTML
1. Camcello le immagini per inserirle in seguito con JS

JAVASCRIPT
1. Creo un array per le 5 immagini
2. assegno una variabile static con valore 0, per avere un putno di partenza
3. creo un array vuoto che conterrà i tag  delle immagini per l'HTML
4. creo un ciclo for andrà a scrivere i tag per le 5 immagini nell 'HTML

MILESTONE 3
-------------
JAVASCRIPT
1. imposto per i div HTML prev e next un evento al click
2. imposto delle condizioni per cui al click una immagine sarà visibile
3. imposto l'evento in modo che termini al finire delle immagine (img.lenght - 1)

BONUS 1
--------
JAVASCRIPT
1. imposto l'evento al click in modo che non finisca ma che ricomincia una volta terminate le immagini

BONU2 2
--------
JAVASCRIPT
1. creo un nuovo ciclo for che genererà immagini più piccole
2. imposto le stesse condizioni del carosello più grande

CSS
----
1. Posiziono le immagine più piccole in modo adeguato 
2. Stilizzo le immagin i più piccole in modo che quella cliccata abbia un bordo.
   Quelle non cliccate restaranno opache