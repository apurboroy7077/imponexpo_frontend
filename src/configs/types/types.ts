type userDataForClientSideType = {
  userFullName: string;
  userEmail: string;
  countryCodeOfPhoneNumber: string;
  phoneNumber: string;
  accountType: string;
  companyName: string;
  countryRegion: string;
  reasonForSignup: string;
  imponexpoAccountURL: string;
};
type productDataType = {
  ar7id: string;
  ar7idOfTheSeller: string;
  inStock: boolean;
  mainImageUrl: string;
  minimumQuantityToOrder: string;
  price: string;
  priceType: string;
  productCategory: string;
  productDescription: string;
  productHashtags: string;
  productName: string;
  productOrigin: string;

  usersAge: string;
  __v: number;
  _id: string;
};
export type { userDataForClientSideType, productDataType };
