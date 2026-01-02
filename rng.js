{\rtf1\ansi\ansicpg1254\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Dosya Ad\uc0\u305 : src/rng.js\
\
class CollatzRNG \{\
    constructor(seed) \{\
        if (seed <= 0) \{\
            throw new Error("Seed de\uc0\u287 eri pozitif bir tam say\u305  olmal\u305 d\u305 r.");\
        \}\
        this.state = seed;\
    \}\
\
    // Bir sonraki rastgele say\uc0\u305 y\u305  \'fcretir\
    nextInt(limit) \{\
        // Collatz Teoremi (3n + 1) Mant\uc0\u305 \u287 \u305 \
        if (this.state % 2 === 0) \{\
            // \'c7ift ise ikiye b\'f6l\
            this.state = this.state / 2;\
        \} else \{\
            // Tek ise 3 ile \'e7arp 1 ekle\
            this.state = (this.state * 3) + 1;\
        \}\
\
        // Mod\'fclo i\uc0\u351 lemi ile say\u305 y\u305  istenen aral\u305 \u287 a s\u305 k\u305 \u351 t\u305 r\
        return this.state % limit;\
    \}\
\}\
\
// --- TEST KISMI ---\
// Hocaya g\'f6stermek veya statistics.txt dosyas\uc0\u305 na koymak i\'e7in \'e7\u305 kt\u305  \'fcretir.\
\
const baslangicSeed = 19; // Buray\uc0\u305  de\u287 i\u351 tirebilirsin (\'d6rn: \'d6\u287 renci numaran\u305 n sonu)\
const uretilecekAdet = 15;\
const limit = 100; // 0 ile 100 aras\uc0\u305  say\u305 lar \'fcretir\
\
const generator = new CollatzRNG(baslangicSeed);\
\
console.log(`--- Collatz RNG Ba\uc0\u351 lat\u305 ld\u305  (Seed: $\{baslangicSeed\}) ---`);\
console.log(`--- \uc0\u304 lk $\{uretilecekAdet\} Say\u305  \'dcretiliyor ---`);\
\
for (let i = 0; i < uretilecekAdet; i++) \{\
    const randomNum = generator.nextInt(limit);\
    console.log(`Say\uc0\u305  $\{i + 1\}: $\{randomNum\} (\u304 \'e7 Durum: $\{generator.state\})`);\
\}\
\
console.log("--- \uc0\u304 \u351 lem Tamamland\u305  ---");\
}