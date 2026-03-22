# Mira Gündem - QR Kod Tasarım Rehberi

## Renk Şeması
| Kullanım | Renk | Hex Kodu |
|---|---|---|
| QR Kod Modülleri (Koyu) | Lacivert | `#1B2845` |
| QR Kod Modülleri (Vurgu) | Koyu Lacivert | `#2C3E6B` |
| Arka Plan | Beyaz | `#FFFFFF` |
| Aksan / CTA | Kırmızı | `#C62828` |
| Altın Detay | Altın | `#FFB300` |

## Merkez Logo
- MG logosu QR kodun ortasına yerleştirilmeli
- Logo alanı QR kodun toplam alanının **%15-20**'sini geçmemeli
- Logo etrafında 2-3 modül genişliğinde boşluk bırakılmalı
- Logo arka planı beyaz daire/kare ile çerçevelenmeli

## QR Kod Teknik Parametreler
- **Hata Düzeltme Seviyesi:** `H (High - %30)` — logolu QR için zorunlu
- **Minimum Baskı Boyutu:** 3 cm x 3 cm (dijital), 4 cm x 4 cm (basılı)
- **Quiet Zone:** En az 4 modül genişliğinde beyaz kenar boşluğu
- **Format:** SVG (vektörel, ölçeklenebilir) + PNG (300 DPI minimum)

## CTA (Call-to-Action) Metni
Ana CTA: **"Gündemi Yakalamak İçin Tara"**

Alternatifler:
- "Haberleri İlk Sen Öğren – Tara ve İndir!"
- "Son Dakikaları Kaçırma – Hemen Tara!"
- "Mira Gündem'i Telefonuna İndir"

## Baskı Önerileri
| Materyal | Minimum Boyut | Çözünürlük |
|---|---|---|
| Kartvizit | 2.5 cm x 2.5 cm | 300 DPI |
| A4 Broşür | 4 cm x 4 cm | 300 DPI |
| Poster (A3+) | 8 cm x 8 cm | 150 DPI |
| Billboard | 15 cm x 15 cm | 72 DPI |

## QR Kod Oluşturma Araçları (Önerilen)
1. **QR TIGER** — Profesyonel tasarım, logo ekleme, renk özelleştirme
2. **QR-Verse** — Ücretsiz, sınırsız kod, analitik dashboard
3. **TQRCG** — 2 ücretsiz dinamik kod, iyi özelleştirme

> ⚠️ QR kodun hedef URL'si `redirect.html` sayfasının barındırıldığı adres olmalıdır (ör: `https://miragundem.com/app` veya `https://dl.miragundem.com`). Bu sayede fiziksel QR kod hiç değişmeden arka planda yönlendirme güncellenebilir.
