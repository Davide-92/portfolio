# Portfolio personale

Sito personale statico, pronto per essere ospitato su **GitHub Pages**.

## Struttura della repo

```
.
├── index.html          ← la pagina (modifica il contenuto qui)
├── style.css           ← grafica e colori
├── script.js           ← menu mobile + anno dinamico
├── README.md
└── assets/
    ├── favicon.svg     ← icona del sito (sostituiscila se vuoi)
    ├── images/         ← qui dentro le tue immagini
    │   ├── profilo.jpg
    │   ├── progetto-1.jpg
    │   ├── progetto-2.jpg
    │   └── progetto-3.jpg
    └── file/
        └── cv.pdf      ← il tuo curriculum (e qualunque altro file scaricabile)
```

## Come pubblicarlo su GitHub Pages

1. **Crea una nuova repository** su GitHub. Per avere l'URL pulito `tuousername.github.io`, chiama la repo esattamente così: `tuousername.github.io` (sostituendo `tuousername` con il tuo). Altrimenti dalle un nome qualsiasi e il sito starà a `tuousername.github.io/nome-repo`.
2. **Carica tutti i file** di questa cartella nella root della repo.
3. Vai in **Settings → Pages**.
4. Sotto "Source" scegli **Deploy from a branch**, poi seleziona il branch `main` e la cartella `/ (root)`. Salva.
5. Aspetta 1-2 minuti, poi visita `https://tuousername.github.io`. È online.

## Cosa modificare

### 1. Testi
Apri `index.html` e cerca-sostituisci:
- `Nome Cognome` → il tuo nome
- `tuamail@example.com` → la tua email
- `tuousername` (nei link a GitHub/LinkedIn/YouTube) → i tuoi handle
- Tutti i paragrafi placeholder → i tuoi testi

### 2. Immagini
Metti i file dentro `assets/images/` con questi nomi (o cambia i nomi nell'HTML):
- `profilo.jpg` → la tua foto (formato consigliato: 4:5, almeno 800x1000px)
- `progetto-1.jpg`, `progetto-2.jpg`, `progetto-3.jpg` → cover dei progetti (4:3, almeno 1200x900px)

**Consiglio**: comprimi le immagini prima di caricarle (con [tinypng.com](https://tinypng.com) o [squoosh.app](https://squoosh.app)). Riduce il peso del 60-80% senza perdita visibile.

### 3. Video YouTube
In `index.html`, nella sezione video, sostituisci `VIDEO_ID_QUI_1` (e gli altri) con l'ID del tuo video. L'ID è la parte dopo `v=` nell'URL:

```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                 ^^^^^^^^^^^
                                 questo è l'ID
```

Quindi `src="https://www.youtube.com/embed/dQw4w9WgXcQ"`.

### 4. CV (e altri file scaricabili)
Metti il tuo CV come `assets/file/cv.pdf`. I link nel sito puntano già a quel percorso.

La cartella `file/` è generica: puoi metterci dentro qualsiasi documento (altri PDF, slide, archivi zip, ecc.) e linkarlo da `index.html` con il percorso `assets/file/nome-del-file.ext`.

### 5. Colori e font (opzionale)
In `style.css`, le prime righe (dentro `:root`) contengono tutte le variabili. Cambia i valori lì e tutto il sito si adatta.

```css
--accent: #b84a1f;   /* il colore d'accento, prova #2a5d8c per un blu */
--bg:     #f4efe6;   /* sfondo, prova #ffffff per bianco puro */
```

## Provare in locale

Apri semplicemente `index.html` con doppio click. Per vedere come renderà davvero (con percorsi assoluti corretti), apri un terminale nella cartella e lancia:

```bash
python3 -m http.server 8000
```

Poi vai su `http://localhost:8000`.

## Dominio personalizzato (opzionale)

Se compri un dominio (es. `tuonome.it`), in **Settings → Pages → Custom domain** inseriscilo. Poi configura i DNS del dominio puntando ai server di GitHub. Trovi la guida ufficiale [qui](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

GitHub fornisce automaticamente HTTPS gratis tramite Let's Encrypt.
