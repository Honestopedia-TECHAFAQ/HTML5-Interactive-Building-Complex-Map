function getBuildingDetails(buildingName) {
    var buildingDetails = {
        "Building A": { info: "Services: Service A, Service B, Service C" },
        "Building B": { info: "Services: Service X, Service Y, Service Z" },
        "Building C": { info: "Services: Service P, Service Q, Service R" }
    };

    return buildingDetails[buildingName];
}

function getQueryParam(param) {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}
