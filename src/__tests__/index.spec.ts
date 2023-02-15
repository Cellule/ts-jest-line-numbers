import { someFunction } from "..";
import * as tsNode from "ts-node"
tsNode.register({ transpileOnly: true })

describe("someFunction", () => {
  it("should return expected value", async () => {
    const value = await someFunction()
    //

    //

    //

    //
    expect(value).toBe(2);
  });
});
