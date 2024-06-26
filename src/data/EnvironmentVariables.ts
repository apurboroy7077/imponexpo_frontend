const serverURL = `https://imponexpo-backend.onrender.com`;
// const serverURL = `http://localhost:5050`;
const KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE =
  "imponexpo_authentication_token";
const AUTHENTICATE_USER_WITH_TOKEN_SUB_URL = `/authentication/authenticate-user-with-token`;
const SUB_ADDRESS_OF_UPLOAD_PRODUCTS_API = `/products/upload/api`;
const SUB_ADDRESS_OF_GETTING_RANDOM_PRODUCTS_API =
  "/products/get-random-products/api";
const SUB_ADDRESS_OF_GETTING_SELLER_DETAILS_FOR_CLIENT_SIDE_API =
  "/authentication/get-seller-details-for-client-side/api";
const SUB_ADDRESS_OF_LIKE_SOMETHING_API = "/user-activity/like/api";
const SUB_ADDRESS_OF_CHECKING_LIKE_API = "/user-activity/check-like/api";
const SUB_ADDRESS_OF_DISLIKING_SOMETHING_API = "/user-activity/dislike/api";
const SUB_ADDRESS_OF_MAKING_REPORT_API = "/user-activity/making-report/api";
const SUB_ADDRESS_OF_GETTING_TOTAL_NUMBER_OF_LIKES_API =
  "/user-activity/get-total-number-of-likes/api";
const SUB_ADDRESS_OF_GIVING_PERMISSION_TO_SELL_API =
  "/admin/give-permission-to-sell/api";
const SUB_ADDRESS_OF_MAKING_SOMEONE_ADMIN_API = "/admin/make-someone-admin/api";
const SUB_ADDRESS_OF_BANNING_SOMEONE_API = "/admin/ban-someone/api";
const SUB_ADDRESS_OF_DELETING_PRODUCTS_BY_ADMIN_API =
  "/admin/delete-product/api";
const SUB_ADDRESS_OF_UNBANNING_SOMEONE_API = "/admin/unbanning-someone/api";
const SUB_ADDRESS_OF_APPROVING_PRODUCT_API = "/admin/approving-product/api";
const SUB_ADDRESS_OF_SEEING_USER_DETAILS_BY_ADMIN_API =
  "/admin/see-user-details/api";
const SUB_ADDRESS_OF_GETTING_REPORTS_MADE_BY_USER_API =
  "/admin/getting-reports-made-by-user/api";
const SUB_ADDRESS_OF_GIVING_COMMENT_API = "/user-activity/giving-comment/api";
const SUB_ADDRESS_OF_GETTING_COMMENTS_OF_SOMETHING_API =
  "/user-activity/getting-comments-of-something/api";
const SUB_ADDRESS_OF_GETTING_USER_DETAILS_FOR_CLIENTS_API =
  "/authentication/getting-user-details-for-clients/api";
const SUB_ADDRESS_OF_FOLLOW_SOMEONE_API = "/user-activity/follow-someone/api";
const SUB_ADDRESS_OF_CHECKING_FOLLOWING_SOMETHING_OR_NOT_API =
  "/user-activity/checking-following-something-or-not/api";
const SUB_ADDRESS_OF_UNFOLLOW_SOMEONE_API =
  "/user-activity/unfollow-someone/api";
const SUB_ADDRESS_OF_GETTING_TOTAL_NUMBERS_OF_FOLLOWERS_OF_A_SUBJECT_API =
  "/user-activity/get-total-number-of-followers-of-a-subject/api";

export {
  serverURL,
  KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE,
  AUTHENTICATE_USER_WITH_TOKEN_SUB_URL,
  SUB_ADDRESS_OF_UPLOAD_PRODUCTS_API,
  SUB_ADDRESS_OF_GETTING_RANDOM_PRODUCTS_API,
  SUB_ADDRESS_OF_GETTING_SELLER_DETAILS_FOR_CLIENT_SIDE_API,
  SUB_ADDRESS_OF_LIKE_SOMETHING_API,
  SUB_ADDRESS_OF_CHECKING_LIKE_API,
  SUB_ADDRESS_OF_DISLIKING_SOMETHING_API,
  SUB_ADDRESS_OF_GETTING_TOTAL_NUMBER_OF_LIKES_API,
  SUB_ADDRESS_OF_GIVING_PERMISSION_TO_SELL_API,
  SUB_ADDRESS_OF_MAKING_SOMEONE_ADMIN_API,
  SUB_ADDRESS_OF_BANNING_SOMEONE_API,
  SUB_ADDRESS_OF_DELETING_PRODUCTS_BY_ADMIN_API,
  SUB_ADDRESS_OF_UNBANNING_SOMEONE_API,
  SUB_ADDRESS_OF_APPROVING_PRODUCT_API,
  SUB_ADDRESS_OF_SEEING_USER_DETAILS_BY_ADMIN_API,
  SUB_ADDRESS_OF_MAKING_REPORT_API,
  SUB_ADDRESS_OF_GETTING_REPORTS_MADE_BY_USER_API,
  SUB_ADDRESS_OF_GIVING_COMMENT_API,
  SUB_ADDRESS_OF_GETTING_COMMENTS_OF_SOMETHING_API,
  SUB_ADDRESS_OF_GETTING_USER_DETAILS_FOR_CLIENTS_API,
  SUB_ADDRESS_OF_FOLLOW_SOMEONE_API,
  SUB_ADDRESS_OF_CHECKING_FOLLOWING_SOMETHING_OR_NOT_API,
  SUB_ADDRESS_OF_UNFOLLOW_SOMEONE_API,
  SUB_ADDRESS_OF_GETTING_TOTAL_NUMBERS_OF_FOLLOWERS_OF_A_SUBJECT_API,
};
