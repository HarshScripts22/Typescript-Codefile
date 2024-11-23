const superHeros: string[] = [];
const heroNO: number[] = [];

// this is type allias of objects type
type User = {
  name: string;
  isActive: boolean;
};

// this is array which conatains objects like users.
const allUsers: User[] = [];
const MLModels: number[][] = [[245, 333, 255], []];

// pushing value in arr of string and number types

superHeros.push("spidy");
heroNO.push(1);
allUsers.push({ name: "harsh", isActive: true });

export {};
