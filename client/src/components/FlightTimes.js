export const FlightTimes = (departure, arrival) => {
    if(!departure || !arrival) {
        return {departure: null, arrival: null, duration: null};
    }
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short', hour: 'numeric', minute: 'numeric' };
    let dep = new Date(departure);
    let arr = new Date(arrival);

    const timeDiff = arr - dep;

    let minutes = Math.round(Math.floor(timeDiff / 1000) / 60);
    let hours = Math.floor(minutes / 60);

    minutes = minutes % 60;

    const dur = `${hours}h ${minutes}m`;

    dep = dep.toLocaleString("en-US", dateOptions);
    arr = arr.toLocaleString("en-US", dateOptions);

    return {departure: dep, arrival: arr, duration: dur};
};
