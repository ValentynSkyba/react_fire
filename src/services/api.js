import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchPosts = async (args) => {
  const response = await axios.get("search/photos/", {
    params: {
      client_id: "Rss7XLP-YRW6OHudaGj-MK3CEunwpB67A368WjfcDlM",
      per_page: 9,
      ...args,
    },
  });
  return response.data;
};
