const { defaultConfigurations } = require("./defaultConfigurations")

function runAlgo({ configs, data, entityRules, generationRules }) {
    if (!data) throw new Error("Must have data to run");
    if (!configs) console.log("Running with default configurations");

    const configurations = { ...defaultConfigurations, ...configs };

    const {genIndex, lastGenIndex} = configurations

    while (genIndex < lastGenIndex) {
        activeEntityRules()
        activeGenRules()
        calcRecords()
        evolve()
    }
}

