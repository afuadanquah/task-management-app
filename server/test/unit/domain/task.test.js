import { Task } from "../../../src/domain/task";

describe("The task object should", () => {
  it("initialise its properties when created", () => {
    const task = new Task("New task title", "New task description", false);

    expect(task.title).toEqual("New task title");
    expect(task.description).toEqual("New task description");
    expect(task.completed).toEqual(false);
  })
})