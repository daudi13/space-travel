const fetchRocketData = () => {
  const ApiUrl = 'https://api.spacexdata.com/v3/missions';
  fetch(ApiUrl)
    .then((res) => {
      const missionData = res.json();
      return missionData;
    })
    .catch((e) => {
      throw new Error(e);
    });
};

export default fetchRocketData;
