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

    const _rg = 'mekanismgenerators:reactor_glass';
    const __c = 'diregoo:focust4';
    const __p = 'diregoo:powerampt4';
    const __m = 'create:millstone';
    const __l = 'mekanism:crystal_lead';
    const __h = 'mekanism:hdpe_pellet';
    const __k = 'mekanism:crusher';
    const __s = 'mekanismgenerators:solar_generator';

    addShaped(event, [
        ['mekanism:formulaic_assemblicator',            [[mm1, mm1, mm1], [ltx, Cc2, ltx], [_K1, Mct, _K1]]],

        ['mekanism:metallurgic_infuser',                [[tPi, Mfu, tPi], [rst, tRc, rst], [tPi, Mfu, tPi]]],
        ['mekanism:rotary_condensentrator',             [[gla, Kct, gla], [_K1, Ktb, _K1], [gla, Kdt, gla]]],

        ['mekanism:crusher',                            [[mm1, tPe, mm1], [_K1, Kca, _K1], [mm1, __m, mm1]]],
        ['mekanism:pressurized_reaction_chamber',       [[mm1, tPs, mm1], [_K2, __k, _K2], [Kct, Kdt, Kct]]],
        ['mekanism:enrichment_chamber',                 [[mm2, __h, mm2], [_K2, Kca, _K2], [mm2, __h, mm2]]],
        ['mekanism:purification_chamber',               [[Khd, tRl, Khd], [_K2, Kca, _K2], [HOP, tRl, HOP]]],

        ['mekanism:chemical_oxidizer',                  [[mm3, Mcw, mm3], [_K4, Kca, _K4], [mm3, Kct, mm3]]],
        ['mekanism:chemical_infuser',                   [[mm3, Kct, mm3], [_K4, Kca, _K4], [mm3, Kct, mm3]]],

        ['mekanism:chemical_dissolution_chamber',       [[mm3, Kct, mm3], [_K4, Kca, _K4], [HOP, Kct, HOP]]],
        ['mekanism:chemical_washer',                    [[tGf, Kdt, tGf], [_K4, Kca, _K4], [HOP, Kct, HOP]]],
        ['mekanism:chemical_crystallizer',              [[HOP, tGf, HOP], [_K4, Kca, _K4], [HOP, tGf, HOP]]],

        ['mekanism:solar_neutron_activator',            [[Kpl, KKg, Kpl], [_K4, Kca, _K4], [HOP, HOP, HOP]]],

        ['mekanismgenerators:solar_panel',              [[Apq, Apq, Apq], [_K1, mm1, Cpm], [tPe, tPe, tPe]]],
        ['mekanismgenerators:advanced_solar_generator', [[__s, mm1, __s], [__s, mm1, __s], [_K1, Kca, _K1]]],

        ['mekanismgenerators:laser_focus_matrix',       [[air, _rg, air], [_rg, Df4, _rg], [air, _rg, air]]],
        ['mekanism:industrial_alarm',                   [[rst, _I4, rst], [_K1, Iel, _K1], [tPl, Cpm, tPl]]],
        ['mekanism:teleportation_core',                 [[HOP, Plc, HOP], [__p, __c, Kam], [HOP, 'mekanism:crystal_uranium', HOP]]],
        ['mekanism:configurator',                       [[air, Cpm, air], [mm1, Ktb, mm1], [Mlt, stk, Mlt]]],
        ['mekanism:energy_tablet',                      [[Iw1, Ic1, Iw1], [mm1, Ir1, mm1]]],

        ['mekanism:basic_induction_cell',               [[KDl, mm3, KDl], [KDl, Ic2, KDl], [KDl, mm3, KDl]]],
        ['mekanism:basic_induction_provider',           [[KDl, mm3, KDl], [KDl, Ik2, KDl], [KDl, mm3, KDl]]],

        ['mekanism:thermal_evaporation_controller',     [[Apq, _K2, Apq], [Kte, Cft, Kte], [Kte, Kte, Kte]]],
        ['mekanism:chargepad',                          [[tPs, tPe, tPs], [Khd, Ktb, Khd]]],
        ['mekanism:laser_amplifier',                    [[tPs, tPs, tPs], [tPs, Ic1, __c], [tPs, tPs, tPs]]],

        ['mekanism:basic_pressurized_tube',             [[mm1, 'pneumaticcraft:pressure_tube', mm1]]],
        ['mekanism:qio_drive_base',                     [[__l, Kpp, __l], [Kpp, Ktc, Kpp], [__l, _K4, __l]]],

    ]);

    event.replaceInput({}, 'minecraft:netherite_helmet',     'immersiveengineering:armor_steel_head');
    event.replaceInput({}, 'minecraft:netherite_chestplate', 'immersiveengineering:armor_steel_chest');
    event.replaceInput({}, 'minecraft:netherite_leggings',   'immersiveengineering:armor_steel_legs');
    event.replaceInput({}, 'minecraft:netherite_boots',      'immersiveengineering:armor_steel_feet');

    event.remove({ output: 'mekanism:yellow_cake_uranium' });
    event.custom({
        type: 'mekanism:enriching', input:{ ingredient: { tag: 'forge:rods/uranium' } },
        output:{ item:'mekanism:yellow_cake_uranium', count: 2 }
    });

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
    mdr('mekanism:basic_chemical_tank', ['AOA','O O','AOA'],{ O: { tag: 'forge:ingots/lead' }, A: { tag: 'mekanism:alloys/reinforced' } });

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

    mdr('mekanism:qio_drive_hyper_dense', [' A ','ACA',' A '], {
        A:{ item: 'mekanism:qio_drive_base' }, C: { item: Ktc }
    });
    mdr('mekanism:qio_drive_time_dilating', [' A ','ACA',' A '], {
        A:{ item: 'mekanism:qio_drive_hyper_dense' }, C: { item: Ktc }
    });
    mdr('mekanism:qio_drive_supermassive', [' A ','ACA',' A '], {
        A:{ item: 'mekanism:qio_drive_time_dilating' }, C: { item: Ktc }
    });
    ['drive_array', 'dashboard', 'importer', 'exporter', 'redstone_adapter'].forEach(X => {
        event.remove({ output: 'mekanism:qio_' + X });
    });

    // CIRCUITS
    function circuit(X, Y) {
        event.remove({ output: X });
        event.custom({
            type: 'immersiveengineering:blueprint', category: 'components',
            result: Item.of(X), inputs: [bI(Y[0]), bI(Y[1]), bI(Y[2]), bI(Y[3])]
        });
    }
    circuit('mekanism:advanced_control_circuit', [[mm1, 3], [_K1, 2], [_I4, 3], [tDl, 3]]);
    csAssembly(event, [[_K3, 'appliedenergistics2:printed_engineering_processor', _K2, [mm2, Khd, KCc, ltx], [['mekanism:lithium', 100]], 3]]);
    arc(event, [[_K4, 512 * 20 * 20, _K3, [[mm3, 3], [HOP, 3], [KSg, 3], ['#forge:dusts/sulfur', 3]]]]);
});
