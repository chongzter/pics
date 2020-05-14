import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID -JVGYucDEOpOrhXsS7qRDuWcfA26OwdtRks2r2RlFrw",
  },
});
