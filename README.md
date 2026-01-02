# CRNG – Collatz Random Number Generator

Bu projede, ünlü matematiksel problem olan **Collatz Sanısı (3n+1 Problemi)** tabanlı, seed (başlangıç değeri) kullanan bir sözde rastgele sayı üreteci (PRNG) algoritması geliştirilmiştir.

Proje, Bilgi Sistemleri Güvenliği dersi kapsamında; kaos teorisi, deterministik algoritmalar ve sayısal dizilerin rastgelelik özelliklerini incelemek amacıyla hazırlanmıştır.

## Algoritmanın Temeli

Algoritma, kullanıcı tarafından girilen pozitif bir tam sayı (seed) ile başlar. Collatz dizisinin kaotik (öngörülemez gibi görünen) yapısı kullanılarak sayılar türetilir.

Algoritma temel olarak şu kurallara dayanır:
* Sayı çift ise: **İkiye bölme (n / 2)**
* Sayı tek ise: **3 ile çarpıp 1 ekleme (3n + 1)**
* Sonuçların **Mod (Modülo)** işlemi ile sınırlandırılması

Bu yapı, sayının "Hailstone (Dolu Taneleri)" dizisi adı verilen inip çıkan bir grafik çizmesini sağlar ve bu dalgalanma rastgelelik kaynağı olarak kullanılır.

## Seed (Anahtar) Kavramı

Seed değeri, Collatz dizisinin başlangıç noktasını belirler. Aynı başlangıç sayısı her zaman aynı Collatz dizisini oluşturacağı için algoritma **deterministiktir**.

Örneğin, Seed = 5 verildiğinde üretilecek sayı dizisi her zaman aynı sırayla çıkar. Bu durum, algoritmanın test edilebilir olmasını sağlar.

## İstatistiksel Değerlendirme

Algoritma:
* Matematiksel olarak ilginç bir kaotik yapıya sahiptir.
* Kısa vadede yüksek rastgelelik hissi verir.
* Döngüye girme (4-2-1 döngüsü) riski taşır, bu yüzden algoritma içinde döngü kırıcı mekanizmalar (re-seed) kullanılması önerilir.
* Basit matematiksel işlemler içerdiği için işlemci dostudur.

## Kriptografik Değerlendirme

Bu algoritma:
* **Kriptografik olarak güvenli değildir (Not CSPRNG).**
* Collatz dizisi matematikçiler tarafından bilinen bir dizi olduğu için, saldırgan bir sonraki sayıyı tahmin edebilir.
* Banka şifreleme veya veri güvenliği gibi kritik sistemlerde **kullanılmamalıdır**.

Bu çalışma, kaotik matematiksel dizilerin bilgisayar bilimlerinde sayı üretimi için nasıl simüle edileceğini göstermek amacıyla hazırlanmış bir akademik projedir.
