import { Launches } from '../types';

const API_URL = 'https://api.spacexdata.com/v3';

export async function getAllLaunches(): Promise<Launches[]> {
  try {
    const response = await fetch(`${API_URL}/launches`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getLaunchByFlightNumber(flighNumber: number) {
  try {
    const response = await fetch(`${API_URL}/launches/${flighNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
