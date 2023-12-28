import axios from "axios";

export async function shortenUrlAPi(urlData: string){

const encodedParams = new URLSearchParams();
encodedParams.set('url', `${urlData}`);

const options = {
  method: 'POST',
  url: 'https://url-shortener-service.p.rapidapi.com/shorten',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': process.env.SHORTENER_API_KEY,
    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	return response.data.result_url
} catch (error) {
	console.error(error);
}
}