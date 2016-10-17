'use strict';

$(function() {
	
	var 
		yam_glonass = $('#yandex-map-glonass'),
		yam_glonass_center = {		
			center: [52.987353, 36.076387], // расположение района
			zoom: 16
		},
		map_glonass;

	

	
	
	/*var _m_center = {		
		center: [52.987353, 36.076387], // расположение района
		zoom: 16
	};*/
	
	var initYandexMapGlonass = function() {
		
		map_glonass = new ymaps.Map('yandex-map-glonass', yam_glonass_center, {
			//searchControlProvider: 'yandex#search'
		});
		var glonass_office = new ymaps.Placemark([52.987353, 36.076387], {
			hintContent: '«Кластер ГЛОНАСС»'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/default/icon-map-glonass.png',
			iconImageSize: [94, 104],
			iconImageOffset: [-47, -104]
		});
		
		map_glonass
			.geoObjects
				.add(glonass_office)
		;			
		map_glonass .geoObjects;
			
	}	
	if(yam_glonass.length) {		
		ymaps.ready(initYandexMapGlonass);		
	}


	var yam_region = $('#yandex-map-region'),
		yam_region_center = {		
			center: [52.987353, 36.076387], // расположение района
			zoom: 16
		},
		map_region;
	var initYandexMapRegion = function() {		
		map_region = new ymaps.Map('yandex-map-region', yam_region_center, {
			//searchControlProvider: 'yandex#search'
		});
		var region_office = new ymaps.Placemark([52.987353, 36.076387], {
			hintContent: 'НП «ГЛОНАСС регионам»'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/default/icon-map-region.png',
			iconImageSize: [94, 104],
			iconImageOffset: [-47, -104]
		});
		
		map_region
			.geoObjects
				.add(region_office)
		;			
		map_region .geoObjects;			
	}

	if(yam_region.length) {		
		ymaps.ready(initYandexMapRegion);		
	}


	//ccd

	var yam_ccd = $('#yandex-map-ccd'),
		yam_ccd_center = {		
			center: [52.965745, 36.063765], // расположение района
			zoom: 16
		},
		map_ccd;
	var initYandexMapCCD = function() {		
		map_ccd = new ymaps.Map('yandex-map-ccd', yam_ccd_center, {
			//searchControlProvider: 'yandex#search'
		});
		var ccd_office = new ymaps.Placemark([52.965745, 36.063765], {
			hintContent: 'Центр кластерного развития Орловской области'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/default/icon-map-ccd.png',
			iconImageSize: [94, 104],
			iconImageOffset: [-47, -104]
		});
		
		map_ccd
			.geoObjects
				.add(ccd_office)
		;			
		map_ccd .geoObjects; 			
	}
	if(yam_ccd.length) {		
		ymaps.ready(initYandexMapCCD);		
	}
	
});
