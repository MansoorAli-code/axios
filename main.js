// GET REQUEST
function getTodos() {
  console.log('GET Request');
}

// POST REQUEST
function addTodo() {
  console.log('POST Request');
}

// PUT/PATCH REQUEST
function updateTodo() {
  console.log('PUT/PATCH Request');
}

// DELETE REQUEST
function removeTodo() {
  console.log('DELETE Request');
}

// SIMULTANEOUS DATA
function getData() {
  console.log('Simultaneous Request');
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES
const axios = require('axios'); // Require Axios if working in Node.js environment

// Your appointment object
const appointment = {
  id: 1,
  date: '2023-12-25',
  time: '10:00 AM',
  reason: 'Routine checkup'
};

// POST request to store the appointment object in CrudCrud
axios.post('https://crudcrud.com/api/your_crudcrud_id/appointments', appointment)
  .then(response => {
    console.log('Appointment stored successfully:', response.data);
    // Check the response and verify if the appointment was stored successfully
    // You can inspect the response to confirm the success or log the confirmation
  })
  .catch(error => {
    console.error('Error storing appointment:', error);
    // Handle any errors that occur during the POST request
  });


// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
