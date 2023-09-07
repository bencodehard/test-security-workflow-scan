// pages/api/addRecognition.js

import fs from 'fs';
import path from 'path';
import { recognitionDetails } from '../../config/recognitionDetails';

const filePath = path.join(process.cwd(), 'config', 'recognitionDetails.js');

export default function addRecognition(req, res) {
  if (req.method === 'POST') {
    const newRecognition = req.body;

    // Import the existing recognition details from the file and parse it into a JavaScript array
    const existingDetails = recognitionDetails

    // Add the new recognition to the existing array
    existingDetails.push(JSON.parse(newRecognition));

    // Write the updated array back to the file
    fs.writeFileSync(filePath, `export const recognitionDetails = ${JSON.stringify(existingDetails)}`);

    res.status(200).json({ message: 'Recognition added successfully!' });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
