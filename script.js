function clickBtn() {
    var userName = document.getElementById('userName').value;
    
    if (userName.trim() !== "") {
        alert("Correct input: " + userName);
    } else {
        alert("Please enter your name.");
    }
}

// Optional: Allow Enter key to trigger button click
var input = document.getElementById("userName");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});
