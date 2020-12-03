document.addEventListener("DOMContentLoaded", function(event) {
  var mapEl = document.querySelector('#map');

  if (mapEl) {
    ymaps.ready(init);
    var map;

    function init() {
      if (document.body.clientWidth < 768) {

        map = new ymaps.Map("map", {
          center: [55.745103, 37.580409],
          zoom: 16,
          controls: ['zoomControl'],
          behaviors: ['drag', 'multiTouch']
        });

        map.behaviors.disable('scrollZoom');

        var placemark1 = new ymaps.Placemark([55.743968, 37.578145], {
          hintContent: 'ул. Плющиха, 18'
        }, {
          iconLayout: "default#image",
          iconImageHref: "images/map-pin.png",
          iconImageSize: [38, 58],
          iconImageOffset: [-13, -56],
        });

        var placemark2 = new ymaps.Placemark([55.746668, 37.576683], {
          hintContent: 'Смоленская набережная, 2'
        }, {
          iconLayout: "default#image",
          iconImageHref: "images/map-pin.png",
          iconImageSize: [38, 58],
          iconImageOffset: [-18, -46]
        });

        var placemark3 = new ymaps.Placemark([55.744558, 37.584700], {
          hintContent: 'Смоленская-Сенная площадь, 30'
        }, {
          iconLayout: "default#image",
          iconImageHref: "images/map-pin.png",
          iconImageSize: [38, 58],
          iconImageOffset: [-13, -56],
        });
        map.geoObjects.add(placemark1); 
        map.geoObjects.add(placemark2); 
        map.geoObjects.add(placemark3); 

      } else if (document.body.clientWidth >= 768 && document.body.clientWidth < 1300) {
        map = new ymaps.Map("map", {
        center: [55.745103, 37.580409],
        zoom: 16,
        controls: ['zoomControl'],
        behaviors: ['drag', 'multiTouch']
        });

        map.behaviors.disable('scrollZoom');

        var placemark1 = new ymaps.Placemark([55.743968, 37.578145], {
          hintContent: 'ул. Плющиха, 18'
        }, {
          iconLayout: "default#image",
          iconImageHref: "images/map-pin.png",
          iconImageSize: [38, 58],
          iconImageOffset: [-13, -56],
        });

        var placemark2 = new ymaps.Placemark([55.746668, 37.576683], {
          hintContent: 'Смоленская набережная, 2'
        }, {
          iconLayout: "default#image",
          iconImageHref: "images/map-pin.png",
          iconImageSize: [38, 58],
          iconImageOffset: [-18, -46]
        });

        var placemark3 = new ymaps.Placemark([55.744558, 37.584700], {
          hintContent: 'Смоленская-Сенная площадь, 30'
        }, {
          iconLayout: "default#image",
          iconImageHref: "images/map-pin.png",
          iconImageSize: [38, 58],
          iconImageOffset: [-13, -56],
        });
        map.geoObjects.add(placemark1); 
        map.geoObjects.add(placemark2); 
        map.geoObjects.add(placemark3); 

      } else if (document.body.clientWidth >= 1300) {
        
        map = new ymaps.Map("map", {
        center: [55.745103, 37.580409],
        zoom: 16,
        controls: ['zoomControl'],
        behaviors: ['drag']
        });

        map.behaviors.disable('scrollZoom');

        var placemark1 = new ymaps.Placemark([55.743968, 37.578145], {
          hintContent: 'ул. Плющиха, 18'
        }, {
          iconLayout: "default#image",
          iconImageHref: "images/map-pin.png",
          iconImageSize: [38, 58],
          iconImageOffset: [-13, -56],
        });

        var placemark2 = new ymaps.Placemark([55.746668, 37.576683], {
          hintContent: 'Смоленская набережная, 2'
        }, {
          iconLayout: "default#image",
          iconImageHref: "images/map-pin.png",
          iconImageSize: [38, 58],
          iconImageOffset: [-18, -46]
        });

        var placemark3 = new ymaps.Placemark([55.744558, 37.584700], {
          hintContent: 'Смоленская-Сенная площадь, 30'
        }, {
          iconLayout: "default#image",
          iconImageHref: "images/map-pin.png",
          iconImageSize: [38, 58],
          iconImageOffset: [-13, -56],
        });

        map.geoObjects.add(placemark1);
        map.geoObjects.add(placemark2);
        map.geoObjects.add(placemark3);
      }
    }
  }
});
