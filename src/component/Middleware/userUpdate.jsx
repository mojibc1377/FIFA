import { request } from '../../services/requests';

const LLogin = async()=>{
    const response = await request.post('/api/login', {
      username: JSON.parse(localStorage.getItem('user'))?.username,
      password: JSON.parse(localStorage.getItem('user'))?.password
    });
  
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
  LLogin();
  export default LLogin;
