export default async function FetchDragons() {
  const baseURL = 'https://api.spacexdata.com/v3/dragons';

  const response = await fetch(baseURL);
  if (response.status !== 200) {
    throw new Error(
      'Can not fetch rocket data with te provided endpoint',
    );
  } try {
    const dragonData = await response.json();
    return dragonData;
  } catch (error) {
    throw new Error('Can not retireve data from the response');
  }
}
