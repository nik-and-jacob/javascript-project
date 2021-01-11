let people = [
    {"name": 'Jacob', "age": 25, "height": "5'11", "gender": "M"},
    {"name": 'Nik', "age": 73, "height": "4'9", "gender": "M"},
    {"name": 'Lilly', "age": 34, "height": "5'0", "gender": "F"},
    {"name": 'Betsy', "age": 92, "height": "4'3", "gender": "F"},
    {"name": 'Gerald', "age": 97, "height": "6'7", "gender": "M"},
    {"name": 'Brenda', "age": 19, "height": "5'10", "gender": "F"},
];

// for loop through the array displaying the text such as: "Jacob is a Male, he 25 years old, and is 5'11 in height"


// forEach loop through the array displaying the text such as: "Jacob is a Male, he 25 years old, and is 5'11 in height"
let html = '';

function peopleCards(name, age, height, gender) {
    html += `<div class="card">
    <h2>${name} — ${age}</h2>
    <p>They are ${height}" tall and ${gender === 'M' ? 'Male' : 'Female'}</p>
    <button class="delete">X Delete</button>
     </div>`;
    div.insertAdjacentHTML("afterbegin", html);
}

const div = document.createElement('div');
document.body.append(div);
div.classList.add('wrapper')
const string = `<h1>Please, let this work</h1><p> -thanks.</p>`;
div.insertAdjacentHTML("afterbegin", string);

people.forEach(person => peopleCards(person.name, person.age, person.height,  person.gender));