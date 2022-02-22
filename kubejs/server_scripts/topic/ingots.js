onEvent('item.tags', event => {
    function unify(A, B) { event.removeAll(A); event.add(A, B); }

    ['copper', 'lead', 'uranium', 'electrum', 'steel', 'iron', 'gold'].forEach(A => {
        unify('forge:dusts/' + A, 'immersiveengineering:dust_' + A);
        unify('forge:plates/' + A, 'immersiveengineering:plate_' + A);
    });

    ['copper', 'lead', 'uranium', 'electrum', 'gold'].forEach(A => unify('forge:rods/' + A, 'immersiveposts:stick_' + A));
    ['iron', 'steel'].forEach(A => unify('forge:rods/' + A, 'immersiveengineering:stick_' + A));

    ['copper', 'lead', 'uranium', 'electrum', 'steel'].forEach(A => unify('forge:ingots/' + A, 'immersiveengineering:ingot_' + A));
    ['iron', 'gold'].forEach(A => unify('forge:ingots/' + A, 'minecraft:' + A + '_ingot'));

    unify('forge:dusts/wood', 'mekanism:sawdust');
    unify('forge:dusts/sulfur', 'immersiveengineering:dust_sulfur');
});

onEvent('recipes', event => {
    // EMEND IT
    function crush(X, Y) {
        event.remove({ output: Y });
        event.custom({ type: 'create:crushing', processingTime: 350, ingredients: [Item.of(X)], results: [Item.of(Y), Item.of(Y, 2).withChance(0.3)] });
        event.custom({ type: 'create:milling', processingTime: 400, ingredients: [Item.of(X)], results: [Item.of(Y)] });
        event.custom({ type:'immersiveengineering:crusher', secondaries:[], input:Item.of(X), result:Item.of(Y, 2), energy:6000});
    }
    function dust(X, Y) {
        event.remove({ output: Y });
        event.custom({ type:'immersiveengineering:crusher', secondaries:[], input:Item.of(X), result:Item.of(Y, 1), energy:6000});
        event.custom({ type: 'create:milling', processingTime: 400, ingredients: [Item.of(X)], results: [Item.of(Y)] });
    }
    function smelt(X, Y) {
        event.remove({ output: Y });
        event.smelting(Item.of(Y), Item.of(X));
        event.custom({ type: 'immersiveengineering:arc_furnace', additives:[],
                       results: [Item.of(Y)], input: Item.of(X), slag: { tag: 'forge:slag' }, time: 200, energy: 102400 });
    }
    function press(X, Y, Z) {
        event.remove({ output: Y });
        event.custom({ type: 'immersiveengineering:metal_press', mold: Item.of(Z), input: Item.of(X), result: Item.of(Y), energy: 2400 });
    }
    function cpress(X, Y) { event.custom({ type: 'create:pressing', ingredients: [Item.of(X)], results: [Item.of(Y)] }); }

    function mek(X, Y) {
        event.custom({
            type: 'mekanism:dissolution', gasInput: { amount: 1, gas: 'mekanism:sulfuric_acid' },
            itemInput: { ingredient: { tag: 'create:crushed_ores/' + X } }, output: { slurry: Y + ':dirty_' + X, amount: 1000, chemicalType: 'slurry' }
        });
        event.custom({
            type: 'mekanism:washing', fluidInput: { amount: 5, tag: 'minecraft:water' },
            slurryInput:{ amount: 1, slurry: Y + ':dirty_' + X }, output: { slurry: Y + ':clean_' + X, amount: 1 }
        });
        event.custom({
            type: 'mekanism:crystallizing', chemicalType: 'slurry',
            input: { amount: 200, slurry: Y + ':clean_' + X }, output: Item.of('#mekanism:crystals/' + X)
        });
        event.custom({
            type: 'mekanism:injecting', gasInput: { amount: 1, gas: 'mekanism:hydrogen_chloride' },
            itemInput: { ingredient: { tag: 'create:crushed_ores/' + X } }, output: Item.of('#mekanism:shards/' + X, 4)
        });
        event.custom({
            type: 'mekanism:injecting', gasInput: { amount: 1, gas: 'mekanism:hydrogen_chloride' },
            itemInput: { ingredient: { tag: 'mekanism:crystals/' + X } }, output: Item.of('#mekanism:shards/' + X)
        });
        event.custom({
            type: 'mekanism:purifying', gasInput: { amount: 1, gas: 'mekanism:oxygen' },
            itemInput: { ingredient: { tag: 'create:crushed_ores/' + X} }, output: Item.of('#mekanism:clumps/' + X, 3)
        });
        event.custom({
            type: 'mekanism:purifying', gasInput: { amount: 1, gas: 'mekanism:oxygen' },
            itemInput: { ingredient: { tag: 'mekanism:shards/' + X } }, output: Item.of('#mekanism:clumps/' + X)
        });
    }

    event.remove({ output: 'minecraft:coal' });
    event.remove({ output: 'mekanism:fluorite_gem' });
    event.remove({ id: 'mekanism:enriching/charcoal' });
    const _pp2 = {
        coal: 'minecraft:coal', charcoal: 'minecraft:charcoal', fluorite: 'mekanism:fluorite_gem',
        coal_coke: 'immersiveengineering:coal_coke', coal_petcoke: 'immersivepetroleum:petcoke'
    };
    Object.keys(_pp2).forEach(A => {
        rm1(event, [_pp2[A]], ral); dust(_pp2[A], '#forge:dusts/' + A);
    });

    const _pp = {
        mekanism: {
            iron: '#forge:ingots/iron',
            gold: '#forge:ingots/gold',
            copper: '#forge:ingots/copper',
            lead: '#forge:ingots/lead',
            uranium: '#forge:ingots/uranium'
        }
    };

    Object.keys(_pp).forEach(A => {
        Object.keys(_pp[A]).forEach(B => {
            event.remove({ output: '#forge:ores/' + B });
            crush('#create:crushed_ores/' + B, '#forge:dusts/' + B);
            smelt('#forge:dusts/' + B, _pp[A][B]);
            dust('#mekanism:clumps/' + B, '#forge:dusts/' + B);
            dust('#forge:ingots/' + B, '#forge:dusts/' + B);

            press(_pp[A][B], '#forge:plates/' + B, 'immersiveengineering:mold_plate');
            cpress(_pp[A][B], '#forge:plates/' + B);
            press('#forge:plates/' + B, '#forge:rods/' + B, 'immersiveengineering:mold_rod');

            mek(B, A);
        });
    });

    press('mekanism:hdpe_sheet', 'mekanism:hdpe_rod', 'immersiveengineering:mold_rod');

    ['electrum', 'steel'].forEach(A => {
        dust('#forge:ingots/' + A, '#forge:dusts/' + A);
        press('#forge:ingots/' + A, '#forge:plates/' + A, 'immersiveengineering:mold_plate');
        cpress('#forge:ingots/' + A, '#forge:plates/' + A);
        press('#forge:plates/' + A, '#forge:rods/' + A, 'immersiveengineering:mold_rod');
    });

    ['copper', 'electrum', 'steel', 'lead'].forEach(A => {
        press('#forge:plates/' + A, '2x #forge:wires/' + A, 'immersiveengineering:mold_wire');
        event.custom({
            type:'createaddition:rolling', input: { tag: 'forge:rods/' + A }, result: Item.of('2x #forge:wires/' + A)
        });
    });
    ['iron', 'gold', 'copper', 'lead', 'electrum', 'uranium', 'steel'].forEach(Z => {
        event.custom({ type:'createaddition:rolling', input: { tag: 'forge:plates/' + Z }, result: Item.of('#forge:rods/' + Z) });
    });

    event.remove({ output: '#forge:ingots/electrum' });
    event.custom({
        type:'immersiveengineering:alloy', time: 200,
        result: { count: 2, base_ingredient: { tag: 'forge:ingots/electrum' } },
        input0: { base_ingredient: { tag: 'forge:ingots/gold' }, count: 2 },
        input1: { base_ingredient: { tag: 'forge:ingots/copper' }, count: 2 }
    });
    event.custom({
        type: 'immersiveengineering:arc_furnace', slag: { tag: 'forge:slag' }, time: 200, energy: 102400,
        input: { base_ingredient: { tag: 'forge:ingots/gold' }, count: 2 },
        additives:[{ base_ingredient: { tag: 'forge:ingots/copper' }, count: 2 }],
        results: [{ count: 2, base_ingredient: { tag: 'forge:ingots/electrum' } }]
    });

    event.remove({ output: '#forge:ingots/steel' });
    event.custom({
        type: 'immersiveengineering:blast_furnace', slag: { tag: 'forge:slag'}, time: 1200,
        input: { base_ingredient: { tag: 'forge:ingots/iron' }, count: 4 }, result: { tag: 'forge:ingots/steel' }
    });
    event.custom({
        type: 'immersiveengineering:arc_furnace', slag: { tag: 'forge:slag' }, time: 400, energy:204800,
        input: { base_ingredient: { tag: 'forge:ingots/iron' }, count: 4 },
        additives: [{ base_ingredient: { tag: 'forge:dusts/coal_coke' }, count: 2 }],
        results: [{ tag: 'forge:ingots/steel' }]
    });

    // REMOVING EXCESS
    ['iron', 'gold', 'copper', 'lead', 'uranium'].forEach(X => event.remove({ output: '#create:crushed_ores/' + X }));

    ['iron', 'gold', 'osmium', 'copper', 'tin', 'lead', 'uranium'].forEach(A => {
        event.remove({ id: 'mekanism:processing/' + A + '/slurry/dirty' });
        event.remove({ id: 'mekanism:processing/' + A + '/slurry/clean' });
        event.remove({ id: 'mekanism:processing/' + A + '/crystal/from_slurry' });
        event.remove({ id: 'mekanism:processing/' + A + '/shard/from_crystal' });
        event.remove({ id: 'mekanism:processing/' + A + '/shard/from_ore' });
        event.remove({ id: 'mekanism:processing/' + A + '/clump/from_shard' });
        event.remove({ id: 'mekanism:processing/' + A + '/clump/from_ore' });
        event.remove({ id: 'mekanism:processing/' + A + '/dust/from_ore' });
        event.remove({ id: 'mekanism:processing/' + A + '/dust/from_ingot' });
    });

    ['lead', 'gold', 'copper', 'osmium', 'iron', 'uranium', 'tin', 'coal'].forEach(A => {
        event.remove({ id: 'mekanism:processing/' + A + '/ore/from_dust' });
    });
    ['redstone', 'emerald', 'coal', 'fluorite', 'quartz', 'lapis_lazuli', 'diamond'].forEach(A => {
        event.remove({ id: 'mekanism:processing/' + A + '/to_ore' });
    });

    event.remove({ id: 'create:milling/lapis_lazuli' });
    event.remove({ id: 'minecraft:blue_dye' });
    event.remove({ id: 'mekanism:processing/gold/ore/nether_from_dust' });
    event.remove({ id: 'mekanism:processing/refined_obsidian/ingot/from_nuggets' });
    event.remove({ id: 'mekanism:processing/refined_obsidian/ingot/from_block' });
    event.remove({ id: 'mekanism:processing/refined_obsidian/dust/from_ingot' });
    event.remove({ id: 'mekanism:processing/uranium/hydrofluoric_acid_from_block' });
    event.remove({ id: 'mekanism:infusion_conversion/carbon/from_charcoal_block' });
    event.remove({ id: 'mekanism:infusion_conversion/carbon/from_coal_block' });
});
