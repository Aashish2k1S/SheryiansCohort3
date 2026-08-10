# Introduction to Redux Toolkit

## What is Redux Toolkit?

**Redux Toolkit (RTK)** is the official and recommended library for managing **global state** in React applications.

It helps us store and manage data that needs to be shared across multiple components, such as:

* User authentication
* Shopping cart
* Theme (Dark/Light Mode)
* Notifications
* User profile
* Product list

Instead of passing data through multiple components (prop drilling), Redux Toolkit stores the data in a **central place called the Store**, making it accessible from anywhere in the application.

---

## Why do we need Redux Toolkit when React already has Context API?

React already provides the **Context API** for sharing data between components.

A common misconception is that Context API can only store values. In reality, it can store both **data** and **functions**.

Example:

```jsx
<UserContext.Provider value={{ user, login, logout }}>
```

Here:

* `user` → Data
* `login()` → Function
* `logout()` → Function

However, Context API usually depends on **`useState`** or **`useReducer`** to manage its state.

```js
const [user, setUser] = useState(null);
```

or

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

As applications grow larger, managing complex global state with Context API becomes difficult.

Redux Toolkit provides a more structured, scalable, and maintainable solution.

---

## Is Redux Toolkit part of React?

**No.**

Redux Toolkit is **not** built into React.

It is a separate library that works alongside React to manage application state.

To use it, install:

```bash
npm install @reduxjs/toolkit react-redux
```

* `@reduxjs/toolkit` → The Redux Toolkit library.
* `react-redux` → Connects React with Redux.

---

## How does Redux Toolkit work?

Instead of managing global state using `useState`, Redux Toolkit introduces a few new concepts:

* **Store** → Holds the application's global state.
* **Slice** → Contains state and the logic to update it.
* **Reducer** → Updates the state.
* **Action** → Describes what should happen.

These concepts will be explained in detail in the **Core Concepts** section.

---

## When should I use Redux Toolkit?

Redux Toolkit is useful when:

* Many components need the same data.
* You want to avoid prop drilling.
* Your application is becoming large.
* You need predictable and organized state management.
* Multiple developers are working on the same project.

For very small applications, Context API is often enough.

---

## Quick Comparison

| Context API                     | Redux Toolkit                            |
| ------------------------------- | ---------------------------------------- |
| Built into React                | External library                         |
| Uses `useState` or `useReducer` | Uses Store and Slices                    |
| Good for small applications     | Better for medium and large applications |
| Shares data                     | Manages global application state         |
| Simple setup                    | More structured and scalable             |

---

## Key Takeaways

* Redux Toolkit is the official way to use Redux.
* It is **not** part of React.
* It helps manage **global state** efficiently.
* It provides a clean and scalable architecture for large applications.
* It reduces prop drilling and keeps state management organized.
* It works together with React using the `react-redux` package.

---

# Why Redux Toolkit is Used

As React applications grow, managing state becomes more difficult. Passing data from one component to another through multiple levels (known as **prop drilling**) makes the code harder to understand and maintain.

Redux Toolkit solves this problem by providing a **centralized and predictable way** to manage the application's global state.

---

## 1. Global State Management

Redux Toolkit stores shared data in a single **Store**.

Instead of creating separate states in multiple components, all components can access the same data from one place.

Examples of global state:

* Logged-in user
* Shopping cart
* Theme (Dark/Light)
* Notifications
* Wishlist
* Product data

This ensures that every component always works with the latest state.

---

## 2. Avoids Prop Drilling

Without Redux Toolkit, data often needs to be passed through multiple components.

Example:

```
App
 │
 ▼
Navbar
 │
 ▼
Dashboard
 │
 ▼
Profile
```

If only the `Profile` component needs the user data, the `App` component still has to pass it through `Navbar` and `Dashboard`.

With Redux Toolkit:

```
            Redux Store
           /     |      \
          /      |       \
      Navbar  Dashboard  Profile
```

Every component can directly access the required data from the Redux Store without passing props through intermediate components.

---

## 3. Better Code Organization

Redux Toolkit encourages organizing application state into **Slices**.

Each feature manages its own state and update logic.

Example:

```
features/
│
├── authSlice.js
├── cartSlice.js
├── productSlice.js
└── userSlice.js
```

This makes the project easier to understand, maintain, and scale.

---

## 4. Predictable State Updates

State in Redux Toolkit can only be updated through **Actions** and **Reducers**.

This makes it easier to understand:

* What changed?
* Why did it change?
* Where did it change?

Having a predictable flow also makes debugging much easier.

---

## 5. Scalable for Large Applications

Redux Toolkit is designed for applications where many components need access to shared data.

As the project grows, Redux keeps the state management organized instead of scattering state across many components.

---

## 6. Easier Debugging

Redux works well with **Redux DevTools**, allowing developers to:

* View every dispatched action.
* Inspect the current state.
* Compare previous and next states.
* Track how the application's state changes over time.

This makes finding bugs much easier.

---

## 7. Less Boilerplate than Traditional Redux

Before Redux Toolkit, developers had to write a lot of repetitive code.

Redux Toolkit simplifies this by providing helper functions such as:

* `configureStore()`
* `createSlice()`

As a result, developers write less code while following Redux best practices.

---

## When Should You Use Redux Toolkit?

Use Redux Toolkit when:

* Multiple components need the same data.
* Your application has complex state.
* You want to avoid prop drilling.
* Your project is medium or large.
* You need predictable and maintainable state management.

For very small projects with minimal shared state, React's Context API or local component state is often sufficient.

---

## Quick Revision

```
Why Redux Toolkit?

✓ Global State Management

✓ Avoids Prop Drilling

✓ Better Project Structure

✓ Predictable State Updates

✓ Easy Debugging (Redux DevTools)

✓ Scalable for Large Projects

✓ Less Boilerplate Code
```

---

# Core Concepts

Redux Toolkit is built around a few core concepts. Understanding these concepts will make it much easier to work with Redux in any React project.

---

## 1. Store

The **Store** is the central place where Redux keeps the application's global state.

Think of it as a **single source of truth** for your application.

Instead of storing shared data in multiple components, Redux stores everything in one place.

Example (`store.js`):

```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
```

Here, `configureStore()` creates the Redux Store.

---

## 2. Slice

A **Slice** represents one feature of your application.

Each Slice contains:

* A name
* An initial state
* Reducer functions
* Automatically generated actions

Example:

```jsx
const counterSlice = createSlice({
    name: "counter",

    initialState: {
        value: 0,
    },

    reducers: {
        increment: (state) => {
            state.value += 1;
        },
    },
});
```

A good practice is to create one Slice for each feature.

Examples:

``` 
authSlice.js

cartSlice.js

productSlice.js

themeSlice.js

userSlice.js
```

---

## 3. State

A **State** is simply the data stored inside Redux.

Example:

```js 
initialState: {
    value: 0,
}
```

or

```js 
initialState: {
    user: null,
    isLoggedIn: false,
}
```

Whenever the state changes, React automatically updates the UI.

---

## 4. Initial State

`initialState` defines the default value of a Slice when the application starts.

Example:

```js 
const initialState = {
    value: 0,
};
```

This value is loaded into the Store when Redux is initialized.

---

## 5. Reducer

A **Reducer** is a function that updates the state.

Example:

```js 
increment: (state) => {
    state.value += 1;
}
```

Another example:

```js 
decrement: (state) => {
    state.value -= 1;
}
```

Although it looks like the state is being modified directly, Redux Toolkit uses **Immer** internally to safely create a new immutable state.

---

## 6. Action

An **Action** tells Redux **what should happen**.

Example:

```js 
dispatch(increment());
```

Here,

`increment()` is the action.

Redux automatically creates actions from the reducers defined inside `createSlice()`.

---

## 7. Payload

A **Payload** is the data sent along with an action.

Example:

```js 
dispatch(increment(5));
```

Inside the reducer:

```js 
increment: (state, action) => {
    state.value += action.payload;
}
```

Here,

```
action.payload = 5
```

Payload allows us to send dynamic data while dispatching an action.

---

## 8. Dispatch

`dispatch()` is used to send an action to Redux.

Example:

```js 
dispatch(increment());
```

or

```js 
dispatch(increment(10));
```

Dispatch tells Redux:

> "Run this action and update the Store."

---

## 9. useSelector()

`useSelector()` is a React hook provided by **react-redux**.

It is used to read data from the Redux Store.

Example:

```js 
const counter = useSelector(
    (state) => state.counter.value
);
```

Whenever the Store updates, components using `useSelector()` automatically re-render with the latest data.

---

## 10. useDispatch()

`useDispatch()` is another hook provided by **react-redux**.

It returns the `dispatch()` function, which is used to send actions.

Example:

```js 
const dispatch = useDispatch();

dispatch(increment());

dispatch(decrement());
```

---

## 11. Provider

`Provider` makes the Redux Store available to every component in the application.

Without `Provider`, React components cannot access Redux.

Example:

```jsx
import { Provider } from "react-redux";
import { store } from "./store/store";

<Provider store={store}>
    <App />
</Provider>;
```

Usually, `Provider` is added in `main.jsx`.

---

## 12. Immer

Redux Toolkit uses **Immer** internally.

Normally, React state should never be modified directly.

For example:

```js 
state.value += 1;
```

looks like mutation.

However, Immer safely converts this into an immutable update behind the scenes.

Because of Immer, reducers are much easier to write and read.

---

## Summary Table

| Concept       | Purpose                                                             |
| ------------- | ------------------------------------------------------------------- |
| Store         | Holds the application's global state.                               |
| Slice         | Manages one feature of the application.                             |
| State         | The data stored in Redux.                                           |
| Initial State | Default value of the state.                                         |
| Reducer       | Updates the state.                                                  |
| Action        | Describes what should happen.                                       |
| Payload       | Data sent with an action.                                           |
| Dispatch      | Sends an action to Redux.                                           |
| useSelector() | Reads data from the Store.                                          |
| useDispatch() | Dispatches actions.                                                 |
| Provider      | Connects React with the Redux Store.                                |
| Immer         | Allows writing simpler reducer logic while keeping state immutable. |

---

## Quick Revision

```
Store
   │
   ▼
Contains Slices
   │
   ▼
Slice
 ├── initialState
 ├── reducers
 └── actions
   │
   ▼
dispatch(action)
   │
   ▼
Reducer runs
   │
   ▼
Store updates
   │
   ▼
useSelector() gets new data
   │
   ▼
UI Re-renders
```

---

# Data Flow

Redux Toolkit follows a **one-way data flow**. This makes state changes predictable and easier to debug.

Whenever a user performs an action (such as clicking a button), Redux follows the same sequence every time.

---

## Overall Data Flow

```
User Interaction
       │
       ▼
dispatch(action)
       │
       ▼
Reducer executes
       │
       ▼
Redux Store updates
       │
       ▼
useSelector() receives updated state
       │
       ▼
React re-renders the component
```

---

## Step-by-Step Explanation

### Step 1: User Performs an Action

A user interacts with the application.

Example:

* Clicks **Increment**
* Clicks **Login**
* Adds an item to the cart
* Changes the theme

Example:

```jsx
<button onClick={() => dispatch(increment())}>
    Increment
</button>
```

At this point, nothing has changed yet.

---

### Step 2: `dispatch()` Sends an Action

When the button is clicked,

```js
dispatch(increment());
```

Redux receives an **Action**.

If we send a value,

```js
dispatch(increment(5));
```

then

```
action.payload = 5
```

The action also contains a type.

Example:

```
counter/increment
```

---

### Step 3: Reducer Updates the State

Redux looks for the matching reducer inside the Slice.

Example:

```js
increment: (state, action) => {
    state.value += action.payload;
}
```

The reducer updates the state.

Thanks to **Immer**, we can write:

```js
state.value += action.payload;
```

even though Redux is still maintaining immutable state behind the scenes.

---

### Step 4: Store Gets Updated

After the reducer finishes executing, the Redux Store automatically stores the new state.

Example:

Before:

```
value = 0
```

After:

```
value = 5
```

The Store now contains the latest application state.

---

### Step 5: `useSelector()` Reads the Updated State

Components using `useSelector()` automatically receive the latest data.

Example:

```js
const counter = useSelector(
    (state) => state.counter.value
);
```

No manual refresh is needed.

---

### Step 6: React Re-renders the UI

Once the Store updates, React automatically re-renders every component that depends on the updated state.

Example:

Before clicking:

```
Counter : 0
```

After clicking:

```
Counter : 5
```

The UI always stays in sync with the Redux Store.

---

## Complete Flow Using the Counter App

### App.jsx

```jsx
<button
    onClick={() => dispatch(increment(5))}
>
    Increment
</button>
```

↓

Redux receives

```
dispatch(increment(5))
```

↓

Action becomes

```
{
    type: "counter/increment",
    payload: 5
}
```

↓

Reducer runs

```js
state.value += action.payload;
```

↓

Redux Store updates

```
value = 5
```

↓

`useSelector()` gets the latest value

```js
const counter = useSelector(
    (state) => state.counter.value
);
```

↓

React automatically updates the screen

```
Counter : 5
```

---

## Visual Diagram

```
        User Clicks Button
                │
                ▼
     dispatch(increment(5))
                │
                ▼
             Action
(type: "counter/increment")
(payload: 5)
                │
                ▼
            Reducer
(state.value += 5)
                │
                ▼
          Redux Store
(value becomes 5)
                │
                ▼
        useSelector()
                │
                ▼
       React Re-renders UI
```

---

## Important Notes

* Data always flows in **one direction**.
* Components **cannot directly modify** the Redux Store.
* Every state update must go through:

  * `dispatch()`
  * Action
  * Reducer
  * Store
* This predictable flow makes debugging much easier.

---

## Quick Revision

```
User Action
      │
      ▼
dispatch()
      │
      ▼
Action
      │
      ▼
Reducer
      │
      ▼
Store Updates
      │
      ▼
useSelector()
      │
      ▼
UI Re-renders
```


---

# Folder Structure

A well-organized folder structure makes a Redux Toolkit project easier to understand, maintain, and scale.

A common and recommended structure is:

```
src/
│
├── redux/
│   │
│   ├── store.js
│   │
│   └── features/
│       │
│       ├── counterSlice.js
│       ├── authSlice.js
│       ├── cartSlice.js
│       └── themeSlice.js
│
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Profile.jsx
│   └── Login.jsx
│
├── App.jsx
└── main.jsx
```

---

## Understanding Each File

### 1. `main.jsx`

This is the entry point of the React application.

Here, we wrap our application with Redux's `Provider` so every component can access the Redux Store.

Example:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);
```

**Purpose:**

* Starts the React application.
* Connects React with Redux.
* Makes the Store available throughout the application.

---

### 2. `store.js`

This file creates the Redux Store.

It combines all the reducers from different slices into one global Store.

Example:

```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import authReducer from "./features/authSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
});
```

**Purpose:**

* Creates the Redux Store.
* Combines multiple Slice reducers.
* Exports the Store for use in `main.jsx`.

---

### 3. `features/`

The `features` folder contains all the Redux Slices.

Each Slice is responsible for managing **one feature** of the application.

Example:

```
features/
│
├── authSlice.js
├── cartSlice.js
├── counterSlice.js
├── productSlice.js
└── themeSlice.js
```

**Purpose:**

* Keeps Redux logic separated by feature.
* Makes the project modular.
* Easier to maintain as the application grows.

---

### 4. `counterSlice.js`

A Slice contains everything related to one feature.

Example:

```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,

    reducers: {
        increment: (state) => {
            state.value += 1;
        },

        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
```

A Slice usually contains:

* `name`
* `initialState`
* `reducers`
* exported `actions`
* exported `reducer`

---

### 5. Components

Components use Redux hooks to read and update state.

Example:

```jsx
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/features/counterSlice";

const Counter = () => {
    const count = useSelector(
        (state) => state.counter.value
    );

    const dispatch = useDispatch();

    return (
        <>
            <h1>{count}</h1>

            <button
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
        </>
    );
};
```

Notice that components **do not manage the global state themselves**. They simply:

* Read data using `useSelector()`.
* Update data using `dispatch()`.

---

## Why Create Separate Slices?

Imagine putting everything inside one file.

```
counter
login
logout
cart
wishlist
products
theme
orders
profile
notifications
```

The file would become very large and difficult to maintain.

Instead, Redux Toolkit encourages creating one Slice per feature.

Example:

```
features/
│
├── authSlice.js
├── cartSlice.js
├── orderSlice.js
├── productSlice.js
├── profileSlice.js
├── themeSlice.js
└── notificationSlice.js
```

This keeps the project clean and organized.

---

## Recommended Folder Structure for Large Projects

As your project grows, you may also organize API calls, custom hooks, and utility functions.

```
src/
│
├── redux/
│   ├── store.js
│   └── features/
│       ├── authSlice.js
│       ├── cartSlice.js
│       ├── productSlice.js
│       └── themeSlice.js
│
├── components/
├── pages/
├── hooks/
├── utils/
├── services/
├── assets/
├── App.jsx
└── main.jsx
```

This structure is commonly used in medium and large React applications.

---

## Best Practices

* Create **one Slice per feature**.
* Keep `store.js` responsible only for creating the Store.
* Store all Slice files inside the `features` folder.
* Wrap the application with `Provider` only once (usually in `main.jsx`).
* Keep components focused on UI and user interactions; let Redux handle global state.

---

## Quick Revision

```
src/
│
├── redux/
│   ├── store.js          → Creates the Redux Store
│   │
│   └── features/
│       ├── authSlice.js
│       ├── cartSlice.js
│       ├── counterSlice.js
│       └── themeSlice.js
│
├── App.jsx               → Uses Redux Hooks
│
└── main.jsx              → Wraps App with Provider
```

---

# Important Functions

Redux Toolkit provides several important functions and hooks that make state management simple and efficient. These are the functions you'll use most often in almost every Redux project.

---

## 1. `configureStore()`

### Purpose

Creates the Redux Store.

It replaces the old `createStore()` method used in traditional Redux and comes with useful defaults like Redux DevTools and middleware.

### Syntax

```js 
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
```

### When to Use

* Only once in the application.
* Usually inside `store.js`.

---

## 2. `createSlice()`

### Purpose

Creates a Redux Slice.

A Slice contains:

* Slice name
* Initial state
* Reducers
* Automatically generated actions

### Syntax

```jsx
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",

    initialState: {
        value: 0,
    },

    reducers: {
        increment: (state) => {
            state.value += 1;
        },
    },
});
```

### Returns

`createSlice()` automatically creates:

* Reducer
* Actions

```js 
export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
```

### When to Use

Whenever you create a new feature.

Example:

* User
* Cart
* Theme
* Authentication
* Products

---

## 3. `useSelector()`

### Purpose

Reads data from the Redux Store.

### Syntax

```js 
const counter = useSelector(
    (state) => state.counter.value
);
```

### Returns

The current value stored in Redux.

### Example

If the Store contains:

```js 
counter: {
    value: 15
}
```

then

```js 
const counter = useSelector(
    (state) => state.counter.value
);
```

returns

```
15
```

### When to Use

Whenever you want to display Redux state inside a component.

---

## 4. `useDispatch()`

### Purpose

Returns the `dispatch()` function.

### Syntax

```js 
const dispatch = useDispatch();
```

### Example

```js 
dispatch(increment());

dispatch(decrement());

dispatch(increment(5));
```

### When to Use

Whenever you need to update Redux state.

---

## 5. `dispatch()`

### Purpose

Sends an action to Redux.

### Syntax

```js 
dispatch(action);
```

### Example

```js 
dispatch(increment());

dispatch(decrement());

dispatch(increment(10));
```

### What Happens?

```
dispatch()
      │
      ▼
Action
      │
      ▼
Reducer
      │
      ▼
Store Updates
```

---

## 6. `Provider`

### Purpose

Makes the Redux Store available to the entire React application.

### Syntax

```jsx
import { Provider } from "react-redux";
import { store } from "./redux/store";

<Provider store={store}>
    <App />
</Provider>;
```

### When to Use

Only once.

Usually in `main.jsx`.

Without `Provider`, React components cannot use `useSelector()` or `useDispatch()`.

---

## 7. `createAsyncThunk()` *(Advanced)*

> **Note:** I haven't covered this yet, but it's one of the most commonly used Redux Toolkit functions. We'll likely learn it next.

### Purpose

Handles asynchronous operations such as API requests.

Examples:

* Login
* Fetch products
* Fetch users
* Upload files

### Basic Syntax

```js
createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const response = await fetch("/api/users");
        return response.json();
    }
);
```

---

## Summary Table

| Function             | Purpose                                             |
| -------------------- | --------------------------------------------------- |
| `configureStore()`   | Creates the Redux Store.                            |
| `createSlice()`      | Creates a Slice with state, reducers, and actions.  |
| `useSelector()`      | Reads data from the Redux Store.                    |
| `useDispatch()`      | Returns the `dispatch()` function.                  |
| `dispatch()`         | Sends an action to Redux.                           |
| `Provider`           | Makes the Store available to the React application. |
| `createAsyncThunk()` | Handles asynchronous operations like API calls.     |

---

## Quick Revision

```
configureStore()
      │
Creates Store

--------------------

createSlice()
      │
Creates
• State
• Reducers
• Actions

--------------------

useSelector()
      │
Read data

--------------------

useDispatch()
      │
Returns dispatch()

--------------------

dispatch()
      │
Sends action

--------------------

Provider
      │
Connects React with Redux

--------------------

createAsyncThunk()
      │
Handles API calls
```

---

## Personal Notes

* `configureStore()` is used only once to create the Store.
* Create one Slice for each feature of the application.
* `useSelector()` is used to **read** Redux state.
* `useDispatch()` is used to **update** Redux state.
* `Provider` should wrap the application only once (usually in `main.jsx`).
* Remember: **Read → `useSelector()` | Update → `dispatch()` via `useDispatch()`**.

---

# Your Own Notes

These are my personal notes while learning Redux Toolkit. They are written in a way that helps **Future Me** quickly revise the concepts.

---

## 💡 Redux Toolkit is NOT React

This confused me at first.

* Context API is built into React.
* Redux Toolkit is a completely separate library.
* We need to install it manually.

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 💡 Context API vs Redux Toolkit

Context API can store both **data** and **functions**.

Example:

```jsx
<UserContext.Provider value={{ user, login, logout }}>
```

The main difference is **how they manage state**.

* Context API usually uses `useState()` or `useReducer()`.
* Redux Toolkit manages global state using **Store** and **Slices**.

---

## 💡 One Slice = One Feature

Instead of putting everything in one file, create a separate Slice for each feature.

Examples:

```
authSlice.js

cartSlice.js

themeSlice.js

userSlice.js

productSlice.js
```

This keeps the project clean and easier to maintain.

---

## 💡 I Never Change the Store Directly

The Store should **never** be updated directly.

The correct flow is:

```
dispatch()
      │
      ▼
Reducer
      │
      ▼
Store Updates
```

Always remember:

> **Dispatch an action, don't modify the Store yourself.**

---

## 💡 `useSelector()` vs `useDispatch()`

This was confusing initially, so here's my memory trick.

```
useSelector()
      │
      ▼
Reads data

--------------------

useDispatch()
      │
      ▼
Updates data
```

Easy way to remember:

* **Selector = Select (Read)**
* **Dispatch = Send (Update)**

---

## 💡 Reducers Can "Mutate" State

Writing this is completely okay:

```js
state.value += 1;
```

Even though it looks like mutation, Redux Toolkit uses **Immer** internally to create a new immutable state.

So, **it is safe**.

---

## 💡 Every Redux Project Follows the Same Pattern

No matter how big the project becomes, the flow stays the same.

```
Store
│
├── Slice
│      │
│      ├── State
│      ├── Reducers
│      └── Actions
│
└── React Components
       │
       ├── useSelector()
       └── useDispatch()
```

---

## 💡 Folder Structure I Like

```
src/
│
├── redux/
│   ├── store.js
│   └── features/
│
├── App.jsx
└── main.jsx
```

Simple and easy to understand.

---

## 💡 Common Mistakes I Should Avoid

❌ Writing `reducers` instead of `reducer` in `configureStore()`.

Correct:

```js
configureStore({
    reducer: {
        counter: counterReducer,
    },
});
```

---

❌ Forgetting to add `initialState`.

Every Slice should have an initial state.

---

❌ Forgetting to wrap the app with `Provider`.

Without it, `useSelector()` and `useDispatch()` won't work.

---

❌ Forgetting to export actions.

```js
export const { increment, decrement } = counterSlice.actions;
```

---

❌ Forgetting to export the reducer.

```js
export default counterSlice.reducer;
```

---

## 💡 My Mental Model

Whenever I use Redux Toolkit, I should think like this:

```
Need shared state?
        │
        ▼
Create a Slice
        │
        ▼
Add Slice to Store
        │
        ▼
Wrap App with Provider
        │
        ▼
Read → useSelector()
        │
        ▼
Update → dispatch()
```

---

## ⭐ Final Reminder to Future Me

If I ever get confused, remember these four things:

1. **Store** → Holds all global state.
2. **Slice** → Manages one feature.
3. **useSelector()** → Reads data.
4. **useDispatch()** → Updates data.

If I understand these four concepts, the rest of Redux Toolkit becomes much easier.

--- 

# Diagrams

These diagrams provide a quick visual understanding of how Redux Toolkit works.

---

## 1. Overall Redux Architecture

```
                     React Application
                           │
                           ▼
                     <Provider>
                           │
                           ▼
                    ┌──────────────┐
                    │ Redux Store  │
                    └──────────────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
   Counter Slice      Auth Slice      Cart Slice
```

**Explanation:**

* `Provider` connects React with Redux.
* The **Store** is the central place for global state.
* Each feature has its own **Slice**.

---

## 2. Project Folder Structure

```
src/
│
├── redux/
│   ├── store.js
│   │
│   └── features/
│       ├── counterSlice.js
│       ├── authSlice.js
│       ├── cartSlice.js
│       └── themeSlice.js
│
├── App.jsx
└── main.jsx
```

**Explanation:**

* `store.js` creates the Redux Store.
* `features/` contains all the Slices.
* `main.jsx` wraps the app with `Provider`.

---

## 3. Redux Data Flow

```
User Clicks Button
        │
        ▼
dispatch(action)
        │
        ▼
Reducer Executes
        │
        ▼
Redux Store Updates
        │
        ▼
useSelector() Gets New State
        │
        ▼
React Re-renders UI
```

**Remember:**

Data always flows in **one direction**.

---

## 4. Inside a Slice

```
counterSlice.js
│
├── name
├── initialState
├── reducers
│      ├── increment()
│      └── decrement()
│
├── actions
│      ├── increment
│      └── decrement
│
└── reducer (export default)
```

**Explanation:**

A Slice contains everything related to one feature.

---

## 5. Store Structure

```
Redux Store
│
├── counter
│      └── value : 10
│
├── auth
│      ├── user
│      └── isLoggedIn
│
├── cart
│      └── items[]
│
└── theme
       └── darkMode
```

**Explanation:**

The Store contains the state from every Slice.

---

## 6. Action Flow

```
dispatch(increment(5))
        │
        ▼
Action
│
├── type
│      └── counter/increment
│
└── payload
       └── 5
```

**Explanation:**

Every dispatched action contains:

* `type`
* `payload` (optional)

---

## 7. Component Communication

```
             Redux Store
             /         \
            /           \
           ▼             ▼
   useSelector()    useDispatch()
        │                │
        ▼                ▼
     Read Data      Update Data
```

**Easy Memory Trick:**

* `useSelector()` → Read
* `useDispatch()` → Update

---

## 8. Complete Redux Lifecycle

```
Create Slice
      │
      ▼
Add Slice to Store
      │
      ▼
Wrap App with Provider
      │
      ▼
Read State using useSelector()
      │
      ▼
User Interaction
      │
      ▼
dispatch(action)
      │
      ▼
Reducer Updates State
      │
      ▼
Store Updates
      │
      ▼
React Re-renders UI
```

---

## 9. One Slice per Feature

```
features/
│
├── authSlice.js
├── cartSlice.js
├── counterSlice.js
├── productSlice.js
├── profileSlice.js
├── orderSlice.js
└── themeSlice.js
```

**Best Practice:**

One Slice should manage **one feature only**.

---

## 10. Quick Revision Diagram

```
                    Redux Toolkit

             Global State Management
                      │
                      ▼
                  Store
                      │
      ┌───────────────┼───────────────┐
      ▼               ▼               ▼
 Counter Slice    Auth Slice     Cart Slice
      │               │               │
      ▼               ▼               ▼
 initialState     initialState    initialState
 reducers         reducers        reducers
 actions          actions         actions
      │
      ▼
dispatch()
      │
      ▼
Reducer
      │
      ▼
Store Updates
      │
      ▼
useSelector()
      │
      ▼
React UI Updates
```

---

## ⭐ My Favourite Memory Trick

```
Store
   │
   ▼
Contains Slices
   │
   ▼
Slices contain
State + Reducers + Actions
   │
   ▼
dispatch()
   │
   ▼
Reducer Updates State
   │
   ▼
Store Changes
   │
   ▼
useSelector() Gets New Data
   │
   ▼
UI Updates Automatically
```

**If I remember this one diagram, I can recall almost the entire Redux Toolkit workflow.**

--- 
---

# Real-World Use Cases

Redux Toolkit is most useful when multiple components need to access or update the same data. Below are some common real-world scenarios where Redux Toolkit makes state management much easier.

---

## 1. User Authentication

One of the most common uses of Redux Toolkit is managing user authentication.

### Store

```
auth
├── user
├── token
├── isLoggedIn
└── loading
```

### Example

After a user logs in:

* Store the user information.
* Store the authentication token.
* Update the login status.

Now any component (Navbar, Profile, Dashboard, etc.) can access the logged-in user's information without passing props.

---

## 2. Shopping Cart (E-commerce)

Every e-commerce website needs a shopping cart.

### Store

```
cart
├── items
├── totalPrice
└── totalQuantity
```

### Example actions:

* Add item
* Remove item
* Increase quantity
* Decrease quantity
* Clear cart

Different pages like **Home**, **Product Details**, **Cart**, and **Checkout** can all use the same cart data from the Redux Store.

---

## 3. Theme (Dark / Light Mode)

Instead of storing the theme inside every component, keep it in Redux.

### Store

```
theme
└── mode
    ├── light
    └── dark
```

### Example:

When the user switches to Dark Mode, every component updates automatically.

---

## 4. User Profile

Store user information globally.

### Store

```
profile
├── name
├── email
├── profilePicture
└── phone
```

This data can be accessed from:

* Navbar
* Profile Page
* Settings
* Dashboard

without passing props through multiple components.

---

## 5. Notifications

Applications often show notifications in different places.

### Example:

```
notifications
├── messages
├── unreadCount
└── alerts
```

Whenever a new notification arrives, every component using this state updates automatically.

---

## 6. Wishlist

Many shopping websites allow users to save products.

### Example:

```
wishlist
└── products[]
```

Products can be added or removed from any page while keeping the wishlist synchronized across the application.

---

## 7. Product Management

For shopping websites, product information is usually shared across many components.

### Example:

```
products
├── productList
├── selectedProduct
├── loading
└── error
```

Pages that may use this data:

* Home
* Product Details
* Search
* Categories
* Recommended Products

---

## 8. Dashboard Applications

Admin dashboards often contain shared data such as:

```
dashboard
├── totalUsers
├── totalOrders
├── totalRevenue
└── analytics
```

Multiple widgets and charts can display the same data without making each component manage its own copy.

---

## 9. Todo Application

A simple Todo application is a great beginner project for learning Redux Toolkit.

### Example:

```
todos
├── items[]
├── completed
└── pending
```

Possible actions:

* Add Todo
* Delete Todo
* Edit Todo
* Mark Complete

---

## 10. Social Media Applications

Applications like Instagram, Facebook, or LinkedIn manage lots of shared data.

### Example:

```
social
├── currentUser
├── posts
├── likes
├── comments
└── notifications
```

Redux helps keep all these features synchronized across different pages.

---

## When Should I Use Redux Toolkit?

✅ Use Redux Toolkit when:

* Multiple components need the same data.
* State must be shared across different pages.
* The application is medium or large.
* State updates happen frequently.
* You want predictable and organized state management.

---

## When Should I Avoid Redux Toolkit?

❌ Don't use Redux Toolkit if:

* Your application is very small.
* State is used by only one component.
* `useState()` is sufficient.
* Context API can handle the shared state without adding unnecessary complexity.

Remember:

> **Not every project needs Redux Toolkit. Use it only when global state management is actually required.**

---

## Quick Revision

```
Use Redux Toolkit For:

✓ Authentication
✓ Shopping Cart
✓ Theme
✓ User Profile
✓ Notifications
✓ Wishlist
✓ Product Management
✓ Dashboards
✓ Todo Apps
✓ Social Media Apps

----------------------------

Avoid Redux Toolkit When:

✗ Small applications
✗ Local component state only
✗ useState() is enough
✗ Context API already solves the problem
```

---

## My Understanding

Redux Toolkit is most valuable when the **same data is needed in multiple places**.

If only one component needs the data, I should probably use `useState()`.

If many components need the same data, Redux Toolkit is usually the better choice because it provides a single, centralized source of truth.

--- 

# Challenges I Faced While Learning Redux Toolkit

Learning Redux Toolkit wasn't very difficult, but there were a few concepts that confused me initially. These are the challenges I faced and how I understood them.

---

## 1. Understanding Why Redux Toolkit Exists

### Challenge

At first, I kept asking myself:

> **"React already has Context API, so why do we need Redux Toolkit?"**

I thought both tools did exactly the same thing.

### What I Learned

I later understood that:

* Context API is mainly used to **share** data.
* Redux Toolkit is a complete **state management library**.
* Redux Toolkit provides a more structured and scalable approach for managing global state, especially in medium and large applications.

---

## 2. Thinking Context API Can Only Store Values

### Challenge

Initially, I believed Context API could only store data and not functions.

### What I Learned

I discovered that Context API can store both **data** and **functions**.

Example:

```jsx
<UserContext.Provider value={{ user, login, logout }}>
```

The real difference is not what it stores, but **how the state is managed**.

---

## 3. Understanding the Flow of Redux

### Challenge

I was confused about how data actually moves through Redux.

Questions I had:

* Where does the action go?
* Who updates the state?
* How does the UI know that the state changed?

### What I Learned

Redux always follows the same flow:

```
User Action
      │
      ▼
dispatch()
      │
      ▼
Reducer
      │
      ▼
Store Updates
      │
      ▼
useSelector()
      │
      ▼
UI Re-renders
```

Once I understood this flow, Redux became much easier to understand.

---

## 4. Confusing `useSelector()` and `useDispatch()`

### Challenge

I often forgot which hook was used for reading data and which one was used for updating data.

### What I Learned

A simple memory trick helped me:

```
Selector = Select = Read

Dispatch = Send = Update
```

Now it's much easier to remember.

---

## 5. Forgetting the Redux Setup

### Challenge

When creating a new Redux project, I sometimes forgot one of the setup steps.

### What I Learned

The basic setup is always:

```
Install Packages
        │
        ▼
Create Store
        │
        ▼
Create Slice
        │
        ▼
Wrap App with Provider
        │
        ▼
Use useSelector()
        │
        ▼
Use useDispatch()
```

Following this order prevents most setup mistakes.

---

## 6. Understanding `action.payload`

### Challenge

At first, I didn't understand what `payload` was or why it was needed.

### What I Learned

`payload` is simply the data sent along with an action.

Example:

```js 
dispatch(increment(5));
```

Inside the reducer:

```js 
action.payload
```

will be:

```
5
```

Thinking of payload as **"extra information sent with an action"** made it much easier to understand.

---

## 7. Understanding State Mutation

### Challenge

Seeing code like this confused me:

```js 
state.value += 1;
```

I had already learned that React state should never be mutated directly.

### What I Learned

Redux Toolkit uses **Immer** internally.

Although it looks like the state is being modified directly, Immer safely creates a new immutable state behind the scenes.

So this syntax is completely valid in Redux Toolkit.

---

## Biggest Lesson I Learned

Redux Toolkit is much easier than it first appears.

Most of the confusion came from learning new terminology such as:

* Store
* Slice
* Reducer
* Action
* Payload
* Dispatch

Once I understood what each term meant and how they work together, everything started to make sense.

---

## Advice to My Future Self

If I ever feel confused while using Redux Toolkit again, I should remember this sentence:

> **Don't try to memorize Redux. Understand the flow: User Action → Dispatch → Reducer → Store → UI Update.**

Everything else builds on top of that idea.

--- 

# Additional Things I Explored

While learning Redux Toolkit, I came across a few concepts that I either explored briefly or learned about for future study. These topics are important and worth revisiting as I continue learning.

---

## 1. Redux DevTools

Redux Toolkit works seamlessly with **Redux DevTools**, a browser extension that helps debug Redux applications.

Using Redux DevTools, I can:

* View every dispatched action.
* Inspect the current Redux Store.
* Compare previous and next states.
* Track how the state changes over time.

This makes debugging much easier, especially in larger applications.

> **To Learn Next:** How to use Redux DevTools effectively for debugging.

---

## 2. Immer

One thing that surprised me was that reducers can appear to mutate state directly.

### Example:

```js 
state.value += 1;
```

Normally, React discourages direct state mutation.

Redux Toolkit solves this by using **Immer**, which automatically creates a new immutable state behind the scenes.

> **Key Takeaway:** It looks like mutation, but it is actually handled safely by Immer.

---

## 3. `action.payload`

I explored how actions can carry additional data using a payload.

### Example:

```js 
dispatch(increment(5));
```

Inside the reducer:

```js 
state.value += action.payload;
```

This allows reducers to work with dynamic values instead of hardcoded ones.

---

## 4. Automatic Action Creation

I learned that `createSlice()` automatically generates action creators.

Instead of writing actions manually, Redux Toolkit creates them for me.

### Example:

```js 
export const { increment, decrement } = counterSlice.actions;
```

This reduces boilerplate code and keeps the codebase cleaner.

---

## 5. Feature-Based Project Structure

I explored the idea of organizing Redux code by **features** rather than putting everything into one large file.

### Example:

```
features/
├── authSlice.js
├── cartSlice.js
├── productSlice.js
└── themeSlice.js
```

This structure makes projects easier to maintain and scale.

---

## 6. Redux Toolkit Best Practices

Some best practices I learned are:

* Create **one Slice per feature**.
* Keep `store.js` responsible only for creating the Store.
* Keep components focused on UI, not global state management.
* Use meaningful names for Slices.
* Avoid storing unnecessary data in Redux.

---

## 7. Things I Plan to Learn Next

I haven't studied these topics yet, but they are commonly used in real-world Redux applications.

### `createAsyncThunk()`

Used for handling asynchronous operations such as:

* API calls
* User login
* Fetching products
* Uploading data

---

### RTK Query

A powerful tool built into Redux Toolkit for fetching, caching, and managing server data.

It reduces the amount of code needed for API requests.

---

### Redux Middleware

Middleware runs between `dispatch()` and the reducer.

It is commonly used for:

* Logging
* API handling
* Error handling
* Authentication

---

### Redux Persist

Allows Redux state to remain available even after refreshing the browser.

Useful for:

* Login sessions
* Shopping carts
* User preferences

---

### Advanced Store Configuration

As projects grow, the Redux Store can be configured with:

* Multiple reducers
* Middleware
* DevTools options
* Custom settings

---

## Learning Roadmap

```
✔ Redux Basics

        │
        ▼

✔ Store

        │
        ▼

✔ Slice

        │
        ▼

✔ Actions & Reducers

        │
        ▼

✔ useSelector()

        │
        ▼

✔ useDispatch()

        │
        ▼

⬜ createAsyncThunk()

        │
        ▼

⬜ RTK Query

        │
        ▼

⬜ Redux Persist

        │
        ▼

⬜ Middleware

        │
        ▼

⬜ Advanced Redux Toolkit
```

---

## Final Reflection

Learning Redux Toolkit taught me that managing global state doesn't have to be complicated.

At first, the new terms—**Store**, **Slice**, **Reducer**, **Action**, and **Dispatch**—felt overwhelming. However, once I understood how they connect, Redux Toolkit became much easier to work with.

The most important lesson I learned is:

> **Don't memorize Redux Toolkit. Understand the flow and the purpose of each concept. Once the flow is clear, the rest becomes much easier to learn.**

---
