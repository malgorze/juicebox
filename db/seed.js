const { client, getAllUsers } = require("./index");

// async function testDB() {
//   try {
//     client.connect();
//     const { rows } = await client.query(`SELECT * FROM users;`);
//     console.log(rows);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     client.end();
//   }
// }
// testDB();

// async function testDB() {
//   try {
//     client.connect();

//     const users = await getAllUsers();
//     console.log(users);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     client.end();
//   }
// }

async function dropTables() {
  try {
    await client.query(`

    `);
  } catch (error) {
    throw error; // we pass the error up to the function that calls dropTables
  }
}

// this function should call a query which creates all tables for our database
async function createTables() {
  try {
    await client.query(`

    `);
  } catch (error) {
    throw error; // we pass the error up to the function that calls createTables
  }
}

async function rebuildDB() {
  try {
    client.connect();

    await dropTables();
    await createTables();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDB();
