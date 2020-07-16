const selectCity = (store) => store.city.city;

const loading = (store) => store.city.loading;

const error = (store) => store.city.error;

export default {selectCity, loading, error};
