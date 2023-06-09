import http from "../http-common";
import url from './url'

class RestaurantsDataService {
    getAll() {
        return http.get(url + "restaurants");
    }

    get(id) {
        return http.get(url +`restaurants/${id}`);
    }

    create(data) {
        return http.post(url + "restaurants", data);
    }

    update(id, data) {
        return http.put(url + `restaurants/${id}`, data);
    }

    delete(id) {
        return http.delete(url + `restaurants/${id}`);
    }
}

export default new RestaurantsDataService();