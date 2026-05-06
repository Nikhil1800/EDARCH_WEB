import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { About } from "@/pages/About";
import { Appeal } from "@/pages/Appeal";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { Overview } from "@/pages/Overview";
import { Recognitions } from "@/pages/Recognitions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useRouterState,
} from "@tanstack/react-router";

export { Link, useRouterState };

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const overviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/overview",
  component: Overview,
});
const recognitionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/recognitions",
  component: Recognitions,
});
const appealRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/appeal",
  component: Appeal,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  overviewRoute,
  recognitionsRoute,
  appealRoute,
  contactRoute,
]);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
