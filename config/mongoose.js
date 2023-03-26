// const express = require("express");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:/tester");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "error"));

db.once("open", () => {
	console.log("successfully");
});

module.exports = db;
