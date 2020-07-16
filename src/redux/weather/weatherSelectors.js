const current = (store) => store.weather.current;

const forecast = (store) => store.weather.forecast;

const loading = (store) => store.weather.loading;

const error = (store) => store.weather.error;

export default {current, forecast, loading, error};
