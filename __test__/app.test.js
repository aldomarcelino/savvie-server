// require("dotenv").config();
// const { server: app } = require("../app");
// const io = require("socket.io");
// const { io: Server } = require("../app");

// jest.setTimeout(20000);

// Server.attach(4000);
// let socket;

// beforeAll((done) => {
//   socket = io.connect("http://localhost:4000", {
//     "reconnection delay": 0,
//     "reopen delay": 0,
//     "force new connection": true,
//   });
//   socket.on("connect", function () {
//     console.log("worked...");
//   });
//   socket.on("disconnect", function () {
//     console.log("disconnected...");
//   });
// });

// afterAll((done) => {
//   socket.disconnect();
//   done();
// });

// describe("Socket Routes Test", () => {
//   test("Socket create-room", (done) => {
//     const data = {
//       message: "Makan ikan",
//     };

//     socket.on("create-room", (dataRes) => {
//       try {
//         expect(dataRes).toBe(dataRes);
//         done();
//       } catch (error) {
//         done(error);
//       }
//     });
//   });

//   test("Socket location", (done) => {
//     const data = {
//       message: "Makan ikan",
//     };

//     socket.emit("locationDriver", (payload) => {
//       try {
//         expect(payload).toHaveProperty("id");
//         expect(payload).toHaveProperty("data");
//         done();
//       } catch (err) {
//         done(err);
//       }
//     });

//     socket.on("location", (dataRes) => {
//       try {
//         expect(dataRes).toBe(dataRes);
//         done();
//       } catch (error) {
//         done(error);
//       }
//     });
//   });
// });
