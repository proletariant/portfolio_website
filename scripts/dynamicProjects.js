/* code iterates between items in JSON file to display projects */
async function populate(domain) {

    // receive JSON data
    const jsonData = await getJSON();
    console.log(jsonData);

    // dynamic div setup
    var projectView = document.getElementById("container");
    while (projectView.firstChild) {
        projectView.removeChild(projectView.firstChild);
    }

    for (var i = 0; i < jsonData.projects.length; i++) {
        var obj = jsonData.projects[i];
        var project = document.createElement("div");
        project.classList.add("projects");
        for (var key in obj) {
            var attrName = key;
            var attrValue = obj[key];
            console.log(attrName);
            if (attrName == "type" && attrValue != domain && domain != null) break;
            /* send name value, description, photos, link (if applicable) */
            switch (attrName) {
                case "title":
                    var title = document.createElement("h1");
                    title.textContent = attrValue;
                    project.appendChild(title);
                    break;
                case "description":
                    var desc = document.createElement("p");
                    desc.textContent = attrValue;
                    project.appendChild(desc);
                    break;
                case "link":
                    var link = document.createElement("a");
                    link.textContent = attrValue;
                    link.setAttribute("href", attrValue);
                    project.appendChild(link);
                    break;
                default:
                    break;
            }
        }
        project.appendChild(document.createElement("hr"));
        projectView.appendChild(project);
    }
}

/* helper function to receive JSON file via fetch for inclusion */
/* TODO: change fetch request to local path (URL is only for local testing) */
async function getJSON() {
    const response = await fetch('https://proletariant.github.io/portfolio_website/scripts/main.json');

    const data = response.json();

    return data;
}