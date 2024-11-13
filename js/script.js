function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 41.8781, lng: -87.6298 }, // Center map on Chicago
    });

    // Real Coordinates updated in array
    // Array of favorite places in Chicago
    const favoritePlaces = [
        {
            position: { lat: 41.8826, lng: -87.6226 },
            title: "Millennium Park",
            description: "A beautiful urban park known for the iconic The Bean sculpture."
        },
        {
            position: { lat: 41.8919, lng: -87.6051 },
            title: "Navy Pier",
            description: "A popular entertainment park featuring rides, restaurants, and lakefront views."
        },
        {
            position: { lat: 41.9217, lng: -87.6336 },
            title: "Lincoln Park Zoo",
            description: "A free, family-friendly zoo with a variety of animals and beautiful gardens."
        },
        {
            position: { lat: 41.8789, lng: -87.6359 },
            title: "Willis Tower",
            description: "One of the tallest buildings in the world, allowing visitors to see the spectacular views of Chicago."
        },
        {
            position: { lat: 41.8662, lng: -87.6144 },
            title: "Museum Campus",
            description: "Home to the Field Museum, Shedd Aquarium, and Adler Planetarium."
        }
    ];

    // Loop through the favorite places and create markers for each
    favoritePlaces.forEach(place => {
        const marker = new google.maps.Marker({
            position: place.position,
            map,
            title: place.title,
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${place.title}</h3><p>${place.description}</p>`,
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}

/* Validate JavaScript functionality and ensure error-free operation */