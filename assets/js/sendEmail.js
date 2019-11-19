function sendMail(contactForm) {
    emailjs.send("gmail", "holiday_planner", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "booking_travel_query": contactForm.bookingtravelquery.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}