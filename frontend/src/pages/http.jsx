export const apiUrl = 'http://localhost:8000/api/';
export const imageUrl= "http://localhost:8000";

export const adminToken = () => {
  const adminInfo = localStorage.getItem('adminInfo');
  const data = JSON.parse(adminInfo);
  return data.token;
}

export const userToken = () => {
  const userInfo = localStorage.getItem('userInfo');
  const data = JSON.parse(userInfo);
  return data.token;
}