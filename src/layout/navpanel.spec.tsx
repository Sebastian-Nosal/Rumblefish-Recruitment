import { render, screen, fireEvent } from "@testing-library/react";
import { AppContext } from "../App"; 
import NavPanel from "./navpanel"; 


let setModeMock:jest.Mock;

describe("NavPanel Component", () => {

  beforeEach(() => {
    setModeMock  = jest.fn();

    const contextValue = {
      movies: [
        { id: '123', title: "Movie 1", imageURL: "http://example.com/image1.jpg", rating: 0, summary:"" },
        { id: "321", title: "Movie 2", imageURL: "http://example.com/image2.jpg", rating: 0, summary:"" },
      ],                 
      handler: () => {},
      loading: false,
      error: null,
      setMode: setModeMock, 
      mode: false
    };

    render(
      <AppContext.Provider value={contextValue}>
        <NavPanel />
      </AppContext.Provider>
    );
  });

  test("renders NavPanel with correct movie count", () => {
    expect(screen.getAllByText(/Recomendations: 2/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Recomendations: 2/i)[1]).toBeInTheDocument();
  });

  test("renders movie images", () => {
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute("src", "http://example.com/image1.jpg");
    expect(images[1]).toHaveAttribute("src", "http://example.com/image2.jpg");
  });

  test("toggles mode on button click", () => {
    const modeButton = screen.getAllByRole("button");
    fireEvent.click(modeButton[1]);
    expect(setModeMock).toHaveBeenCalledTimes(1);
  });
});