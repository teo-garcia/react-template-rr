<!-- ![README.md banner](./README.png) -->

![Package License](https://img.shields.io/github/license/teo-garcia/react-template-rr)
![Package Version](https://img.shields.io/github/package-json/v/teo-garcia/react-template-rr)

# React Template RR

Start building modern web applications using modern React Router.

## Requirements

- `Node 18+`
- `Git 2+`
- `pnpm 8`

## Installation

1. Get the template using `npx degit`:

```bash
  npx degit teo-garcia/react-template-rr my_project
```

2. Install the dependencies:

```bash
  pnpm install
```

3. Run the project:

```bash
  pnpm dev
```

## Tools

- Vite: For rapid development and optimized builds.
- React: For building interactive user interfaces.
- TypeScript: For static type checking and improved developer experience.
- ESLint + Prettier: For consistent code style and catching potential issues.
- Husky + Lint Staged: For Git hooks to ensure code quality before commits.
- Vitest + Testing Library React: For unit testing React components and
  utilities.
- Playwright: For end-to-end testing across multiple browsers.
- MSW: For mocking API requests during development and testing.

## Commands

| **Command**             | **Description**                                 |
| ----------------------- | ----------------------------------------------- |
| dev                     | Run `dev:web`.                                  |
| build                   | Run `build:web`.                                |
| dev:web                 | Run `vite` in `DEV` mode.                       |
| build:web               | Run `vite` in `PROD` mode.                      |
| start:web               | Run `vite` server (build required).             |
| test:unit               | Run `vitest`.                                   |
| test:e2e                | Run `dev`, and `playwright`.                    |
| lint:css                | Lint CSS files.                                 |
| lint:js                 | Lint JS files.                                  |
| create:component <name> | Creates a component at `src/components/<name>`. |
| create:feature <name>   | Creates a component at `src/features/<name>`.   |

<!-- # React Cheatsheet

## Table of Contents

## Table of Contents

### 1. Fundamentals

- [What is React?](#11-what-is-react)
- [Virtual DOM & Rendering Basics](#12-virtual-dom--rendering-basics)
- [JSX](#13-jsx)
- [Components](#14-components)
- [Props & State](#15-props--state)
- [Lifecycle & Rendering Cycle](#16-lifecycle--rendering-cycle)
- [Event Handling](#17-event-handling)
- [Conditional Rendering](#18-conditional-rendering)
- [Lists & Keys](#19-lists--keys)
- [Strict Mode & Reconciliation](#110-strict-mode--reconciliation)
- [Portals](#111-portals)
- [Error Boundaries](#112-error-boundaries)
- [Code Splitting & Lazy Loading](#113-code-splitting--lazy-loading)
- [Concurrent Features](#114-concurrent-features)
- [Profiler API](#115-profiler-api)
- [Common React Patterns](#116-common-react-patterns)
- [Avoiding Unnecessary Re-Renders](#117-avoiding-unnecessary-re-renders)
- [useMemo & React.memo](#118-usememo--reactmemo)
- [Profiling Tools](#119-profiling-tools)
- [Dynamic Import Performance](#120-dynamic-import-performance)

### 2. Hooks

- [Basic Hooks](#21-basic-hooks-usestate-useeffect)
- [Performance Hooks](#22-performance-hooks-usememo-usecallback)
- [Derived State & Advanced Hooks](#23-derived-state--advanced-hooks)
- [useContext & Custom Hooks](#24-usecontext--custom-hooks)
- [useRef & Refs](#25-useref--refs)
- [useReducer](#26-usereducer-basic--advanced)
- [useTransition & useDeferredValue](#27-usetransition--usedeferredvalue)
- [useId](#28-useid)
- [useSyncExternalStore](#29-usesyncexternalstore)
- [useInsertionEffect](#210-useinsertioneffect)
- [useLayoutEffect](#211-uselayouteffect)
- [useDebugValue](#212-usedebugvalue)

### 3. State Management

- [Local State](#31-local-state)
- [Global State](#32-global-state)
- [Network State with React Query](#33-network-state-with-react-query)
- [Comparison of State Management Solutions](#34-comparison-of-state-management-solutions)

### 4. Routing with React Router

- [Introduction & Setup](#41-introduction--setup)
- [Routing Basics](#42-routing-basics-static--dynamic)
- [Route Parameters & Nested Routes](#43-route-parameters--nested-routes)
- [Route Loaders & Actions](#44-route-loaders--actions)
- [Error Handling in Routes](#45-error-handling-in-routes)
- [Advanced Routing Patterns](#46-advanced-routing-patterns)
- [Generouted & Code Generation](#47-generouted--code-generation)
- [Performance & Best Practices](#48-performance--best-practices)

### 5. Testing

- [Unit Testing](#51-unit-testing)
- [Integration Testing](#52-integration-testing)
- [React Testing Library](#53-react-testing-library)
- [MSW for API Mocking](#54-msw-for-api-mocking)
- [Storybook Testing](#55-storybook-testing)

## 1. Fundamentals

### 1.1 What is React?

React is a JavaScript library for building user interfaces using a component-based architecture. It allows you to encapsulate state, behavior, and styling within self-contained components to build complex UIs that are both maintainable and scalable.

```tsx
import React from 'react'

const Greeting: React.FC<{ name: string }> = ({ name }) => {
  return <h1>Hello, {name}!</h1> // A simple greeting component.
}

export default Greeting
```

### 1.3 JSX

JSX is a syntax extension that lets you write HTML-like code in JavaScript. It makes your UI code more expressive and easier to understand by combining markup with logic.

```tsx
import React from 'react'

const Message: React.FC<{ text: string }> = ({ text }) => {
  return <p>{text}</p> // The text is embedded directly in JSX.
}

export default Message
```

### 1.4 Components

Components are the building blocks of a React application. They allow you to break down your UI into reusable pieces and manage each piece’s logic and styling independently.

```tsx
import React from 'react'

const Button: React.FC<{ label: string; onClick: () => void }> = ({
  label,
  onClick,
}) => {
  return <button onClick={onClick}>{label}</button> // A reusable button component.
}

export default Button
```

### 1.5 Props & State

Props are immutable inputs passed from parent to child components, while state represents mutable data managed within a component. Using TypeScript, you can define interfaces for complex props including functions, refs, and state setters.

```tsx
import React, { useState, RefObject } from 'react'

interface ComplexProps {
  title: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  forwardedRef: RefObject<HTMLInputElement> // TODO: Not needed in react@19
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const ComplexComponent: React.FC<ComplexProps> = ({
  title,
  onClick,
  forwardedRef,
  setValue,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={onClick}>Click Me</button>
      <input ref={forwardedRef} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export default ComplexComponent
```

### 1.6 Lifecycle & Rendering Cycle TODO: Improve this

Even though functional components lack traditional lifecycle methods, the useEffect hook provides control over mounting, updating, and unmounting. The dependency array in useEffect allows you to specify when the effect should re-run, thus controlling side effects and cleanup operations.

```tsx
import React, { useEffect, useState } from 'react'

const LifecycleExample: React.FC = () => {
  const [data, setData] = useState<string>('')

  useEffect(() => {
    console.log('Component mounted')
    // Simulate data fetching.
    setData('Fetched Data')

    return () => {
      console.log('Component unmounted')
      // Cleanup code here.
    }
  }, []) // Empty dependency array: runs only once after mount.

  return <div>{data}</div>
}

export default LifecycleExample
```

### 1.7 Event Handling

React uses synthetic events that ensure cross-browser compatibility. You can handle multiple types of events (e.g., click, change, submit) in a single component, which simplifies interactions and form control.

```tsx
import React, { useState } from 'react'

const FormExample: React.FC = () => {
  const [inputValue, setInputValue] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button was clicked!', e)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    console.log('Input changed:', e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted with:', inputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type here..."
      />
      <button type="button" onClick={handleClick}>
        Click Me
      </button>
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormExample
```

### 1.8 Conditional Rendering

Conditional rendering in React allows you to display components or execute logic based on conditions. Use maps for list iteration, simple ternaries for straightforward choices, and dedicated render functions for more complex logic to keep your JSX clean.

```tsx
import React from 'react'

/**
 * Example 1: Using Maps for Iteration
 * When you need to render a list of items conditionally, using the .map method is ideal.
 */
const MapExample: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <div>
      <h3>Map Example</h3>
      {items.length ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items available.</p>
      )}
    </div>
  )
}

/**
 * Example 2: Using Ternaries for Simple Conditions
 * Use ternaries when you have two clear options to choose from. Avoid nesting ternaries to keep the logic readable.
 */
const TernaryExample: React.FC<{ status: 'loading' | 'success' | 'error' }> = ({
  status,
}) => {
  return (
    <div>
      <h3>Ternary Example</h3>
      {status === 'loading' ? (
        <p>Loading data...</p>
      ) : status === 'error' ? (
        <p>An error has occurred.</p>
      ) : (
        <p>Data loaded successfully!</p>
      )}
    </div>
  )
}

/**
 * Example 3: Using Render Functions (renderFns) for Complex Logic
 * When conditional logic becomes more complex, abstract it into a helper function that returns JSX.
 */
const RenderFnExample: React.FC<{
  status: 'loading' | 'success' | 'error'
  items: string[]
}> = ({ status, items }) => {
  const renderContent = () => {
    // Handle the different statuses.
    if (status === 'loading') {
      return <p>Loading content...</p>
    }
    if (status === 'error') {
      return <p>Oops! Something went wrong.</p>
    }
    // When status is 'success', handle the items list.
    if (items.length === 0) {
      return <p>No items found.</p>
    }
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <h3>Render Function Example</h3>
      {renderContent()}
    </div>
  )
}

export { MapExample, TernaryExample, RenderFnExample }
```

### 1.9 Lists & Keys

When rendering lists, assigning a stable and unique key to each item is critical. Keys help React identify which items have changed, been added, or removed, preventing performance issues and rendering bugs.

```tsx
import React from 'react'

interface Product {
  id: number
  name: string
}

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li> // Unique key ensures proper reconciliation.
      ))}
    </ul>
  )
}

export default ProductList
```

### 1.10 Strict Mode & Reconciliation TODO: Merge in a basic section

Strict Mode is a development tool that highlights potential problems in an application by activating additional checks and warnings. Reconciliation is the process by which React determines how to efficiently update the DOM by comparing Virtual DOM trees.

```tsx
import React from 'react'
import ReactDOM from 'react-dom'

const App: React.FC = () => <h1>React Strict Mode and Reconciliation Demo</h1>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

### 1.11 Portals

Portals render children into a DOM node outside of the parent component’s hierarchy. They are useful for modals, tooltips, and overlays that must visually escape container constraints.

```tsx
import React from 'react'
import ReactDOM from 'react-dom'

const Modal: React.FC = () => {
  return ReactDOM.createPortal(
    <div className="modal">
      <p>This modal is rendered in a separate DOM subtree.</p>
    </div>,
    document.getElementById('modal-root')! // Ensure this element exists in your HTML.
  )
}

export default Modal
```

### 1.12 Error Boundaries

Error boundaries catch JavaScript errors in their child component tree, log those errors, and display a fallback UI. They prevent the entire app from crashing due to errors in a single component subtree.

```tsx
import React, { Component, ErrorInfo } from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true } // Update state to display fallback UI.
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>
    }
    return this.props.children
  }
}

export default ErrorBoundary
```

### 1.13 Code Splitting & Lazy Loading

Code splitting allows you to load parts of your application on demand, which helps improve the initial load time of your app. React.lazy and Suspense make implementing lazy-loaded components straightforward.

```tsx
import React, { Suspense } from 'react'

const LazyComponent = React.lazy(() => import('./LazyComponent')) // Component is loaded dynamically.

const App: React.FC = () => (
  <Suspense fallback={<div>Loading component...</div>}>
    <LazyComponent />
  </Suspense>
)

export default App
```

### 1.14 Concurrent Features

Concurrent features introduced in React 18 enable smoother user experiences by allowing React to pause, abort, or restart renders as needed, especially for high-priority updates like user inputs.

```tsx
import React, { useState, useTransition } from 'react'

const ConcurrentSearch: React.FC = () => {
  const [query, setQuery] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setQuery(e.target.value)
    })
  }

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      {isPending ? (
        <p>Updating search results...</p>
      ) : (
        <p>Results for "{query}"</p>
      )}
    </div>
  )
}

export default ConcurrentSearch
```

### 1.15 Profiler API

The Profiler API measures render timings and logs performance details, making it easier to identify and fix performance bottlenecks within your React components.

```tsx
import React, { Profiler } from 'react'

const onRenderCallback = (
  id: string,
  phase: 'mount' | 'update',
  actualDuration: number
) => {
  console.log({ id, phase, actualDuration }) // Logs detailed render timing info.
}

const ProfiledApp: React.FC = () => (
  <Profiler id="App" onRender={onRenderCallback}>
    <div>App Content</div>
  </Profiler>
)

export default ProfiledApp
```

### 1.16 Common React Patterns

Modern React encourages the use of custom hooks, container/presentational separation, and component composition over older patterns like HOCs and render props. These patterns promote code reuse and clarity in managing side effects and state.

```tsx
import React, { useState, useEffect } from 'react'

// Custom hook for fetching data.
const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [url])

  return { data, loading }
}

const DataDisplay: React.FC = () => {
  const { data, loading } = useFetch('https://api.example.com/data')

  if (loading) {
    return <p>Loading data...</p>
  }
  return <div>{JSON.stringify(data)}</div>
}

export default DataDisplay
```

### 1.17 Re-Rendering & Performance Techniques - TODO: Merge in a basic section

Efficient rendering is crucial for a smooth user experience. React’s Virtual DOM updates only what has changed, but certain coding practices can lead to unnecessary re-renders. Understanding stable (primitive, memoized values) versus unstable (new objects or functions on each render) variables is key. The table below outlines common scenarios:

| Scenario                            | Outcome                                                                                  | Technique/Consideration                                         |
| ----------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Passing inline functions            | New function reference each render; triggers re-render in child components               | Use useCallback to memoize functions                            |
| Passing inline objects/arrays       | Creates new references on every render; forces child re-render even if content is same   | Use useMemo to create stable references                         |
| Updating with primitives (by value) | Compared by value; typically re-renders only when changed                                | Primitives are naturally stable if not recreated unnecessarily  |
| Updating with objects or functions  | Compared by reference; even identical content may trigger re-render if reference changes | Ensure immutability and memoization with useMemo and React.memo |

```tsx
import React, { useState, useCallback, useMemo } from 'react'

interface Item {
  id: number
  name: string
}

const ItemList: React.FC<{ items: Item[]; onSelect: (item: Item) => void }> =
  React.memo(({ items, onSelect }) => {
    console.log('ItemList rendered')
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => onSelect(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    )
  })

const ReRenderExample: React.FC = () => {
  const [selected, setSelected] = useState<Item | null>(null)

  // Memoizing the items array to prevent unnecessary re-renders.
  const items = useMemo(
    () => [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
    ],
    []
  )

  const handleSelect = useCallback((item: Item) => {
    setSelected(item)
  }, [])

  return (
    <div>
      <ItemList items={items} onSelect={handleSelect} />
      {selected && <p>Selected: {selected.name}</p>}
    </div>
  )
}

export default ReRenderExample
```

### 1.18 Dynamic Import Performance

Dynamic imports allow modules to be loaded only when needed, reducing the initial bundle size and speeding up page loads. This is particularly effective for large, rarely used components.

```tsx
import React, { Suspense } from 'react'

const DynamicComponent = React.lazy(() => import('./DynamicComponent'))

const App: React.FC = () => (
  <Suspense fallback={<div>Loading dynamic component...</div>}>
    <DynamicComponent />
  </Suspense>
)

export default App
``` -->
