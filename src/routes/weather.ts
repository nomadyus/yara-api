import { Request, Response } from 'express'
import { getCityWeather } from '../services/weatherService'

const getLocationWeather = async (req: Request, res: Response) => {

    return getCityWeather(req.params.location)
        .then(result => {
            res.send(result)
        })
        .catch(error => {
            res.status(500).send(error)
            console.error(error);
        });
}

export { getLocationWeather }