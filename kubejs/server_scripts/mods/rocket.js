/*
onEvent('recipes', event => {
    addShaped(event, [
    ]);

    event.remove({ type: 'boss_tools:generating' });
    event.remove({ type: 'boss_tools:oxygenloader' });
    event.remove({ id: 'boss_tools:fuelrefining/fuel_from_oil' });

    // CREATE MECHANICAL CRAFTING
    function addCMC(X, Y, Z) {event.remove({output:X});event.custom({type:'create:mechanical_crafting',result:{item:X},pattern:Y,key:Z});}

    addCMC('boss_tools:rocket_t1', [
        '  Z  ',
        ' YAY ',
        ' YBY ',
        ' YCY ',
        ' YDY ',
        'XMEMX',
        'XNNNX'
    ], {
        X: { item: 'boss_tools:rocket_fin' },
        Y: { item: 'boss_tools:compressed_steel' },
        Z: { item: 'boss_tools:rocket_nose_cone' },
        A: { item: 'diregoo:zapperturretblock' },
        B: { item: 'appliedenergistics2:controller' },
        C: { item: 'appliedenergistics2:singularity' },
        D: { item: 'mekanism:ultimate_induction_provider' },
        E: { item: 'mekanism:ultimate_induction_cell' },
        M: { item: 'mekanism:ultimate_chemical_tank' },
        N: { item: 'boss_tools:iron_engine' }
    });

    addCMC('boss_tools:rocket_t2', [
        '  Z  ',
        ' YAY ',
        ' YBY ',
        ' YCY ',
        ' YDY ',
        'XMEMX',
        'XNNNX'
    ], {
        X: { item: 'boss_tools:rocket_fin' },
        Y: { item: 'boss_tools:compressed_desh' },
        Z: { item: 'boss_tools:rocket_nose_cone' },
        A: { item: 'diregoo:zapperturretblock' },
        B: { item: 'appliedenergistics2:controller' },
        C: { item: 'appliedenergistics2:singularity' },
        D: { item: 'mekanism:ultimate_induction_provider' },
        E: { item: 'mekanism:ultimate_induction_cell' },
        M: { item: 'mekanism:ultimate_chemical_tank' },
        N: { item: 'boss_tools:golden_engine' }
    });

    addCMC('boss_tools:rocket_t3', [
        '  Z  ',
        ' YAY ',
        ' YBY ',
        ' YCY ',
        ' YDY ',
        'XMEMX',
        'XNNNX'
    ], {
        X: { item: 'boss_tools:rocket_fin' },
        Y: { item: 'boss_tools:compressed_silicon' },
        Z: { item: 'boss_tools:rocket_nose_cone' },
        A: { item: 'diregoo:zapperturretblock' },
        B: { item: 'appliedenergistics2:controller' },
        C: { item: 'appliedenergistics2:singularity' },
        D: { item: 'mekanism:ultimate_induction_provider' },
        E: { item: 'mekanism:ultimate_induction_cell' },
        M: { item: 'mekanism:ultimate_chemical_tank' },
        N: { item: 'boss_tools:diamond_engine' }
    });
});
*/
