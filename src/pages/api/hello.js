import getTime from '../../utils/getTime';
export default async function handler(req, res) {
  console.log(getTime());
  res.send(getTime());
}
