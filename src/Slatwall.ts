import Auth from './endpoints/Auth'
import Account from './endpoints/Account'
import Cart from './endpoints/Cart'
import Products from './endpoints/Products'
import ProductType from './endpoints/ProductType'
import Brand from './endpoints/Brand'
import Category from './endpoints/Category'
import Option from './endpoints/Option'
import Location from './endpoints/Location'
import Order from './endpoints/Order'
import Content from './endpoints/Content'
import Type from './endpoints/Type'
import OrderTemplate from './endpoints/OrderTemplate'
import General from './endpoints/General'
import SDKScope, { SDKConfig } from './SDKScope'

class Slatwall {
  public sdkScope: SDKScope
  public products: Products
  public cart: Cart
  public account: Account
  public auth: Auth
  public productType: ProductType
  public brand: Brand
  public category: Category
  public location: Location
  public option: Option
  public order: Order
  public content: Content
  public type: Type
  public orderTemplate: OrderTemplate
  public general: General

  constructor(config: SDKConfig) {
    this.sdkScope = new SDKScope({
      ...new SDKConfig(),
      ...config,
    } as SDKConfig)
    this.auth = new Auth(this.sdkScope)
    this.account = new Account(this.sdkScope)
    this.cart = new Cart(this.sdkScope)
    this.products = new Products(this.sdkScope)
    this.productType = new ProductType(this.sdkScope)
    this.brand = new Brand(this.sdkScope)
    this.category = new Category(this.sdkScope)
    this.location = new Location(this.sdkScope)
    this.option = new Option(this.sdkScope)
    this.order = new Order(this.sdkScope)
    this.content = new Content(this.sdkScope)
    this.type = new Type(this.sdkScope)
    this.orderTemplate = new OrderTemplate(this.sdkScope)
    this.general = new General(this.sdkScope)
  }
}

export default Slatwall
