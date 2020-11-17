import getUserType from './getUserType';

import { INIT_SELECTED_ADDRESS } from '../context/types/types';

export default async function updateUserFromSession(session, cartDispatch) {
  if (session && session.user) {
    const userProperties = Object.keys(session.user);
    userProperties.forEach((property) => {
      const type = getUserType(property);
      cartDispatch({ type, payload: session.user[property] });
    });
    cartDispatch({
      type: INIT_SELECTED_ADDRESS,
      payload: session.user.address,
    });
  }
}
