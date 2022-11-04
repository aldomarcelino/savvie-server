"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const dataFood = require("../data/foods.json");
    dataFood.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Foods", dataFood, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Foods", null);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
