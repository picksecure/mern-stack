import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};
const position = {
    lat: 37.772,
    lng: -122.214
}
const onLoad = marker => {
    console.log('marker: ', marker)
}
function MapComponent() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCgRLdWEHVCZfJaiIvahlwkQZF6Cvq2TZg"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker
                    onLoad={onLoad}
                    position={position}
                />
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MapComponent)