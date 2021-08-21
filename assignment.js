// seerToMon
function seerToMon(seer) {
    if (seer < 0) {
        return "weight can't be negative";
    }
    const mon = seer / 40;
    return mon;
}

let inputSeer = seerToMon(-1);
console.log(inputSeer);




// totalSales
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return "quantity can't be negative";
    }
    const shirtTotal = shirtQuantity * 100;
    const pantTotal = pantQuantity * 200;
    const shoeTotal = shoeQuantity * 500;
    const total = shirtTotal + pantTotal + shoeTotal;
    return total;
}

let quantity = totalSales(4, 3, 1);
console.log(quantity);




// deliveryCost
function deliveryCost(tShirtQuantity) {
    let totalCost = 0;
    if (tShirtQuantity < 0) {
        return "quantity can't be negative value";
    }
    // for first 100 tshirt
    else if (tShirtQuantity <= 100) {
        totalCost = tShirtQuantity * 100;
    }
    // for second 100 tshirt
    else if (tShirtQuantity <= 200) {
        const first100tShirt = 100 * 100;
        const remaining = tShirtQuantity - 100;
        const second100tShirt = remaining * 80;
        totalCost = first100tShirt + second100tShirt;
    }
    // for rest of the tshirt
    else {
        const first100tShirt = 100 * 100;
        const second100tShirt = 100 * 80;
        const remaining = tShirtQuantity - 200;
        const third100tShirt = remaining * 50;
        totalCost = first100tShirt + second100tShirt + third100tShirt;
    }
    return totalCost;
}

let total = deliveryCost(1153);
console.log(total);




// perfectFriend
function perfectFriend(friendArray) {
    let expectedFriend = '';
    for (const element of friendArray) {
        if (element.length == 5) {
            expectedFriend = element;
            break;
        }
    }
    return expectedFriend;
}

const friends = ["mona", "sawon", "rubel", "sahed", "pavel"];
let dearFriend = perfectFriend(friends);
console.log(dearFriend);