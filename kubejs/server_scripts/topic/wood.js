onEvent('item.tags', event => {
    const wood = { minecraft : ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak'] };
    Object.keys(wood).forEach(X => {
        wood[X].forEach(Y => event.add('minecraft:stripped_logs', [X + ':stripped_' + Y + '_log', X + ':stripped_' + Y + '_wood']));
    });
});

onEvent('recipes', event => {
    const cuts = ['_log', '_wood'];
    addShaped(event, [
        ['pickletweaks:wooden_paxel',  [[log, log, log], [air, stk, air], [air, stk, air]]],
        ['pickletweaks:iron_paxel',    [[tPi, tPi, tPi], [air, 'pickletweaks:wooden_paxel', air]]],
    ]);

    event.remove({ type: 'mekanism:sawing' });
    // WOOD CUTTING
    function cut6(X, Y) {
        event.remove({ output: Y });
        event.custom({
            type: 'mekanism:sawing', input: { ingredient: Ingredient.of(X) }, mainOutput: Item.of(Y, 6)
        });
    }
    function cut(X, Y, Z) {
        if (Z) {
            event.remove({ output: Z });
            event.custom({
                type: 'mekanism:sawing', secondaryOutput: { item: 'mekanism:sawdust' }, secondaryChance:0.5,
                input: { ingredient: Ingredient.of(X) }, mainOutput: Item.of(Z, 1)
            });
            cut6(Z, Y);
        } else cut6(X, Y);
        event.custom({
            type:'immersiveengineering:sawmill', energy: 1600, input: Ingredient.of(X), result: Item.of(Y, 8), stripped: Item.of(Z),
            secondaries:[{ output:{ tag: 'forge:dusts/wood' }, stripping: true }],
        });
        if (Z) {
            event.custom({ type: 'create:cutting', ingredients: [Ingredient.of(X)],
                           results: [{ item: Z }, { item: 'mekanism:sawdust' }], processingTime: 100 });
        }
        event.custom({ type: 'create:cutting', ingredients: [Ingredient.of(Z || X)], results: [Item.of(Y, 8)], processingTime: 200 });
    }

    function cutWood(X) {
        X.forEach(Y => {
            Y[1].forEach(Z => {
                const slog  = Y[0] + 'stripped_' + Z + Y[2][0]; cut(Y[0] + Z + Y[2][0], Y[0] + Z + '_planks', slog);
                if (Y[2][1]) {
                    const swood = Y[0] + 'stripped_' + Z + Y[2][1]; cut(Y[0] + Z + Y[2][1], Y[0] + Z + '_planks', swood);
                    addShapeless(event, [['3x ' + swood, [slog, slog, slog, slog]]]);
                }
            });
        });
    }

    cutWood([
        ['minecraft:',        ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak'], ['_log']],
        ['myrtrees:',         ['rubberwood'],                                             ['_log']],
    ]);

    cut('#minecraft:planks', 'minecraft:stick', false);
    event.shapeless('minecraft:stick', ['#minecraft:saplings']);
    cut('#forge:treated_wood', 'immersiveengineering:stick_treated', false);
});
