
document.getElementById('getData').addEventListener('click', getTheData)

const apiURL = 'https://bikewise.org:443/api/v2/incidents?page=1&proximity=lexington&proximity_square=25'

    function getTheData() {
    console.log('This button was pressed.. here is your data')

    fetch(apiURL)
        .then(function (response) {
            // console.log(response.json());
            return (response.json());
        })
        .then(function(data){
            // console.log(data);
            bike = `${data.incidents[0].id}`
            console.log(bike)
            document.getElementById('incident').innerHTML = bike
        })
}