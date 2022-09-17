const sequelize = require("sequelize")
const db = require("../database")

const Produts = db.define(
    "Produts",
    {
        id: {
            type: sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: sequelize.DataTypes.STRING,
        },
        price: {
            type: sequelize.DataTypes.FLOAT,
        },
        description: {
            type: sequelize.DataTypes.STRING,
        },
        image: {
            type: sequelize.DataTypes.STRING,
        },
        category: {
            type: sequelize.DataTypes.STRING,
        },
    },
    {
        tableName: "products",
        timestamps: false,
    }
);

module.exports = Produts;


