
function launchbrowser(browsername) {
    if (browsername === "chrome") {
        console.log("launching Chrome")
    }
    if (browsername === "firefox") {
        console.log("launching firefox")
    }
}
launchbrowser("chrome")


function runtests(testtype) {
    switch (testtype) {
        case "smoke":
            console.Consolelog("This is smoke");
            break;
        case "sanity":
            console.log("This is sanity");
            break;
        case "regression":
            console.log(" This is regression");
            break;
        default:
            console.log("This is defualt smoke")
            break;
    }
}
runtests("sanity")

