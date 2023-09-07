
import axios from "axios";

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).send({ message: 'Hello there, glad you are interested in VEKIN'})
        
      }
   
    const headers = {'ContentType': 'application/json'}
    await axios.get(`https://co2-api-dev.vekin.co.th/backend/api/activity/overall/carbon/`,{headers:headers})
        .then( resp => {
            return res.status(200).json(resp.data);
        })
        .catch(error => {return res.status(400).json({ message: 'an error occurred' });})

};





    




