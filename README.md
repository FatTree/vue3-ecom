# [vue3-ecom](https://fattree.github.io/vue3-ecom/)

This project is an e-commerce web application developed using **Vue 3** and **Vite**. You can explore it on the [Git Page](https://fattree.github.io/vue3-ecom/).

![RWD](https://raw.githubusercontent.com/FatTree/picResource/refs/heads/main/ECom-4.png)

## Tech Stack 🛠
* Frontend: Vue 3 + Vite + TypeScript
* Backend API: [DummyJSON](https://dummyjson.com/docs) 
* State Management: Pinia
* Routing: Vue Router
* API: Axios
* RWD: Desktop, mobile
* Testing: Vitest
* Styling: SCSS
* Internationalization: Vue I18n
* Authentication/storage: Firebase (Authentication, Firestore)
* Deployment: Github action -> Git Page

## Tech Hightlight ✨
### Data Flow
The data returned from the backend is referred to as the **[DataModel](https://github.com/FatTree/vue3-ecom/blob/dev/src/models/dataModel.ts)**, while the data presented on the frontend is called the **[ViewModel](https://github.com/FatTree/vue3-ecom/blob/dev/src/models/viewModel.ts)**. There is a role on the frontend known as the [Formatter](https://github.com/FatTree/vue3-ecom/blob/dev/src/utils/modelFormatter.ts), which is responsible for converting the **DataModel** into the **ViewModel**.
* Backend (DataModel) -> Frontend (ViewModel)
* Data in Frontend: [DataModel](https://github.com/FatTree/vue3-ecom/blob/dev/src/models/dataModel.ts) -> [Formatter](https://github.com/FatTree/vue3-ecom/blob/dev/src/utils/modelFormatter.ts) -> [ViewModel](https://github.com/FatTree/vue3-ecom/blob/dev/src/models/viewModel.ts)


### API: vue-axios
The design of API calling is based on `vue-axios` for interception and encapsulation, with two roles involved:

* **[interceptors](https://github.com/FatTree/vue3-ecom/blob/dev/src/utils/api.ts)**: Intercepts the `request` to validate the token, and intercepts the `response` for error handling, reporting errors based on different HTTP statuses.
* **[useData](https://github.com/FatTree/vue3-ecom/blob/dev/src/composable/useData.ts)**: Encapsulates the retrieved data and status into a `Composable`:
    * **State Management**: Provides two states, `isReady` and `isError`, which can be utilized in the program or UI.
    * **Data Type Management**: Uses TypeScript generics to ensure that the data returned by the API is predictable.
    * **Simplified Requests**: Encapsulates request details, allowing focus only on the request method and URL.


### Style: SCSS
* Global styles are automatically imported from the [Vite configuration](https://github.com/FatTree/vue3-ecom/blob/dev/vite.config.ts):
    ```ts
    // vite.config.ts
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/assets/styles/main.scss" as *;`
            }
        }
    }
    ```
* main.scss
    * _RWD : @media()
    * _color: Color variables
    * _reset: CSS reset
    * _font: Font style
    * _util: Shared style
    * _UIKits: Style for UI Kits



## Project Structure 📁
```
src/
│── assets/         # Static assets (images, styles, etc.)
│── components/     # Vue components
│── composable/     # Composables
│── i18n/           # i18n
│── plugins/        # Plugins
│── router/         # Vue Router setup
│── stores/         # Store
│── trsts/unit      # Unit test
│── utils/          # Utils
│── views/          # Pages
│── App.vue         # Main application component
│── main.ts         # Project entry point
```


## Features ✨
1. **[Home Page](https://fattree.github.io/vue3-ecom/)**
![RWD](https://raw.githubusercontent.com/FatTree/picResource/refs/heads/main/ECom-1.png)
    * **Hero Banner:** Supports image carousel to showcase promotional events or new product recommendations.
    * **Product Categories:** Such as "Men's Wear," "Women's Wear," "Accessories," etc.
    * **Product Display Area:** Product cards showing images, names, and prices.
    * **Language Switcher:** Allows switching between Traditional Chinese, English, and other languages using vue-i18n.

2. **[Product List Page](https://fattree.github.io/vue3-ecom/category/mobile-accessories)**  
![RWD](https://raw.githubusercontent.com/FatTree/picResource/refs/heads/main/ECom-8.png)
    * Display the list of all products in the same category
    * Sort the products by price
    * Filter products by brand

3. **Product Detail Page**
![RWD](https://raw.githubusercontent.com/FatTree/picResource/refs/heads/main/ECom-7.png)
   * Displays detailed information for a single product:
     * Product name, image carousel, price, description, and stock status.
     * Specification selection: such as color and size, accompanied by interactive buttons.
     * Add to Cart feature: When the button is pressed, the status is synchronized to Pinia's global state management.
     * User review section.

3. **Shopping Cart**  
![RWD](https://raw.githubusercontent.com/FatTree/picResource/refs/heads/main/ECom-6.png)
   * **Cart List:** Displays added products (name, quantity, unit price, subtotal).
   * Supports quantity adjustment and product deletion.
   * **Shopping Summary:** Shows total amount, tax, shipping costs, and other information.
   * **Proceed to Checkout** button: Redirects to the checkout page.

4. **Checkout Page**  
![RWD](https://raw.githubusercontent.com/FatTree/picResource/refs/heads/main/ECom-5.png)
   * **Order Confirmation Screen:** Displays the list of products and cost summary.
   * **User Information Input:** Name, address, and contact number.

5. **User Login and Registration**
   * Utilizes Firebase Authentication to provide the following features:
     * Email login/registration.
     * Google third-party login.
   * After logging in, displays personalized user information (static data) (e.g., username, shopping history).

6. **Notification System**  
![RWD](https://raw.githubusercontent.com/FatTree/picResource/refs/heads/main/ECom-3.png)
   * Displays information to users, categorized into two levels:
     * Info
     * Error
## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
