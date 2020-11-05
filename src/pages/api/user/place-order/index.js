import dbConnect from '../../../../utils/dbConnect';
import mailToRestaurantv2 from '../../../../utils/mailToRestaurantv2';
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
        mailToRestaurantv2(result);
        res.status(200).json({ data: result });
      } catch (error) {
        res.status(400).json({ data: `put method error : ${error}` });
      }
      break;
  }
}
