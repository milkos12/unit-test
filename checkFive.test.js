

const checkFive = require('./checkFive.js');
test("Cosider diferents routers", function() {
    

    // use 1
    const ONEfromCheckFive = checkFive(1)
    expect(ONEfromCheckFive).toBe("1 is less than 5.")

    //use 2
    const TWOfromCheckFive = checkFive(2)
    expect(TWOfromCheckFive).toBe("2 is less than 5.")

    //use 3
    const THREEfromCheckFive = checkFive(3)
    expect(THREEfromCheckFive).toBe("3 is less than 5.")

    //use 4
    const FOURfromCheckFive = checkFive(4)
    expect(FOURfromCheckFive).toBe("4 is less than 5.")

})

test("Consider manage errors", function(){
    

    //Pass string
    const ONEfromCheckFive = checkFive('one test');
    expect(ONEfromCheckFive).toBe("one test is greater than 5.");

    //Pass array
    const TWOfromCheckFive = checkFive([1,2,3]);
    expect(TWOfromCheckFive).toBe("1,2,3 is greater than 5.");

})

test("Boundering", function(){
    

    //pass Maximum 5
    const ONEfromCheckFive = checkFive(5);
    expect(ONEfromCheckFive).toBe("5 is equal to 5.");

    //pass -1
    const TWOfromCheckFive = checkFive(-1);
    expect(TWOfromCheckFive).toBe("-1 is less than 5.");

})