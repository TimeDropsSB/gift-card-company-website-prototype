const isProd = (process.env.NODE_ENV === "production");

module.exports = function(env) {
    const configName = isProd ? "prod" : "dev";

    return require("./webpack." + configName + ".config")();
};
