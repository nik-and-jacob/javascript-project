let People = [
    {"name": 'Jacob', "age": 25, "height": "5'11", "Gender": "M"},
    {"name": 'Nik', "age": 73, "height": "4'9", "Gender": "M"},
    {"name": 'Lilly', "age": 34, "height": "5'0", "Gender": "F"},
    {"name": 'Betsy', "age": 92, "height": "4'3", "Gender": "F"},
    {"name": 'Gerald', "age": 97, "height": "6'7", "Gender": "M"},
    {"name": 'Brenda', "age": 19, "height": "5'10", "Gender": "F"},
];

// for loop through the array displaying the text such as: "Jacob is a Male, he 25 years old, and is 5'11 in height"
for(let i = 0; i < People.length; i++){
    if(People[i].Gender == 'M'){
        var gender = 'Male';
    }
    if(People[i].Gender == 'F'){
        var gender = 'Female';
    }
    console.log(`${People[i].name} is a ${gender}, he ${People[i].age} years old, and is ${People[i].height} in height`)
}

// forEach loop through the array displaying the text such as: "Jacob is a Male, he 25 years old, and is 5'11 in height"