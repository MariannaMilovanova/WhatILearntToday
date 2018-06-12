function fetchAlbumsES2015() {
  fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => {
      const json = res.json();
      console.log('1', json);
      return json;
    })
    .then(json => console.log('2', json))
}
fetchAlbumsES2015();

//with async await construction
//or async function fetchAlbumsES2016() {
const fetchAlbumsES2016 = async () =>  {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();
  console.log('3', json);
};

fetchAlbumsES2016();