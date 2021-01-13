let inlineSkate = {
    wheels: 4,
    liner: 1,
    soulPlates: 2
}

const roces = {
    __proto__: inlineSkate,
};

roces.soulPlates = 1;

console.log(roces.soulPlates);
console.log(inlineSkate.soulPlates);

const them = {
    __proto__: roces,
}

console.log(them.soulPlates);