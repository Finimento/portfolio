'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "13647af568f5c2afe1f26e57fc71e26e",
"assets/AssetManifest.bin.json": "62c264a108bfd896f413548ce1f409c7",
"assets/AssetManifest.json": "c6f1df2f296d048e41af1ee2b5c18f13",
"assets/assets/fonts/BoxIcons.ttf": "92ba7cbb384d35ae4858f9b59d8fc373",
"assets/assets/fonts/FontAwesome.ttf": "de6bf66865cf2734984feeeb9c638a3a",
"assets/assets/fonts/Nunito-Bold.ttf": "91019ffb3b1df640e444b34e5a73dfc3",
"assets/assets/fonts/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/fonts/OctIcons.ttf": "71c7d381e58ae844420306f7a3bbbe5a",
"assets/assets/icons/flags/france.svg": "c5f8703753d0648b4f87d09f7161bf08",
"assets/assets/icons/flags/germany.svg": "139a937668ecd06d1054dc021424583c",
"assets/assets/icons/flags/united-states-of-america.svg": "cfe34e9f0aee58b9de91362c139a90bd",
"assets/assets/icons/other/bootstrap.svg": "73b76d86a93d5386bfa2cc3364d32e56",
"assets/assets/icons/other/dart.svg": "4a0a9df85742ff469633877bd6e7bdaf",
"assets/assets/icons/other/express-js.svg": "1c0e6598cd54bc9ffd8bdecb10f44579",
"assets/assets/icons/other/firebase.svg": "a4cdca210685e2b66e70f9863d03a2de",
"assets/assets/icons/software-development/css3.svg": "558e249dab7d9199273e6666aeb04501",
"assets/assets/icons/software-development/divi.svg": "b124fdf17f0a743b9f8fa4265ce7007f",
"assets/assets/icons/software-development/docker.svg": "f3138330e03a6625e41dc78e20c096dd",
"assets/assets/icons/software-development/elementor.svg": "5a63a1ea2ba458b34a9d9d4e524fbc78",
"assets/assets/icons/software-development/flask.svg": "44fcfcf73e810db529833d2a47b32e81",
"assets/assets/icons/software-development/flutter.svg": "030f81e13f1a723e090651610a5d8c11",
"assets/assets/icons/software-development/graphql.svg": "02a654bb3808332f6191eb39114c874b",
"assets/assets/icons/software-development/html-5.svg": "3ddf9449edce26e2d2d6c5137cbece7f",
"assets/assets/icons/software-development/javascript.svg": "62b193700e3f66c40b98c5d990062369",
"assets/assets/icons/software-development/mariadb.svg": "eb44ec19eb33d4146eba2d878478aca3",
"assets/assets/icons/software-development/mongodb.svg": "bc514c84ded5abfcefd05e1f89c70033",
"assets/assets/icons/software-development/nodejs.svg": "44acb407fa21eee9ef24809d95678a09",
"assets/assets/icons/software-development/php.svg": "2aeb427e8424a73b2880a492e29876e8",
"assets/assets/icons/software-development/postgresql.svg": "fba21228676cd99444651c12a1371c5c",
"assets/assets/icons/software-development/python.svg": "5a2e6e251257f03ebc51e5918cfcb4ae",
"assets/assets/icons/software-development/sql.svg": "690b33c2180b2ad1905d893a8622ebbe",
"assets/assets/icons/software-development/typescript.svg": "2b714d9e71c4df9f537371456581aa8b",
"assets/assets/icons/software-development/webflow.svg": "ba84173519c8da9c5ad977c5eaff9a50",
"assets/assets/icons/software-development/wordpress.svg": "ddcffe46c53bccc2a127a71ce16e12e4",
"assets/assets/images/cpor.png": "919236cc6cfb87cd31b6bbedef83efb4",
"assets/assets/images/gsb-frais.png": "6cd08121c9fa313d0e1ec93ef8075e4a",
"assets/assets/images/gsb-rv-dr.png": "9cae33c5226005d87431d9389233a2fb",
"assets/assets/images/gsb-rv-visiteur-serveur.png": "aa279e9a72f05f8041d4259f1ffbc640",
"assets/assets/images/learnflow-api.png": "106bf340d0676bdcccdc17c8c29e4d6f",
"assets/assets/images/learnflow-backoffice.png": "2aafdd0e7748d2cd630f2fefc1724361",
"assets/assets/images/logo.png": "ec4e40868695ea191ece5a171600c7bf",
"assets/assets/images/logo.svg": "56df167d29755c7b0d4052d9c53bb623",
"assets/assets/images/portfolio.png": "77a58b35cdeafc34a8f06fa5c8a14598",
"assets/assets/images/spinner-dark.apng": "d7f6e0cca2ae052bdb7973799975027a",
"assets/assets/images/spinner-light.apng": "0aa2c9bee051117e80ffaafb604e9258",
"assets/assets/images/waldhotel.PNG": "ead2ea7b77d6503fa8eb200234eec662",
"assets/assets/translations/de.json": "bdef1336e112d71cb6a7a07b1ca234c4",
"assets/assets/translations/en.json": "ab733afdbf0829ebc34336176659a8a8",
"assets/FontManifest.json": "0361baae30adca8ebc149077152a854a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "f1212c3195a66f26afce4bbd60bfc9ac",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "149c1bac4a2546b0d22be7b1ec237677",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a3791d2b468a9a74fe654dd7cc6c5823",
"icons/Icon-192.png": "3a01c05f5a0299feb1c2b4597bf9c657",
"icons/Icon-512.png": "a9e5f75bed19237e146018bee3e2d8b6",
"icons/Icon-maskable-192.png": "3a01c05f5a0299feb1c2b4597bf9c657",
"icons/Icon-maskable-512.png": "a9e5f75bed19237e146018bee3e2d8b6",
"index.html": "f2c44953e6c33446eef000ed34a1406b",
"/": "f2c44953e6c33446eef000ed34a1406b",
"main.dart.js": "47de81de49c75c19ab5bda9f705b2529",
"manifest.json": "ef85578c29305d1f1a034f8051df9667",
"splash/img/dark-1x.png": "f587552e1d189e0979afb3e29a238e35",
"splash/img/dark-2x.png": "296c43e81ae9399134bac6809d90744b",
"splash/img/dark-3x.png": "f454f889b737b180680ef785244e7408",
"splash/img/dark-4x.png": "0f13643cdba62f42f53ab20b45018b39",
"splash/img/light-1x.png": "64453cbe2aee44b2bbda46bff3c4ce26",
"splash/img/light-2x.png": "3e8fc278c35d56382b9fdda7cfeb12b8",
"splash/img/light-3x.png": "62a038592ad62b1c87b2fd0c8199b163",
"splash/img/light-4x.png": "82669e92227a3034fc4f2b7cc84b3872",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
