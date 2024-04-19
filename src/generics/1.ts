import axios from 'axios';

async function fetchData<TData>(url: string): Promise<TData> {
	try {
		const response = await axios.get<TData>(url);
		return response.data;
	} catch (error) {
		throw new Error(`Error fetching from ${url}: ${error}`);
	}
}
