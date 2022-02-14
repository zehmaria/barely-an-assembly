onEvent('recipes', event => {
    addShapeless(event, [
        [Item.of('patchouli:guide_book', '{"patchouli:book":"extendedcrafting:guide"}'), [Mbk, tRs]],
    ]);

    //COMPRESSING
    function _qt(X, Y, N, P, Z) {
        event.remove({ output: X });
        event.custom({
            type: 'extendedcrafting:compressor', powerCost: P, inputCount: N, ingredient: Ingredient.of(Y), catalyst: Item.of(Z), result: Item.of(X)
        });
    }
    function _qtR(X, Y, N, P, Z, M) { _qt(X, Y, N, P, Z); _qt(X, Z, M, P/10, X); }
    function _qtR2(X, Y, N, P, Z, M) { _qt(X, Y, N, P, Z); _qt(X, Y, M, P/10, X); }

    _qt('extendedcrafting:the_ultimate_block', 'mekanism:advanced_induction_cell', 64, 1000000000, Df4);
    _qt('extendedcrafting:basic_auto_table', tPi, 128, 50000, 'minecraft:crafting_table');
    _qt('extendedcrafting:compressor', mm1, 128, 1000000, mm3);

    _qt('minecraft:diamond', '#minecraft:coals', 512, 50000, Kca);

    _qt('backpacked:backpack', 'minecraft:leather', 16, 1000, 'minecraft:leather_chestplate');

    _qt('pneumaticcraft:compressed_iron_gear', tPi, 64, 10000, 'immersiveengineering:mold_gear');

    //MEKANISM
    _qt('mekanism:jetpack_armored', 'mekanism:jetpack', 16, 5000000, 'immersiveengineering:armor_steel_chest');

    _qtR2('mekanism:advanced_tier_installer', Apf, 128, 100000, _K2, 8);

    _qtR('mekanism:upgrade_speed',    tDc, 256, 100000, mm1, 5);
    _qtR('mekanism:upgrade_energy',   tDg, 256, 100000, mm1, 5);
    _qtR('mekanism:upgrade_energy',   tDg, 256, 100000, mm1, 5);
    _qtR('mekanism:upgrade_filter',   tDi, 256, 100000, mm1, 5);
    _qtR('mekanism:upgrade_muffling', tDs, 256, 100000, mm1, 5);
    _qtR('mekanism:upgrade_gas',      tDu, 256, 100000, mm1, 5);
    _qtR('mekanism:upgrade_anchor',   tDf, 256, 100000, mm1, 5);

    //CASING
    _qtR2('create:andesite_casing',                 Caa,                            64,       2500,    log, 4);
    _qtR2('create:copper_casing',                   tPc,                            64,       5000,    Cc1, 4);
    _qtR2('immersiveengineering:alloybrick',        tIg,                           128,      10000,   Cc2, 4);
    _qtR2('create:brass_casing',                    tPe,                           128,      20000,   'immersiveengineering:alloybrick', 4);
    _qtR2('immersiveengineering:cokebrick',         Mcl,                           128,      40000,   Cc3, 4);
    _qtR2('immersiveengineering:blastbrick',        Icc,                           128,      80000,   'immersiveengineering:cokebrick', 4);
    _qtR2('immersiveengineering:rs_engineering',    _I4,                           128,     100000, 'immersiveengineering:blastbrick', 8);
    _qtR2('mekanism:steel_casing',                  tPs,                           128,     250000,  'immersiveengineering:rs_engineering', 8);
    _qtR2('immersiveengineering:light_engineering', _I2,                           128,     500000, Kca, 8);
    _qtR2('immersiveengineering:heavy_engineering', _I3,                           128,    1000000, 'immersiveengineering:light_engineering', 8);
    _qt('mekanismgenerators:fission_reactor_casing', 'mekanism:crystal_uranium',  1024,    5000000, 'immersiveengineering:heavy_engineering');
    _qt('mekanismgenerators:turbine_casing', 'mekanismgenerators:turbine_blade',  1024,   10000000, 'mekanismgenerators:fission_reactor_casing');
    _qt('mekanismgenerators:fusion_reactor_frame', 'mekanism:dust_lithium',       1024, 1000000000, 'mekanismgenerators:fission_reactor_casing');

    //CREATE
    _qtR('create:fluid_pipe', tRc, 64, 25000, tPc, 3);
    _qt('create:schematic_table', 'pneumaticcraft:security_upgrade', 64, 10000000, 'create:schematic_table');

    //IMMERSIVE ENGINEERING
    _qtR2('immersiveengineering:razor_wire', tRi,                                                   64, 20000, 'immersiveengineering:treated_fence', 4);
    _qtR('immersiveengineering:tesla_coil', 'immersiveengineering:coil_mv',                        128, 1000000, 'immersiveengineering:capacitor_mv', 2);
    _qtR2('immersiveengineering:turret_chem', Cft,                                                 128, 200000, 'immersiveengineering:chemthrower', 4);
    _qtR2('immersiveengineering:turret_gun', 'immersiveengineering:toolupgrade_revolver_magazine', 128, 100000, 'immersiveengineering:revolver', 4);
    _qtR('immersiveengineering:cloche', gla,                                                       128, 250000, _I4, 8);

    _qtR2('immersiveengineering:capacitor_lv', 'immersiveengineering:coil_lv',  32, 100000, Cc2, 4);
    _qtR2('immersiveengineering:capacitor_mv', 'immersiveengineering:coil_mv',  64, 1000000, 'immersiveengineering:capacitor_lv', 4);
    _qtR('immersiveengineering:dynamo', tPi,                                   128, 25000, 'immersiveengineering:coil_lv', 8);
    _qtR2('immersiveengineering:generator', tPe,                               128, 100000, 'immersiveengineering:dynamo', 16);
    _qtR2('immersiveengineering:radiator', tPc,                                128, 100000, 'mekanism:resistive_heater', 16);

    //DIREGOO
    _qtR2('diregoo:antigoodust',     Dbp, 32, 1000000, 'diregoo:gooresidue', 1);
    _qtR2('diregoo:gntblockt1',      Dad, 32, 1000000, 'minecraft:tnt', 4);
    _qtR2('diregoo:turretblock',     Dad, 64, 10000000, 'immersiveengineering:turret_gun', 4);
    _qtR2('diregoo:gooremover',      Dad, 64, 10000000, 'immersiveengineering:revolver', 8);
    _qt('diregoo:gntblockt4',        Kam,  2, 50000000, 'diregoo:gntblockt3');
    _qt('diregoo:antigoofieldgen',   Kam,  2, 50000000, 'diregoo:turretblock');
    _qt('diregoo:goozapper',         Kam,  2, 50000000, 'diregoo:gooremover');
    _qtR('diregoo:goonadefreeze', 'diregoo:gooresidue', 8, 1000000, 'minecraft:packed_ice', 1);

    //TOOLS
    _qt('immersiveengineering:pickaxe_steel', tPs, 32, 30000, 'minecraft:wooden_pickaxe');
    _qt('immersiveengineering:axe_steel', tPs,     32, 30000, 'minecraft:wooden_axe');
    _qt('immersiveengineering:hoe_steel', tPs,     32, 30000, 'minecraft:wooden_hoe');
    _qt('immersiveengineering:shovel_steel', tPs,  32, 30000, 'minecraft:wooden_shovel');

    _qt('immersiveengineering:armor_steel_head', tPs,  32, 30000, 'minecraft:leather_helmet');
    _qt('immersiveengineering:armor_steel_chest', tPs, 32, 30000, 'minecraft:leather_chestplate');
    _qt('immersiveengineering:armor_steel_legs', tPs,  32, 30000, 'minecraft:leather_leggings');
    _qt('immersiveengineering:armor_steel_feet', tPs,  32, 30000, 'minecraft:leather_boots');

    const Pfa = { type: 'forge:nbt', item: 'pneumaticcraft:air_canister', count: 1, nbt: '{ "pneumaticcraft:air": 30000 }' };
    function _qtT(X, Y, N, P, Z) {
        event.remove({ output: X });
        event.custom({
            type: 'extendedcrafting:compressor', powerCost: P, inputCount: N, ingredient: Y, catalyst: Item.of(Z), result: Item.of(X)
        });
    }
    _qtT('pneumaticcraft:pneumatic_helmet',     Pfa, 64, 30000000, 'immersiveengineering:armor_steel_head');
    _qtT('pneumaticcraft:pneumatic_chestplate', Pfa, 64, 30000000, 'immersiveengineering:armor_steel_chest');
    _qtT('pneumaticcraft:pneumatic_leggings',   Pfa, 64, 30000000, 'immersiveengineering:armor_steel_legs');
    _qtT('pneumaticcraft:pneumatic_boots',      Pfa, 64, 30000000, 'immersiveengineering:armor_steel_feet');
});
