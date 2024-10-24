import React from "react";
import { render, screen } from "@testing-library/react";
import { AppContext } from "../App"; 
import MainPanel from "./mainpanel"; 

jest.mock("../presentation/loading", () => jest.fn(() => <div>Loading...</div>));
jest.mock("../container/moviesContainer", () => jest.fn(() => <div>MoviesContainer</div>));
jest.mock("../container/errorContainer", () => jest.fn(() => <div>ErrorContainer</div>));

describe("MainPanel Component", () => {
  const renderWithContext = (loadingState:boolean) => {
    const contextValue = {
      movies: [
        { id: '123', title: "Movie 1", imageURL: "http://example.com/image1.jpg", rating: 0, summary:"" },
        { id: "321", title: "Movie 2", imageURL: "http://example.com/image2.jpg", rating: 0, summary:"" },
      ],                 
      handler: () => {},
      loading: loadingState,
      error: null,
      setMode: ()=>{}, 
      mode: false
    };

    return render(
      <AppContext.Provider value={contextValue}>
        <MainPanel />
      </AppContext.Provider>
    );
  };

  it("renders Loading component when loading is true", () => {
    renderWithContext(true);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.queryByText("MoviesContainer")).not.toBeInTheDocument();
    expect(screen.getByText("ErrorContainer")).toBeInTheDocument();
  });

  it("renders MoviesContainer when loading is false", () => {
    renderWithContext(false); 

    expect(screen.getByText("MoviesContainer")).toBeInTheDocument();
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.getByText("ErrorContainer")).toBeInTheDocument();
  });
});
