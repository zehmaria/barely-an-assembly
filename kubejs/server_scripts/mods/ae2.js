onEvent('recipes', event => {
    const _hv = 'immersiveengineering:coil_hv';
    const Apq = 'appliedenergistics2:purified_certus_quartz_crystal';
    const Apf = 'appliedenergistics2:purified_fluix_crystal';
    const Aqg = 'appliedenergistics2:quartz_glass';
    const Acu = 'appliedenergistics2:crafting_unit';
    const Agc = '#appliedenergistics2:glass_cable';
    const Asc = '#appliedenergistics2:smart_cable';
    const Aac = 'appliedenergistics2:annihilation_core';
    const Afc = 'appliedenergistics2:formation_core';

    const _fi = 'create:portable_fluid_interface';
    const _si = 'create:portable_storage_interface';

    event.replaceInput({}, 'appliedenergistics2:logic_processor', _K1);
    event.replaceInput({}, 'appliedenergistics2:calculation_processor', _K2);
    event.replaceInput({}, 'appliedenergistics2:engineering_processor', _K3);
    event.replaceInput({}, '#appliedenergistics2:dusts/quartz', 'appliedenergistics2:purified_certus_quartz_crystal');
    event.replaceInput({}, '#appliedenergistics2:crystals/certus_quartz', '#appliedenergistics2:crystals/certus');
    event.replaceInput({}, 'appliedenergistics2:16k_cell_component', Cc3);
    event.replaceInput({}, 'appliedenergistics2:energy_cell', 'mekanism:basic_induction_cell');

    addShaped(event, [
        ['2x appliedenergistics2:certus_crystal_seed',     [[tDe, snd]]],
        ['3x appliedenergistics2:quartz_glass',            [[Apq, Khd, Apq], [Khd, Apq, Khd], [Apq, Khd, Apq]]],
        ['appliedenergistics2:annihilation_core',          [[air, _K1, air], [Apf, 'diregoo:gooresidue', Apf], [air, Cpm, air]]],
        ['appliedenergistics2:formation_core',             [[air, _K1, air], [Apf, Ked, Apf], [air, Cpm, air]]],
        ['appliedenergistics2:quartz_growth_accelerator',  [[tPi, tPe, tPi], [Aqg, _hv, Aqg], [tPi, tPe, tPi]]],
        ['appliedenergistics2:semi_dark_monitor',          [[Aqg, tPe, air], [Aqg, _K1, tPs], [Aqg, tPe, air]]],

        ['4x appliedenergistics2:fluix_smart_cable',          [[air, Apf, air], [Khd, Cfp, Khd], [air, _I4, air]]],
        ['appliedenergistics2:fluix_smart_dense_cable',    [[Asc, Asc], [Asc, Asc]]],

        ['appliedenergistics2:fluid_interface',            [[tPi, _fi, tPi], [Aac, Kca, Afc], [tPi, _fi, tPi]]],
        ['appliedenergistics2:fluid_import_bus',           [[air, Aac, air], [tPi, _fi, tPi]]],
        ['appliedenergistics2:fluid_export_bus',           [[air, Afc, air], [tPi, _fi, tPi]]],
        ['appliedenergistics2:fluid_storage_bus',          [[Aac, air, Afc], [tPi, _fi, tPi]]],
        ['appliedenergistics2:fluid_level_emitter',        [[Mrt, _fi], [_K2, air]]],
        ['appliedenergistics2:fluid_terminal',             [[Aac, _fi], [_K1, Afc]]],

        ['appliedenergistics2:interface',                  [[tPi, _si, tPi], [Aac, Kca, Afc], [tPi, _si, tPi]]],
        ['appliedenergistics2:import_bus',                 [[air, Aac, air], [tPi, _si, tPi]]],
        ['appliedenergistics2:export_bus',                 [[air, Afc, air], [tPi, _si, tPi]]],
        ['appliedenergistics2:storage_bus',                [[Aac, air, Afc], [tPi, _si, tPi]]],
        ['appliedenergistics2:level_emitter',              [[Mrt, _si], [_K2, air]]],
        ['appliedenergistics2:crafting_terminal',                   [[Aac, _si], [_K1, Afc]]],

        //['appliedenergistics2:1k_crafting_storage',        [[Acu, 'appliedenergistics2:1k_storage_cell']]],
        //['appliedenergistics2:4k_crafting_storage',        [[Acu, 'appliedenergistics2:4k_storage_cell']]],
        //['appliedenergistics2:16k_crafting_storage',       [[Acu, 'appliedenergistics2:16k_storage_cell']]],
        //['appliedenergistics2:64k_crafting_storage',       [[Acu, 'appliedenergistics2:64k_storage_cell']]],
        //['appliedenergistics2:blank_pattern',              [[Aqg, ltx, Aqg], [ltx, Apq, ltx], [tPi, tPi, tPi]]],
        //['appliedenergistics2:interface_terminal',         [['appliedenergistics2:terminal', 'appliedenergistics2:cable_interface']]],
    ]);

    event.remove({ id: 'mekanism:compat/appliedenergistics2/certus_crystal_purification' });
    event.remove({ id: 'mekanism:compat/appliedenergistics2/fluix_crystal_purification' });
    event.remove({ id: 'mekanism:compat/appliedenergistics2/fluix_seed_to_purified_crystal' });
    event.remove({ id: 'appliedenergistics2:network/cells/view_cell_storage' });
    event.remove({ id: 'appliedenergistics2:network/cables/dense_covered_fluix_clean' });
    event.remove({ id: 'appliedenergistics2:network/blocks/energy_energy_acceptor_alt' });

    event.remove({ type: 'appliedenergistics2:grinder' });
    event.remove({ output: 'appliedenergistics2:controller' });
});
