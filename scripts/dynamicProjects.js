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
        var valid = true;
        // get current project
        var obj = jsonData.projects[i];
        // create empty div elements to fill with project information
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
            if (attrName == "type" && attrValue != domain && domain != null) {
                valid = false;
                break;   
            }
            // depending on key value
            switch (attrName) {
                case "title":
                    // include the title of the project
                    var title = document.createElement("h1");
                    title.textContent = attrValue;
                    textSide.appendChild(title);
                    break;
                case "description":
                    // include a description of the project
                    var desc = document.createElement("p");
                    desc.textContent = attrValue;
                    textSide.appendChild(desc);
                    break;
                case "link":
                    // include a link (if applicable)
                    var link = document.createElement("a");
                    link.textContent = attrValue;
                    link.setAttribute("href", attrValue);
                    textSide.appendChild(link);
                    break;
                case "image":
                    // building the slidedeck
                    var j = 1;
                    for (var pic in attrValue) {
                        // something
                        var slide = document.createElement("div");
                        slide.classList.add("slideShow");
                        slide.classList.add("fade");
                        var currentSlide = document.createElement("div");
                        currentSlide.classList.add("numberText");
                        currentSlide.textContent = j + "/" + attrValue.length;
                        j++;
                        slide.appendChild(currentSlide);
                        var img = document.createElement("img");
                        img.classList.add("image");
                        img.setAttribute("src", attrValue[pic]);
                        img.setAttribute("width", "100%");
                        slide.appendChild(img);
                        contentSide.appendChild(slide);
                    }
                    contentSide.appendChild(buildDropshadow());
                    break;
                case "video":
                    // create an iframe to embed a YouTube video
                    var container = document.createElement("div");
                    container.classList.add("videoShow");
                    var embed = document.createElement("iframe");
                    embed.classList.add("embedVideo");
                    embed.setAttribute("width", "560");
                    embed.setAttribute("height", "315");
                    embed.setAttribute("src", attrValue);
                    embed.setAttribute("title", "YouTube video player");
                    embed.setAttribute("frameborder", "0");
                    embed.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
                    embed.setAttribute("allowfullscreen", true);
                    container.appendChild(embed);
                    contentSide.appendChild(container);
                    contentSide.appendChild(buildDropshadow());
                default:
                    break;
            }
        }
        // add filled project div to final dynamic project div
        if (valid) {
            project.appendChild(contentSide);
            project.appendChild(textSide);
            projectView.appendChild(project);
        }
    }
    // build slideshows
    showSlides();
}

function buildDropshadow() {
    var dropShadow = document.createElement("div");
    dropShadow.classList.add("dropShadow");
    dropShadow.classList.add("silly");
    return dropShadow;
}

/* helper function to receive JSON file via fetch for inclusion */
/* TODO: change fetch request to local path (URL is only for local testing) */
async function getJSON() {
    const response = await fetch('https://proletariant.github.io/portfolio_website/dbs/main.json');
    //const response = await fetch('../dbs/main.json');

    const data = response.json();

    return data;
}