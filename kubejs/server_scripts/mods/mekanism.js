onEvent('item.tags', event => {
    event.remove('forge:dyes', 'mekanism:dust_sulfur');
    event.remove('forge:dyes/yellow', 'mekanism:dust_sulfur');
});

onEvent('recipes', event => {
    const KDl = 'mekanism:dust_lithium';

    const ti1 = 'mekanism:basic_tier_installer';
    const ti2 = 'mekanism:advanced_tier_installer';
    const ti3 = 'mekanism:elite_tier_installer';
    const ti4 = 'mekanism:ultimate_tier_installer';

    const ic1 = 'mekanism:basic_induction_cell';
    const ic2 = 'mekanism:advanced_induction_cell';
    const ic3 = 'mekanism:elite_induction_cell';

    const ip1 = 'mekanism:basic_induction_provider';
    const ip2 = 'mekanism:advanced_induction_provider';
    const ip3 = 'mekanism:elite_induction_provider';

    const _rg = 'mekanismgenerators:reactor_glass';
    const __c = 'diregoo:focust4';
    const __p = 'diregoo:powerampt4';
    const __m = 'create:millstone';

    addShaped(event, [
        ['2x mekanismgenerators:turbine_casing',           [[air, Khd, air], [tPs, Ktt, tPs], [air, HOP, air]]],
        ['2x mekanismgenerators:fission_reactor_casing',   [[air, Khd, air], [tPl, Kfc, tPl], [air, HOP, air]]],
        ['2x mekanismgenerators:fusion_reactor_frame',     [[mm3, Kpp, mm3], [Kpp, Kff, Kpp], [mm3, Kpp, mm3]]],

        ['mekanismgenerators:solar_panel',           [[Khd, Khd, Khd], [_K1, mm1, Cpm], [tPe, tPe, tPe]]],
        ['mekanismgenerators:laser_focus_matrix',    [[air, _rg, air], [_rg, Df4, _rg], [air, _rg, air]]],

        ['mekanism:industrial_alarm',                [[rst, _I4, rst], [_K1, Iel, _K1], [tPl, Cpm, tPl]]],
        ['mekanism:teleportation_core',              [[HOP, Cpm, HOP], [__p, __c, Kam], [HOP, 'appliedenergistics2:singularity', HOP]]],
        ['mekanism:configurator',                    [[air, Cpm, air], [mm1, Ktb, mm1], [Mlt, stk, Mlt]]],
        ['mekanism:energy_tablet',                   [[Iw1, Ic1, Iw1], [mm1, Ir1, mm1]]],

        ['mekanism:basic_induction_cell',            [[KDl, Ktb, KDl], [Ktb, ti1, Ktb], [KDl, Ktb, KDl]]],
        ['mekanism:advanced_induction_cell',         [[Ktb, ic1, Ktb], [ic1, ti2, ic1], [Ktb, ic1, Ktb]]],
        ['mekanism:elite_induction_cell',            [[Ktb, ic2, Ktb], [ic2, ti3, ic2], [Ktb, ic2, Ktb]]],
        ['mekanism:ultimate_induction_cell',         [[Ktb, ic3, Ktb], [ic3, ti4, ic3], [Ktb, ic3, Ktb]]],

        ['mekanism:basic_induction_provider',        [[KDl, _K1, KDl], [_K1, ti1, _K1], [KDl, _K1, KDl]]],
        ['mekanism:advanced_induction_provider',     [[_K2, ip1, _K2], [ip1, ti2, ip1], [_K2, ip1, _K2]]],
        ['mekanism:elite_induction_provider',        [[_K3, ip2, _K3], [ip2, ti3, ip2], [_K3, ip2, _K3]]],
        ['mekanism:ultimate_induction_provider',     [[_K4, ip3, _K4], [ip3, ti4, ip3], [_K4, ip3, _K4]]],

        ['mekanism:chemical_washer',                 [[_x1, Kdt, _x1], [_K3, Kca, _K3], [_x1, Kct, _x1]]],
        ['mekanism:rotary_condensentrator',          [[gla, _K1, gla], [Kct, Ktb, Kdt], [gla, _K1, gla]]],
        ['mekanism:thermal_evaporation_controller',  [[Khd, _K2, Khd], [Kte, Cft, Kte], [Kte, Kte, Kte]]],
        ['mekanism:crusher',                         [[rst, _K1, rst], [__m, Kca, tPe], [rst, _K1, rst]]],
        ['mekanism:chargepad',                       [[tPs, tPe, tPs], [Khd, Ktb, Khd]]],

        ['mekanism:chemical_oxidizer',               [[mm1, _K1, mm1], [Mcw, Kdt, Kct], [mm1, _K1, mm1]]],
        ['mekanism:laser_amplifier',                 [[tPs, tPs, tPs], [tPs, Ic1, __c], [tPs, tPs, tPs]]],

        ['mekanism:basic_pressurized_tube',          [[tPi, 'pneumaticcraft:pressure_tube', tPi]]],
    ]);

    event.replaceInput({}, 'minecraft:netherite_helmet',     'immersiveengineering:armor_steel_head');
    event.replaceInput({}, 'minecraft:netherite_chestplate', 'immersiveengineering:armor_steel_chest');
    event.replaceInput({}, 'minecraft:netherite_leggings',   'immersiveengineering:armor_steel_legs');
    event.replaceInput({}, 'minecraft:netherite_boots',      'immersiveengineering:armor_steel_feet');

    event.custom({
        type: 'mekanism:reaction',
        itemInput: { amount: 2, ingredient: { tag: 'forge:fuels/bio' } },
        fluidInput: { amount: 10, tag: 'minecraft:water' },
        gasInput: { amount: 100, gas: 'mekanism:hydrogen' },
        energyRequired: 512,
        duration: 1000,
        itemOutput: { item: 'mekanism:substrate' },
        gasOutput: { gas: 'mekanism:ethene', amount: 100 }
    });

    // CHEAPER STEAM COMPAT - FEEDING TWO STEAMS ENGINES COSTS 320 FE/T - ALL ENERGY UPGRADES, HALF SPEED UPGRADES
    event.remove({ id: 'mekanism:rotary/steam' });
    event.custom({
        type: 'mekanism:rotary',
        fluidInput: { amount: 16, tag: 'forge:steam' }, gasOutput: { gas: 'mekanism:steam', amount: 16},
        gasInput: { amount: 16, gas: 'mekanism:steam'}, fluidOutput: { fluid: 'steampowered:steam', amount: 16}
    });

    // MEK DATA RECIPES REPLACEMENT (kubejs method not working)
    function mdr(X, Y, Z) {
        event.remove({ output: X });
        event.custom({ type: 'mekanism:mek_data', result: Item.of(X), pattern: Y, key: Z });
    }
    mdr('mekanism:advanced_chemical_tank', ['AOA','OPO','AOA'],{
        P: { item: 'mekanism:basic_chemical_tank' }, O: { tag: 'forge:ingots/lead' }, A: { tag: 'mekanism:alloys/infused' }
    });
    mdr('mekanism:elite_chemical_tank', ['AOA','OPO','AOA'],{
        P: { item: 'mekanism:advanced_chemical_tank' }, O: { tag: 'forge:ingots/lead' }, A: { tag: 'mekanism:alloys/reinforced' }
    });
    mdr('mekanism:ultimate_chemical_tank', ['AOA','OPO','AOA'],{
        P: { item: 'mekanism:elite_chemical_tank' }, O: { tag: 'forge:ingots/lead' }, A: { tag: 'mekanism:alloys/atomic' }
    });
    mdr('mekanism:purification_chamber', ['OCO','OPO','OCO'], {
        P: { item: 'mekanism:enrichment_chamber' }, O: { tag: 'forge:ingots/lead' }, C: { tag: 'forge:circuits/advanced' },
    });
    mdr('mekanism:resistive_heater', [' I ','IXI','IEI'], {
        I: { tag: 'forge:ingots/copper' }, E: { item: 'mekanism:energy_tablet' }, X: { item: 'mekanism:steel_casing'}
    });
    mdr('mekanism:flamethrower', ['III','ITS','BCB'],{
        T: { item: 'mekanism:basic_chemical_tank' }, C: { tag: 'forge:circuits/advanced' },
        B: { tag: 'forge:ingots/steel' }, I: { tag: 'forge:ingots/copper' }, S: { item: 'minecraft:flint_and_steel' }
    });
    mdr('mekanism:jetpack', ['SCS','ITI',' I '], {
        T: { item: 'mekanism:basic_chemical_tank' }, C: { tag: 'forge:circuits/basic' },
        S: { tag: 'forge:ingots/steel' }, I: { tag: 'forge:ingots/copper' }
    });
    mdr('mekanism:seismic_reader', ['SHS','SES','SSS'], {
        H:{ item: HOP }, S: { tag: 'forge:ingots/steel' }, E: { item: 'mekanism:energy_tablet' }
    });

    // CIRCUITS
    const osm2 = '#forge:dusts/copper';
    const osm3 = 'mekanism:clump_copper';
    const osm4 = 'mekanism:shard_copper';
    function circuit(X, Y) {
        event.remove({ output: X });
        event.custom({
            type: 'immersiveengineering:blueprint', category: 'components',
            result: Item.of(X), inputs: [Item.of(Y[0]), bI(Y[1]), bI(Y[2]), Item.of(Y[3])]
        });
    }
    circuit('mekanism:advanced_control_circuit', [mm1, [_K1, 2], [_x1, 3], osm2]);
    circuit('mekanism:elite_control_circuit',    [mm2, [_K2, 2], [_x2, 3], osm3]);
    circuit('mekanism:ultimate_control_circuit', [mm3, [_K3, 2], [_x3, 3], osm4]);
});
