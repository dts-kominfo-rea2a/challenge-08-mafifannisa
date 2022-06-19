const { fireEvent } = require("@testing-library/dom");

const { JSDOM } = require("jsdom");
const fs = require("fs");

// Read index.html using jsdom
const index = fs.readFileSync("index.html", "utf-8");
// use JSDOM to parse index
const dom = new JSDOM(index, {
  runScripts: "dangerously",
});
const { window } = dom;
const { document } = window;

describe("Checking the JS Function", () => {
  it("should have a function called fnClickHandler", async () => {
    const fnClickHandler = window.fnClickHandler;

    expect(typeof fnClickHandler).toBe("function");
  });

  it("renders new li when button is clicked", async () => {
    const btnAddData = document.getElementById("todo-submit");

    fireEvent.click(btnAddData);

    let todo = document.querySelectorAll("#todo-output li");
    expect(todo.length).toBe(1);
  });

  it("renders new li when press enter on input", async () => {
    const input = document.getElementById("todo-input");

    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });

    let todo = document.querySelectorAll("#todo-output li");
    expect(todo.length).toBe(2);
  });
});
