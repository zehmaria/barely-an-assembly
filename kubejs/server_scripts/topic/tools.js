onEvent('item.tags', event => {
    event.add('barely:mining', ['immersiveengineering:drill', 'mekanism:meka_tool', 'minecraft:netherite_pickaxe', 'minecraft:diamond_pickaxe', 'minecraft:iron_pickaxe', 'minecraft:golden_pickaxe', 'minecraft:stone_pickaxe', 'minecraft:wooden_pickaxe', 'immersiveengineering:pickaxe_steel']);
});

onEvent('recipes', event => {
    const cuts = ['_log', '_wood'];
    addShaped(event, [
        ['pickletweaks:wooden_paxel',  [[log, log, log], [air, stk, air], [air, stk, air]]],
        ['pickletweaks:iron_paxel',    [[tPi, tPi, tPi], [air, 'pickletweaks:wooden_paxel', air]]],
    ]);
    addShapeless(event, [
        ['pickletweaks:wooden_paxel',  ['pickletweaks:wooden_paxel', log, log, log]],
        ['pickletweaks:iron_paxel',    ['pickletweaks:iron_paxel', tIi, tIi, tIi]],
        ['pickletweaks:diamond_paxel', ['pickletweaks:diamond_paxel', tGd, tGd, tGd]],
    ]);
});
