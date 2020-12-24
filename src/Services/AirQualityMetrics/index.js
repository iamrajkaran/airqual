import axios from 'axios';

const AirQualityMetricService = async (data = {}) => {
    try {
        const { latitude, longitude } = data;
        let response = await axios.get(`${process.env.REACT_APP_API_TLD}/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${process.env.REACT_APP_API_ACCESS_KEY}`);

        if  (response.data && response.data.status === 'success') {
            return {success: true, error: null, data: response.data.data};
        }

        throw new Error('Error in api end point');
    } catch(err) {
        console.log('err', err);
        return {success: false, error: err, data: {}};
    }
}

export default AirQualityMetricService;
