// Required Variables
let count = 0;
const form = document.querySelector('form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const address = document.querySelector('#address');
const pin = document.querySelector('#pincode');
const gender = document.querySelector('#gender');
const state = document.querySelector('#state');
const country = document.querySelector('#country');

form.addEventListener('submit', addData);

function addData(e) {
   
   total = "";
   foods = 0;

   // getting the number of fav foods selected
   for (let i = 0; i < document.form1.check.length; i++) {
      if(document.form1.check[i].checked) {
         total += document.form1.check[i].value + '\n' ;
         foods= foods+1;
      }
   }
   
   // if user selected below 2 items throw an alert else append the data to table 
   if(foods < 2) {
      alert("Please choose atleast two favourite foods");
   } else {
      
      count++;
      let row = document.createElement('tr');

      let num = document.createElement('td');
      num.innerText = count;
      row.appendChild(num);

      // First Name
      let firstName = document.createElement('td');
      firstName.innerText = fname.value;
      row.appendChild(firstName);

      // lastName
      let lastName = document.createElement('td');
      lastName.innerText = lname.value;
      row.appendChild(lastName);

      // Address 
      let Address = document.createElement('td');
      Address.innerText = address.value;
      row.appendChild(Address);

      // Pincode
      let pincode = document.createElement('td');
      pincode.innerText = pin.value;
      row.appendChild(pincode);

      // Gender 
      let Gender = document.createElement('td');
      Gender.innerText = gender.value;
      row.appendChild(Gender);

      // Fav food
      let fav_food = document.createElement('td');
      fav_food.innerText = total;
      row.appendChild(fav_food);

      // State 
      let State = document.createElement('td');
      State.innerText = state.value;
      row.appendChild(State);

      // Country
      let Country = document.createElement('td');
      Country.innerText = country.value;
      row.appendChild(Country);

      document.querySelector('tbody').appendChild(row);

      form.reset();
      e.preventDefault();

   }
}
