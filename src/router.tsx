import { createRouter, Link } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";


// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    context: {
      queryClient: new QueryClient(),
    },
    defaultPreloadStaleTime: 0,
    defaultPreload: "intent",
    defaultNotFoundComponent: () => (
      <div>
        <h1>Not Found</h1>
        <Link to="/">Go back to home</Link>
      </div>
    ),
  });

  return router;
};
