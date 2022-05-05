import { getCityWeather } from './weatherService'
import axios from "axios";

jest.mock("axios");

describe('getCityWeather', () => {
    afterEach(() => {
        jest.resetAllMocks()
    });

    describe("when API call is successful", () => {
        const mockSuccessfulResponse = {
            data: {
                weather: [
                    {
                        id: 300,
                        main: 'Drizzle',
                        description: 'light intensity drizzle',
                        icon: '09d'
                    }
                ],
                main: {
                    temp: 280.32,
                    feels_like: 280.32,
                    pressure: 1012,
                    humidity: 81,
                    temp_min: 279.15,
                    temp_max: 281.15
                }
            }
        }

        const expectedResult = {
            main: mockSuccessfulResponse.data.weather[0].main,
            description: mockSuccessfulResponse.data.weather[0].description,
            temperature: mockSuccessfulResponse.data.main.temp,
            feelsLike: mockSuccessfulResponse.data.main.feels_like,
            pressure: mockSuccessfulResponse.data.main.pressure,
            humidity: mockSuccessfulResponse.data.main.humidity,
        }

        test('calls weather api and returns weather results', async () => {
            expect.assertions(2);

            (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(mockSuccessfulResponse);

            return getCityWeather('test')
                .then(result => {
                    expect(axios.get).toBeCalledTimes(1)
                    expect(result).toEqual(expectedResult)
                })
        })
    })

    describe("when API call is unsuccessful", () => {

        test('returns no result when there is no response from API', async () => {
            expect.assertions(1);

            (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({});

            return expect(getCityWeather('test')).rejects.toEqual({ msg: 'Unable to fetch weather' })
        })

        test('returns no result when there is an exception', async () => {
            expect.assertions(1);

            (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(() => {
                new Promise((_, reject) => reject({ msg: 'some unknown error' }))
              });

            return expect(getCityWeather('test')).rejects.toEqual({ msg: 'Unable to fetch weather' })
        })
    })
})