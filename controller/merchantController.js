const Store = require("../models/merchantSchema")
const UserList = require("../models/userSchema")

async function becomemerchant(req, res) {
    const { storeName, officialEmail, officialPhone, address, owner, products } = req.body
    console.log(storeName, officialEmail, officialPhone, address, owner, products);

    const store = new Store({
        storeName,
        officialEmail,
        officialPhone,
        address,
        owner,
        products
    })
    store.save();

    await UserList.findOneAndUpdate(
        { _id: owner },
        { role: "merchant" },
        { new: true }
    )

    res.json({ success: 'You are a becom merchant. -Congratulations-' })
}

module.exports = becomemerchant;