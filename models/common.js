import { HTTP } from "../utils/http.js";
import { config } from "../utils/config.js";
const api_blink_url = config.api_blink_url;
class CommonModel extends HTTP {
  constructor() {
    super();
  }
  // 幻灯片列表
  bannerList(storeId) {
    let params = {
      url: `${api_blink_url}/adv/slide/xxxx?storeId=${storeId}`,
      method: "POST",
    };
    return this.request(params);
  }
}
