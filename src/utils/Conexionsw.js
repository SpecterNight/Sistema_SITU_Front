import { Session } from "../utils/UseSession";

const URL = process.env.URL

  export const IngresarSistema = async (data) => {
    try {
      const response = await fetch(URL + '/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const responseData = await response.json();
  
      console.log(responseData);
  
      if (responseData && responseData.token) {
        const session = Session(responseData.token);
        console.log("INGRESO AL SISTEMA", session);
      }
  
      return responseData;
    } catch (error) {
      console.error('Error:', error);
    }
  }