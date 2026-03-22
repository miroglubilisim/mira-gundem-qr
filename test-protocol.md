# Mira Gündem - Baskı Öncesi Test Protokolü

## 1. Fonksiyonel Testler

### 1.1 Cihaz Algılama Testi
| # | Test | Beklenen Sonuç | ✓/✗ |
|---|---|---|---|
| 1 | iPhone ile QR tarama | App Store açılır | |
| 2 | iPad ile QR tarama | App Store açılır | |
| 3 | Android telefon ile QR tarama | miragundem.com açılır (Play Store hazır olunca Play Store) | |
| 4 | Masaüstü tarayıcıda URL açma | miragundem.com açılır | |
| 5 | Huawei cihaz ile QR tarama | Android davranışı (fallback) | |

### 1.2 Tarayıcı DevTools Simülasyon Testi
1. Chrome DevTools → Device Toolbar aç (F12 → Ctrl+Shift+M)
2. iPhone 14 Pro seç → Sayfayı yenile → App Store'a yönlendirme kontrolü
3. Samsung Galaxy S21 seç → Sayfayı yenile → Fallback URL kontrolü
4. Responsive mod → Masaüstü boyutu → Web sitesi yönlendirme kontrolü

### 1.3 Fallback URL Testi
| # | Test | Beklenen Sonuç |
|---|---|---|
| 1 | `config.json` → `android.active: false` iken Android'den tarama | miragundem.com açılır |
| 2 | `config.json` → `ios.active: false` yapıp iOS'den tarama | miragundem.com açılır |
| 3 | Config dosyası yüklenemediğinde | Gömülü default URL'ler kullanılır |

## 2. Dinamik Güncelleme Testi

### 2.1 Config Güncelleme Senaryosu
1. `config.json` dosyasını aç
2. `android.url` → `https://play.google.com/store/apps/details?id=com.miragundem` yaz
3. `android.active` → `true` yap
4. Sayfayı yenile
5. ✅ Android butonu "Yakında" etiketi olmadan görünmeli
6. ✅ Android'den tarama Play Store'a yönlendirmeli

## 3. Görsel / UI Testi

| # | Kontrol | ✓/✗ |
|---|---|---|
| 1 | Logo doğru görünüyor |  |
| 2 | "SON DAKİKA" badge animasyonu çalışıyor |  |
| 3 | Dönen sloganlar okunuyor |  |
| 4 | Butonlar tıklanabilir ve hover efekti var |  |
| 5 | Mobilde responsive düzgün görünüyor |  |
| 6 | Geri sayım sayacı düzgün çalışıyor |  |
| 7 | Arka plan animasyonları akıcı |  |

## 4. QR Kod Fiziksel Test

| # | Test | Beklenen Sonuç |
|---|---|---|
| 1 | 10 cm mesafeden tarama | QR başarıyla okunur |
| 2 | 30 cm mesafeden tarama | QR başarıyla okunur |
| 3 | Ekrandan tarama (telefon ekranında QR) | QR okunur |
| 4 | Baskı çıktısından tarama (A4 kağıt) | QR okunur |
| 5 | Düşük ışıkta tarama | QR okunur |
| 6 | Açılı tarama (45°) | QR okunur |

## 5. Performans Kontrolleri
- [ ] Sayfa yüklenme süresi < 2 saniye
- [ ] Yönlendirme 3 saniye içinde gerçekleşiyor
- [ ] HTTPS sertifikası aktif (hosting sonrası)
- [ ] Mobile PageSpeed skoru > 90

## 6. Son Kontrol Listesi (Baskıya Onay)
- [ ] Tüm cihaz testleri geçti
- [ ] Fallback URL doğru çalışıyor
- [ ] Config güncelleme test edildi
- [ ] QR kod minimum 3 farklı cihazda tarandı
- [ ] QR kod baskı boyutu kontrol edildi
- [ ] CTA metni okunabilir
- [ ] ✅ **BASKI ONAYI VERİLDİ**
