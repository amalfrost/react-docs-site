import { type RouteConfig, layout, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // → "/"

  // ✅ Layout only for docs section
  layout("routes/docs-layout.tsx", [
    route("docs", "routes/docs.tsx"),                 // → /docs
    route("docs/js", "contents/javascript/Javascript.tsx"), // → /docs/js
    route("docs/react", "contents/react/ReactDocs.tsx"),    // → /docs/react
    route("docs/react/hooks", "contents/react/ReactHooks.tsx"), // → /docs/react/hooks ✅ fixed
  ]),
] satisfies RouteConfig;
