import dbConnect from '../../../../utils/dbConnect';
import mailToRestaurant from '../../../../utils/mailToRestaurant';
import mailToRestaurantv2 from '../../../../utils/mailToRestaurantv2';
import mailToCustomer from '../../../../utils/mailToCustomer';
import User from '../../../../models/User';

export default async function handler(req, res) {
  await dbConnect();
  switch (req.method) {
    case 'POST':
      const { id, bill, items, address } = req.body;
      // res.status(200).json({ items });
      try {
        let result = await User.findByIdAndUpdate(
          id,
          { $push: { orders: { items, bill, address } } },
          { new: true }
        );
        mailToRestaurant(result);
        mailToCustomer(result);
        res.status(200).json({ data: result });
      } catch (error) {
        res.status(400).json({ data: `put method error : ${error}` });
      }
      break;
  }
}
