// const User = {
//   name: "hitesh",
//   email: "hitesh@lco.dev",
//   isAvtive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "hitesh", isPaid: false, email: "h@h.com" };
// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 399 };
// }
// createCourse();

type User = {
  readonly _id: string; // after using readonly u cannot change it
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number; //it is optional here
};

let myUser: User = {
  _id: "1245",
  name: "h",
  email: "h@h.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "h@gmail.com";

export {};
