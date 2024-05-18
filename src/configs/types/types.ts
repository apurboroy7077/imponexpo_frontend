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
  ar7id: string;
  __v: string;
  _id: string;
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
type commentDataType = {
  ar7idOfCommentGiver: string;
  ar7idOfSubjectWhoReceivedComment: string;
  comment: string;
  timeStamp: string;
  __v: string;
  _id: string;
};
export type { userDataForClientSideType, productDataType, commentDataType };
