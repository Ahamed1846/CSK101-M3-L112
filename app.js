// create a function and following the progressions inside the function.
function getData() {
  // Progression 1: Create a promise call which fetches data
  let promise = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => resolve(response.json()))
      .catch((error) => {
        reject(error.message);
      });
  });
  promise
    .then((response) => {
      response.forEach((res) => {
        container.innerHTML += `<div class="player">
      <div class="strength">Name : ${res.name}</div>
      <div>Email   : ${res.email}</div>
      <div>Phone   : ${res.phone}</div>
      <div>Website : ${res.website}</div>
      <div>Company : ${res.company.name}</div>
      <div>City    : ${res.address.city}</div>
      <div>Zipcode : ${res.address.zipcode}</div>
     </div>`;
      });
    })
    .catch((error) => {
      console.log('Promise rejected.');
      console.log(error);
    });
  // Progression 2: Display the fetched data in the form of list
  // Progression 3: When the promise call is rejected then throw an error
}
var container = document.getElementById('message');
var button = document.getElementById('btnGet');
button.onclick = () => {
  getData();
};
