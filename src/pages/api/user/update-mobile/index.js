import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/User';
export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'PUT':
      const { id, mobile } = req.body;
      try {
        // let result = User.findByIdAndUpdate(id, mobile, { new: true });
        // res.status(400).json({ data: result });
        res.status(400).json({ mobile });
      } catch (error) {
        res.status(400).json({ data: `put method error : ${error}` });
      }
      break;
    default:
      res.status(400).json({ data: 'unknown request method' });
      break;
  }
}
