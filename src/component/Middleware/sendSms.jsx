import axios from 'axios';

const sendSMSNotification = async (phoneNumber, templateId , params) => {
 

  var data = JSON.stringify({
    "mobile": phoneNumber,
    "templateId": templateId,
    "parameters": params,
  });
  const smsConfig = {
    method: 'post',
    url: "https:api.sms.ir/v1/send/verify",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/plain',
        'x-api-key': "bTD9j8N8IdbEH78MVjpHarrNDRjwchIDwVjSaNWDPccme4XMEjzDOLAIhelKLapc"
      },
      data: data
  };

  axios(smsConfig)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
};

export default sendSMSNotification;
