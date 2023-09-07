
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript,Marker  } from '@react-google-maps/api';
import { companyInfo } from "../../config/companyDetails";

const LocationMap = () => {
  // const coordinates = {longitude: 100.56862519323268, latitude: 13.764818304627015}
  const {latitude, longitude} = companyInfo.coordinates
 
    return ( 
        <div className="w-full mt-12 h-96">
                     <LoadScript
                        googleMapsApiKey={process?.env?.NEXT_PUBLIC_GOOGLE_API_KEY}
                      >
                        <GoogleMap
                          mapContainerStyle={{width: '100%',height: '100%'}}
                          center={{ lat: latitude, lng: longitude }}
                          zoom={15}
                        >
                          <Marker   position={{ lat: latitude, lng: longitude}}  />
                          
                        </GoogleMap>
                      </LoadScript>     
                  
        </div>
     );
}
 
export default LocationMap;