export const hooksData = [
  // ---------------- BASIC HOOKS ----------------
  {
    name: "useState",
    description:
      "The useState hook lets you add state to a functional component. It returns a state variable and a function to update that variable.",
    precaution:
      "Use useState only when you need to re-render your component based on data changes. Avoid overusing it for values that don’t affect UI rendering.",
    example: `const [count, setCount] = useState(0);

// Update state
setCount(count + 1);`,
  },
  {
    name: "useEffect",
    description:
      "The useEffect hook allows you to perform side effects in your components — like fetching data, updating the DOM, or managing timers.",
    precaution:
      "Be careful with dependencies. Incorrect dependency arrays can cause infinite loops or missing updates. Always declare what your effect uses inside the dependency array.",
    example: `useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);`,
  },
  {
    name: "useContext",
    description:
      "The useContext hook allows you to access data from a React Context without prop drilling. It helps share data like themes or authentication globally.",
    precaution:
      "Avoid placing large objects or frequently changing data in Context, as it can cause unnecessary re-renders across components using it.",
    example: `const user = useContext(UserContext);
console.log(user.name);`,
  },

  // ---------------- PERFORMANCE HOOKS ----------------
  {
    name: "useMemo",
    description:
      "The useMemo hook memoizes the result of a computation so it only recalculates when dependencies change. Helps optimize performance.",
    precaution:
      "Use useMemo for expensive calculations only. Overusing it for simple expressions can make your code harder to maintain.",
    example: `const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b),
  [a, b]
);`,
  },
  {
    name: "useCallback",
    description:
      "The useCallback hook memoizes a function so that it doesn’t get recreated on every render. Useful when passing functions to child components.",
    precaution:
      "Don’t wrap every function in useCallback — use it only when function identity changes cause performance problems (e.g., dependency-heavy child components).",
    example: `const handleClick = useCallback(() => {
  console.log("Clicked!");
}, []);`,
  },

  // ---------------- REFS & DOM ----------------
  {
    name: "useRef",
    description:
      "The useRef hook provides a way to persist values across renders without triggering re-renders. Commonly used to access DOM elements or store mutable data.",
    precaution:
      "Don’t use useRef to store reactive state. Updating a ref’s value doesn’t trigger a re-render — that’s intentional.",
    example: `const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();
}, []);`,
  },

  // ---------------- ADVANCED STATE ----------------
  {
    name: "useReducer",
    description:
      "The useReducer hook is an alternative to useState for managing complex state logic using reducers. It’s similar to Redux-style state management.",
    precaution:
      "Keep reducers pure. Don’t mutate state directly or perform side effects inside your reducer function.",
    example: `const [state, dispatch] = useReducer(reducer, initialState);

dispatch({ type: "increment" });`,
  },

  // ---------------- CUSTOM HOOKS ----------------
  {
    name: "useCustomHook",
    description:
      "You can build your own custom hooks by combining other hooks. It helps encapsulate reusable logic between components.",
    precaution:
      "Always name custom hooks starting with 'use'. Avoid conditional hook calls inside your custom hook.",
    example: `function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}`,
  },

  // ---------------- LIFECYCLE & LAYOUT ----------------
  {
    name: "useLayoutEffect",
    description:
      "Similar to useEffect, but it runs synchronously after all DOM mutations and before the browser paints. Useful for measuring layout or synchronizing scroll position.",
    precaution:
      "Avoid long-running logic inside useLayoutEffect. It can block the browser from painting and cause jank. Use it only for layout-related calculations.",
    example: `useLayoutEffect(() => {
  const rect = elementRef.current.getBoundingClientRect();
  console.log(rect);
}, []);`,
  },
  {
    name: "useImperativeHandle",
    description:
      "Used with forwardRef to customize the value that is exposed to parent components via refs.",
    precaution:
      "Use this sparingly — it breaks the declarative nature of React. Keep interactions predictable and limited.",
    example: `useImperativeHandle(ref, () => ({
  focus: () => inputRef.current.focus(),
}));`,
  },

  // ---------------- DEBUG & DEFER ----------------
  {
    name: "useDebugValue",
    description:
      "Lets you display custom labels for custom hooks in React DevTools. Primarily used inside custom hooks for debugging purposes.",
    precaution:
      "Not needed in most applications — only use it for improving debugging clarity for shared or complex custom hooks.",
    example: `useDebugValue(isOnline ? "Online" : "Offline");`,
  },
  {
    name: "useDeferredValue",
    description:
      "Delays updating a part of the UI until less urgent updates have finished. Helps keep the app responsive.",
    precaution:
      "Don’t use this as a general fix for performance problems. Optimize components first, then use deferred updates selectively.",
    example: `const deferredValue = useDeferredValue(inputValue);`,
  },

  // ---------------- TRANSITION HOOKS ----------------
  {
    name: "useTransition",
    description:
      "Allows marking state updates as non-urgent (transitions), so React can keep the UI responsive during heavy updates.",
    precaution:
      "Avoid wrapping every update in startTransition — use it for specific slow updates (like filtering large lists).",
    example: `const [isPending, startTransition] = useTransition();

startTransition(() => {
  setSearchQuery(value);
});`,
  },

  // ---------------- ID & SYNC ----------------
  {
    name: "useId",
    description:
      "Generates a unique, stable ID useful for accessibility attributes or list keys across renders.",
    precaution:
      "Don’t use useId for dynamic data fetched at runtime — it’s meant for consistent, deterministic IDs.",
    example: `const id = useId();
return <input id={id} />;`,
  },
  {
    name: "useSyncExternalStore",
    description:
      "Lets you subscribe to external data sources in a way that’s concurrent-safe. Used internally by libraries like Redux.",
    precaution:
      "Use this only for library-level integrations. For normal state or effects, prefer useState or useEffect.",
    example: `const state = useSyncExternalStore(subscribe, getSnapshot);`,
  },
];
