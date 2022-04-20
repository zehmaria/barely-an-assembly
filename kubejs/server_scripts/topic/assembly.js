onEvent('recipes', event => {
    const _bd = 'minecraft:black_dye';
    const _a1 = 'immersiveengineering:armor_steel_head';
    const _a2 = 'immersiveengineering:armor_steel_chest';
    const _a3 = 'immersiveengineering:armor_steel_legs';
    const _a4 = 'immersiveengineering:armor_steel_feet';
    const _a5 = [tPs, tPs, tPs, tPs];

    csAssembly(event, [
        ['mekanism:formulaic_assemblicator', _cu, Mct, [mm1, _K1, _I4, ltx], [], 1],
        [tGd, 'immersiveengineering:slab_coke', Icc, [Icc, Icc, Icc, Icc, Icc], [], 10],
        [Pig, _cu, 'immersiveengineering:component_iron', [tPi, tPi, tPi, tPi, tPi], [], 10],
        ['pneumaticcraft:logistics_core', 'appliedenergistics2:printed_silicon', tPl, [_I2, Cca, Cpm, _K2, Apq], [], 1],

        // CASE LINE
        [Cc3, _cu, Iab, [tPe, mm1, tRe, Itf], [['minecraft:water', 100]], 1],
        [Icb, _cu, Cc3, [Caa, ltx, cls, tDi], [['steampowered:steam', 100]], 1],
        [Ibb, _cu, Icb, [tPl, tDo, Icc, _I2], [['immersiveengineering:creosote', 100]], 1],
        [Ire, _cu, Ibb, [_K1, Cca, Cpm, _I4], [['mekanism:brine', 100]], 1],
        [Kca, _cu, Ire, [tPs, Apq, tRs, _I3], [['minecraft:lava', 100]], 1],
        [Ile, _cu, Kca, [_K2, mm2, Khd, Keg], [['mekanism:lithium', 100]], 1],
        [Ihe, _cu, Ile, [_K3, mm3, Pig, SC1], [['immersiveengineering:concrete', 100]], 1],

        [Kfi, _cu, Ihe, [_K4, tGf, pet, SC2], [['mekanism:sulfuric_acid', 100]], 1],
        [Ktu, _cu, Kfi, [_K4, Kpp, KSi, SC2], [['immersivepetroleum:lubricant', 100]], 1],
        [Kfu, _cu, Ktu, [_K4, Kpl, KKi, SC3], [['mekanism:hydrofluoric_acid', 100]], 1],

        // MEKANISM
        ['mekanism:jetpack_armored', _cu, 'mekanism:jetpack', [tPs, tPs, tPs, tPs], [['minecraft:lava', 100]], 10],
        ['mekanism:advanced_tier_installer', _cu, _K2, [Apf, tGd, _I4, Pig], [['mekanism:lithium', 100]], 1],

        ['mekanism:upgrade_speed',    _cu, Abc, [tPs, tDc, mm1, _bd], [['mekanism:brine', 50]], 3],
        ['mekanism:upgrade_energy',   _cu, Abc, [tPs, tDg, mm1, _bd], [['mekanism:brine', 50]], 3],
        ['mekanism:upgrade_muffling', _cu, Abc, [tPs, tDs, mm1, _bd], [['mekanism:brine', 50]], 3],
        ['mekanism:upgrade_filter',   _cu, Aac, [tPs, tDi, mm1, _bd], [['mekanism:brine', 50]], 3],
        ['mekanism:upgrade_gas',      _cu, Aac, [tPs, tDu, mm1, _bd], [['mekanism:brine', 50]], 3],
        ['mekanism:upgrade_anchor',   _cu, Aac, [tPs, tDf, mm1, _bd], [['mekanism:brine', 50]], 3],

        // IMMERSIVE ENGINEERING
        ['6x immersiveengineering:razor_wire',   _cu, 'immersiveengineering:treated_fence', [rod, rod, rod, rod], [], 1],
        ['immersiveengineering:turret_gun',   _cu, Cc1, [ltx, rev, Irm, _K1], [], 1],
        ['immersiveengineering:tesla_coil',   _cu, Cc2, [ltx, Icm, Icm, _K2], [['mekanism:brine', 100]], 1],
        ['immersiveengineering:turret_chem',  _cu, Ire, [ltx, 'immersiveengineering:chemthrower', Cmp, _K3], [['mekanism:lithium', 100]], 1],
        ['immersiveengineering:cloche',       _cu, 'create:mechanical_harvester',        [Ire, _I4, Aqg, _K3], [['steampowered:steam', 100]], 1],
        ['immersiveengineering:generator',    _cu, 'immersiveengineering:dynamo',        [_K3, mm3, Pig, Ic2], [['mekanism:sulfuric_acid', 100]], 1],
        ['immersiveengineering:dynamo',       _cu, Icl, [tPc, tRi, tDg, tDl, _K1], [], 1],
        [Ic1, _cu, Cc2, [Icl, Icl, _K1, Ik1], [], 1],
        [Ic2, _cu, Ic1, [Icm, Icm, _K2, Ik2], [], 1],

        // DIREGOO
        ['minecraft:tnt', _cu, snd,                                     [rst, Mgp, Mgp, tDl, ltx], [], 1],

        [Dt1, _cu, 'minecraft:tnt',                                     [Dad, Dad, Dad], [['minecraft:water', 250]], 1],
        ['diregoo:turretblock', _cu, 'immersiveengineering:turret_gun', [Dad, Apf, _K1], [['minecraft:water', 250]], 1],
        ['diregoo:gooremover',  _cu, 'immersiveengineering:revolver',   [Dad, Apf, _K1, FTB], [['minecraft:lava', 250]], 3],
        [Dt4, _cu, Dt3,                                                 [Kam, Kam],           [['mekanism:hydrofluoric_acid', 250]], 1],
        ['diregoo:antigoofieldgen', _cu, 'diregoo:turretblock',         [Kam, mm3, mm3, _K4], [['mekanism:hydrofluoric_acid', 250]], 3],
        ['diregoo:goozapper', _cu, 'diregoo:gooremover',                [mm3, mm3, mm3, mm3], [['mekanism:sulfuric_acid', 1000]], 3],
        ['4x diregoo:goonadefreeze', _cu, 'diregoo:gooresidue',         [cld, cld, cld, cld], [], 1],

        // ARMOR
        [_a1, _cu, 'minecraft:leather_helmet',     _a5, [['immersiveengineering:creosote', 1000]], 5],
        [_a2, _cu, 'minecraft:leather_chestplate', _a5, [['immersiveengineering:creosote', 1000]], 5],
        [_a3, _cu, 'minecraft:leather_leggings',   _a5, [['immersiveengineering:creosote', 1000]], 5],
        [_a4, _cu, 'minecraft:leather_boots',      _a5, [['immersiveengineering:creosote', 1000]], 5],

        ['boss_tools:oxygen_mask', _cu, _a1, ['mekanism:hazmat_mask', HOP, tPi, _K3],  [['minecraft:lava', 1000]], 1],
        ['boss_tools:space_suit',  _cu, _a2, [Kct, HOP, tPi, _K3],                     [['minecraft:lava', 1000]], 1],
        ['boss_tools:space_pants', _cu, _a3, ['mekanism:hazmat_pants', HOP, tPi, _K3], [['minecraft:lava', 1000]], 1],
        ['boss_tools:space_boots', _cu, _a4, ['mekanism:hazmat_boots', HOP, tPi, _K3], [['minecraft:lava', 1000]], 1],

        ['pneumaticcraft:pneumatic_helmet',     _cu, _a1, [Pac, Pac, mm2, _K2], [['mekanism:lithium', 100]], 10],
        ['pneumaticcraft:pneumatic_chestplate', _cu, _a2, [Pac, Pac, mm2, _K2], [['mekanism:lithium', 100]], 10],
        ['pneumaticcraft:pneumatic_leggings',   _cu, _a3, [Pac, Pac, mm2, _K2], [['mekanism:lithium', 100]], 10],
        ['pneumaticcraft:pneumatic_boots',      _cu, _a4, [Pac, Pac, mm2, _K2], [['mekanism:lithium', 100]], 10],

        // OTHERS
        ['levelhearts:heart_container', 'levelhearts:heart_piece', 'minecraft:bread', ['minecraft:carrot', 'minecraft:baked_potato', 'minecraft:beetroot_soup',  '#minecraft:fishes'], [['create:honey', 50]], 3],
        ['trophyslots:trophy', _cu, tIg, [Mcw, 'create:super_glue', 'minecraft:paper', 'levelhearts:heart_piece'], [['minecraft:lava', 100]], 3],
        ['backpacked:backpack', _cu, 'minecraft:leather_chestplate', [Mlt, tST, ltx, 'trophyslots:trophy'], [['minecraft:water', 100]], 9],

        ['minecraft:farmland', _cu, 'minecraft:coarse_dirt', [Mbm, Mbm, Mbm, Mbm], [['minecraft:water', 100]], 1],

        // PARTIAL AUTO CRAFTING
        ['appliedenergistics2:1k_crafting_storage',  _cu, Ire, [_K1, _K1, Apf, Plc], [['mekanism:lithium', 100]], 1],
        ['appliedenergistics2:4k_crafting_storage',  _cu, Ac1, [_K2, _K2, Apf, Plc], [['mekanism:lithium', 100]], 1],
        ['appliedenergistics2:16k_crafting_storage', _cu, Ac2, [_K3, _K3, Apf, Plc], [['mekanism:lithium', 100]], 1],
        ['appliedenergistics2:64k_crafting_storage', _cu, Ac3, [_K4, _K4, Apf, Plc], [['mekanism:lithium', 100]], 1],
        ['appliedenergistics2:crafting_accelerator', _cu, Ire, [mm3, Cpm, Apf, Plc], [['mekanism:lithium', 100]], 1],

        //[, _cu, , [], [['', 100]], 1],
    ]);
    event.remove({ output: 'levelhearts:heart_piece' });
});
