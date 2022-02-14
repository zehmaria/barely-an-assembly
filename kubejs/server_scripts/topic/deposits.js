onEvent('item.tags', event => {
    ['coal', 'iron', 'gold', 'copper', 'lead', 'uranium'].forEach(X => event.add('forge:ores/' + X, 'factoriores:' + X + '_ore'));
});

onEvent('block.tags', event => {
    event.add('create:non_movable', 'minecraft:obsidian');
});

onEvent('recipes', event => {
    const __e = 'mekanism:basic_induction_cell';
    const __f = 'minecraft:furnace';
    const __m = 'create:cogwheel';
    const __d = 'immersiveengineering:drillhead_iron';
    const _sd = 'immersiveengineering:drillhead_steel';
    addShaped(event, [
        ['factoriores:burner_miner',     [[tPi, Cc1, tPi], [tPi, __f, tPi], [air, __d, air]]],
        ['factoriores:mechanical_miner', [[tPc, Cc3, tPc], [tPc, __m, tPc], [air, __d, air]]],
        ['factoriores:electrical_miner', [[tPs, Kca, tPs], [tPs, Ic2, tPs], [air, _sd, air]]]
    ]);

    /*
    [
        ['minecraft:grass_block', 'minecraft:coal'],
        ['minecraft:stone', 'create:crushed_iron_ore'],
        ['minecraft:sand', 'create:crushed_copper_ore'],
        ['minecraft:podzol', 'create:crushed_lead_ore'],
        ['minecraft:gravel', 'create:crushed_gold_ore'],
        ['minecraft:obsidian', 'create:crushed_uranium_ore']
    ].forEach(X => {
        event.recipes.createautomated.extracting(X[0], X[1]).drillDamage(1).ore(1, 3).requiredProgressSeconds(64, 30);
    });//*/
});
