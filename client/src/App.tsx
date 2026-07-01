import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import FullHome from "./pages/FullHome";
import Greetings from "./pages/Greetings";
import BoardPage from "./pages/BoardPage";
import BoardDetailPage from "./pages/BoardDetailPage";
import EventDetailPage from "./pages/EventDetailPage";
import Sitemap from "./pages/Sitemap";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/full"} component={FullHome} />
      <Route path={"/intro/greetings"} component={Greetings} />
      <Route path={"/sitemap"} component={Sitemap} />
      <Route path={"/login"} component={Login} />
      <Route path={"/signup"} component={Signup} />
      <Route path={"/board/events/:eventId"} component={EventDetailPage} />
      <Route path={"/board/:boardId/:postId"} component={BoardDetailPage} />
      <Route path={"/board/:boardId"} component={BoardPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
