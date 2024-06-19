document.addEventListener("DOMContentLoaded", function() {
    const ul = document.getElementById('orders');

    d3.csv("purchase_orders.csv").then(data => {
        data.forEach(order => {
            const li = document.createElement("li");
            li.textContent = `${order.customerName} - ${order.orderId}: $${order.purchaseAmount}`;
            ul.appendChild(li);
        });
    }).catch(error => {
        console.error('Error loading the CSV file:', error);
    });
});