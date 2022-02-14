onEvent('recipes', event => {
    const __l = 'diregoo:focust2';
    const br = 'immersiveengineering:blastbrick_reinforced';
    const __a = Item.of('create:copper_backtank', '{Air:900}');
    const __b = Item.of('create:potato_cannon', '{Damage:0}');
    addShaped(event, [
        ['pneumaticcraft:vortex_cannon',          [[tIe, tIe, tIe], [Pac, __b, air], [tIe, _K2, tIe]]],
        ['pneumaticcraft:jumping_upgrade_1',      [[HOP, __a, HOP], [__b, Ppt, __b], [HOP, pis, HOP]]],
        ['pneumaticcraft:range_upgrade',          [[HOP, tGf, HOP], [tGf, __l, tGf], [HOP, tGf, HOP]]],
        ['pneumaticcraft:speed_upgrade',          [[HOP, tGf, HOP], [tGf, 'mekanism:upgrade_speed', tGf], [HOP, tGf, HOP]]],
        ['pneumaticcraft:logistics_core',         [[br, br, br], [br, _K1, br], [br, br, br]]],
        ['pneumaticcraft:transfer_gadget',        [[_K1], ['create:andesite_funnel'], [_I3]]],
        ['pneumaticcraft:advanced_pressure_tube', [[air, Apf, air], [Cgl, Ppt, Cgl], [air, Apf, air]]],
        ['pneumaticcraft:charging_station',       [[Ppt], ['immersiveengineering:charging_station'], ['pneumaticcraft:logistics_core']]],
        ['pneumaticcraft:kerosene_lamp',          [[air, tPs, air], [tPs, gla, tPs]]],
        ['pneumaticcraft:tag_workbench',          [['minecraft:writable_book'], ['create:schematic_table']]],
        ['pneumaticcraft:pneumatic_wrench',       [[tPs, '#forge:dyes/orange', tPs], [Pac, air, air], [tPs, _I3, tPs]]],
        ['pneumaticcraft:logistics_configurator', [[tPs, '#forge:dyes/red', tPs], [Pac, air, air], [tPs, _I3, tPs]]],
        ['compressedcreativity:rotational_compressor', [[Ibr, Cpr, Ibr], [Ppt, Cc1, Ppt], [Ccw, Csh, Ccw]]],
    ]);

    event.remove({ type: 'pneumaticcraft:amadron' });
    event.remove({ type: 'pneumaticcraft:assembly_laser' });
    event.remove({ type: 'pneumaticcraft:assembly_drill' });
    event.remove({ type: 'pneumaticcraft:explosion_crafting' });
    event.remove({ type: 'pneumaticcraft:fluid_mixer' });
    event.remove({ type: 'pneumaticcraft:refinery' });
    event.remove({ type: 'pneumaticcraft:thermo_plant' });
    event.remove({ type: 'pneumaticcraft:heat_frame_cooling' });
    event.remove({ type: 'pneumaticcraft:pressure_chamber' });
    event.remove({ type: 'pneumaticcraft:pressure_chamber_disenchanting' });
    event.remove({ type: 'pneumaticcraft:pressure_chamber_enchanting' });
    event.remove({ type: 'pneumaticcraft:heat_properties' });
    event.remove({ id: 'pneumaticcraft:one_probe_crafting' });
    event.remove({ id: 'pneumaticcraft:speed_upgrade_from_glycerol' });
    event.remove({ output: Item.of('patchouli:guide_book', '{"patchouli:book":"pneumaticcraft:book"}') });
    event.printTypes();
});
