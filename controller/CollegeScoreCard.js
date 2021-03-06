const fetch = require('node-fetch');

var userSelection = '';
const urlBuilder = function(userInput){
    console.log("The user has selected: " + userInput);
    if(userInput=='cost'){
        userSelection = 'school.latest.cost.public';
    }
    if(userInput=='location'){
        userSelection = 'school.city,school.state,school.zip';
    }
};

// var school_state;
// school_state = "OH";

const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.degrees_awarded.predominant=2,3&fields=${userSelection}&api_key=WvT92ONNQdtwSI7iEh1PnyumEUTMff7ig3KnuTFS`;

const get_data = async url => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    }catch(error){
        console.log(error);
    }
};

get_data(url);

module.exports.urlBuilder = urlBuilder;

// const url = "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.degrees_awarded.predominant=2,3&fields=id,school.name,2013.student.size&api_key=WvT92ONNQdtwSI7iEh1PnyumEUTMff7ig3KnuTFS";

// school_state
// const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.state=${school_state}&fields=id,school.name,school.state&api_key=WvT92ONNQdtwSI7iEh1PnyumEUTMff7ig3KnuTFS`;