import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/User';
export default async function handler(req, res) {
  await dbConnect();
  switch (req.method) {
    case 'POST':
      const { id, bill, items } = req.body;

      // res.status(200).json({ items });
      try {
        let result = await User.findByIdAndUpdate(
          id,
          { $push: { orders: { items, bill } } },
          { new: true }
        );
        res.status(200).json({ data: result });
      } catch (error) {
        res.status(400).json({ data: `put method error : ${error}` });
      }
      break;
  }
}
