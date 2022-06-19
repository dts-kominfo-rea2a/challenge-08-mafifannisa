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

describe("Checking the DOM", () => {
  it("should have a div container with id app", async () => {
    const app = document.getElementById("app");

    expect(app).toBeInstanceOf(window.Element);
    expect(app.tagName).toBe("DIV");
    expect(app.id).toBe("app");
  });

  it("should have a title with id equals todo-title", async () => {
    const title = document.getElementById("todo-title");

    expect(title).toBeInstanceOf(window.Element);
    expect(title.id).toBe("todo-title");
  });

  it("should have a subtitle with id equals todo-subtitle", async () => {
    const subtitle = document.getElementById("todo-subtitle");

    expect(subtitle).toBeInstanceOf(window.Element);
    expect(subtitle.id).toBe("todo-subtitle");
  });

  it("should have an ul with id equals todo-output", async () => {
    const txtOutput = document.getElementById("todo-output");

    expect(txtOutput).toBeInstanceOf(window.Element);
    expect(txtOutput.tagName).toBe("UL");
    expect(txtOutput.id).toBe("todo-output");
  });

  it("should have an input with id equals todo-input", async () => {
    const txtInput = document.getElementById("todo-input");

    expect(txtInput).toBeInstanceOf(window.Element);
    expect(txtInput.tagName).toBe("INPUT");
    expect(txtInput.id).toBe("todo-input");
  });

  it("should have a button with id equals todo-submit", async () => {
    const btnAddData = document.getElementById("todo-submit");

    expect(btnAddData).toBeInstanceOf(window.Element);
    expect(btnAddData.tagName).toBe("BUTTON");
    expect(btnAddData.id).toBe("todo-submit");
  });
});
