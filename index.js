const constants = {
  BASE_URL: 'https://api.github.com/gists/',
};

export default function(fetch) {
  return (gistId, gistFileName) => fetch(`${constants.BASE_URL}${gistId}`)
    .then(response => {
      return response.json().then((json) => {
        return gistFileName ? ((json || {}).files || {})[gistFileName] : json.files;
      }).catch(console.error);
    }).catch(console.error);
}
