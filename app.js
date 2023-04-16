const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const app = express();

const dbPath = path.join(__dirname, "cricketTeam.db");

let db = null;

const intialiseDBANDServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/players/");
    });
  } catch (e) {
    console.log(`Err: ${e.message}`);
    process.exit(1);
  }
};
intialiseDBANDServer();

const convertDbObjectToResponseObject = (dbObject) => {
  return {
    playerId: dbObject.player_id,
    playerName: dbObject.player_name,
    jerseyNumber: dbObject.jersey_number,
    role: dbObject.role,
  };
};
app.get("/players/", async (request, response) => {
  const getPlayerQuery = SELECT * FROM;
  cricket_team;
  const playersArray = await db.all(getPlayerQuery);
  response.send(
    playersArray.map((eachPlayer) => {
      convertDbObjectToResponseObject(eachPlayer);
    })
  );
});
