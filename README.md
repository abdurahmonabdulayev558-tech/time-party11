# Time School Party 🎉

O'quv markazi uchun "Time Party" tizimi — **haqiqiy umumiy baza** bilan (hamma kompyuter bir xil ma'lumotni ko'radi).

## Tuzilishi

```
time party/
├── src/                 # React frontend (student / admin / teacher)
│   ├── main.tsx
│   ├── api.ts           # backend bilan aloqa
│   └── styles.css
├── server/              # Node.js backend (Express + SQLite)
│   ├── index.js
│   └── data.db          # baza fayli (avtomatik yaratiladi)
└── package.json
```

## Ishga tushirish

Avval barcha paketlarni o'rnatish (bir marta):

```powershell
npm run install:all
```

Keyin ishlab chiqish (dev) rejimida ishga tushirish — **ikkala server** birga ko'tariladi:

```powershell
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:4000`

### Production (bitta server)

```powershell
npm run start
```

Bu avval frontend'ni build qiladi, keyin bitta serverda (`http://localhost:4000`)
ham sahifani, ham API'ni beradi.

## 🚀 Deploy
> ⚠️ **Netlify'ga qo'yib bo'lmaydi!** Loyihada haqiqiy backend (Node.js + SQLite baza) bor,
> Netlify esa faqat statik saytni joylaydi. **Render** yoki **Railway** kerak.
>
> Batafsil qo'llanma: **[DEPLOY.md](DEPLOY.md)**

## Kirish ma'lumotlari

| Panel | Manzil | Login | Parol |
|-------|--------|-------|-------|
| **Admin** | `/admin` | `timeschool` | `112231` |
| **Ustoz** | `/teacher` | admin qo'shgan login/parol | — |

Boshlang'ich ustozlar (keyinchalik admin o'zgartira oladi):

- `jasur` / `jasur2026`
- `malika` / `malika2026`
- `sardor` / `sardor2026`

## Imkoniyatlar

- **O'quvchi** (`/`) — avval ustozni tanlaydi, keyin party'ga ovoz beradi.
- **Admin** (`/admin`) — statistika, ovoz berishni boshqarish, ustoz qo'shish/tahrirlash,
  kunlik tashriflar tarixi ("qaysi kuni qancha odam kirdi").
- **Ustoz** (`/teacher`) — o'z reytingi, o'zini tanlagan o'quvchilar, takliflar.

## Muhim eslatmalar

- Barcha ma'lumotlar **serverdagi SQLite bazada** saqlanadi — har bir qurilma bir xil ma'lumotni ko'radi.
- Brauzerda `localStorage` faqat **shaxsiy holat** uchun qoladi (men ovoz berdimmi, kim sifatida kirganman).
- Kunlik tashrif: bitta brauzer kuniga faqat **1 marta** sanaladi.
- `VITE_API_URL` muhit o'zgaruvchisi orqali API manzilini boshqacha qilish mumkin
  (bo'sh bo'lsa — bir xil hostning `/api` yo'li ishlatiladi).
