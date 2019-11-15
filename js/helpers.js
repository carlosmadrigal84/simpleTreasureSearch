let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

// e es el evento, donde ha dado click el usuario. target es donde está el tesoro.
let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
    if (distance < 30) {
        return "te quemaaaaass";
    } else if (distance < 60) {
        return "muy caliente";
    } else if (distance < 100) {
        return "caliente";
    } else if (distance < 180) {
        return "frío";
    } else if (distance < 300) {
        return "muy frío";
    } else {
        return "más frío que en la comunión del Rey de la Noche";
    }
}