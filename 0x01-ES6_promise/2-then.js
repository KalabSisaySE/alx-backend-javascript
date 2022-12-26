export default function handleResponseFromAPI(promise) {
  return promise
    .then(
      () => ({ status: 200, body: 'success' }),
    ).catch(
      () => {
        const x = new Error();
        return x;
      },
    ).finally(
      () => { console.log('Got a response from the API'); },
    );
}
