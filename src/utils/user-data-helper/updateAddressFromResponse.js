import { UPDATE_USER_ADDRESS } from '../../context/types/types';
export default function updateAddressFromResponse(address, cartDispatch) {
  cartDispatch({ type: UPDATE_USER_ADDRESS, payload: address });
}
