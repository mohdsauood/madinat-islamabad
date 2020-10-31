import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
const callbacks = {};

callbacks.signIn = async function signIn(user, metadata) {
  await dbConnect();
  const { name, email } = user;
  const newUser = new User({ name, email });

  try {
    let restoUser = await User.findOne({ email });
    if (restoUser) {
      user.id = restoUser._id;
      console.log(restoUser);
      return true;
    } else {
      try {
        let newRestoUser = await newUser.save();
        user.id = newRestoUser._id;
        console.log(newRestoUser);
        return true;
      } catch (error) {
        console.error('Error ' + error);
        return false;
      }
    }
  } catch (error) {
    console.error('Error ' + error);
    return false;
  }
};

callbacks.jwt = async function jwt(token, user, account, profile, isNewUser) {
  if (!token.id && user && user.id) {
    token = { id: user.id };
  }
  return Promise.resolve(token);
  // return token;
};

callbacks.session = async function session(session, token) {
  await dbConnect();
  const dbUser = await User.findOne({ _id: token.id });
  if (!dbUser) {
    return null;
  }
  session.user = {
    id: dbUser.id,
    name: dbUser.name,
    email: dbUser.email,
    address: dbUser.address,
    orders: dbUser.orders,
  };
  return Promise.resolve(session);
  // return session;
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
