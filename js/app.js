let totalAmount = 5500;

function initializeToggle(){
    const donationButton = document.getElementById("donation-btn");
    const historyButton = document.getElementById("history-btn");
    const donationData = document.getElementById("donation-data");
    const historyData = document.getElementById("history-data");

    donationButton.addEventListener("click", () => {
        donationData.classList.remove("hidden");
        historyData.classList.add("hidden");
    });

    historyButton.addEventListener("click", () => {
        historyData.classList.remove("hidden");
        donationData.classList.add("hidden");
    })
}

function donate(section){
    const inputField = document.getElementById(`${section}-input`);
    const donationAmount = parseInt(inputField.value);

    if(isNaN(donationAmount) || donationAmount <= 0){
        alert("Please inter a valid amount.");
        return;
    }

    const sectionAmountElement = document.getElementById(`${section}-amount`);
    let sectionAmount = parseInt(sectionAmountElement.innerText.split(" ")[0]);
    sectionAmount += donationAmount;
    sectionAmountElement.innerText = `${sectionAmount} BDT`;

    totalAmount -= donationAmount;
    document.getElementById("total-amount").innerText = `${totalAmount} BDT`;

    addToHistory(section, donationAmount);

    inputField.value = "";

    alert(`Thank you for donation to ${section.charAt(0).toUpperCase() + section.slice(1)}!`); 
    
}

function addToHistory(section,amount){
    const historyList = document.getElementById("history-list");
    const listItem = document.createElement("li");

    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    listItem.innerText = `${amount} Taka Donated to ${section.charAt(0).toUpperCase() + section.slice(1)} on ${formattedDate}`;
    historyList.appendChild(listItem);
}
initializeToggle();