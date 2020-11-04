import http from "../utils/httpClient";
class authService {
  login = async (data) => {
    debugger;
    try {
      return await http
        .post("/api/auth/login", data)
        .then((response) => {
          console.log(response.data);
          alert(response.data);
          return response.data;
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  registration = async (data) => {
    debugger;
    try {
      return await http
        .post("/api/auth/register", data)
        .then((response) => {
          console.log(response.data);
          alert(response.data);
          return response.data;
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
}

export default new authService();
