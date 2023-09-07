
import axios from "axios";



export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Hello there, glad you are interested in VEKIN'})
        
      }
    var formData = {
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        service_id: process.env.GMAIL_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: JSON.parse(req.body)
       
    };

    const headers = {'ContentType': 'application/json'}
    await axios.post(`https://api.emailjs.com/api/v1.0/email/send/`,formData,{headers:headers})
        .then( resp => {
            return res.status(200).json({ message: 'success' });
        })
        .catch(error => {
            // return res.status(400).json({ message: error.response.data });
            return res.status(400).json({ message: 'an error occurred' });

        })

};















// export default function handler(req, res) {
//     const public_key = process.env.EMAILJS_PUBLIC_KEY;
//     const template_id = process.env.EMAILJS_TEMPLATE_ID;
//     const service_id = process.env.EMAILJS_TEMPLATE_ID;



    




