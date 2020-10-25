import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';

export default async function handler(req, res) {
  await dbConnect();
  const name = 'melanie trump';
  const email = 'melanietrump@gmail.com';
  const restoUser = new User({ name, email });
  User.findOne({ email }, function (err, user) {
    if (err) {
      console.error('Error ' + err);
      res.status(400).json({ err });
    }
    if (user) {
      res.status(200).json({ user });
    } else {
      restoUser.save(function (err, user) {
        if (err) {
          console.error('Error ' + err);
          res.status(400).json({ err });
        }
        res.status(200).json({ user });
      });
    }
  });
}
