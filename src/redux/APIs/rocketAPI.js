export default async function FetchRocketsData() {
  const baseURL = 'https://api.spacexdata.com/v3/rockets';

  const response = await fetch(baseURL);
  if (response.status !== 200) {
    throw new Error(
      'Can not fetch rocket data with the provided endpoint',
    );
  } try {
    const rocketData = await response.json();
    return rocketData;
  } catch (error) {
    throw new Error('Can not retrieve data from the response');
  }
}
