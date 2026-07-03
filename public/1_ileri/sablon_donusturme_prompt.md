# 🎯 Düğün Davetiye Şablonu → Aktif Siteye Dönüştürme Promptu

> **Kullanım:** Aşağıdaki promptu kopyala, `{{...}}` alanlarını kendi bilgilerinle doldur ve yeni bir sohbete yapıştır.

---

```
Elimde bir düğün davetiye HTML şablonu var. Bu şablonu tamamen çalışır, etkileşimli ve tek sayfalı bir düğün davetiye sitesine dönüştürmeni istiyorum.

## 📁 Şablon Dosyaları
Şablon klasörü: @[{{ŞABLON_KLASÖR_YOLU}}]
- İçindeki tüm `code.html` dosyalarını ve resimleri oku.
- Eğer birden fazla alt klasör varsa (davetiye_giri, program_ve_konum, vb.) HEPSİNİ tek bir `code.html` dosyasında birleştir.

## 📸 Galeri Resimleri
Resim klasörü: @[{{RESİM_KLASÖR_YOLU}}]
- Bu klasördeki tüm resimleri kullan.

## 🔧 Yapılacaklar (Zorunlu)

### 1. TEK SAYFA yapısı
- Tüm sayfaları (giriş, program, konum vb.) TEK bir `code.html` dosyasında birleştir.
- Ayrı sayfa navigasyonu (Details, Location butonları) KALDIR.
- Tüm içerik tek sayfada aşağı kaydırarak görüntülenecek.

### 2. Türkçe Dil
- Sayfadaki TÜM yazılar Türkçe olsun.
- Karşılama metni: "Hayatımızı birleştirdiğimiz bu özel günü sizinle paylaşmaktan büyük mutluluk duyuyoruz. Sevgi, kahkaha ve unutulmaz anılarla dolu bu günde yanımızda olmanız dileğiyle."

### 3. Dairesel Kaydırmalı Galeri (Circular Stack Gallery)
Sayfanın üst kısmında resimleri şu şekilde göster:
- Resimler **daire (rounded-full)** formunda kesilsin.
- Ortadaki resim büyük ve net, yanlarındaki resimler küçük ve yarı saydam (3D stack efekti).
- **Sürükleme (drag) ve dokunma (touch swipe)** ile kaydırılsın.
- Resme tıklandığında öne gelsin.
- Altta **nokta göstergesi (dots indicator)** olsun ve aktif resme göre animasyonlu güncellensin.
- Resim sürüklenirken metin/resim seçilme hatası olmasın (draggable="false", select-none, pointer-events-none).
- Boyutlar: `w-60 h-60 md:w-80 md:h-80`, Container: `h-[350px] md:h-[450px]`

### 4. Tarih & Saat Kartı
- Düğün bilgileri:
  - **Tarih:** {{DÜĞÜN_TARİHİ}} (örn: 24 Ağustos 2026, Cumartesi)
  - **Karşılama Saati:** {{KARŞILAMA_SAATİ}} (örn: 19:00)
  - **Tören Saati:** {{TÖREN_SAATİ}} (örn: 20:00)
- Kartın ortasına **timeline (akış) görseli** ekle: Karşılama → kesik çizgi → Tören, ikonlarla.
- **"Akıllı Takvime Ekle"** butonu → Google Calendar linki ile çalışsın.

### 5. Mekan Bilgisi Kartı
- Mekan bilgileri:
  - **Mekan Adı:** {{MEKAN_ADI}}
  - **Adres:** {{MEKAN_ADRESİ}}
- Kartın ortasına **Google Haritalar mini iframe** yerleştir (canlı harita).
- **"Yol Tarifi Al"** butonu → şu linke yönlensin: {{GOOGLE_MAPS_LİNKİ}}

### 6. Çiftin İsimleri
- **İsimler:** {{ÇİFT_İSİMLERİ}} (örn: Ayşe & Ahmet)
- Header ve sayfa gövdesinde kullan.

### 7. Başlatma Dosyası
- Aynı klasöre `siteyi_ac.bat` dosyası oluştur. Çift tıkla ile tarayıcıda açılsın.

## 🎨 Tasarım Kuralları
- Şablonun orijinal renk paleti ve tasarım dilini KORU.
- Tailwind CSS CDN + Material Symbols Outlined kullan.
- Mobil ve masaüstü uyumlu (responsive) olsun.
- Hover efektleri ve geçiş animasyonları ekle.

## ⚠️ Dikkat Edilecekler
- Eski şablondaki harici URL resimlerini KULLANMAyın, yerel resimleri kullanın.
- Tüm butonlar GERÇEK linklerle çalışmalı (Google Calendar, Google Maps).
- Sayfanın alt kısmında gereksiz bottom nav bar OLMASIN.
- HTML dosyasının `<head>` kısmında şablondaki tailwind config ve renk tanımlarını AYNEN koru.
```

---

## 📋 Doldurulacak Alanlar Listesi

| Alan | Açıklama | Örnek |
|------|----------|-------|
| `{{ŞABLON_KLASÖR_YOLU}}` | Şablon HTML dosyalarının bulunduğu klasör | `c:\...\2\stitch_minimalist_...\davetiye_giri` |
| `{{RESİM_KLASÖR_YOLU}}` | Galeri resimlerinin olduğu klasör | `c:\...\kaydırmlı` |
| `{{DÜĞÜN_TARİHİ}}` | Düğün tarihi ve günü | `24 Ağustos 2026, Cumartesi` |
| `{{KARŞILAMA_SAATİ}}` | Karşılama saati | `19:00` |
| `{{TÖREN_SAATİ}}` | Tören saati | `20:00` |
| `{{MEKAN_ADI}}` | Düğün salonu adı | `ALICE PALAZZO LUXURY EVENT HALL` |
| `{{MEKAN_ADRESİ}}` | Tam adres | `Mimarsinan, Murat Cd. NO:45, Kayseri` |
| `{{GOOGLE_MAPS_LİNKİ}}` | Google Maps paylaşım linki | `https://maps.app.goo.gl/pykBJdPSNuyCpBmd9` |
| `{{ÇİFT_İSİMLERİ}}` | Çiftin isimleri | `Ayşe & Ahmet` |

> [!TIP]
> Birden fazla şablon dönüştürmek istiyorsan, her şablon için yeni bir sohbet aç ve bu promptu doldurup yapıştır.
