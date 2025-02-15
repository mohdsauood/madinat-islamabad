import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/User';

export default async function handler(req, res) {
  await dbConnect();
  switch (req.method) {
    case 'POST':
      const { updatedAddress, id } = req.body;
      try {
        let result = await User.findByIdAndUpdate(
          id,
          { address: updatedAddress },
          { new: true }
        );
        res.status(200).json({ data: result });
      } catch (error) {
        res.status(400).json({ data: `put method error : ${error}` });
      }
      break;
  }
}
