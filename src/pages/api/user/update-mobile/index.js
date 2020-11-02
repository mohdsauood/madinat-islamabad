import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/User';
export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        res.status(200).json({ data: 'its alright dun worry' });
      } catch (error) {
        res.status(400).json({ data: `put method error : ${error}` });
      }
      break;
    default:
      res.status(400).json({ data: 'unknown request method' });
      break;

    case 'PUT':
      const { id, mobile } = req.body;
      try {
        let result = await User.findByIdAndUpdate(
          id,
          { mobile },
          { new: true, upsert: true }
        );
        res.status(200).json({ data: result });
      } catch (error) {
        res.status(400).json({ data: `put method error : ${error}` });
      }
      break;
  }
}
