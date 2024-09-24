let totalAmount = 5500;

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

    inputField.value = "";

    alert(`Thank you for donation to ${section.charAt(0).toUpperCase() + section.slice(1)}!`);
}