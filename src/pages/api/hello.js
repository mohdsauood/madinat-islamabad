import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';

export default async (req, res) => {
  await dbConnect();
  const name = 'SALMAN KHAN';
  const email = 'swampfire.saud@gmail.com';
  const restoUser = new User({ name, email });
  User.findOrCreate({ email }, restoUser, function (err, user) {
    if (err) return console.error(err);
    // user.id=restoUser._id;
    res.statusCode = 200;
    res.json({ user });
  });
};
