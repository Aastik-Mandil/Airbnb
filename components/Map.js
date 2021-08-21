import { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/getCenter";

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});
    // transforming
    const coordinates = searchResults.map(result => ({ latitude: result.lat, longitude: result.long }));
    const center = getCenter(coordinates);
    const [viewport, setViewport] = useState({
        width: "100%", height: "100%", latitude: center.latitude, longitude: center.longitude, zoom: 11,
    });


    return (
        <ReactMapGl
            mapStyle="mapbox://styles/ultra-goku/cks5vhmdi4m3g18qq5fcjlyab"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewPortChange={(nextViewport) => setViewport(nextViewport)}
        >
            {searchResults.map((result, i) => (
                <div key={i}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                            className="cursor-pointer text-2xl animate-bounce"
                            onClick={() => setSelectedLocation(result)}
                            aria-label="push-pin"
                        >a</p>
                    </Marker>
                    {(selectedLocation.long === result.long && selectedLocation.lat === result.lat) ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ) : (null)}
                </div>
            ))}
        </ReactMapGl>
    )
}

export default Map
// geolib react-map-gl