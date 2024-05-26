export type singleProductDataType = {
  _id: string;
  productName: string;
  productCategory: string;
  ar7idOfTheSeller: string;
  price: string;
  priceType: string;
  productHashtags: string;
  productDescription: string;
  minimumQuantityToOrder: string;
  usersAge: string;
  inStock: boolean;
  productOrigin: string;
  mainImageUrl: string;
  ar7id: string;
  __v: number;
};

export type receivedProductDataType = {
  productData: {
    _id: string;
    productName: string;
    productCategory: string;
    ar7idOfTheSeller: string;
    price: string;
    priceType: string;
    productHashtags: string;
    productDescription: string;
    minimumQuantityToOrder: string;
    usersAge: string;
    inStock: boolean;
    productOrigin: string;
    mainImageUrl: string;
    ar7id: string;
    __v: number;
  };
  sellerData: {
    _id: string;
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
    __v: number;
  };
  totalLikes: number;
  totalComments: number;
  totalFollowersOfTheSeller: number;
};
