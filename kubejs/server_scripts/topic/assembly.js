onEvent('recipes', event => {
    const _bd = 'minecraft:black_dye';
    const _a1 = 'immersiveengineering:armor_steel_head';
    const _a2 = 'immersiveengineering:armor_steel_chest';
    const _a3 = 'immersiveengineering:armor_steel_legs';
    const _a4 = 'immersiveengineering:armor_steel_feet';
    const _a5 = [tPs, tPs, tPs, tPs];

    csAssembly(event, [
        ['mekanism:formulaic_assemblicator', _cu, Mct, [mm1, _K1, _I4, Mcw, ltx], [], 1],
        [tGd, 'immersiveengineering:slab_coke', Icc, [Icc, Icc, Icc, Icc, Icc], [], 10],
        [Pig, _cu, 'immersiveengineering:mold_gear', [tPi, tPi, tPi, tPi, tPi], [], 10],
        ['backpacked:backpack', _cu, 'minecraft:leather_chestplate', [Mlt, tST, Mlt, ltx], [['minecraft:water', 100]], 3],

        // CASE LINE
        [Cc3, _cu, Iab, [tPe, mm1, tRe, Itf], [['steampowered:steam', 100]], 1],
        [Icb, _cu, Cc3, [Caa, ltx, cls, tDi], [['steampowered:steam', 100]], 1],
        [Ibb, _cu, Icb, [tPl, tDo, Icc, _I2], [['immersiveengineering:creosote', 100]], 1],
        [Ire, _cu, Ibb, [_K1, Cca, Amc, _I4], [['immersiveengineering:creosote', 100]], 1],
        [Kca, _cu, Ire, [tPs, Apq, tRs, _I3], [['mekanism:brine', 100]], 1],
        [Ile, _cu, Kca, [_K2, mm2, Khd, Keg], [['mekanism:sulfuric_acid', 100]], 1],
        [Ihe, _cu, Ile, [_K3, mm3, Pig, Kec], [['mekanism:lithium', 100]], 1],

        [Kfi, _cu, Ihe, [_K4, tGf, pet, Ker], [['immersiveengineering:concrete', 100]], 1],
        [Ktu, _cu, Kfi, [_K4, Kpp, KSi, Ked], [['immersivepetroleum:lubricant', 100]], 1],
        [Kfu, _cu, Ktu, [_K4, Kpl, KKi, Keo], [['mekanism:hydrofluoric_acid', 100]], 1],

        // MEKANISM
        ['mekanism:jetpack_armored', _cu, 'mekanism:jetpack', [tPs, tPs, tPs, tPs], [['steampowered:steam', 100]], 10],
        ['mekanism:advanced_tier_installer', _cu, _K2, [Apf, tGd, _I4, Pig], [['mekanism:lithium', 100]], 1],

        ['mekanism:upgrade_speed',    _cu, Abc, [tPs, tDc, mm1, _bd], [['mekanism:brine', 50]], 3],
        ['mekanism:upgrade_energy',   _cu, Abc, [tPs, tDg, mm1, _bd], [['mekanism:brine', 50]], 3],
        ['mekanism:upgrade_muffling', _cu, Abc, [tPs, tDs, mm1, _bd], [['mekanism:brine', 50]], 3],
        ['mekanism:upgrade_filter',   _cu, Aac, [tPs, tDi, mm1, _bd], [['mekanism:brine', 50]], 3],
        ['mekanism:upgrade_gas',      _cu, Aac, [tPs, tDu, mm1, _bd], [['mekanism:brine', 50]], 3],
        ['mekanism:upgrade_anchor',   _cu, Aac, [tPs, tDf, mm1, _bd], [['mekanism:brine', 50]], 3],

        //CREATE
        //_qtR('create:fluid_pipe', tRc, 64, 25000, tPc, 3);

        //IMMERSIVE ENGINEERING
        ['immersiveengineering:razor_wire',   _cu, 'immersiveengineering:treated_fence', [tRi, tRi, tRi, tRi, tRi], [], 1],
        ['immersiveengineering:turret_gun',   _cu, 'immersiveengineering:revolver',      [Irm, Irm, Icl, Ik1], [], 1],
        ['immersiveengineering:tesla_coil',   _cu, 'immersiveengineering:railgun',       [Icm, Icm, mm2, Ik2], [['mekanism:brine', 100]], 1],
        ['immersiveengineering:turret_chem',  _cu, 'immersiveengineering:chemthrower',   [Cft, mm3, Cmp, Ik2], [['mekanism:lithium', 100]], 1],
        ['immersiveengineering:cloche',       _cu, 'create:mechanical_harvester',        [_I4, Aqg, _K3, Ik2], [['steampowered:steam', 100]], 1],
        ['immersiveengineering:generator',    _cu, 'immersiveengineering:dynamo',        [_K3, mm3, Pig, Ic2], [['mekanism:sulfuric_acid', 100]], 1],
        ['immersiveengineering:dynamo',       _cu, Icl, [tPc, tRi, tDg, tDl, _K1], [], 1],
        [Ic1, _cu, Cc2, [Icl, Icl, _K1, Ik1], [], 1],
        [Ic2, _cu, Ic1, [Icm, Icm, _K2, Ik2], [], 1],

        //DIREGOO
        [Dt1, _cu, 'minecraft:tnt',                                     [Dad, Dad, Dad, Dad], [['minecraft:water', 250]], 3],
        ['diregoo:turretblock', _cu, 'immersiveengineering:turret_gun', [Dad, Dad, Apf, _K1], [['minecraft:water', 250]], 3],
        ['diregoo:gooremover',  _cu, 'immersiveengineering:revolver',   [Dad, Apf, _K1, FTB], [['minecraft:water', 250]], 3],
        [Dt4, _cu, Dt3,                                                 [Kam, Kam], [['mekanism:hydrofluoric_acid', 250]], 1],
        ['diregoo:antigoofieldgen', _cu, 'diregoo:turretblock',         [Kam, Kam, Kam, _K4], [['mekanism:hydrofluoric_acid', 250]], 1],
        ['diregoo:goozapper', _cu, 'diregoo:gooremover',                [mm3, mm3, mm3, mm3], [['mekanism:sulfuric_acid', 1000]], 1],
        ['diregoo:goonadefreeze', _cu, 'diregoo:gooresidue',            [cld, cld, cld, cld, cld], [], 1],

        //TOOLS
        ['immersiveengineering:pickaxe_steel', _cu, 'minecraft:wooden_pickaxe', _a5, [['immersiveengineering:creosote', 1000]], 5],
        ['immersiveengineering:axe_steel',     _cu, 'minecraft:wooden_axe',     _a5, [['immersiveengineering:creosote', 1000]], 5],
        ['immersiveengineering:hoe_steel',     _cu, 'minecraft:wooden_hoe',     _a5, [['immersiveengineering:creosote', 1000]], 5],
        ['immersiveengineering:shovel_steel',  _cu, 'minecraft:wooden_shovel',  _a5, [['immersiveengineering:creosote', 1000]], 5],

        [_a1, _cu, 'minecraft:leather_helmet',     _a5, [['immersiveengineering:creosote', 1000]], 5],
        [_a2, _cu, 'minecraft:leather_chestplate', _a5, [['immersiveengineering:creosote', 1000]], 5],
        [_a3, _cu, 'minecraft:leather_leggings',   _a5, [['immersiveengineering:creosote', 1000]], 5],
        [_a4, _cu, 'minecraft:leather_boots',      _a5, [['immersiveengineering:creosote', 1000]], 5],

        ['pneumaticcraft:pneumatic_helmet',     _cu, _a1, [Pac, Pac, mm2, _K2], [['mekanism:lithium', 100]], 10],
        ['pneumaticcraft:pneumatic_chestplate', _cu, _a2, [Pac, Pac, mm2, _K2], [['mekanism:lithium', 100]], 10],
        ['pneumaticcraft:pneumatic_leggings',   _cu, _a3, [Pac, Pac, mm2, _K2], [['mekanism:lithium', 100]], 10],
        ['pneumaticcraft:pneumatic_boots',      _cu, _a4, [Pac, Pac, mm2, _K2], [['mekanism:lithium', 100]], 10],

        //[, _cu, , [], [['', 100]], 1],
    ]);
});
