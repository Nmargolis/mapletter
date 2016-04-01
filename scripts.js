

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
            "description": "<div class=\"tourPopupContent\"><div class=\"marker-title\">Georgetown University School of Foreign Service</div><p>As a Science, Technology and International Affairs major, I studied environmental science with an international social and political lens. I discovered a love for maps when I took my first GIS course, which prompted me to also take Remote Sensing. I took an intro computer science class and the JavaScript got me hooked! To go a little deeper, I took a class in C++, where I learned important concepts like memory allocation, object orientation and recursion.</p><p>In college, I also joined the labor solidarity committee and developed a passion for activism and social justice.</p>"
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
            "description": "<div class=\"tourPopupContent\"><div class=\"marker-title\">San Francisco Mayor's Office Department of Greening</div><p>As an intern, I coordinated the Mayor's urban agriculture initiative. I mapped an audit of city owned land available for urban agriculture and acted as a liaison between the urban gardening organizations and the Mayor's office. I saw firsthand the power of maps as tools for community development.</p>"
                 //"<button type=\"button\" class=\"previousButton\">Previous</button><button type=\"button\" class=\"nextButton\">Next</button></div>"
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
            "description": "<div class=\"tourPopupContent\"><div class=\"marker-title\">Robert Graham Center</div><p>At the Robert Graham Center, a primary health care think tank, I researched behavioral geography for a study on redefining the concept and measures of geographic access to health care. On my own initiative, I migrated an outdated, messy database of thousands bibliographic citations to a more user-friendly cloud-based solution, and trained the entire office on how to use the new tool with standards for keeping it cleaner in the future.</p>"
                //"<button type=\"button\" class=\"previousButton\">Previous</button><button type=\"button\" class=\"nextButton\">Next</button></div>"
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
            "description": "<div class=\"tourPopupContent\"><div class=\"marker-title\">Bank Information Center</div><p>As the Information Services Coordinator at BIC, a nonprofit advocating for access to information, transparency, and accountability at the World Bank, I learned how to manage the website and IT on the job with very little training. I figured out how to update and maintain the Wordpress plugins and theme, format pages with HTML/CSS, and even write some scripts in javascript and PHP. I was in charge of everything from troubleshooting IT issues (aka googling error messages) and maintaining the server, to designing and sending newsletters. I believe in the work BIC does and I enjoyed tinkering with the website, but I wanted to delve more deeply into how to build web-based tools from the ground up.</p><p>Which led me to Hackbright...</p>"
                //"<button type=\"button\" class=\"previousButton\">Previous</button><button type=\"button\" class=\"nextButton\">Next</button></div>"
                // "<div class=\"resumePopupContent\"><div class=\"marker-title\">Bank Information Center</div><p>Non-profit civil society organization advocating for World Bank transparency and actounability</p></div>"
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
            "description": "<div class=\"tourPopupContent\"><div class=\"marker-title\">Maya Geoarcheology Research</div><p>As a research assistant in Belize for two summers in a row, I studied soil science and geoarcheology with a professor researching Ancient Maya agriculture and water systems. Responsibilities included trudging through wetlands surveying and taking GPS points, digging lots of soil pits, pushing trucks out of the mud, and staving off swarms of killer bees... FOR SCIENCE!!!</p>"
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
            "description": "<div class=\"tourPopupContent\"><div class=\"marker-title\">Fellow at Hackbright Academy</div><p>As a fellow in the intensive 12 week program, I learned how to build a web app from end to end. I built an app called TenantConnect for tenants to rate landlords, look up landlords by address or name, and message each other to facilitate knowledge sharing and organizing. Hackbright taught me the languages (Python, SQL, JavaScript, HTML/CSS), tools (frameworks like Flask and Bootstrap, Git, command line, etc), and concepts (object orientation, testing, data modeling, data structures etc.) of software engineering. But the most valuable experience I gained at Hackbright was learning how to learn, and that will allow me to continue to pick up new languages and technologies in the future.</p>"
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-122.264186, 37.835000],
        },
        "properties": {
            "title": "Anti-Eviction Mapping Project",
            "id": "aemp",
            "tourstop": 7,
            "marker-symbol": "library",
            "description": "<div class=\"tourPopupContent\"><div class=\"marker-title\">Anti-Eviction Mapping Project</div><p>After Hackbright, I jumped right in to put my knowledge to good use and to continue learning. As a member of the Anti-eviction Mapping Project data viz team, I have taken on projects from cleaning and geocoding over 40,000 records of evictions and foreclosures, to finding new sources of data, to learning the d3.js library to make an animated map of where people move after they are evicted.</p>"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-77.03238901390978, 38.913188059745586]
        },
        "properties": {
            "title": "Mapbox",
            "id": "mapbox",
            "tourstop": 9,
            "marker-symbol": "rocket",
            "description": "<div class=\"marker-title\">Map Data Engineer at Mapbox</div><p>I used the Mapbox Geocoding API, Mapbox Studio Classic, and Mapbox.js library for my Hackbright Project. In the process, I read lots of READMEs and explored the code on GitHub, and I would like to deepen that knowledge and contribute to the valuable tools Mapbox provides.</p><p>My experience figuring out how to solve technical problems on the job in the nonprofit world, combined with the full stack software engineering skills I've learned through Hackbright and self study, would make me a valuable addition to the Mapbox team. I would be excited to work at Mapbox because I love maps, I appreciate the commitment to open source, and I am excited by the prospect of finding creative solutions to interesting challenges arising from big datasets and complex use cases.</p>"
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
            "tourstop": 8,
            "marker-symbol": "danger",
            "description": "<div class=\"marker-title\">Null Island</div><p>The journey hasn't always been smooth... I love tackling complex problems while coding. Sometimes I faced challenges and didn't get the results I wanted... but then I learned something new!</p> <p><img src=\"img/fail.gif\" alt=\"Computer fail\" style=\"width:200px;height:200px;\"></p>"
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
var popup = new mapboxgl.Popup({closeButton: false, closeOnClick: false, anchor: "right"});

// When a click event occurs near a marker icon, open a popup at the location of
// the feature, with description HTML from its properties.
map.on('click', function (e) {
    map.featuresAt(e.point, {
        radius: 7.5, // Half the marker size (15px).
        includeGeometry: true,
        layer: 'markers'
    }, function (err, features) {

        if (err || !features.length) {
            // Don't remove popup if user clicks outside it. Otherwise user could get lost on tour.
            // popup.remove();
            return;
        }

        var feature = features[0];

        // Populate the popup and set its coordinates
        // based on the feature found.
        openPopup(feature);

        // Fly to feature
        fly(feature);

        // Scroll to the resume item in the sidebar
        scrollToFeature(feature);

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


//Initialize global variables
var resumeMode = false;
var currentTourStop = 0;


// Go to next tour stop when next button is clicked
// Use event delegation to bind click event to buttons that haven't been created yet
$(document).on('click', '.nextButton', function() {
    var nextStop = findNextTourStop(currentTourStop + 1);

    currentTourStop++;

    fly(nextStop);
    // scrollToFeature(nextStop);
    
    // Update progress bar
    updateProgress(currentTourStop);

    // If next stop is the last stop, enable resume mode automatically
    if (currentTourStop == 9) {

        window.setTimeout(function(){
        toggleResumeMode();
        $('.onoffswitch').show();
    }, 4000);

    }

});

$(document).on('click', '.previousButton', function() {

    // If the previous stop is the welcome window
    if (currentTourStop - 1 === 0) {
        // Close the current popup
        popup.remove();

        startTour();

    }
    else {
        var previousStop = findNextTourStop(currentTourStop - 1);
        fly(previousStop);

        currentTourStop--;
    }

    // If user clicks back button on last stop, after resume mode has automatically been activated
    if (currentTourStop == 8) {
        // Toggle back to tour mode
        toggleResumeMode();
    }

    updateProgress(currentTourStop);
});

// Hide welcome window when it's next button is clicked
$('#startTourButton').on('click', function() {
    $('#welcome').hide();
});


// Define waypoints to trigger flying to resume items when they appear on screen
var waypointsDown = $('.resume-item').waypoint(function(direction) {

    if (direction == 'down') {
        // Set current element to active
        setActive(this.element);

        // Find marker associated with this resume item
        var markerMatch = findMatchingMarker(this.element.id);

                
        // Fly to the matching marker
        fly(markerMatch);
    }}, {
            offset: '31%',
            context: $('#features')
});

var waypointsUp = $('.resume-item').waypoint(function(direction) {

    if (direction == 'up') {
       // Set current element to active
       setActive(this.element);

        // Find marker associated with this resume item
        var markerMatch = findMatchingMarker(this.element.id);

        // Fly to the matching marker
        fly(markerMatch);

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

    $('#features').scrollTo($(resumeItemId), 800, {
        offset: function() {
            var topOffset = -0.20 * $(window).height();
            return {top: topOffset};
        },
        onAfter: function() {
            //fires after scrolling finishes
        }
    });
}


function openPopup(marker) {

    // HTML for buttons on to add to popup content on tours
    var previousButtonHTML = '<button type=\"button\" class=\"previousButton\">Previous</button>';
    var nextButtonHTML = '<button type=\"button\" class=\"nextButton\">Next</button></div>';
    var restartTourButtonHTML = '<button type=\"button\"class=\"previousButton\">Restart Tour</button>';
    
    // If the marker is not a cluster
    if (!marker.properties.cluster) {

        if (resumeMode === true) {
            content = marker.properties.description;
        }
        else if (currentTourStop == 9) {
            content = marker.properties.description + restartTourButtonHTML;
        }
        else {
            content = marker.properties.description + previousButtonHTML + nextButtonHTML;
        }

    popup.setLngLat(marker.geometry.coordinates)
    .setHTML(content)
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

    // // At end of flyTo animation
    // map.once('moveend', function(){
    //     // Open the associated popup
    //     openPopup(markerMatch);
    // });

    openPopup(markerMatch);
    
}

function startTour() {
    // Close the current popup
    popup.remove();

    // Zoom out to the original map zoom level and center
    map.flyTo({
        center: [-98.613, 40],
        zoom: 3
    });

    currentTourStop = 0;

    // Show the welcome window
    $('#welcome').show();
}

function enableResumeMode() {

    resumeMode = true;

    // Close welcome window if it's open
    $('#welcome').hide();

    // Show resume sidebar and scroll to the top
    $('#features').addClass('visible');
    $('#features').scrollTop(0);
     $('#map').addClass('resume-mode');

    // Enable waypoints
    Waypoint.enableAll();

    // Change popup content
    $('.tourPopupContent').hide();
    $('.resumePopupContent').show();
}

function disableResumeMode() {

    resumeMode = false;

    // Hide the resume sidebar
    $('#features').removeClass('visible');

    // Disable waypoints
    Waypoint.disableAll();

    // Remove any open popups
    popup.remove();
}

function enableTourMode() {

    disableResumeMode();
    startTour();

    // Change popup content
    $('.resumePopupContent').hide();
    $('.tourPopupContent').show();
}

function toggleResumeMode(){
    //resumeMode =!resumeMode;

    if(!resumeMode) {
        //if in resumeMode
        enableResumeMode();
        $('#myonoffswitch').prop('checked', false);
        $('.progress').hide();
    }
    else {
        enableTourMode();
        $('#myonoffswitch').prop("checked", true);
    }
}


$("#myonoffswitch").change(function() {
    toggleResumeMode();
});

// Function to update progress bar
function updateProgress(currentTourStop){

    width = '' + currentTourStop/9 * 100 + '%';
    step = 'Step ' + currentTourStop + '/9';

    $('.inner-progress').css('width', width);
    $('.progress-step').text(step);

}


$(document).ready( function () {

    // Scroll to top of page to avoid starting in the middle from browser caching
    $('body').scrollTop(0);
    $('#features').scrollTop(0);

    // Hide toggle button to begirn with
    $('.onoffswitch').hide();

    // start with Waypoints disabled
    Waypoint.disableAll();


    // Easter egg
    var msg = "Hi\r\n" +
            "                          ,,,,   \r\n" +
            "                   ,,,           ,,,      \r\n" +
            "                ,,                  ,,    \r\n" +
            "              ,                        ,   \r\n" +
            "             ,,                        ,,  \r\n" +
            "            ,                            ,  \r\n" +
            "            ,                            ,  \r\n" +
            "            ,                            ,  \r\n" +
            "            ,,                          ,,  \r\n" +
            "            ,,                          ,,   \r\n" +
            "             ,,                        ,,    \r\n" +
            "              ,,                      ,,     \r\n" +
            "               ,,,                  ,,,      \r\n" +
            "           ,,,,,,,,,             ,,,,,     \r\n" +
            "       ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,     \r\n" +
            "     ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,~    \r\n" +
            "    ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,~~   \r\n" +
            "   ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,~~~  \r\n" +
            "  ,,,,,,,      ,,,,,,,,,,,,,,,,,,,,,,,~~~  \r\n" +
            " ,,,,,,,      =,:::::::::,,,,,,,,,,,,,~~~  \r\n" +
            " ,,,,,,      =::::::::::::::,,,,,,,,,,~~~  \r\n" +
            " ,,,,,,     =:::::::::::::::::,,,,,,,,~~~  \r\n" +
            " ,,,,,     =:::::::::::::::::::,,,,,,,~~~  \r\n" +
            " ,,,,,,  ==:::::::?IIIII77777III,,,,,,~~~  \r\n" +
            " :,,,,,,,==:::::?I$$$$$$$$$$$$$$$,,,,,~~~  \r\n" +
            "  :,,,,,,,,:::::I$$$$$$$$$$$$$$$$,,,,,~~~  \r\n" +
            "   ,:,,,,,,,I?++I$$$$$$$$$$$$$$$$,,,,,~~~  \r\n" +
            "    ::,,,,,II++++++$$$$$$$$$$$$$$~,,,,~~~  \r\n" +
            "      ::,,,I++++++++$$$$$$$$$$$$$,,,,,~~~  \r\n" +
            "         ::I++++++++$$$$$$$$$$$$$,,,,,~~~  \r\n" +
            "          ==I+++++++$$$$$$$$$$$$$,,,,,~~~  \r\n" +
            "           ====:::::IIIIIIIIIII~,,,,,,~~~  \r\n" +
            "            ====:::::::::::::::,,,,,,,~~~  \r\n" +
            "              ===:::::::::::::,,,,,,,,~~~  \r\n" +
            "              =IIII+::::~IIII,,,,,,,,,~~~  \r\n" +
            "              ======,,,,,,,,,,,,,,,,,,~~~  \r\n" +
            "              ,,,,,,,,,,,,,,,,,,,,,,,,~~~  \r\n" +
            "              ,,,,,,,,,,,,,,,,,,,,,,,,~~~  \r\n" +
            "              ,,,,,,,,,,,,,,,,,,,,,,,,~~~  " ;

    console.log(msg);
});


