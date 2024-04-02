const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

connect(process.env.MONGO_URI)
	.then(
		app.listen(5000, () =>
			console.log(`Server running on port ${process.env.PORT}`)
		)
	)
	.catch((error) => console.log(error));
