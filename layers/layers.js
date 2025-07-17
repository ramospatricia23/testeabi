ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4674").setExtent([-49.157859, -25.442777, -48.960233, -25.315365]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_apa1copiar_1 = new ol.format.GeoJSON();
var features_apa1copiar_1 = format_apa1copiar_1.readFeatures(json_apa1copiar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_apa1copiar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_apa1copiar_1.addFeatures(features_apa1copiar_1);
var lyr_apa1copiar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_apa1copiar_1, 
                style: style_apa1copiar_1,
                popuplayertitle: 'apa1  copiar',
                interactive: true,
                title: '<img src="styles/legend/apa1copiar_1.png" /> apa1  copiar'
            });
var format_apa1_2 = new ol.format.GeoJSON();
var features_apa1_2 = format_apa1_2.readFeatures(json_apa1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_apa1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_apa1_2.addFeatures(features_apa1_2);
var lyr_apa1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_apa1_2, 
                style: style_apa1_2,
                popuplayertitle: 'apa1',
                interactive: true,
                title: '<img src="styles/legend/apa1_2.png" /> apa1'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_apa1copiar_1.setVisible(true);lyr_apa1_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_apa1copiar_1,lyr_apa1_2];
lyr_apa1copiar_1.set('fieldAliases', {'nome_uc': 'nome_uc', 'za': 'za', 'ato_de_cri': 'ato_de_cri', 'municipio': 'municipio', 'gestao': 'gestao', 'tipo': 'tipo', 'situação': 'situação', 'ano': 'ano', 'class_snuc': 'class_snuc', 'area_decre': 'area_decre', 'categoria': 'categoria', 'area_arcgi': 'area_arcgi', 'pl_manejo': 'pl_manejo', 'sit_regfun': 'sit_regfun', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_apa1_2.set('fieldAliases', {'nome_uc': 'nome_uc', 'za': 'za', 'ato_de_cri': 'ato_de_cri', 'municipio': 'municipio', 'gestao': 'gestao', 'tipo': 'tipo', 'situação': 'situação', 'ano': 'ano', 'class_snuc': 'class_snuc', 'area_decre': 'area_decre', 'categoria': 'categoria', 'area_arcgi': 'area_arcgi', 'pl_manejo': 'pl_manejo', 'sit_regfun': 'sit_regfun', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_apa1copiar_1.set('fieldImages', {'nome_uc': 'TextEdit', 'za': 'TextEdit', 'ato_de_cri': 'TextEdit', 'municipio': 'TextEdit', 'gestao': 'TextEdit', 'tipo': 'TextEdit', 'situação': 'TextEdit', 'ano': 'TextEdit', 'class_snuc': 'TextEdit', 'area_decre': 'TextEdit', 'categoria': 'TextEdit', 'area_arcgi': 'TextEdit', 'pl_manejo': 'TextEdit', 'sit_regfun': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_apa1_2.set('fieldImages', {'nome_uc': 'TextEdit', 'za': 'TextEdit', 'ato_de_cri': 'TextEdit', 'municipio': 'TextEdit', 'gestao': 'TextEdit', 'tipo': 'TextEdit', 'situação': 'TextEdit', 'ano': 'TextEdit', 'class_snuc': 'TextEdit', 'area_decre': 'TextEdit', 'categoria': 'TextEdit', 'area_arcgi': 'TextEdit', 'pl_manejo': 'TextEdit', 'sit_regfun': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_apa1copiar_1.set('fieldLabels', {'nome_uc': 'no label', 'za': 'no label', 'ato_de_cri': 'no label', 'municipio': 'no label', 'gestao': 'no label', 'tipo': 'no label', 'situação': 'no label', 'ano': 'no label', 'class_snuc': 'no label', 'area_decre': 'no label', 'categoria': 'no label', 'area_arcgi': 'no label', 'pl_manejo': 'no label', 'sit_regfun': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_apa1_2.set('fieldLabels', {'nome_uc': 'no label', 'za': 'no label', 'ato_de_cri': 'no label', 'municipio': 'no label', 'gestao': 'no label', 'tipo': 'no label', 'situação': 'no label', 'ano': 'no label', 'class_snuc': 'no label', 'area_decre': 'no label', 'categoria': 'no label', 'area_arcgi': 'no label', 'pl_manejo': 'no label', 'sit_regfun': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_apa1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});