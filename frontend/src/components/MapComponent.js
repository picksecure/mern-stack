import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '350px',
    height: '300px'
};

const center = {
    lat: 40.056750,
    lng: -111.672940
};
const position = {
    lat: 40.056750,
    lng: -111.672940
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
                zoom={20}
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