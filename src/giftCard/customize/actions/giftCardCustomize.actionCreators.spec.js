import * as actionCreators from "./giftCardCustomize.actionCreators";

describe("Action Creators test", function() {
    it("should have an action that updates the amount", function() {
        const amount = 15;

        expect(actionCreators.updateAmount(amount)).toEqual({
            type: "UPDATE_AMOUNT",
            amount
        });
    });

    it("should have an action that updates the design", function() {
        const [code, imgSrc] = [1, "example.png"];

        expect(actionCreators.updateDesign(code, imgSrc)).toEqual({
            type: "UPDATE_DESIGN",
            design: {
                code,
                imgSrc
            }
        });
    });
});
