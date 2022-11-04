"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const dataCategory = require("../data/categories.json");
    dataCategory.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Categories", dataCategory, {});
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
    await queryInterface.bulkDelete("Categories", null);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
