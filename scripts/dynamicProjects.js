/* code iterates between items in JSON file to display projects */
function populate(domain) {
    jsonData = getJSON();

    const titleList = document.getElementsByClassName("title");
    const descList = document.getElementsByClassName("description");
    const linkList = document.getElementsByClassName("link");
    var j = 0;

    for (var i = 0; i < jsonData.projects.length; i++) {
        var obj = jsonData.projects[i];
        for (var key in obj) {
            var attrName = key;
            var attrValue = obj[key];
            /* send name value, description, photos, link (if applicable) */
            switch (attrName) {
                case title:
                    console.log("title");
                    titleList[j].innerHTML = attrValue;
                    break;
                case description:
                    descList[j].innerHTML = attrValue;
                    break;
                case link:
                    linkList[j].innerHTML = attrValue;
                    break;
                default:
                    break;
            }
        }
        j++;
    }
}

async function getJSON() {
    fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

    return json;
}

populate(1);