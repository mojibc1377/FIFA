import axios from "axios"
import qs from "qs"

const Pay =async(amount , challengeId) =>{
var data = qs.stringify({
api_key: '709426d3-572d-4fb0-8f70-b8022a9c2ab4',
amount: amount,
order_id: challengeId,
callback_uri: 'https://www.google.com'
});
var config = {
  method: 'post',
  url: 'https://nextpay.org/nx/gateway/token',
  data : data,
  apiKey: "709426d3-572d-4fb0-8f70-b8022a9c2ab4",

};
    try {
      const res = await axios.post(`${config.baseURL}`, {
        api_key: "709426d3-572d-4fb0-8f70-b8022a9c2ab4",
        order_id: challengeId,
        amount: amount,
        callback_uri: 'http://localhost:3000/',
        currency: 'IRT',
      });
      throw new Error(
        `getToken: Nextpay returned error code of ${res.data?.code} : ${JSON.stringify(res.data)}`
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
//   verifyTransaction: async (transId, amount) => {
//     try {
//       const res = await axios.post(`${config.baseURL}/verify`, {
//         api_key: config.apiKey,
//         trans_id: transId,
//         amount: amount,
//         currency: 'IRT'
//       });

//       // TODO: this return object is supposed to be invoice field in subscription doc
//       if (res.data?.code == 0) {
//         return res.data;
//       }

//       const error = new Error(
//         `verify: Nextpay returned error code of ${res.data?.code} : ${JSON.stringify(res.data)}`
//       );
//       error.data = res.data;
//       throw error;
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }
// };
export default Pay;
