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
const inline = 1;
const onLoad = marker => {
    console.log('marker: ', marker)
}
function MapComponent() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCgRLdWEHVCZfJaiIvahlwkQZF6Cvq2TZg"
        >
            {inline}
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
                nonce="58d545d4dx"
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