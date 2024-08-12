document.addEventListener("DOMContentLoaded", () => {

    const  contentContainer = document.createElement("div");
        contentContainer.classList.add("content");
    const  controlsContainer = document.createElement("div");
        controlsContainer.classList.add("controls")

    document.body.appendChild(contentContainer);
    document.body.appendChild(controlsContainer)

    const boldButton = document.createElement("button")
    boldButton.id="bold"
    boldButton.textContent= "B"
    // boldButton.addEventListener();
   
    const italicButton = document.createElement("button");
    italicButton.textContent = "I";
    italicButton.id = "italic";
    // italicButton.addEventListener();

    const underlineButton = document.createElement("button");
    underlineButton.textContent = "U";
    underlineButton.id = "underline";
    // underlineButton.addEventListener();

    const highlightButton = document.createElement("button");
    highlightButton.textContent = "Highlight";
    highlightButton.id = "highlight";
    // highlightButton.addEventListener();

    let contentParagraph = document.createElement("p");
    contentParagraph.textContent="code";



    contentContainer.appendChild(contentParagraph);

    controlsContainer.appendChild(boldButton);
    controlsContainer.appendChild(italicButton);
    controlsContainer.appendChild(underlineButton);
    controlsContainer.appendChild(highlightButton);



});