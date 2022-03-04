onEvent('item.tags', event => {
    ['iron', 'gold', 'copper', 'osmium', 'silver', 'tin', 'lead', 'aluminum', 'uranium', 'nickel', 'zinc', 'platinum'].forEach(A => event.add('create:crushed_ores/' + A, 'create:crushed_' + A + '_ore'));
    event.add('create:crushed_ores/brass', 'create:crushed_brass');
});

onEvent('block.tags', event => {
    event.add('create:non_movable', ['minecraft:dirt', 'minecraft:grass_block', 'minecraft:sand', 'minecraft:podzol', 'minecraft:stone', 'minecraft:obsidian', 'minecraft:sandstone', 'kubejs:elevator_cable', 'immersiveengineering:storage_steel', 'mekanism:teleporter', 'mekanism:quantum_entangloporter']);
});

onEvent('recipes', event => {
    event.remove({ type: 'create:splashing' });
    event.remove({ type: 'create:emptying' });
    event.remove({ type: 'create:filling' });
    event.remove({ type: 'create:mixing' });
    event.remove({ type: 'create:potions' });
    event.remove({ id: 'create:potions'});

    const Cbs = 'create:brass_sheet';
    const Cet = 'create:electron_tube';

    addShaped(event, [
        ['create:andesite_casing',      [[Caa, Caa, Caa], [Caa, log, Caa], [Caa, Caa, Caa]]],
        ['create:andesite_alloy',       [['#create:crushed_ores/iron', tTb], [tTb, '#create:crushed_ores/iron']]],

        ['create:cogwheel',             [[plk, plk, plk], [plk, Csh, plk], [plk, plk, plk]]],
        ['create:large_cogwheel',       [[plk, log, plk], [log, Csh, log], [plk, log, plk]]],
        ['create:millstone',            [[air, log, air], [Caa, Caa, Caa], [tTb, tTb, tTb]]],

        ['create:controller_rail',      [[tRg, air, tRg], [tRg, stk, tRg], [tRg, Cet, tRg]]],

        ['create:mechanical_press',     [[tIi, Cpe, tIi], [Caa, Cc1, Caa], [Caa, Cpe, Caa]]],
        ['create:mechanical_saw',       [[air, tPi, air], [tPi, Caa, tPi], [air, Cc1, air]]],

        ['create:hand_crank',           [[air, Caa, air], [log, log, log], [air, air, Caa]]],

        //['createchunkloading:chunk_loader', [[Khd, tPu, Khd], [tPu, 'immersiveengineering:coil_mv', tPu], [Khd, tPu, Khd]]],

        ['create:peculiar_bell',        [[tPe], ['immersiveengineering:chute_copper'], [tRe]]],

        ['steampowered:cast_iron_steam_engine',  [[tPi, Cfp, tIi], [tPi, Cfp, pis], [tPi, Cfp, tIi]]],
        ['steampowered:cast_iron_flywheel',      [[tPi, Cc1, tPi], [tRi, Ccw, tRi], [tPi, Cc1, tPi]]],
    ]);

    // CREATE ADDITION
    function addCMC(X, Y, Z) {event.remove({output:X});event.custom({type:'create:mechanical_crafting',result:{item:X},pattern:Y,key:Z});}

    event.remove({ id: 'createaddition:mechanical_crafting/overcharged_hammer' });
    event.replaceInput({}, 'createaddition:heater', 'immersiveengineering:furnace_heater');
    event.replaceInput({ type: 'create:mechanical_crafting' }, 'createaddition:copper_spool', 'immersiveengineering:wirecoil_copper');

    var __t = {
        A: { item: 'create:andesite_alloy' }, B: { tag: 'forge:plates/electrum' }, C: { item: 'immersiveengineering:wirecoil_copper' },
        D: { item: 'mekanism:steel_casing' }, E: { item: 'createaddition:capacitor' }
    };
    addCMC('createaddition:electric_motor', ['  A  ', ' BCB ', 'BCDCB', ' BCB ', '  E  '], __t);

    __t.B.tag = 'forge:plates/iron';
    __t.D.item = 'create:brass_casing';
    addCMC('createaddition:alternator', ['  A  ', 'BCCCB', 'BCDCB', 'BCECB'], __t);

    addCMC('create:crushing_wheel', [' AAA ', 'AABAA', 'ABCBA', 'AABAA', ' AAA '], {
        A: { item: 'create:andesite_alloy' }, B: { tag: 'minecraft:planks' },
        C: { item: 'minecraft:smooth_stone' }
    });

    addCMC('create:extendo_grip', [' A ', ' B ', 'CCC', 'CCC', ' D '], {
        A: { tag: 'forge:ingots/electrum' }, B: { item: 'create:precision_mechanism' },
        C: { tag: 'forge:rods/wooden' }, D: { item: 'create:brass_hand' }
    });

    addCMC('steampowered:bronze_steam_engine', ['ABC', 'ABD', 'ABC'], {
        A: { tag: 'forge:plates/electrum' }, B: { item: 'create:fluid_pipe' },
        C: { tag: 'forge:ingots/electrum' }, D: { item: 'create:mechanical_piston' }
    });
    addCMC('steampowered:steel_steam_engine', ['ABC', 'ABD', 'ABC'], {
        A: { tag: 'forge:plates/steel' }, B: { item: 'create:fluid_pipe' },
        C: { tag: 'forge:ingots/steel' }, D: { item: 'create:mechanical_piston' }
    });
    addCMC('steampowered:bronze_flywheel', [' AAA ', 'ABCBA', 'ACDCA', 'ABCBA', ' AAA '], {
        A: { tag: 'forge:plates/electrum' }, B: { item: 'create:cogwheel' },
        C: { tag: 'minecraft:planks' }, D: { item: 'create:shaft' }
    });
    addCMC('steampowered:steel_flywheel', [' AAA ', 'ABCBA', 'ACDCA', 'ABCBA', ' AAA '], {
        A: { tag: 'forge:plates/steel' }, B: { item: 'create:cogwheel' },
        C: { tag: 'minecraft:planks' }, D: { item: 'create:shaft' }
    });

    // PRECISION MECHANISM
    event.remove({ output: 'create:precision_mechanism' });
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: { tag: 'forge:plates/gold' },
        transitionalItem: { item: 'create:incomplete_precision_mechanism' },
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [{ item: 'create:incomplete_precision_mechanism' }, { item: 'create:cogwheel' }],
                results: [{ item: 'create:incomplete_precision_mechanism' }]
            },
            {
                type: 'create:deploying',
                ingredients: [{ item: 'create:incomplete_precision_mechanism' }, { item: 'create:large_cogwheel' }],
                results: [{ item: 'create:incomplete_precision_mechanism' }]
            },
            {
                type: 'create:deploying',
                ingredients: [{ item: 'create:incomplete_precision_mechanism' }, { item: 'myrtrees:latex' }],
                results: [{ item: 'create:incomplete_precision_mechanism' }]
            }
        ],
        results: [{ item: 'create:precision_mechanism' }],
        'loops': 5
    });

    // FILLING
    /*
      event.remove({ output: 'create:dough' });
      event.custom({
      type: 'create:filling',
      ingredients: [{ tag: 'create:wheat_flour' }, { fluid: 'minecraft:water', nbt: {}, amount: 100 }],
      results: [{ item: 'create:dough' }]
      });*/
    cFilling(event, [['create:dough', 'create:wheat_flour', 'minecraft:water', 100]]);

    // REMOVE BY ID
    ['create:compacting/honey', 'create:compacting/andesite_from_flint', 'createaddition:compacting/seed_oil'].forEach(A => {
        event.remove({ id: A });
    });

    event.remove({ type: 'createaddition:crude_burning' });

    event.remove({ input: 'create:dough' });
    event.remove({ id: '/create:smelting/glass/'});
    event.remove({ id: 'create:crafting/kinetics/copper_valve_handle_from_others'});
    event.remove({ id: 'create:crafting/kinetics/shaft'});
});
