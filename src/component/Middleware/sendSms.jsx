import { REQUEST } from '../../services/requests';

const sendSMSNotification = async (phoneNumber, templateId , params) => {
  var data = JSON.stringify({
    "mobile": phoneNumber,
    "templateId": templateId,
    "parameters": params,
  });
  REQUEST.post('/api/message',data )
};

export default sendSMSNotification;
