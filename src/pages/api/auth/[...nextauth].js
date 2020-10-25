import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
const callbacks = {};

callbacks.signIn = async function signIn(user, metadata) {
  await dbConnect();
  const { name, email } = user;
  const newUser = new User({ name, email });
  User.findOne({ email }, function (err, restoUser) {
    if (err) {
      console.error('Error ' + err);
      return Promise.resolve(false);
    }
    if (restoUser) {
      user.id = restoUser._id;
      console.log('printing user object from signin function \n');
      console.log(user);

      return Promise.resolve(true);
    } else {
      newUser.save(function (err, restoUser) {
        if (err) {
          console.error('Error ' + err);
          return Promise.resolve(false);
        }
        user.id = restoUser._id;
        return Promise.resolve(true);
      });
    }
  });
};

callbacks.jwt = async function jwt(token, user) {
  console.log('im printing user', user);
  if (user) {
    console.log('im inside jwt user if statement callback');
    token = { id: user.id };
  }
  console.log('printing token \n');
  console.log(token);
  // return Promise.resolve(token);
  return token;
};

callbacks.session = async function session(session, token) {
  await dbConnect();
  const dbUser = await User.findOne({ _id: token.id });
  if (!dbUser) {
    return null;
  }
  console.log(' db user below \n ');
  console.log(dbUser);
  session.user = {
    id: dbUser.id,
    name: dbUser.name,
    email: dbUser.email,
    address: dbUser.address,
    orders: dbUser.orders,
  };
  console.log(' session object below \n ');
  console.log(session);
  // return Promise.resolve(session);
  return session;
};

const events = {
  signIn: async (message) => {
    console.log('sign in sucessfull');
  },
  signOut: async (message) => {
    console.log('sign out su sucessfull');
  },
  session: async (message) => {
    console.log('session is active');
  },
  error: async (message) => {
    console.log('error is active');
  },
};
const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_LOGIN_CLIENT_ID,
      clientSecret: process.env.GOOGLE_LOGIN_CLIENT_SECRET,
    }),
    // Providers.Facebokok({
    //   clientId: process.env.FACEBOOK_LOGIN_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_LOGIN_CLIENT_SECRET,
    // }),
    // ...add more providers here
  ],

  pages: {
    signIn: '/sign-in',
  },
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks,
  events,
  // A database is optional, but required to persist accounts in a database
  //database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
