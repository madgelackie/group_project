use solar_system;
db.dropDatabase();

db.planets.insertMany([
    {
        name:"Sun",
        image:"https://scitechdaily.com/images/Sun-Star-Animation.gif",
        description:"The sun is so huge that you could fit over a million Earths inside it.  You couldn’t land on the sun - it’s far too hot!  A hot day on our planet is around 30 degrees Celsius - an average day on the Sun is around 5500 degrees Celsius!  There is no surface for a space-craft to land on either and is more like a big ball of gas. All the planets in our solar system orbit around the sun.",
        sizeRadius:"696,340 km",
        funFact:"The Sun is actually white. We see it as yellow because of the Earth’s atmosphere."
    },
    {
        name:"Mercury",
        image:"https://i.gifer.com/Owne.gif",
        description:"The closest planet to the sun, it’s also the smallest planet in our solar system, just a little bigger than our own moon. Even though it is the closest to the sun, it isn’t the hottest planet - that prize goes to Venus, Mercury’s neighbour.  The side of Mercury facing the sun gets very hot but the side facing away from the sun can get very very cold, much colder than on Earth.  This is because Mercury doesn’t have an atmosphere like our planet, which helps to keep heat in. ",
        avgTemperature: "167°C",
        distanceFromTheSun: "57.9 million km",
        lengthOfDay: "176 Earth days",
        lengthOfYear: "88 Earth days",
        sizeRadius:"2,440 km",
        noOfMoons: 0,
        funFact:"To reach the Sun, it would take 58.6 years if driving at motorway speed, or 7.9 years if going at the average speed of an aeroplane. "
    },
    {
        name:"Venus",
        image:"https://i.pinimg.com/originals/dd/7f/7c/dd7f7c8c913aa8cdf8db8038c242aa68.gif",
        description:"Our closest neighbour, it is also the hottest planet in the solar system.  Like Mercury, Earth, Mars and Pluto, Venus is a terrestrial planet - which means it has a solid surface, or land, unlike the gas giant planets (see Jupiter, Saturn, Uranus, Neptune).  It is so hot on Venus that a block of the metal lead would melt much like ice does on a warm day on Earth. Why is it so hot?  It has a thick atmosphere that works like a blanket, keeping heat that arrives from the sun trapped underneath it.",
        avgTemperature: "464°C",
        distanceFromTheSun: "108.2 million km",
        lengthOfDay: "243 Earth days",
        lengthOfYear: "224.7 Earth days",
        sizeRadius:"6,051 km",
        noOfMoons: 0,
        funFact:"It takes about 243 Earth days to spin around just once. Because it's so close to the Sun, a year goes by fast. It takes 225 Earth days for Venus to go all the way around the Sun. That means that a day on Venus is a little longer than a year on Venus."
    },
    {
        name:"Earth",
        image:"https://ian.macky.net/pat/map/globes/earth-cloudy-256-fast.gif",
        description:"Our planet!  Some scientists call it a ‘Goldilocks planet’ - just the right environment for humans to live on.  Almost 8 billion of us live here!  It has lots of water on its surface - an important ingredient in human life.  No other known planet has oceans like we do, although Europa (one of Jupiter’s many moons) is thought to have an ocean although it is under a very thick layer of ice. ",
        avgTemperature: "15°C",
        distanceFromTheSun: "149.6 million km",
        lengthOfDay: "24 hours",
        lengthOfYear: "365.2 Earth days",
        sizeRadius:"6,371 km",
        noOfMoons: 1,
        funFact:"The inner core of the Earth is hotter than the surface of the Sun"
    },
    {
        name:"Mars",
        image:"https://i.pinimg.com/originals/34/ad/ba/34adba7b0e23a882620c9b989d76640e.gif",
        description:"Also known as the ‘Red Planet’, Mars is the second smallest planet in our solar system, about half the size of Earth.  Although it’s red in colour, it isn’t very hot there - the warmest it gets is like a warmish day on Earth but most of the time it is much colder than Earth.  When seen through a telescope it’s a reddish-orange colour - this is because there is lots of iron oxide in the rock that makes up it’s surface.  That’s the same thing that gives rusty metal its orange colour.  Space scientists are working hard to develop spacecraft and technology to get humans to Mars.",
        avgTemperature: "-60°C",
        distanceFromTheSun: "242.1 million km",
        lengthOfDay: "24 hours",
        lengthOfYear: "687 Earth days",
        sizeRadius:"3.386 km",
        noOfMoons: 2,
        funFact:"You could jump around three times higher on Mars than you can on Earth. Boing! This is because the planet’s gravity – the force that keeps us on the ground – is much weaker."
    },
    {
        name:"Jupiter",
        image:"https://i.pinimg.com/originals/87/5c/4e/875c4ef8f3e49012a19fcf1c8ec1a0aa.gif",
        description:"Jupiter is a gas giant, just like Saturn. It is made mostly out of hydrogen and helium. It doesn’t have a true surface, but it may have a solid core about the size of Earth at its center.",
        avgTemperature: "-108°C",
        distanceFromTheSun: "749.4 million km",
        lengthOfDay: "10 hours",
        lengthOfYear: "11.8 Earth years",
        sizeRadius:"69,991 km",
        noOfMoons: 79,
        funFact:"It takes Sunlight 43 minutes to travel from the Sun to Jupiter."
    },
    {
        name:"Saturn",
        image:"https://bestanimations.com/uploads/gifs/1590412095saturn-planet-animation-3.gif",
        description:"Saturn is the sixth planet from the Sun and the second-largest planet in the Solar System after Jupiter. Saturn itself is mostly a ball of hydrogen and helium, and this is why it is known as a gas giant like Jupiter. Saturn has the most moons out of any planet, 82, and it may have even more.  Saturn is nicknamed the 'Ringed Planet' – it has more than 30 ring systems around it.  The rings of Saturn are made out of chunks of ice and rock.",
        avgTemperature: "-138°C",
        distanceFromTheSun: "1.48 billion km",
        lengthOfDay: "10.7 hours",
        lengthOfYear: "29 Earth years",
        sizeRadius:"58,232 km",
        noOfMoons: 82,
        funFact:"You could fit 764 Earths inside Saturn, and almost 1.600 Saturn’s could fit into the Sun."
    },
    {
        name:"Uranus",
        image:"https://i.gifer.com/PAx.gif",
        description:"Uranus is the seventh planet from the Sun and the third largest of all the planets in our Solar System.  Uranus is made of water, methane, and ammonia fluids above a small rocky center.  Uranus is blue because it have methane. It has thirteen ring systems and 27 confirmed moons.  A day on Uranus lasts 17 hours and one year is the same as 84 Earth years.",
        avgTemperature: "-195°C",
        distanceFromTheSun: "2.95 billion km",
        lengthOfDay: "17 hours",
        lengthOfYear: "84 Earth years",
        sizeRadius:"25,362 km",
        noOfMoons: 27,
        funFact:"In good conditions, Uranus can be seen without binoculars."
    },
    {
        name:"Neptune",
        image:"https://www.schoolsobservatory.org/sites/default/files/astro/neptune_r.gif",
        description:"Neptune is the farthest planet from the Sun, and the fourth largest out of all the planets of the Solar System. It is more than 30 times farther from the Sun than Earth.  Neptune is very cold, dark and windy planet, having the most powerful winds in the Solar System. The reason why Neptune is blue is due to the presence of a specific gas named methane.",
        avgTemperature: "-201°C",
        distanceFromTheSun: "4.475 billion km",
        lengthOfDay: "16 hours",
        lengthOfYear: "165 Earth years",
        sizeRadius:"24,622 km",
        noOfMoons: 14,
        funFact:"Light from Neptune reaches Earth in around 4 hours."
    },
    {
        name:"Pluto",
        image:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Pluto_rotation_movie.gif",
        description:"Pluto use to be known as a planet but in 2006 it was changed to a dwarf planet.  This is because Pluto only meets 2 out of the 3 rules for a planet (orbits the Sun, is nearly a round shape).  However as it does not clear its 'neighbourhood' around its orbit it is not a full sized planet.  Pluto is smaller than our moon and is a mysterious world that has valleys, plains, craters, and possibly glaciers.  Pluto is only 16.5% the size of Earth",
        avgTemperature: "-233°C",
        distanceFromTheSun: "5.9 billion km",
        lengthOfDay: "6.4 Earth days",
        lengthOfYear: "248 Earth years",
        sizeRadius:"1,118 km",
        noOfMoons: 5,
        funFact:"Pluto is only about half the width of the United States."
    }]
)

db.generalInfo.insertMany([
                {descriptionOne:"The solar system consists of the Sun and everything that orbits, or travels around, the Sun. This includes the eight planets and their moons, dwarf planets, and countless asteroids, comets, and other small, icy objects. However, even with all these things, most of the solar system is empty space.  The solar system itself is only a small part of a huge system of stars and other objects called the Milky Way galaxy. The solar system orbits around the center of the galaxy about once every 225 million years. The Milky Way galaxy is just one of billions of galaxies hat in turn make up the universe."},
                {descriptionTwo:"The solar system was formed about 4.7 billion years ago. It probably started as a loose cloud of gas and dust. Scientists think that a force called gravity pulled parts of the cloud together into clumps. The largest clump was squeezed together so tightly that it got very hot. This clump eventually became the Sun. Over millions of years the other clumps became the planets. The Sun’s strong gravity eventually pulled the planets into their orbits. Over time some of the leftover clumps became asteroids, comets, and other small, icy objects. The solar system is also known as a planetary system."},
                {descriptionThree:" Since the 1990s scientists have found many planetary systems beyond our solar system. In these systems, one or more planets orbit a star—just as the eight planets in our solar system orbit the Sun. These planets are called extrasolar planets. Finding other planetary systems is not easy, however, because extrasolar planets appear much dimmer than the stars they orbit. As space probes travel farther away from Earth, they are likely to discover more extrasolar planets. The Sun is just one of hundreds of billions of stars in the galaxy that we live in, which is called the Milky Way. The whole Universe has at least 100 billion galaxies in it.You are held onto the surface of the Earth by a force called gravity. This is the same force that keeps the Earth and the other planets orbiting around the Sun. Not everything in the Solar system orbits directly around the Sun. The Moon orbits around the Earth."},
                {descriptionFour:" The Earth is the only planet that we know has creatures living on it. The Earth rotates as it orbits the Sun. It takes one day to complete a rotation. It takes 365 days for the Earth to complete one circuit around the Sun. We call this a year. The Sun is 93 million miles from the Earth. The light from the Sun only takes 8 minutes to travel to the Earth, but it would take Usain Bolt – the fastest man on Earth – 450 years to run from the Sun to the Earth"}]
)

db.quiz.insertMany([
            {
                questionText:"Why is Mars red?",
                answerOptions: [
                    { answerText: "Iron oxide in the rock", isCorrect:true },
                    { answerText: "Aliens painted it red", isCorrect:false },
                    { answerText: "It is covered with tomato plants", isCorrect:false },
                ],
            },
            {
                questionText:"How long is a day on Mars?",
                answerOptions: [
                    { answerText: "50 hours long", isCorrect:false },
                    { answerText: "Almost the same as on Earth", isCorrect:true },
                    { answerText: "3 hours long", isCorrect:false },
                ],
            },
            {
                questionText:"Mercury is:",
                answerOptions: [
                    { answerText: "The furthest planet from the Sun", isCorrect:false },
                    { answerText: "The closest planet to the Sun", isCorrect:true },
                    { answerText: "The 5th planet from the Sun", isCorrect:false },
                ],
            },
            {
                questionText:"Which planet is the hottest?",
                answerOptions: [
                    { answerText: "Mars", isCorrect:false },
                    { answerText: "Mercury", isCorrect:false },
                    { answerText: "Venus", isCorrect:true },
                ],
            },
            {
                questionText:"Why is Venus so hot?",
                answerOptions: [
                    { answerText: "Because it has a thick atmosphere that keeps the heat from the sun in", isCorrect:true },
                    { answerText: "Because someone left the heating on", isCorrect:false },
                    { answerText: "Because it is the closest planet to the sun", isCorrect:false },
                ],
            },
            {
                questionText:"Who are Earth’s nearest neighbours?",
                answerOptions: [
                    { answerText: "Saturn and Mars", isCorrect:false },
                    { answerText: "Venus and Mars", isCorrect:true },
                    { answerText: "Neptune and Venus", isCorrect:false },
                ],
            },
            {
                questionText:"Saturn is a planet known for the large rings that surround it. What are these rings made of?",
                answerOptions: [
                    { answerText: "Space junk", isCorrect:false },
                    { answerText: "Gases", isCorrect:false },
                    { answerText: "Ice and rock", isCorrect:true },
                ],
            },
            {
                questionText:"What kind of weather does Neptune have",
                answerOptions: [
                    { answerText: "Very warm", isCorrect:false },
                    { answerText: "The same as Earth", isCorrect:false },
                    { answerText: "Very cold and very windy", isCorrect:true },
                ],
            },
            {
                questionText:"Now that Pluto is no longer included, how many planets are there in the Solar System?",
                answerOptions: [
                    { answerText: "8", isCorrect:true },
                    { answerText: "6", isCorrect:false },
                    { answerText: "10", isCorrect:false },
                ],
            },
            {
                questionText:"How many Earths can fit inside the sun?",
                answerOptions: [
                    { answerText: "250,000", isCorrect:false },
                    { answerText: "1.3 million", isCorrect:true },
                    { answerText: "5,000", isCorrect:false },
                ],
            },

        ])

