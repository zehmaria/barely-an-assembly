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
        ['factoriores:electrical_miner', [[tPs, Kca, tPs], [tPs, __e, tPs], [air, _sd, air]]]
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


    // ROCKET TO BE
    event.custom({
        type: 'masterfulmachinery:machine_structure',
        id: 'burner_dril_structure',
        controllerId: 'burner-drill',
        name: 'Burner Mining Drill',
        layout: [
            ['     ','  A  ',' B C ','  D  ','     '],
            ['     ','     ','  E  ','     ','     '],
            ['     ','     ','  F  ','     ','     '],
            ['     ','     ','  G  ','     ','     '],
            ['H   I',' J K ','  L  ',' L L ','L   L']
        ],
        'legend': {
            A: { block: 'masterfulmachinery:burner-drill_hard_example_item_port_items_input' },
            B: { block: 'masterfulmachinery:burner-drill_hard_example_item_port_items_output' },
            C: { block: 'masterfulmachinery:burner-drill_hard_example_energy_port_energy_input' },
            D: { block: 'masterfulmachinery:burner-drill_hard_example_energy_port_energy_output' },
            E: { block: 'masterfulmachinery:burner-drill_hard_example_fluid_port_fluids_input' },
            F: { block: 'masterfulmachinery:burner-drill_hard_example_fluid_port_fluids_output' },
            G: { block: 'masterfulmachinery:burner-drill_hard_example_gas_port_mekanism_gas_input' },
            H: { block: 'masterfulmachinery:burner-drill_hard_example_gas_port_mekanism_gas_input' },
            I: { block: 'masterfulmachinery:burner-drill_hard_example_rotation_port_create_rotation_input' },
            J: { block: 'masterfulmachinery:burner-drill_hard_example_rotation_port_create_rotation_output' },
            K: { block: 'masterfulmachinery:burner-drill_hard_example_pncrair_port_pncr_pressure_input' },
            L: { block: 'masterfulmachinery:burner-drill_hard_example_pncrair_port_pncr_pressure_output' }
        }
    });
    event.custom({
        type: 'masterfulmachinery:machine_process',
        structureId: 'burner_drill_structure',
        controllerId: 'burner-drill',
        ticks: 100,
        inputs: [
            { type: 'masterfulmachinery:items', data: { tag: 'minecraft:wool', count: 2 } },
            { type: 'masterfulmachinery:energy', data: { amount: 69420 } },
            { type: 'masterfulmachinery:fluids', data: { fluid: 'minecraft:lava', amount: 420 } },
            { type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanismgenerators:tritium', amount: 69420 } },
            { type: 'masterfulmachinery:create_rotation', consumePerTick: true, data: { speed: 32 } },
            { type: 'masterfulmachinery:pncr_pressure', consumePerTick: true, data:{ air: 2 } }
        ],
        outputs: [
            { type: 'masterfulmachinery:items', chance: 0.9, data: { item: 'minecraft:stone', count: 32 } },
            { type: 'masterfulmachinery:energy', data: { amount: 666 } },
            { type: 'masterfulmachinery:fluids', data: { fluid: 'minecraft:lava', amount: 777 } },
            { type: 'masterfulmachinery:mekanism_gas', data: { gas: 'mekanismgenerators:fusion_fuel', amount: 404 } },
            { type: 'masterfulmachinery:create_rotation', PerTick: true, data:{ speed: 10 } },
            { type: 'masterfulmachinery:pncr_pressure', PerTick: true, data:{ air: 8 } }
        ]
    });
});
