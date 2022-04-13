onEvent('recipes', event => {
    const _rp = 'immersiveengineering:wirecoil_structure_rope';
    const _rl = 'myrtrees:latex';

    addShapeless(event, [
        ['minecraft:redstone',           ['#forge:dusts/copper', '#forge:dyes/red']],
        ['minecraft:shears',             [tPi, Mlt, tPi]]
    ]);

    rm2(event, 'minecraft:', ['sugar', 'paper'], ral);
    event.remove({ id: 'immersiveengineering:crafting/paper_from_sawdust' });

    addShaped(event, [
        ['4x minecraft:slime_ball',     [[_rl, 'minecraft:green_dye'], ['mekanism:sawdust', _AA]]],
        ['8x minecraft:slime_ball',     [[_rl, 'minecraft:green_dye'], ['mekanism:bio_fuel', _AA]]],
        ['16x minecraft:slime_ball',    [[_rl, 'minecraft:green_dye'], ['immersivepetroleum:bitumen', _AA]]],
        ['minecraft:crafting_table',    [[log, log], [log, log]]],
        ['minecraft:flint_and_steel',   [[flt, tPi]]],

        ['minecraft:redstone_torch',    [[_I4], [stk]]],
        ['minecraft:lever',             [[stk], [_I2]]],

        ['2x minecraft:tripwire_hook',  [[_I2], [stk], [plk]]],

        ['minecraft:iron_bars',         [[tRi, tRi, tRi], [tRi, tRi, tRi]]],
        ['minecraft:minecart',          [[tPi, air, tPi], [_I2, tPi, _I2]]],

        ['6x minecraft:activator_rail', [[tRi, air, tRi], [tRi, 'moreminecarts:wooden_rail', tRi], [tRi, _K2, tRi]]],
        ['6x minecraft:detector_rail',  [[tRi, Msp, tRi], [tRi, 'moreminecarts:wooden_rail', tRi], [tRi, _K2, tRi]]],
        ['6x minecraft:powered_rail',   [[tRi, air, tRi], [tRe, 'moreminecarts:wooden_rail', tRe], [tRi, _K2, tRi]]],
        ['16x minecraft:rail',          [[tRi, air, tRi], [tRi, 'moreminecarts:wooden_rail', tRi], [tRi, air, tRi]]],

        ['minecraft:saddle',            [[Mlt, Mlt, Mlt], [Mlt, _rp, Mlt], [_rp, air, _rp]]],

        ['minecraft:daylight_detector', [[gla, gla, gla], [tPe, _K3, tPe], [tSw, tSw, tSw]]],
        ['minecraft:note_block',        [[plk, plk, plk], [plk, _K2, plk], [plk, plk, plk]]],
        ['minecraft:item_frame',        [[Its, Its, Its], [Its, Mlt, Its], [Its, Its, Its]]],
        ['minecraft:jukebox',           [[plk, plk, plk], [plk, _K3, plk], [plk, plk, plk]]],
        ['minecraft:observer',          [[cbl, cbl, cbl], [Mrt, _K2, 'diregoo:focust1'], [cbl, cbl, cbl]]],
        ['minecraft:comparator',        [[air, Mrt, air], [Mrt, _K2, Mrt], [Mss, Mss, Mss]]],
        ['minecraft:repeater',          [[air, air, air], [Mrt, _K1, Mrt], [Mss, Mss, Mss]]],
        ['minecraft:clock',             [[air, tPe, air], [tPe, _K1, tPe], [air, tPe, air]]],
        ['minecraft:cauldron',          [[tPi, air, tPi], [tPi, _AA, tPi], [tPi, tPi, tPi]]],

        ['minecraft:iron_trapdoor',              [[tIi, tIi, tIi], [tIi, _I2, tIi]]],
        ['minecraft:iron_door',                  [[tIi, tIi], [tIi, _I2], [tIi, tIi]]],

        ['minecraft:stone_button',               [[Iwc, 'minecraft:stone_pressure_plate']]],
    ]);

    const pp = { stone: 'smooth_stone', light_weighted: 'gold_ingot', heavy_weighted: 'iron_ingot' };
    Object.keys(pp).forEach(X => {
        addShaped(event, [['minecraft:' + X + '_pressure_plate', [[Ihm, 'minecraft:' + pp[X], _I2]]]]);
    });

    event.remove({ output: 'minecraft:bread' });
    event.smelting('minecraft:bread', 'create:dough');

    event.remove({ output: 'minecraft:dirt' });
    event.remove({ output: 'minecraft:sand' });
    event.remove({ output: 'minecraft:stone' });
    event.remove({ output: 'minecraft:podzol' });
    event.remove({ output: 'minecraft:obsidian' });
    event.remove({ output: 'minecraft:sandstone' });
    event.remove({ output: 'minecraft:smooth_stone' });
    event.smelting('minecraft:smooth_stone', 'minecraft:cobblestone');
    event.replaceInput({}, 'minecraft:stone', 'minecraft:smooth_stone');
    event.replaceInput({}, 'minecraft:podzol', 'minecraft:coarse_dirt');
    event.replaceInput({}, 'minecraft:dirt', 'minecraft:coarse_dirt');
    event.replaceInput({}, 'minecraft:obsidian', 'mekanism:enriched_refined_obsidian');
});
