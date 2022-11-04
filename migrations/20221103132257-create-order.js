"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      BasketId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Baskets",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      PaymentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Payments",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
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
    await queryInterface.dropTable("Orders");
  },
};
