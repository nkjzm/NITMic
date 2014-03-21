google.maps.event.addDomListener(window, 'load', function() {
	var mapdiv = document.getElementById('map_canvas');
	var myOptions = {
		zoom: 16,
         	center: new google.maps.LatLng(35.157299, 136.922115),
         	mapTypeId: google.maps.MapTypeId.ROADMAP,
         	scaleControl: true,
     	};
	var map = new google.maps.Map(mapdiv, myOptions);

	var points1 = [
		new google.maps.LatLng(35.156505,136.917397),
		new google.maps.LatLng(35.156688,136.917087),
		new google.maps.LatLng(35.160419,136.920326),
		new google.maps.LatLng(35.159956,136.924565),
		new google.maps.LatLng(35.159271,136.924473),
		new google.maps.LatLng(35.159346,136.923779),
		new google.maps.LatLng(35.159245,136.923754),
		new google.maps.LatLng(35.159276,136.923585)
	];
	var line1 = new google.maps.Polyline({
	path:points1,
	strokeColor:"#FF0000",
	strokeOpacity:1.0,
	strokeWeight:2
	});

	line1.setMap(map);


	var marker1 = new google.maps.Marker({
		position: new google.maps.LatLng(35.159206, 136.923577),
		map: map,
		title: '部室所在地(4階)',
		animation:google.maps.Animation.DROP
	});
	var infowindow1 = new google.maps.InfoWindow({
		content: '<p>部室(55号館4階右手右側)</p>',
		size: new google.maps.Size(100, 100) 
	}); 
	google.maps.event.addListener(marker1, 'click', function() {
	infowindow1.open(map,marker1);
	});

	var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(35.156407, 136.917381),
		map: map,
		title: '鶴舞駅',
		animation:google.maps.Animation.DROP
	});
	var infowindow2 = new google.maps.InfoWindow({
		content: '<p>最寄り駅です。</p>',
		size: new google.maps.Size(100, 100) 

	}); 
	google.maps.event.addListener(marker2, 'click', function() {
	infowindow2.open(map,marker2); 
	});

 }); 
/*function toStation(){
	var mapdiv = document.getElementById('map_canvas');
	var myOptions = {
		zoom: 16,
         	center: new google.maps.LatLng(35.157299, 136.922115),
         	mapTypeId: google.maps.MapTypeId.ROADMAP,
         	scaleControl: true,
     	};
	var map = new google.maps.Map(mapdiv, myOptions);
	map.panTo(new google.maps.LatLng(35.156407,136.917381));
}*/