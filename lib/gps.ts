// GPS tracking utilities

/**
 * Get the current location.
 * @returns {Promise<GeolocationCoordinates>} The current geographical position of the device.
 */
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
            reject(new Error('Geolocation is not supported by this browser.'));
        }
    });
}

/**
 * Calculate distance between two coordinates.
 * @param {GeolocationCoordinates} coord1 - The first coordinate.
 * @param {GeolocationCoordinates} coord2 - The second coordinate.
 * @returns {number} The distance in meters.
 */
function calculateDistance(coord1, coord2) {
    const R = 6371e3; // metres
    const lat1 = coord1.latitude * Math.PI/180; // φ1 
    const lat2 = coord2.latitude * Math.PI/180; // φ2 
    const deltaLat = (coord2.latitude - coord1.latitude) * Math.PI/180; // Δφ 
    const deltaLong = (coord2.longitude - coord1.longitude) * Math.PI/180; // Δλ 

    const a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(deltaLong/2) * Math.sin(deltaLong/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = R * c; // in metres
    return distance;
}

/**
 * Watch the current location.
 * @param {Function} callback - A callback to execute with the current position.
 */
function watchCurrentLocation(callback) {
    if (navigator.geolocation) {
        return navigator.geolocation.watchPosition(callback);
    } else {
        throw new Error('Geolocation is not supported by this browser.');
    }
}

export { getCurrentLocation, calculateDistance, watchCurrentLocation };