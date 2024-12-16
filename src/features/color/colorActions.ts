import { createAsyncThunk } from "@reduxjs/toolkit";

const BACKEND_URL = 'http://localhost:3001';
const resource = 'colors';

export const fetchColor = createAsyncThunk(resource, async () => {
  try {
		const response = await fetch(`${BACKEND_URL}/${resource}`);

		if (!response.ok) {
			console.log('Error fetching guests');
			return [];
		}

    return (await response.json()).value as string
	} catch (error) {
		console.log(error);
		return (error as Error).message;
	}
});
