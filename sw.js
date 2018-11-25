self.addEventListener('install', function(event){
  var urlsToCache =[
	   'css/styles.css',
     'data/restaurants.json',
     'js/dbhelper.js',
     'js/main.js',
     'js/restaurant_info.js',
     'index.html',
     'restaurant.html'
   ];
   event.waitUntil(
	    caches.open('restaurant-app-v2').then(function(cache){
	    return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    }).catch(function(){
      console.log("Fetching Failed!");
    })
  );
});
