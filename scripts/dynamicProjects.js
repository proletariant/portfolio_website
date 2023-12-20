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

    // for each project in jsonList
    for (var i = 0; i < jsonData.projects.length; i++) {
        // get current project
        var obj = jsonData.projects[i];
        // create empty div element to fill with project information
        var project = document.createElement("div");
        project.classList.add("projects");
        var textSide = document.createElement("div");
        textSide.classList.add("textSide");
        var contentSide = document.createElement("div");
        contentSide.classList.add("contentSide");
        // for every project field in the current project
        for (var key in obj) {
            // grab both key and value
            var attrName = key;
            var attrValue = obj[key];
            // if the program reads a key of type "type" that isn't listed in the current domain, skip
            if (attrName == "type" && attrValue != domain && domain != null) break;
            // send name value, description, photos, link (if applicable)
            switch (attrName) {
                case "title":
                    var title = document.createElement("h1");
                    title.textContent = attrValue;
                    // project.appendChild(document.createElement("hr"));
                    textSide.appendChild(title);
                    break;
                case "description":
                    var desc = document.createElement("p");
                    desc.textContent = attrValue;
                    textSide.appendChild(desc);
                    break;
                case "link":
                    var link = document.createElement("a");
                    link.textContent = attrValue;
                    link.setAttribute("href", attrValue);
                    textSide.appendChild(link);
                    break;
                case "image":
                    for (var pic in attrValue) {
                        // something
                    }
                    break;
                case "video":
                    var embed = document.createElement("iframe");
                    embed.setAttribute("width", "560");
                    embed.setAttribute("height", "315");
                    embed.setAttribute("src", attrValue);
                    embed.setAttribute("title", "YouTube video player");
                    embed.setAttribute("frameborder", "0");
                    embed.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
                    embed.setAttribute("allowfullscreen", true);
                    contentSide.appendChild(embed);
                default:
                    break;
            }
        }
        // add filled project div to final dynamic div
        project.appendChild(contentSide);
        project.appendChild(textSide);
        projectView.appendChild(project);
    }
}

/* helper function to receive JSON file via fetch for inclusion */
/* TODO: change fetch request to local path (URL is only for local testing) */
async function getJSON() {
    const response = await fetch('https://proletariant.github.io/portfolio_website/dbs/main.json');
    //const response = await fetch('/dbs/main.json');

    const data = response.json();

    return data;
}