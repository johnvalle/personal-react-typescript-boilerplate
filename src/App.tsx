import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import * as Pages from "./pages";

function App() {
  /**
   * A new query client is set and provided to
   * the QueryClientProvider to pass data to the
   * app using React Query.
   */
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Pages.Dashboard} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
