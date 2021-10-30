use solar_system;
db.dropDatabase();

db.planets.insertMany([
    {
        name:"Earth",
        image:"image URL",
        description:"These are very interesting facts about the planet"}

])