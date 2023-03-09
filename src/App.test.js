import React from "react";
import "@testing-library/jest-dom";
import { render, act } from "@testing-library/react";
import store from "./app/store";
import { Provider } from "react-redux";

// COMPONENTS
import App from "./App";
import Header from "./components/Header";
import CryptosList from "./components/CryptosList";
import CardsView from "./components/CardsView";
import ListView from "./components/ListView";
/////////////////////////////////////////////////////

test("renders App component", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const appComponent = getByTestId("app");
  expect(appComponent).toBeInTheDocument();
});

test("calls useEffect function to get the list of cryptos when App component is rendered", () => {
  const useEffect = jest.spyOn(React, "useEffect");
  act(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  expect(useEffect).toHaveBeenCalled();
});

// //////////////////////////////////////////////////////////////////

test("renders Header component", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  const headerComponent = getByTestId("header");
  expect(headerComponent).toBeInTheDocument();
});

test("renders CryptosList component", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <CryptosList />
    </Provider>
  );
  const cryptosListComponent = getByTestId("cryptosList");
  expect(cryptosListComponent).toBeInTheDocument();
});

test("renders CardsView component", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <CardsView />
    </Provider>
  );
  const cardsViewComponent = getByTestId("cardsView");
  expect(cardsViewComponent).toBeInTheDocument();
});

test("renders ListView component", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <ListView />
    </Provider>
  );
  const listViewComponent = getByTestId("listView");
  expect(listViewComponent).toBeInTheDocument();
});

/////////////////////////////////////////////////////////////////////