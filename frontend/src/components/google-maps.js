import React, {Component} from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;
export default class GoogleMaps extends Component {
    static defaultProps = {
        center: {
            lng: 69.3451,
            lat: 30.3753
        },
        zoom: 6
    };

    render() {
        const handleApiLoaded = (map, maps) => {
            // use map and maps objects
            // console.log('map', map)
            // console.log('maps', maps)
        };
        return (
            <div style={{
                height: "300px", width: '100%', display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyC-WCgdd9qKqa0N2QK04PQaU6qdcERWwt0'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({map, maps}) => handleApiLoaded(map, maps)}>
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        )
    }
}