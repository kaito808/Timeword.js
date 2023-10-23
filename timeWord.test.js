const timeWord = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe("function");
    expect(timeWord("00:00")).to.equal("midnight");
    expect(timeWord("00:12")).to.equal("twelve twelve am");
    expect(timeWord("01:00")).to.equal("one o’clock am");
    expect(timeWord("06:01")).to.equal("six oh one am");
    expect(timeWord("06:10")).to.equal("six ten am");
    expect(timeWord("06:18")).to.equal("six eighteen am");
    expect(timeWord("06:30")).to.equal("six thirty am");
    expect(timeWord("10:34")).to.equal("ten thirty four am");
    expect(timeWord("12:00")).to.equal("noon");
    expect(timeWord("12:09")).to.equal("twelve oh nine pm");
    expect(timeWord("23:23")).to.equal("eleven twenty three pm");
  });
});
