export interface IPatients {
  login: { uuid: string };
  name: {
    first: string;
    last: string;
  }
  picture: { large: string };
  email: string;
  gender: string;
  dob: { date: string };
  phone: string;
  nat: string;
  location: ILocation;
}

export interface ILocation {
  street: {
    number: number;
    name: string;
  }
  city: string;
  state: string;
  country: string;
}
