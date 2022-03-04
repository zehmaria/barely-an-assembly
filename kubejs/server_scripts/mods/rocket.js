onEvent('recipes', event => {
    csAssembly(event, [
        ['boss_tools:rocket_launch_pad', _cu, Ihe, [SC1, SC1, SC1, SC1], [['immersiveengineering:concrete', 100]], 1],

        ['boss_tools:compressed_steel',   _cu, Pig, [tIs, tIs, tIs, tIs, tIs], [], 5],
        ['boss_tools:compressed_desh',    _cu, Pig, [Si2, Si2, Si2, Si2, Si2], [], 5],
        ['boss_tools:compressed_silicon', _cu, Pig, [Si3, Si3, Si3, Si3, Si3], [], 5],

        ['mekanism:portable_teleporter',  _cu, 'kubejs:imcomplete_rocket_t1', [_K4, Ktb, Pgt, Plc], [['mekanism:lithium', 1000]], 1],

        ['kubejs:imcomplete_rocket_t1', _cu, Ihe, [SC1, Kct, Ile, 'boss_tools:iron_engine'], [['minecraft:lava', 100]], 10],
        ['kubejs:imcomplete_rocket_t2', _cu, Kfc, [SC2, Kct, Ihe, 'boss_tools:golden_engine'], [['minecraft:lava', 100]], 20],
        ['kubejs:imcomplete_rocket_t3', _cu, Ktu, [SC3, Kct, Kfc, 'boss_tools:diamond_engine'], [['minecraft:lava', 100]], 30],

        ['boss_tools:iron_engine',    _cu, Ihe, [_K2, Pig, Pgt, KKi], [['mekanism:hydrofluoric_acid', 100]], 1],
        ['boss_tools:golden_engine',  _cu, Ihe, [_K3, Pig, Pgt, Keg], [['mekanism:hydrofluoric_acid', 100]], 1],
        ['boss_tools:diamond_engine', _cu, Ihe, [_K4, Pig, Pgt, Ked], [['mekanism:hydrofluoric_acid', 100]], 1],
    ]);
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: Item.of('kubejs:imcomplete_rocket_t1'),
        transitionalItem: Item.of('kubejs:fueling_rocket_t1'),
        results: [Item.of('boss_tools:rocket_t1', {"boss_tools:fuel":300,"boss_tools:bucket":true})],
        sequence: [{
            type: 'create:filling',
            ingredients: [Item.of('kubejs:imcomplete_rocket_t1'), { fluid: 'immersivepetroleum:diesel', nbt: {}, amount: 1000 }],
            results: [Item.of('kubejs:imcomplete_rocket_t1')]
        }],
        loops: 10
    });
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: Item.of('kubejs:imcomplete_rocket_t2'),
        transitionalItem: Item.of('kubejs:fueling_rocket_t2'),
        results: [Item.of('boss_tools:rocket_t2', {"boss_tools:fuel":300,"boss_tools:bucket":true})],
        sequence: [{
            type: 'create:filling',
            ingredients: [Item.of('kubejs:imcomplete_rocket_t2'), { fluid: 'immersivepetroleum:diesel', nbt: {}, amount: 1000 }],
            results: [Item.of('kubejs:imcomplete_rocket_t2')]
        }],
        loops: 20
    });
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: Item.of('kubejs:imcomplete_rocket_t3'),
        transitionalItem: Item.of('kubejs:fueling_rocket_t3'),
        results: [Item.of('boss_tools:rocket_t3', {"boss_tools:fuel":300,"boss_tools:bucket":true})],
        sequence: [{
            type: 'create:filling',
            ingredients: [Item.of('kubejs:imcomplete_rocket_t3'), { fluid: 'immersivepetroleum:diesel', nbt: {}, amount: 1000 }],
            results: [Item.of('kubejs:imcomplete_rocket_t3')]
        }],
        loops: 30
    });

    event.remove({ type: 'boss_tools:generating' });
    event.remove({ type: 'boss_tools:oxygenloader' });
    event.remove({ id: 'boss_tools:fuelrefining/fuel_from_oil' });

    event.remove({ output: 'mekanism:quantum_entangloporter' });
    event.remove({ output: 'mekanism:teleporter' });
});
