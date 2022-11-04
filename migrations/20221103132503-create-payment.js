"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Payments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      deliveryFee: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      paid: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderCode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sales: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      active: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Payments");
  },
};
