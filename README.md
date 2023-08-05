Sure, we can add the Mock Service Worker (MSW) in the "Technology Stack" section and describe it in the "Features" section as it plays a crucial role in handling network requests for testing. Here's the updated readme:

---

# Shopping Cart Project

This is an interactive online shopping cart where users can view, add, and customize products in their cart.

## Setup and Installation

Follow these instructions to set up this project on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/download/) and [npm](http://npmjs.com) installed on your machine.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/ForkEyeee/shopping-cart
   ```

2. Navigate into the project folder:

   ```bash
   cd shopping-cart
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

Now you can open your browser and navigate to `http://localhost:3000` to see the application running.

## Building for Production

To create an optimized production build of the app, use the command:

```bash
npm run build
```

This will generate a `build` folder with all the files bundled and optimized for production.

## Technology Stack

This project is built using the following technologies:

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Chakra UI](https://chakra-ui.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Jest](https://jestjs.io/)
- [Mock Service Worker (MSW)](https://mswjs.io/)

## Features

- Two main pages: Home page and Shopping Cart page.
- Navigation bar to switch between pages.
- Individual product cards with add to cart button and quantity specification.
- Dynamic shopping cart updates based on user orders.
- Fetching product data from the FakeStore API.
- MSW is used to intercept network requests and provide controlled responses, enabling effective testing of components that rely on API calls.
