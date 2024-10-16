import SuperheroModel from "../../models/superhero.model";

export default {
    ironMan: new SuperheroModel({
        name: "Iron Man",
        email: "iron-man@avengers.com",
        realName: "Anthony 'Tony' Stark"
    }),
    hulk: new SuperheroModel({
        name: "Hulk",
        email: "hulk@avengers.com",
        realName: "Robert Bruce Banner"
    }),
    antMan: new SuperheroModel({
        name: "Ant-Man",
        email: "ant-man@avengers.com",
        realName: "Eric O'Grady"
    }),
    deadpool: new SuperheroModel({
        name: "Deadpool",
        email: "deadpool@avengers.com",
        realName: "Wade Wilson"
    }),
    spiderMan: new SuperheroModel({
        name: "Spider-Man",
        email: "spider-man@avengers.com",
        realName: "Peter Parker"
    }),
    captainAmerica: new SuperheroModel({
        name: "Captain America",
        email: "captain-america@avengers.com",
        realName: "Steve Rogers"
    }),
    blackWidow: new SuperheroModel({
        name: "Black Widow",
        email: "black-widow@avengers.com",
        realName: "Natasha Alianovna Romanova"
    }),
    doctorStrange: new SuperheroModel({
        name: "Doctor Strange",
        email: "doctor-strange@avengers.com",
        realName: "Stephen Vincent Strange"
    })
}