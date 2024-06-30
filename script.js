const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const checkValidity = (input) => { 
    if (input === "") {
        alert("Please enter a phone number");
        return;
    }


    if (input.length !== 10) {
        alert("Phone number must be 10 digits");
        return;
    }

    const regex = /^1?[-\s]?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

    const pTag = document.createElement("p");
    pTag.className = "results";
    pTag.textContent = input + " is " + (regex.test(input) ? "valid" : "invalid");
    resultsDiv.appendChild(pTag);  
}


checkBtn.addEventListener("click", (event) => {
    event.preventDefault();
    checkValidity(userInput.value);
    userInput.value = "";
});

checkBtn.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        checkValidity(userInput.value);
        userInput.value = "";
    }
})

clearBtn.addEventListener("click", (event) => {
    event.preventDefault();
    userInput.value = "";
    resultsDiv.textContent = "";
})

