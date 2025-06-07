const conutdownDate = new Date("June 21, 2025 09:00:00").getTime();
const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = conutdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (100 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "<small>Days</small>";
    document.getElementById("hours").innerHTML = hours + "<small>Hours></small>";
    document.getElementById("minutes").innerHTML = minutes + "<small>Minutes</small>";
    document.getElementById("seconds").innerHTML = seconds + "<small>Seconds</small>";

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = " <h3>🎉It's Time!🎉</h3>";
    }
}, 1000)