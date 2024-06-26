// U72955273

d3.dsv(",", "data/purchase_orders.csv", function(d) {
    return {
        customerName: d.customerName,
        orderId: d.orderId,
        purchaseAmount: d.purchaseAmount
    };
}).then(function(data) {
    var ul = d3.select("#orders");
    data.forEach(function(d) {
        ul.append("li")
        .text (d.customerName + " - Order ID: " + d.orderId + ": Purchase Amount: " + d.purchaseAmount);
    });
});