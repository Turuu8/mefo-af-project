export interface IAddress {
  _id: string;
  owner: IUser;
  detail: string;
  country: string;
  citySoum: string;
  phoneNum: string;
  zipPostcode: string;
  stateProvince: string;
  apartmentSuite: string;
}
export interface IUser {
  _id: string;
  role: string;
  email: string;
  orders: IOrder[];
  password: string;
  address: IAddress;
  emailToken: string;
  phoneNumber: string;
  isVerified: boolean;
}
export interface IOrder {
  _id: string;
}
export interface ICategory {
  _id: string;
  name: string;
}
export interface IImage {
  _id: string;
  filename: string;
  contentType: string;
  imageBase64: string;
}
export interface IProduct {
  _id: string;
  title: string;
  price: number;
  gender: string;
  unique: boolean;
  images: IImage[];
  quantity: number;
  category: ICategory;
  description: string;
}
