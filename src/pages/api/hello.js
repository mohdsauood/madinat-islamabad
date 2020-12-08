import getTime from '../../utils/getTime';
export default async function handler(req, res) {
  let x = console.log(getTime());
  res.send('testing time');
}
