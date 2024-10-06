var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Route_2 = new ol.format.GeoJSON();
var features_Route_2 = format_Route_2.readFeatures(json_Route_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_2.addFeatures(features_Route_2);
var lyr_Route_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_2, 
                style: style_Route_2,
                popuplayertitle: "Route",
                interactive: true,
                title: '<img src="styles/legend/Route_2.png" /> Route'
            });
var format_MileMarkers_3 = new ol.format.GeoJSON();
var features_MileMarkers_3 = format_MileMarkers_3.readFeatures(json_MileMarkers_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MileMarkers_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MileMarkers_3.addFeatures(features_MileMarkers_3);
var lyr_MileMarkers_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MileMarkers_3, 
                style: style_MileMarkers_3,
                popuplayertitle: "Mile Markers",
                interactive: true,
                title: 'Mile Markers'
            });
var format_End_4 = new ol.format.GeoJSON();
var features_End_4 = format_End_4.readFeatures(json_End_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_End_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_End_4.addFeatures(features_End_4);
var lyr_End_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_End_4, 
                style: style_End_4,
                popuplayertitle: "End",
                interactive: true,
                title: 'End'
            });
var format_Start_5 = new ol.format.GeoJSON();
var features_Start_5 = format_Start_5.readFeatures(json_Start_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Start_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Start_5.addFeatures(features_Start_5);
var lyr_Start_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Start_5, 
                style: style_Start_5,
                popuplayertitle: "Start",
                interactive: true,
                title: 'Start'
            });

lyr_Satellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Route_2.setVisible(true);lyr_MileMarkers_3.setVisible(true);lyr_End_4.setVisible(true);lyr_Start_5.setVisible(true);
var layersList = [lyr_Satellite_0,lyr_OpenStreetMap_1,lyr_Route_2,lyr_MileMarkers_3,lyr_End_4,lyr_Start_5];
lyr_Route_2.set('fieldAliases', {'id': 'id', });
lyr_MileMarkers_3.set('fieldAliases', {'id': 'id', 'Mile': 'Mile', });
lyr_End_4.set('fieldAliases', {'id': 'id', 'End': 'End', });
lyr_Start_5.set('fieldAliases', {'id': 'id', 'Start': 'Start', });
lyr_Route_2.set('fieldImages', {'id': 'TextEdit', });
lyr_MileMarkers_3.set('fieldImages', {'id': 'TextEdit', 'Mile': 'Range', });
lyr_End_4.set('fieldImages', {'id': 'TextEdit', 'End': 'TextEdit', });
lyr_Start_5.set('fieldImages', {'id': 'TextEdit', 'Start': 'TextEdit', });
lyr_Route_2.set('fieldLabels', {'id': 'no label', });
lyr_MileMarkers_3.set('fieldLabels', {'id': 'no label', 'Mile': 'no label', });
lyr_End_4.set('fieldLabels', {'id': 'no label', 'End': 'no label', });
lyr_Start_5.set('fieldLabels', {'id': 'no label', 'Start': 'no label', });
lyr_Start_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});