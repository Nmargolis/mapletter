$(document).ready( function () {

    // Scroll to top of page to avoid starting in the middle from browser caching
    $('body').scrollTop(0);
    $('#features').scrollTop(0);

    // start with Waypoints disabled
    Waypoint.disableAll();
    
    // console.log(resumeMode);

    // Easter egg
    var msg = "                                        ,,,,   \r\n" +
            "                                  ,,            ,,           \r\n" +
            "                                ,                  ,         \r\n" +
            "                              ,                      ,       \r\n" +
            "                            ,,                       ,,      \r\n" +
            "                           ,                           ,     \r\n" +
            "                          ,,                           ,,    \r\n" +
            "                         ,                               ,   \r\n" +
            "                        ,,                               ,,  \r\n" +
            "                        ,                                 ,  \r\n" +
            "                        ,                                 ,  \r\n" +
            "                        ,                                 ,  \r\n" +
            "                        ,,                               ,,  \r\n" +
            "                         ,,                             ,,   \r\n" +
            "                          ,,                           ,,    \r\n" +
            "                           ,,                         ,,     \r\n" +
            "                            ,,,                     ,,,      \r\n" +
            "                       ,,=,,,,,,,,                ,,,,,,     \r\n" +
            "                    ,,,,,,,,,,,,,,,,,,,,, ,,,,,,,,,,,,,,     \r\n" +
            "                  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,~    \r\n" +
            "                 ,,,,,=,,,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,~~   \r\n" +
            "                ,,:,,,,=,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,~~~  \r\n" +
            "               ,,,,,,,,,   :,,,,,,,,,,,,,,,,,,,,,,,,,,,,~~~  \r\n" +
            "              ,,,,,,,,     =,,:::::::::,,,,,,,,,,,,,,,,,~~~  \r\n" +
            "              ,,,,==,      =::::::::::::::,,,,,,,,,,,,,,~~~  \r\n" +
            "              ,,,,,,,     =:::::::::::::::::,,,,,,,,,,,,~~~  \r\n" +
            "              ,,,,,,,   ==:::::::::::::::::::,,,,,,,,,,,~~~  \r\n" +
            "              :,,,,,,,  ==:::::::?IIIII77777III,,,,,,,,,~~~  \r\n" +
            "              ::,,,,,,,==:::::?I$$$$$$$$$$$$$$$,,,,,,,,,~~~  \r\n" +
            "               :,,,,,,,,,:::::I$$$$$$$$$$$$$$$$,,,,,,,,,~~~  \r\n" +
            "                ~:,,,,,,,,I?++I$$$$$$$$$$$$$$$$,,,,,,,,,~~~  \r\n" +
            "                 ::,,,,,,II++++++$$$$$$$$$$$$$$~,,,,,,,,~~~  \r\n" +
            "                   ::,,,,I++++++++$$$$$$$$$$$$$,,,,,,,,,~~~  \r\n" +
            "                      ::~I++++++++$$$$$$$$$$$$$,,,,,,,,,===  \r\n" +
            "                       ==I+++++++$$$$$$$$$$$$$,,,,,,,,,,~~~  \r\n" +
            "                        ====:::::IIIIIIIIIII~,,,,,,,,,,,~~~  \r\n" +
            "                         ====:::::::::::::::,,,,,,,,,,,,~~~  \r\n" +
            "                           ===:::::::::::::,,,,,,,,,,,,,~~~  \r\n" +
            "                           =IIII+::::~IIII,,,,,,,,,,,,,,~~~  \r\n" +
            "                           ,======,,,,,,,,,,,,,,,,,,,,,,~~~  \r\n" +
            "                           ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,~~~  \r\n" +
            "                           ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,~~~  \r\n" +
            "                           ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,~~~  " ;
    // console.log(msg);
});

// Initialize map
mapboxgl.accessToken = 'pk.eyJ1Ijoibm1hcmdvbGlzODkiLCJhIjoiY2lnbXZlem9xMDAzdDZjbTM4a2tteXdzMSJ9.j6aj2wMzUUb8FZR1XMBiBg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/nmargolis89/cim3wwy0x00atcwm2i0dmga0z',
    center: [-98.613, 40],
    zoom: 3
});

// Define markers
var markers = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-77.072778, 38.907222]
        },
        "properties": {
            "title": "Georgetown University",
            "id": "georgetown",
            "tourstop": 1,
            "marker-symbol": "college",
            "description": "<div class=\"marker-title\">Studied Science, Technology and International Affairs</div><p>Took GIS, Remote Sensing, two computer science classes, including JavaScript and C++.</p>" +
                "<button type=\"button\" class=\"previousButton\">Previous</button><button type=\"button\" class=\"nextButton\">Next</button>"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-122.41914, 37.77919]
        },
        "properties": {
            "title": "San Francisco City Hall",
            "id": "mayor",
            "tourstop": 2,
            "marker-symbol": "town-hall",
            "description": "<div class=\"marker-title\">Urban Agriculture Intern</div><p>Mapped audit of city owned land available for urban agriculture.</p>" +
                 "<button type=\"button\" class=\"previousButton\">Previous</button><button type=\"button\" class=\"nextButton\">Next</button>"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-77.040159, 38.904972]
        },
        "properties": {
            "title": "Robert Graham Center",
            "id": "rgc",
            "tourstop": 4,
            "marker-symbol": "hospital",
            "description": "<div class=\"marker-title\">Robert Graham Center</div><p>What I did</p>" +
                "<button type=\"button\" class=\"previousButton\">Previous</button><button type=\"button\" class=\"nextButton\">Next</button>"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-77.034226, 38.903353]
        },
        "properties": {
            "title": "Bank Information Center",
            "id": "bic",
            "tourstop": 5,
            "marker-symbol": "library",
            "description": "<div class=\"marker-title\">Bank Information Center</div><p>What I did</p>" +
                "<button type=\"button\" class=\"previousButton\">Previous</button><button type=\"button\" class=\"nextButton\">Next</button>"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-88.8333, 17.8333]
        },
        "properties": {
            "title": "Maya Agriculture and Water Systems Research",
            "id": "belize",
            "tourstop": 3,
            "marker-symbol": "campsite",
            "description": "<div class=\"marker-title\">Research Assistant</div><p>What I did</p>" +
                "<button type=\"button\" class=\"previousButton\">Previous</button><button type=\"button\" class=\"nextButton\">Next</button>"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-122.411462, 37.788666]
        },
        "properties": {
            "title": "Hackbright Academy",
            "id": "hackbright",
            "tourstop": 6,
            "marker-symbol": "college",
            "description": "<div class=\"marker-title\">Fellow at Hackbright Academy</div><p>I recently graduated Hackbright Academy, an intensive 12 week software engineering program. While I learned a ton by figuring things out on the job, I decided to attend Hackbright Academy to learn full stack web development to understand how to build something from the ground up. Hackbright taught me the Python, SQL, JavaScript, HTML/CSS and concepts like object orientation, testing, and knowledge of data structures required to build a web app. But the most valuable experience I gained at Hackbright was learning how to learn, and that will allow me to continue to pick up new languages and technologies in the future.</p>" +
                "<button type=\"button\" class=\"previousButton\">Previous</button><button type=\"button\" class=\"nextButton\">Next</button>"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-77.03238901390978, 38.913188059745586]
        },
        "properties": {
            "title": "Mapbox",
            "id": "mapbox",
            "tourstop": 8,
            "marker-symbol": "rocket",
            "description": "<div class=\"marker-title\">Map Data Engineer at Mapbox</div><p>I would be a valuable addition to the Mapbox team. I would be a valuable addition to the Mapbox team. I would be a valuable addition to the Mapbox team. I would be a valuable addition to the Mapbox team.</p>" +
                "<button type=\"button\" class=\"previousButton\">Previous</button>"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0, 0]
        },
        "properties": {
            "title": "Null Island",
            "id": "null-island",
            "tourstop": 7,
            "marker-symbol": "danger",
            "description": "<div class=\"marker-title\">Null Island</div><p>I love tackling complex problems in code... sometimes you face challenges and don't get the results you want... but then you learn something new. <br> <img src=\"fail.gif\" alt=\"Computer fail\" style=\"width:320px;height:320px;\"></p>" +
                "<button type=\"button\" class=\"previousButton\">Previous</button><button type=\"button\" class=\"nextButton\">Next</button>"
        }
    },
    ]
};


// Add markers to map
map.on('style.load', function () {
    // Add marker data as a new GeoJSON source.
    map.addSource("markers", {
        "type": "geojson",
        "data": markers,
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50
    });


    // Display the marker data in two layers, each filtered to a range of
    // count values. Each range gets a different fill color.
    // TODO: Show point_count for 1
    var layers = [
        [2, '#f1f075'],
        [0, '#fff']
    ];

    layers.forEach(function (layer, i) {
        map.addLayer({
            "id": "cluster-" + i,
            "type": "circle",
            "source": "markers",
            "paint": {
                "circle-color": layer[1],
                "circle-radius": 18
            },
            "filter": i === 0 ?
                [">=", "point_count", layer[0]] :
                ["all",
                    [">=", "point_count", layer[0]],
                    ["<", "point_count", layers[i - 1][0]]]
        });
    });

    // Add a layer for the clusters' count labels
    map.addLayer({
        "id": "markers",
        "interactive": true,
        "type": "symbol",
        "source": "markers",
        "layout": {
            "text-field": "{point_count}",
            "text-font": [
                    "Elementa Pro Bold",
                    "Arial Unicode MS Bold"
                ],
            "text-size": 12,
            "icon-image": "{marker-symbol}-15",
            "icon-size": 2,
            "icon-allow-overlap": true

        }
    });

});


// Create popups

var popup = new mapboxgl.Popup({closeButton: false});

// When a click event occurs near a marker icon, open a popup at the location of
// the feature, with description HTML from its properties.
map.on('click', function (e) {
    map.featuresAt(e.point, {
        radius: 7.5, // Half the marker size (15px).
        includeGeometry: true,
        layer: 'markers'
    }, function (err, features) {

        if (err || !features.length) {
            popup.remove();
            return;
        }

        var feature = features[0];
        // console.log(feature);

        // Populate the popup and set its coordinates
        // based on the feature found.
        // console.log(feature);
        openPopup(feature);

        // Fly to feature
        fly(feature);

        // Scroll to the resume item in the sidebar
        scrollToFeature(feature);

        // To Do: Fix so this makes the right item active in the sidebar

    });
});

// Use the same approach as above to indicate that the symbols are clickable
// by changing the cursor style to 'pointer'.
map.on('mousemove', function (e) {
    map.featuresAt(e.point, {
        radius: 7.5, // Half the marker size (15px).
        layer: 'markers'
    }, function (err, features) {
        map.getCanvas().style.cursor = (!err && features.length) ? 'pointer' : '';
    });
});


var resumeMode = true;
var currentTourStop = 0;

// Click handler for showing the resume
// $('.showResumeButton').on('click', function(){

//     resumeMode = !resumeMode;
//     console.log(resumeMode);

//     $('#features').toggleClass('visible');
//     Waypoint.refreshAll();
// });


// Go to next tour stop when next button is clicked
// Use event delegation to bind click event to buttons that haven't been created yet
$(document).on('click', '.nextButton', function() {
    console.log('Next stop: ' + (currentTourStop + 1));
    var nextStop = findNextTourStop(currentTourStop + 1);
    console.log(nextStop);
    fly(nextStop);
    // scrollToFeature(nextStop);
    currentTourStop++;

    if (currentTourStop == 8) {

        window.setTimeout(function(){
        enableResumeMode();
    }, 4000);

    }

});

$(document).on('click', '.previousButton', function() {
    console.log('Previous stop: ' + (currentTourStop - 1));

    // If the previous stop is the welcome window
    if (currentTourStop - 1 === 0) {
        // Close the current popup
        popup.remove();

        // Zoom out to the original map zoom level and center
        map.flyTo({
            center: [-98.613, 40],
            zoom: 3
        });

        // Show the welcome window
        $('#welcome').show();

    }
    else {
        var previousStop = findNextTourStop(currentTourStop - 1);
        fly(previousStop);
        // scrollToFeature(previousStop);
        currentTourStop--;
    }

    if (currentTourStop == 7) {

        disableResumeMode();
    }

});

// Hide welcome window when it's next button is clicked
$('#startTourButton').on('click', function() {
    $('#welcome').hide();
});


// Define waypoints to trigger flying to resume items when they appear on screen
var waypointsDown = $('.resume-item').waypoint(function(direction) {
    // console.log(direction);
    if (direction == 'down') {
        // Set current element to active
        setActive(this.element);

        console.log("WAPOINTING DOWN");

        // Find marker associated with this resume item
        var markerMatch = findMatchingMarker(this.element.id);
        // console.log(markerMatch);
                
        // Fly to the matching marker
        fly(markerMatch);
    }}, {
            offset: '31%',
            context: $('#features')
});

var waypointsUp = $('.resume-item').waypoint(function(direction) {
    // console.log(direction);
    if (direction == 'up') {
       // Set current element to active
       setActive(this.element);

       console.log("WAPOINTING UP");

        // Find marker associated with this resume item
        var markerMatch = findMatchingMarker(this.element.id);
        // console.log(markerMatch);
                
        // Fly to the matching marker
        fly(markerMatch);

        // TODO: Put in timout to avoid premature flying
    }}, {
            offset: '29%',
            context: $('#features')
});


function scrollToFeature(feature) {

    // Disable waypoints to prevent conflicting flying
    Waypoint.disableAll();

    window.setTimeout(function(){
        Waypoint.enableAll();
    }, 700);

    var resumeItemId = '#' + feature.properties.id;
        // console.log(resumeItemId);
    $('#features').scrollTo($(resumeItemId), 800, {
        offset: function() {
            var topOffset = -0.20 * $(window).height();
            // console.log(topOffset);
            return {top: topOffset};
        },
        onAfter: function() {
            //fires after scrolling finishes
        }
    });
}


function openPopup(marker) {
    if (!marker.properties.cluster) {

    popup.setLngLat(marker.geometry.coordinates)
    .setHTML(marker.properties.description)
    .addTo(map);
    }
}

function setActive(element) {
    // Remove active class from all resume items
    $('.resume-item').removeClass('active');

    // Add active class to current resume item
    $(element).addClass('active');
}

function findMatchingMarker(elementId) {
    for (var i = 0; i < markers.features.length; i++) {
        // console.log(markers.features[i]);
        if (markers.features[i].properties.id == elementId) {
            var markerMatch = markers.features[i];
            return markerMatch;
        }
    }
}

function findNextTourStop(tourStopId) {
    for (var i = 0; i < markers.features.length; i++) {
        if (markers.features[i].properties.tourstop == tourStopId) {
            var markerMatch = markers.features[i];
            console.log('marker match: ' + markerMatch);
            return markerMatch;
        }
    }
}

function fly(markerMatch) {
    // Fly to the matching marker
    map.flyTo({
        center: markerMatch.geometry.coordinates,
        zoom: 13.5,
        pitch: 20
    });

    // Open the associated popup
    openPopup(markerMatch);
}


function enableResumeMode() {

    resumeMode = true;
    // console.log(resumeMode);

    $('#features').addClass('visible');
    $('#features').scrollTop(0);


    Waypoint.enableAll();
    Waypoint.refreshAll();
}

function disableResumeMode() {
    resumeMode = false;
    $('#features').removeClass('visible');
}
// console.log(waypoint);




