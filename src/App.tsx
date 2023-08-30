import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";
import ContactsPage from "./pages/ContactsPage";
import DashBoardPage from "./pages/DashBoardPage";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ContactForm from "./components/ContactForm";
import ContactView from "./components/ContactView";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <div className="App w-screen">
        <Router>
          <Header />
          <div className="grid lg:grid-cols-5">
            <aside className="lg:col-span-1 lg:border-r border-b ">
              <SideBar />
            </aside>
            <main className="lg:col-span-4 mt-2">
              <Routes>
                <Route path="/" element={<ContactsPage />} />
                <Route path="/contact/create" element={<ContactForm />} />
                <Route
                  path="/contact/view/:contactId"
                  element={<ContactView />}
                />
                <Route
                  path="/contact/edit/:contactId"
                  element={<ContactForm />}
                />
                <Route path="/dashboard" element={<DashBoardPage />} />
              </Routes>
            </main>
          </div>
        </Router>
      </div>
    </Provider>
    </QueryClientProvider>
  );
}

export default App;
