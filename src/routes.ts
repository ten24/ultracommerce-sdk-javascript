export const Routes = {
  login: () => `api/auth/login`,
  logout: () => `api/scope/logout`,
  getAccount: () => `api/scope/getAccount`,
  createAccount: () => `api/scope/createAccount`,
  updateAccount: () => `api/scope/updateAccount`,
  changePassword: () => `api/scope/changePassword`,

  //public Endpoints
  forgotPassword: () => `api/scope/forgotPassword`,
  resetPassowrd: () => `api/scope/resetPasswordUpdate`,

  createGuestAccount: () => `api/scope/guestAccount`,
  createGuestAccountPassword: () => `api/scope/guestAccountCreatePassword`,

  verifyEmailAddress: () => `api/scope/verifyAccountEmailAddress`,
  sendEmailVerificationLink: () => `api/scope/sendAccountEmailAddressVerificationEmail`,

  //Email Address management
  addAccountEmailAddress: () => `api/scope/addAccountEmailAddress`,
  setPrimaryEmailAddress: () => `api/scope/setPrimaryEmailAddress`,
  deleteAccountEmailAddress: () => `api/scope/deleteAccountEmailAddress`,

  //Phone number management
  addAccountPhoneNumber: () => `api/scope/addAccountPhoneNumber`,
  setPrimaryAccountPhoneNumber: () => `api/scope/setPrimaryPhoneNumber`,
  deleteAccountPhoneNumber: () => `api/scope/deleteAccountPhoneNumber`,

  //Address Management
  addAccountAddress: () => `api/scope/addNewAccountAddress`,
  setPrimaryAccountAddress: () => `api/scope/setPrimaryAccountAddress`,
  updateAccountAddress: () => `api/scope/updateAccountAddress`, //DEBUG, response action seems wrong
  deleteAccountAddress: () => `api/scope/deleteAccountAddress`,

  //Account Payment Methods Management
  addAccountPaymentMethod: () => `api/scope/addAccountPaymentMethod`,
  deleteAccountPaymentMethod: () => `api/scope/deleteAccountPaymentMethod`,
  setPrimaryPaymentMethod: () => `api/scope/setPrimaryPaymentMethod`,

  //Account Orders
  getAccountOrders: () => `/api/scope/getAllOrdersOnAccount`,
  getAccountQuotes: () => `/api/scope/getAllCartsAndQuotesOnAccount`,
  getAccountOrderFulfillments: () => `/api/scope/getAllOrderFulfillmentsOnAccount`,
  getAccountOrderDeliveries: () => `/api/scope/getAllOrderDeliveryOnAccount`,
  getGiftCardsOnAccount: () => `/api/scope/getAllGiftCardsOnAccount`,
  getSubscriptionUsage: () => `/api/scope/getSubscriptionsUsageOnAccount`,
  getParentAccount: () => `/api/scope/getParentOnAccount/`,
  getChildAccounts: () => `/api/scope/getChildOnAccount`,

  //Checkout Endpoints
  getCart: () => `/api/scope/getCartData`,
  addCartToSession: () => `/api/scope/addCartToSession`,
  clearCart: () => `/api/scope/clearOrder`,
  updateOrderNotes: () => `/api/scope/updateOrderNotes`,
  addOrderItem: () => `/api/scope/addOrderItem`,
  addOrderItems: () => `/api/scope/addOrderItems`,
  updateOrderItemQuantity: () => `/api/scope/updateOrderItemQuantity`,
  removeOrderItem: () => `/api/scope/removeOrderItem`,
  addProductBundleToCart: () => `/api/scope/addProductBundleToCart`,

  getAvailableShippingMethods: () => `/api/scope/getAvailableShippingMethods`,
  getEligibleFulfillmentMethods: () => `/api/scope/getEligibleFulfillmentMethods`,
  setPickupDate: () => `/api/scope/setPickupDate`,
  clearOrderFulfillment: () => `/api/scope/clearOrderFulfillment`,
  getAvailablePaymentMethods: () => `/api/scope/getAvailablePaymentMethods`,
  getAppliedPromotionCodes: () => `/api/scope/getAppliedPromotionCodes`,
  getAppliedPayments: () => `/api/scope/getAppliedPayments`,

  addOrderShippingAddress: () => `/api/scope/addOrderShippingAddress`,
  addOrderShippingAddressUsingAccountAddress: () => `/api/scope/addShippingAddressUsingAccountAddress`,
  addOrderBillingAddressUsingAccountAddress: () => `/api/scope/addBillingAddressUsingAccountAddress`,
  addShippingMethod: () => `/api/scope/addShippingMethodUsingShippingMethodID`,
  addPickupLocation: () => `/api/scope/addPickupFulfillmentLocation`,
  changeOrderFulfilment: () => `/api/scope/changeOrderFulfillment`,

  addPromoCode: () => `/api/scope/addPromotionCode`,
  removePromoCode: () => `/api/scope/removePromotionCode`,

  addBillingAddress: () => `/api/scope/addBillingAddress`,
  addNewAccountAndSetAsBillingAddress: () => `/api/scope/addNewAccountAddress,addBillingAddressUsingAccountAddress`, //new
  addEditAccountAndSetAsBillingAddress: () => `/api/scope/addEditAccountAddress,addBillingAddressUsingAccountAddress`, //new
  addNewAddressAndAttachAsShipping: () => `/api/scope/addNewAccountAddress,addShippingAddressUsingAccountAddress`, //new
  addEditAddressAndAttachAsShipping: () => `/api/scope/addEditAccountAddress,addShippingAddressUsingAccountAddress`, //new
  addOrderPayment: () => `/api/scope/addOrderPayment`,
  removeOrderPayment: () => `/api/scope/removeOrderPayment`,

  placeOrder: () => `/api/scope/placeOrder`,

  //Order Endpoints: TODO:
  getOrderDetails: () => `/api/scope/getOrderDetails`,
  duplicateOrder: () => `/api/scope/duplicateOrder`,
  changeOrder: () => `/api/scope/changeOrder`,
  deleteOrder: () => `/api/scope/deleteOrder`,

  // Order Template Endpoints
  createOrderTemplate: () => `api/scope/createOrderTemplate`,
  addOrderTemplateItem: () => `api/scope/addOrderTemplateItem`,
  addItemAndCreateWishlist: () => `api/scope/addItemAndCreateWishlist`,
  removeOrderTemplateItem: () => `api/scope/removeOrderTemplateItem`,
  getOrderTemplates: () => `api/scope/getOrderTemplates`,
  addOrderTemplatePromotionCode: () => `api/scope/addOrderTemplatePromotionCode`,
  getAppliedOrderTemplatePromotionCodes: () => `api/scope/getAppliedOrderTemplatePromotionCodes`,
  removeOrderTemplatePromotionCode: () => `api/scope/removeOrderTemplatePromotionCode`,
  getOrderTemplatePromotionProducts: () => `api/scope/getOrderTemplatePromotionProducts`,
  deleteOrderTemplatePromoItems: () => `api/scope/deleteOrderTemplatePromoItems`,
  createWishlist: () => `api/scope/createWishlist`,
  addWishlistItem: () => `api/scope/addWishlistItem`,
  removeWishlistItem: () => `api/scope/removeWishlistItem`,
  getWishlists: () => `api/scope/getWishlist`,
  shareWishlist: () => `api/scope/shareWishlist`,
  getWishListItems: () => `api/scope/getWishListItems`,
  addWishlistItemAndGetWishList: () => `api/scope/addWishlistItem,getWishlistItems`, //new
  removeWishlistItemAndGetWishList: () => `api/scope/removeWishlistItem,getWishlistItems`, //new

  //Product Endpoints
  listProduct: () => `/api/public/product`,
  getProduct: (id: string) => `/api/public/product/${id}`,
  productDetailData: () => `/api/scope/productDetailData`,
  productSkuSelected: () => `/api/scope/productSkuSelected`,
  getSkuOptionDetails: () => `/api/scope/getSkuOptionDetails`,
  getProductOptionsByOptionGroup: () => `/api/scope/getProductOptionsByOptionGroup`,
  getProductFilterOptions: () => `/api/scope/getProductFilterOptions`,
  getRelatedProducts: () => `/api/scope/getRelatedProducts`,
  getProductReviews: () => `/api/scope/getProductReviews`,
  getProductGallery: () => `api/scope/getProductImageGallery`,
  getProductBundles: () => `api/scope/getProductBundles`,
  createProductBundleBuild: () => `api/scope/createProductBundleBuild`,
  getProductBundleBuild: () => `api/scope/getProductBundleBuild`,
  removeProductBundleBuild: () => `api/scope/removeProductBundleBuild`,
  productSearch: () => `/api/scope/productSearch`,
  getResizedImageByProfileName: () => `/api/scope/getResizedImageByProfileName`,

  //Product Type Endpoints
  listProductType: () => `/api/producttype`,
  getProductType: (id: string) => `/api/producttype/${id}`,

  //Sku Endpoints
  listSku: () => `/api/scope/getSkuList`,
  getSku: (id: string) => `/api/scope/getSkuList/${id}`,
  getSkuStock: () => `/api/scope/getSkuStock`,

  //Types API
  getSystemTypesByTypeCode: () => `api/scope/getSystemTypesByTypeCode`,

  //Brand APIs
  listBrand: () => `/api/public/brand`,
  getBrand: (id: string) => `/api/public/brand/${id}`,

  //Categories APIs
  listCategory: () => `/api/category`,
  getCategory: (id: string) => `/api/category/${id}`,

  //Options API
  listOption: () => `/api/option`,
  getOption: (id: string) => `/api/option/${id}`,

  //Location APIs
  listLocation: () => `/api/location`,
  getLocation: (id: string) => `/api/location/${id}`,
  getPickupLocations: () => `/api/scope/getPickupLocations`,
  getCountries: () => `/api/scope/getCountries`,
  getAddressOptions: () => `/api/scope/getAddressOptionsByCountryCode`,
  getStates: () => `api/scope/getStateCodeOptionsByCountryCode`,

  //TODO: make 2 legacy calling methods

  //Content API
  addFormResponse: () => `/api/scope/addFormResponse`,
  getContent: () => `/api/public/content`,
  getConfiguration: () => `/api/scope/getConfiguration`,
  getEntity: () => `/api/public/getEntity`,
}
