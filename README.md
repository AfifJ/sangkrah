# # Sangkrah 🗑

Cek demo website di sini

> [Sangkrah website](https://sangkrah.vercel.app)


## Apa itu Sangkrah?

Sangkrah adalah sebuah aplikasi yang dibuat untuk membantu mengelola sampah. Aplikasi ini akan memberikan informasi kepada pengguna mengenai tempat pembuangan sampah dan tempat daur ulang terdekat. 

## Teknologi yang Digunakan

Aplikasi ini menggunakan:

- **Laravel** sebagai backend/framework 
- **React** sebagai frontend
- **MySQL** sebagai database

## Fitur-fitur

- Menampilkan peta dan lokasi tempat pembuangan sampah dan daur ulang terdekat
- Memberikan informasi alamat dan jam operasional tempat tersebut   
- Filter lokasi berdasarkan kategori sampah
- Memberikan edukasi mengenai pentingnya 3R (Reduce, Reuse, Recycle)

## Instalasi
Pastikan PHP dan composer terinstall
1. Clone repository ini
2. Lakukan import pada file dalam folder `sangkrahdb` database
2. Install dependencies dengan ```composer install```  
3. Copy file .env.example menjadi .env dan sesuaikan database
4. Jalankan ```php artisan key:generate```
5. Jalankan ```php artisan migrate``` untuk migrate database
6. Buat symbolic link dengan ```php artisan storage:link```
7. Jalankan server dengan `php artisan serve`

Buka folder client 
1. Masukkan env berupa mapbox api, dapat berupa:
`VITE_MAPBOX_KEY=pk.eyJ1IjoiYWZpZmphbWhhcmkiLCJhIjoiY2xzZzlpdXU5MXNpZjJqcXVibWJpcDRyYSJ9.2C7RNnlVIIFz2TFrq41v7g`
1. Jalankan ```npm install``` dan ```npm run dev``` untuk install front-end
1. Buka 127.0.0.1:8000 pada browser untuk menggunakan aplikasi
