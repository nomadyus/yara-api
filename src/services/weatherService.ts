import axios, { AxiosError, AxiosResponse} from 'axios'

export type WeatherResult = {
    main: string;
    description: string;
    temperature: number;
    feelsLike: number;
    pressure: number;
    humidity: number;
}

export type ErrorResult = {
    msg: string;
}

const handleError = (error: AxiosError) => {
    if (error.response) {
        console.log('Error Response status:',  error.response.status);
        console.log('Error Response data:', error.response.data);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Generic Error:', error.message);
    }
}

const getCityWeather = (city: string): Promise<WeatherResult | ErrorResult> => {
    const appConfig = {
        weatherURL: process.env.OPEN_WEATHER_API_URL,
        apiKey: process.env.OPEN_WEATHER_API_KEY
    }

    const getCityWeatherUrl = appConfig.weatherURL.replace('{city}', city).replace('{key}', appConfig.apiKey)

    const errorResult = { msg: 'Unable to fetch weather' }

    return new Promise((resolve, reject) => {
        axios.get(getCityWeatherUrl)
            .then(response => {
                if (response.data) {
                    const result = {
                        main: response.data.weather[0].main,
                        description: response.data.weather[0].description,
                        temperature: response.data.main.temp,
                        feelsLike: response.data.main.feels_like,
                        pressure: response.data.main.pressure,
                        humidity: response.data.main.humidity,
                    }
                    resolve(result);
                } else {
                    reject(errorResult);
                }
            })
            .catch(error => {
                handleError(error)
                reject(errorResult);
            })
    });

}

export { getCityWeather }