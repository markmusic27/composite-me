const replaceX = (equation: String, xRep: String) => {
    let finalString: String = "";

    for (let i = 0; i < equation.length; i++){

        if (equation[i] === "x") {
            finalString = `${finalString}${xRep}`;
        } else {
            finalString = `${finalString}${equation[i]}`;
        }
    }

    return finalString;
}

const compositeSteps = (equation: String) => {
    let numOfEq = (equation.length -1 ) / 3;
    let allComposed: String[] = [];
    let composedStepOrder: String[] = [];

    for (let i = 0; i < numOfEq; i++){
        allComposed.push(`${equation[i * 2]}(x)`);
    }

    for (let i = numOfEq; i > 0; i--){
        composedStepOrder.push(allComposed[i -1]);
    }


    // Printing results
    console.log("\n\n\n");
    console.log(`Original Composite Function: ${equation}`);
    console.log("\n\n");
    console.log(`Number of composed functions: ${numOfEq}`);
    console.log("\n\n");
    console.log(`Individual Functions: ${allComposed}`);
    console.log("\n\n");
    console.log("STEPS TO SOLVE:");

    let current: String = composedStepOrder[0];

    for(let i = 0; i < numOfEq; i++){
        
        console.log("\n");
        console.log(`   Step ${i + 1}) Solve ${current}`);

        if (i + 1 != numOfEq){
            current = replaceX(composedStepOrder[i+1], current);
        }

    }

    console.log("\n\n\n");

}

compositeSteps("h(g(f(j(x))))");