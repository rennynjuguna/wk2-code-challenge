fetch('db.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'id: ' + data[i].id + 'name: ' + data[i].name + 'image: ' + data[i].image + 'votes: ' + data[i].votes;
        mainContainer.appendChild(div);
    }
}