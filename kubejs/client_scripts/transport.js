onEvent('item.tooltip', tooltip => {
    ['create:shaft', 'create:belt_connector', 'create:mechanical_arm', 'create:andesite_funnel', 'create:brass_funnel', 'create:chute', 'create:smart_chute', 'create:portable_storage_interface', 'pneumaticcraft:logistics_drone', 'pneumaticcraft:collector_drone', 'pneumaticcraft:logistics_frame_requester', 'pneumaticcraft:logistics_frame_storage', 'pneumaticcraft:logistics_frame_default_storage', 'pneumaticcraft:logistics_frame_passive_provider', 'pneumaticcraft:logistics_frame_active_provider', 'appliedenergistics2:controller', 'appliedenergistics2:import_bus', 'appliedenergistics2:export_bus'].forEach(X => tooltip.add(X, '§3Item transport.'));

    ['createchunkloading:chunk_loader', 'create:portable_fluid_interface', 'create:portable_storage_interface', 'create:cart_assembler'].forEach(X => tooltip.add(X, '§3Long distance transportation.'));

    ['create:mechanical_pump', 'create:hose_pulley', 'create:smart_fluid_pipe', 'create:fluid_pipe', 'create:fluid_valve', 'create:fluid_tank', 'create:portable_fluid_interface', 'appliedenergistics2:controller', 'appliedenergistics2:fluid_import_bus', 'appliedenergistics2:fluid_export_bus'].forEach(X => tooltip.add(X, '§3Fluid transportation.'));
});
