document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('booking-form');
    const totalRoomCost = document.getElementById('total-room-cost');
    const totalAmenitiesCost = document.getElementById('total-amenities-cost');
    const totalCost = document.getElementById('total-cost');
    const balance = document.getElementById('balance');
    const totalPersons = document.getElementById('total-persons');
    const extraPersonCost = 1000;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const roomType = document.getElementById('room-type').value;
        const amenities = Array.from(document.getElementById('amenities').selectedOptions).map(option => option.value);
        const advanceAmount = parseFloat(document.getElementById('advance-amount').value);
        const totalDays = parseInt(document.getElementById('total-days').value);
        const persons = parseInt(totalPersons.value);

        const roomRate = roomType === 'Delux Room' ? 2500 : 4000;
        const amenitiesCost = amenities.length * (1000 + 300);

        const roomCost = roomRate * totalDays;
        const amenitiesCostTotal = amenitiesCost * totalDays;
        const totalRoomCostValue = roomCost + amenitiesCostTotal;

        // Calculate additional charges for extra persons
        let extraPersonCharges = 0;
        if (persons > 2) {
            extraPersonCharges = extraPersonCost * (persons - 2) * totalDays;
        }

        const total = totalRoomCostValue + extraPersonCharges;

        totalRoomCost.textContent = `${totalRoomCostValue}/-`;
        totalAmenitiesCost.textContent = `${amenitiesCostTotal}/-`;
        totalCost.textContent = `${total}/-`;

        if (advanceAmount >= total) {
            balance.textContent = '0/-';
        } else {
            const remainingBalance = total - advanceAmount;
            balance.textContent = `${remainingBalance}/-`;
        }
    });
});
