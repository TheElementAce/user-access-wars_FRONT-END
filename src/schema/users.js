import Faker from "faker";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const skills = [
  "coding",
  "public speaking",
  "content creation",
  "sales",
  "marketing",
  "discipline",
  "planning",
  "management"
];

export class User {
  /*
  profilePicURL: Faker.image.avatar(),
  streakNumber: Faker.random.number({ min: 0, max: 100 }),
  */
  constructor() {
    this.profilePicURL = Faker.image.avatar();
    this.firstName = Faker.name.firstName();
    this.lastName = Faker.name.lastName();
    this.streakNumber = Faker.random.number({ min: 0, max: 100 });
    this.skills = [
      skills[getRndInteger(0, 7)],
      skills[getRndInteger(0, 7)],
      skills[getRndInteger(0, 7)]
    ];
  }
}
