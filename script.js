function setupTheme() {
    const theme = localStorage.getItem("THEME");
    localStorage.setItem("THEME", "LIGHT");
    if (theme == "DARK") {
        toggleTheme();
    }
}

function goHome() {
    location.reload();
}

function toggleTheme() {
    const currentTheme = localStorage.getItem("THEME");
    const newTheme = currentTheme == "LIGHT" ? "DARK" : "LIGHT";
    enableTheme(newTheme);
    localStorage.setItem("THEME", newTheme);
}

function enableTheme(theme) {
    let themeDetails = lightTheme;

    const lti = document.getElementById("lightThemeIcon");
    const dti = document.getElementById("darkThemeIcon");
    // Changing icons
    if (theme == "LIGHT") {
        dti.style.display = "none";
        lti.style.display = "block";
    } else {
        lti.style.display = "none";
        dti.style.display = "block";

        themeDetails = darkTheme;
    }

    // Changing styles
    for (const key in themeDetails) {
        console.log(document.getElementById(key));
        console.log(themeDetails[key]);
        Object.assign(document.getElementById(key).style, themeDetails[key]);
    }
}

function actionHandler(type) {
    if (type) {
        triggerAnimation("paletteCreator");
        handleCreatePalette();
    } else {
        triggerAnimation("configUploader");
        handleUploadConfig();
    }
}

function triggerAnimation(newDocId) {
    const doc = document.getElementById("landingPage");
    const newDoc = document.getElementById(newDocId);

    doc.style.transform = "scale(0.8) translate(-1400px)";
    setTimeout(() => {
        doc.style.display = "none";
        document.getElementById("paletteCreator").style.display = "none";
        document.getElementById("configUploader").style.display = "none";
        newDoc.style.display = "flex";
        newDoc.style.transform = "scale(1) translate(0)"
    }, 600);
    if (newDocId == "configUploader") {
        const anime = document.getElementById("loadingAnimation");
        anime.style.display = "block";
        anime.style.transform = "scale(1)"
    }
}

function enableInput(element, container) {
    document.getElementById(element).disabled = false;
    document.getElementById(container).className = document.getElementById(container).className.replace("locked", "");
    //Suggest color 
}