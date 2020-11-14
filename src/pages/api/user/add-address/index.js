import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/User';
import axios from 'axios';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'POST':
      const {
        id,
        values,
        geoLocation: { lat, lng },
      } = req.body;
      const { name, area, street, doorNo, landMark } = values;
      const geoCode = { lat, lng };

      try {
        let result = await User.findByIdAndUpdate(
          id,
          {
            $push: {
              address: { name, area, street, doorNo, landMark, geoCode },
            },
          },
          { new: true }
        );
        res.status(200).json({ data: result });
      } catch (error) {
        res.status(400).json({ data: `post method error : ${error}` });
      }
      break;
  }
}
