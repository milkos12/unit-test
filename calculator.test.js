const { calculateFinalPrice, calculateDiscount } = require('./calculator')

//Mock for isolation becouse, calculateDiscount use other functions
jest.mock('./calculator', () => ({

    ...jest.requireActual('./calculator'),
    calculateDiscount: jest.fn(),

}))

describe('Test for Calculator', () => {


    test('use distincts values and include the isolation with mock', () => {

        //Mock use
        calculateDiscount.mockReturnValue(10);
        expect(calculateFinalPrice(100, 10)).toBe(90);

        calculateDiscount.mockReturnValue(40);
        expect(calculateFinalPrice(200, 20)).toBe(160);

        //use decimal numbers
        calculateDiscount.mockReturnValue(89);
        expect(calculateFinalPrice(200, 44.5)).toBe(111);
    })

    test('invalidi entries calculator',()=> {

        
        expect(calculateFinalPrice("12","70")).toBe("entries no valid")
        expect(calculateFinalPrice(12,"70")).toBe("entries no valid")
        expect(calculateFinalPrice("12",70)).toBe("entries no valid")

    })

});