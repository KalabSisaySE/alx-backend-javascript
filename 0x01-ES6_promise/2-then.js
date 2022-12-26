export default function handleResponseFromAPI(promise) {
  return promise
    .then(
      (res) => ({ status: 200, body: 'success' }),
    ).catch(
      (err) => { Error(); },
    ).finally(
      () => { console.log('Got a response from the API'); },
    );
}
