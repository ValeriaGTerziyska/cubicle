const uniqid = require("uniqid");
const Cube = require("../models/Cube");
const fs = require("fs");
let productsData = require("../config/products.json");
const path = require("path");

function getAll() {
    return productsData;
}

function create(data) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );

    productsData.push(cube);
    fs.writeFile(__dirname + "/../config/products.json", JSON.stringify(productsData), (err) => {
        if (err) {
            return console.error(err);
        }


    });
}

module.exports = {
    create,
    getAll
};
