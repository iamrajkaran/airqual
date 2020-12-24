const GeoLocationService = async() => {
    try {
        function getPosition() {
            return new Promise((resolve, reject) =>
                navigator.geolocation.getCurrentPosition(resolve, reject)
            );
        }

        const position = await getPosition();

        return {success: true, err: null, data: position};
    } catch (err) {
        console.error(err.message);

        return {success: false, err: err, data: {}};
    }
}

export default GeoLocationService;
