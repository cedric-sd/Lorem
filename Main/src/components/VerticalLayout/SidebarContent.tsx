import Link from 'next/link'

const SidebarContent = () => {
  return (
    <>
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li className="menu-title">
            menu title
            {/* {this.props.t('Cedric')} */}
          </li>

          <li>
            <Link href="/dashboard">
              <a className="waves-effect">
                <i className="ri-dashboard-line"></i>
                <span className="badge badge-pill badge-success float-right">
                  3
                </span>
                <span className="ml-1">
                  Dashboard
                  {/* {this.props.t('Dashboard')} */}
                </span>
              </a>
            </Link>
          </li>

          <li>
            <Link href="calendar">
              <a className=" waves-effect">
                <i className="ri-calendar-2-line"></i>
                <span className="ml-1">
                  calendar
                  {/* {this.props.t('Calendar')} */}
                </span>
              </a>
            </Link>
          </li>

          <li>
            <Link href="apps-chat">
              <a className=" waves-effect">
                <i className="ri-chat-1-line"></i>
                <span className="ml-1">
                  Chat
                  {/* {this.props.t('Chat')} */}
                </span>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/#">
              <a className="has-arrow waves-effect">
                <i className="ri-store-2-line"></i>
                <span className="ml-1">
                  Eccomerce
                  {/* {this.props.t('Ecommerce')} */}
                </span>
              </a>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link href="ecommerce-products">
                  <a>Products</a>
                  {/* {this.props.t('Products')} */}
                </Link>
              </li>
              <li>
                <Link href="ecommerce-product-detail">
                  <a>Product Detail</a>
                  {/* {this.props.t('Product Detail')} */}
                </Link>
              </li>
              <li>
                <Link href="ecommerce-orders">
                  <a>Orders</a>
                  {/* {this.props.t('Orders')} */}
                </Link>
              </li>
              <li>
                <Link href="ecommerce-customers">
                  <a>Customers</a>
                  {/* {this.props.t('Customers')} */}
                </Link>
              </li>
              <li>
                <Link href="ecommerce-cart">
                  Cart
                  {/* {this.props.t('Cart')} */}
                </Link>
              </li>
              <li>
                <Link href="ecommerce-checkout">
                  <a>Checkout</a>
                  {/* {this.props.t('Checkout')} */}
                </Link>
              </li>
              <li>
                <Link href="ecommerce-shops">
                  <a>Shops</a>
                  {/* {this.props.t('Shops')} */}
                </Link>
              </li>
              <li>
                <Link href="ecommerce-add-product">
                  <a>add product</a>
                  {/* {this.props.t('Add Product')} */}
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/#">
              <a className="has-arrow waves-effect">
                <i className="ri-mail-send-line"></i>
                <span className="ml-1">
                  Email
                  {/* {this.props.t('Email')} */}
                </span>
              </a>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link href="email-inbox">
                  <a>Inbox</a>
                  {/* {this.props.t('Inbox')} */}
                </Link>
              </li>
              <li>
                <Link href="email-read">
                  <a>Read email</a>
                  {/* {this.props.t('Read Email')} */}
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="apps-kanban-board">
              <a className=" waves-effect">
                <i className="ri-artboard-2-line"></i>
                <span className="ml-1">
                  <a>kanban board</a>
                  {/* {this.props.t('Kanban Board')} */}
                </span>
              </a>
            </Link>
          </li>

          <li className="menu-title">
            pages
            {/* {this.props.t('Pages')} */}
          </li>

          <li>
            <Link href="/#">
              <a className="has-arrow waves-effect">
                <i className="ri-account-circle-line"></i>
                <span className="ml-1">
                  Authentication
                  {/* {this.props.t('Authentication')} */}
                </span>
              </a>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link href="auth-login">
                  <a>Login</a>
                  {/* {this.props.t('Login')} */}
                </Link>
              </li>
              <li>
                <Link href="auth-register">
                  <a>Register</a>
                  {/* {this.props.t('Register')} */}
                </Link>
              </li>
              <li>
                <Link href="auth-recoverpw">
                  <a>Recover pw</a>
                  {/* {this.props.t('Recover Password')} */}
                </Link>
              </li>
              <li>
                <Link href="auth-lock-screen">
                  <a>Lock screen</a>
                  {/* {this.props.t('Lock Screen')} */}
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/#">
              <a className="has-arrow waves-effect">
                <i className="ri-profile-line"></i>
                <span className="ml-1">
                  Utility
                  {/* {this.props.t('Utility')} */}
                </span>
              </a>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link href="pages-starter">
                  <a>Starter Page</a>
                  {/* {this.props.t('Starter Page')} */}
                </Link>
              </li>
              <li>
                <Link href="pages-maintenance">
                  <a>Maintenance</a>
                  {/* {this.props.t('Maintenance')} */}
                </Link>
              </li>
              <li>
                <Link href="pages-comingsoon">
                  <a>Coming soon</a>
                  {/* {this.props.t('Coming Soon')} */}
                </Link>
              </li>
              <li>
                <Link href="pages-timeline">
                  <a>Timeline</a>
                  {/* {this.props.t('Timeline')} */}
                </Link>
              </li>
              <li>
                <Link href="pages-faqs">
                  <a>Faqs</a>
                  {/* {this.props.t('FAQs')} */}
                </Link>
              </li>
              <li>
                <Link href="pages-pricing">
                  <a>Pricing</a>
                  {/* {this.props.t('Pricing')} */}
                </Link>
              </li>
              <li>
                <Link href="pages-404">
                  <a>Error 404</a>
                  {/* {this.props.t('Error 404')} */}
                </Link>
              </li>
              <li>
                <Link href="pages-500">
                  <a>Error 500</a>
                  {/* {this.props.t('Error 500')} */}
                </Link>
              </li>
            </ul>
          </li>

          <li className="menu-title">
            Components
            {/* {this.props.t('Components')} */}
          </li>

          <li>
            <Link href="/#">
              <a className="has-arrow waves-effect">
                <i className="ri-pencil-ruler-2-line"></i>
                <span className="ml-1">
                  UI Elements
                  {/* {this.props.t('UI Elements')} */}
                </span>
              </a>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link href="ui-alerts">
                  <a>Alerts</a>
                  {/* {this.props.t('Alerts')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-buttons">
                  <a>Buttons</a>
                  {/* {this.props.t('Buttons')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-cards">
                  <a>Cards</a>
                  {/* {this.props.t('Cards')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-carousel">
                  <a>Carousel</a>
                  {/* {this.props.t('Carousel')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-dropdowns">
                  <a>Dropdowns</a>
                  {/* {this.props.t('Dropdowns')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-grid">
                  <a>grid</a>
                  {/* {this.props.t('Grid')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-images">
                  <a>Images</a>
                  {/* {this.props.t('Images')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-lightbox">
                  <a>Lightbox</a>
                  {/* {this.props.t('Lightbox')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-modals">
                  <a>Modals</a>
                  {/* {this.props.t('Modals')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-rangeslider">
                  <a>Range slider</a>
                  {/* {this.props.t('Range Slider')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-roundslider">
                  <a>Round slider</a>
                  {/* {this.props.t('Round Slider')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-session-timeout">
                  <a>Session timeout</a>
                  {/* {this.props.t('Session Timeout')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-progressbars">
                  <a>Progress bars</a>
                  {/* {this.props.t('Progress Bars')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-sweet-alert">
                  <a>Sweet alerts</a>
                  {/* {this.props.t('Sweet Alerts')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-tabs-accordions">
                  <a>Tabs accordions</a>
                  {/* {this.props.t('Tabs & Accordions')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-typography">
                  <a>Typography</a>
                  {/* {this.props.t('Typography')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-video">
                  <a>Video</a>
                  {/* {this.props.t('Video')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-general">
                  <a>General</a>
                  {/* {this.props.t('General')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-rating">
                  <a>Rating</a>
                  {/* {this.props.t('Rating')} */}
                </Link>
              </li>
              <li>
                <Link href="ui-notifications">
                  <a>Notifications</a>
                  {/* {this.props.t('Notifications')} */}
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/#">
              <a className="waves-effect">
                <i className="ri-eraser-fill"></i>
                <span className="badge badge-pill badge-danger float-right">
                  6
                </span>
                <span className="ml-1">
                  Forms
                  {/* {this.props.t('Forms')} */}
                </span>
              </a>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link href="form-elements">
                  <a>Elements</a>
                  {/* {this.props.t('Elements')} */}
                </Link>
              </li>
              <li>
                <Link href="form-validation">
                  <a>Validation</a>
                  {/* {this.props.t('Validation')} */}
                </Link>
              </li>
              <li>
                <Link href="form-advanced">
                  <a>Advanced plugins</a>
                  {/* {this.props.t('Advanced Plugins')} */}
                </Link>
              </li>
              <li>
                <Link href="form-editors">
                  <a>Editors</a>
                  {/* {this.props.t('Editors')} */}
                </Link>
              </li>
              <li>
                <Link href="form-uploads">
                  <a>File upload</a>
                  {/* {this.props.t('File Upload')} */}
                </Link>
              </li>
              <li>
                <Link href="form-xeditable">
                  <a>X-editable</a>
                  {/* {this.props.t('X-editable')} */}
                </Link>
              </li>
              <li>
                <Link href="form-wizard">
                  <a>Wizard</a>
                  {/* {this.props.t('Wizard')} */}
                </Link>
              </li>
              <li>
                <Link href="form-mask">
                  <a>Mask</a>
                  {/* {this.props.t('Mask')} */}
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/#">
              <a className="has-arrow waves-effect">
                <i className="ri-table-2"></i>
                <span className="ml-1">
                  Tables
                  {/* {this.props.t('Tables')} */}
                </span>
              </a>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link href="tables-basic">
                  <a>Basic tables</a>
                  {/* {this.props.t('Basic Tables')} */}
                </Link>
              </li>
              <li>
                <Link href="tables-datatable">
                  <a>Data tables</a>
                  {/* {this.props.t('Data Tables')} */}
                </Link>
              </li>
              <li>
                <Link href="tables-responsive">
                  Responsive table
                  {/* {this.props.t('Responsive Table')} */}
                </Link>
              </li>
              <li>
                <Link href="tables-editable">
                  <a>Editable table</a>
                  {/* {this.props.t('Editable Table')} */}
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SidebarContent
