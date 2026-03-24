const CACHE_NAME = 'ojt-v1';
// Add the names of your images to the list below
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './images/TempCalibrator.jpg' 
  './images/Calculator1.jpg' 
  './images/Gloves1.jpg' 
  './images/Multimeter1.jpg' 
  './images/Probes1.jpg' 
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
