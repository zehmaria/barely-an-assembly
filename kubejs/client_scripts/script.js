// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)');

onEvent('jei.hide.items', event => {
    console.info('**** Hiding ' + global.hiding.length + ' items! ***');
    global.hiding.forEach(i => event.hide(i));
    event.hide('/appliedenergistics2:facade/');
    event.hide('/ftblibrary:fluid_container/');
});

onEvent('item.tooltip', tooltip => {
    tooltip.add('mekanismgenerators:hohlraum', '§3Heavy Water can be extracted using Immersive Engineering Pumpjack.');
    tooltip.add('mekanism:fluorite_gem', '§3Mined via Immersive Engineering Excavator.');
    tooltip.add('factoriores:uranium_ore', '§3Mining requires liquid Hydrofluoric Acid or Sulfuric Acid.');
    tooltip.add('create:crushed_uranium_ore', '§3Mining requires liquid Hydrofluoric Acid or Sulfuric Acid.');

    tooltip.add('factoriores:burner_miner', '§4Warning: Once there is no deposit to mine, the placed burner miner will consume fuel instantly and infinitely. Automate with caution.');

    ['mekanism:basic_tier_installer', 'mekanism:advanced_tier_installer', 'mekanism:elite_tier_installer', 'mekanism:ultimate_tier_installer'].forEach(X => tooltip.add(X, '§3Some machines can be upgraded by [shift + right click]ing this onto them. Tiers can not be skipped and must be installed in sequence.'));

    tooltip.add('compressedcreativity:rotational_compressor', '§3Generates PneumaticCraft Pressure [Drones].');

    ['create:schematicannon', 'create:schematic_table'].forEach(X => tooltip.add(X, '§3Basic Schematics Available.'));

    ['create:water_wheel', 'create:encased_fan', 'create:hand_crank', 'create:copper_valve_handle', 'createaddition:electric_motor', 'steampowered:bronze_steam_engine', 'steampowered:cast_iron_steam_engine', 'steampowered:steel_steam_engine'].forEach(X => tooltip.add(X, '§3Generates Create\'s Rotational Energy.'));

    ['steampowered:bronze_steam_engine', 'steampowered:cast_iron_steam_engine', 'steampowered:steel_steam_engine'].forEach(X => tooltip.add(X, '§3Requires Flywheel of the same material.'));

    ['create:hand_crank', 'create:copper_valve_handle'].forEach(X => tooltip.add(X, '§3Manual generation.'));

    ['create:shaft', 'create:belt_connector', 'create:mechanical_arm', 'create:andesite_funnel', 'create:brass_funnel', 'create:chute', 'create:smart_chute', 'create:portable_storage_interface', 'pneumaticcraft:logistics_drone', 'pneumaticcraft:collector_drone', 'pneumaticcraft:logistics_frame_requester', 'pneumaticcraft:logistics_frame_storage', 'pneumaticcraft:logistics_frame_default_storage', 'pneumaticcraft:logistics_frame_passive_provider', 'pneumaticcraft:logistics_frame_active_provider', 'appliedenergistics2:controller', 'appliedenergistics2:import_bus', 'appliedenergistics2:export_bus'].forEach(X => tooltip.add(X, '§3Item transport.'));

    ['createchunkloading:chunk_loader', 'create:portable_fluid_interface', 'create:portable_storage_interface', 'create:cart_assembler'].forEach(X => tooltip.add(X, '§3Long distance transportation.'));

    ['create:mechanical_pump', 'create:hose_pulley', 'create:smart_fluid_pipe', 'create:fluid_pipe', 'create:fluid_valve', 'create:fluid_tank', 'create:portable_fluid_interface', 'appliedenergistics2:controller', 'appliedenergistics2:fluid_import_bus', 'appliedenergistics2:fluid_export_bus'].forEach(X => tooltip.add(X, '§3Fluid transportation.'));

    ['createaddition:alternator', 'immersiveengineering:dynamo', 'immersivepetroleum:gas_generator', 'mekanismgenerators:advanced_solar_generator', 'mekanismgenerators:solar_generator', 'immersiveengineering:generator', 'mekanismgenerators:turbine_casing', 'mekanismgenerators:fission_reactor_casing', 'mekanismgenerators:fusion_reactor_frame'].forEach(X => tooltip.add(X, '§3Generates Forge Energy [RF, FE, FLUX].'));

    ['immersiveengineering:generator', 'mekanismgenerators:turbine_casing', 'mekanismgenerators:fission_reactor_casing', 'mekanismgenerators:fusion_reactor_frame'].forEach(X => tooltip.add(X, '§3Requires multiblock.'));

    tooltip.add('immersiveengineering:dynamo', '§3Requires windmill.');
    tooltip.add('immersiveengineering:windmill', '§3Works best with windmill sail.');

    ['create:rotation_speed_controller', 'create:stressometer', 'create:goggles', 'create:speedometer'].forEach(X => tooltip.add(X, '§3Fine RPM control.'));

    ['immersiveengineering:tesla_coil', 'immersiveengineering:turret_gun', 'immersiveengineering:turret_chem', 'immersiveengineering:razor_wire', 'diregoo:turretblock', 'diregoo:zapperturretblock', 'diregoo:antigoofieldgen', 'mekanism:laser'].forEach(X => tooltip.add(X, '§3Base defense.'));

    ['create:schematicannon', 'create:schematic_table', 'immersivepetroleum:projector'].forEach(X => tooltip.add(X, '§3Multiblock Building Helper.'));

    ['immersiveengineering:chemthrower', 'mekanism:flamethrower', 'immersiveengineering:railgun', 'immersiveengineering:revolver', 'diregoo:gooremover', 'diregoo:goozapper', 'create:potato_cannon'].forEach(X => tooltip.add(X, '§3Weapons.'));

    ['pneumaticcraft:kerosene_lamp', 'immersiveengineering:electric_lantern', 'immersiveengineering:floodlight', 'appliedenergistics2:semi_dark_monitor'].forEach(X => tooltip.add(X, '§3Light Source [No basic torch].'));

    ['immersiveengineering:capacitor_lv', 'immersiveengineering:capacitor_mv', 'immersiveengineering:capacitor_hv', 'mekanism:energy_tablet', 'immersiveengineering:powerpack', 'mekanism:basic_induction_cell', 'mekanism:advanced_induction_cell', 'mekanism:elite_induction_cell', 'mekanism:ultimate_induction_cell'].forEach(X => tooltip.add(X, '§3Energy storage.'));

    ['mekanism:basic_induction_cell', 'mekanism:advanced_induction_cell', 'mekanism:elite_induction_cell', 'mekanism:ultimate_induction_cell'].forEach(X => tooltip.add(X, '§3Requires multiblock.'));

    ['naturescompass:naturescompass', 'immersiveengineering:voltmeter', 'mekanism:chargepad', 'mekanism:jetpack', 'mekanism:jetpack_armored', 'mekanism:scuba_tank', 'mekanism:scuba_mask', 'mekanism:free_runners', 'mekanism:canteen', 'mekanism:portable_teleporter', 'immersivepetroleum:speedboat', 'immersivepetroleum:projector', 'immersiveengineering:buzzsaw', 'immersiveengineering:drill', 'createaddition:multimeter', 'create:empty_schematic', 'create:extendo_grip', 'backpacked:backpack', 'dummmmmmy:target_dummy_placer', 'diregoo:goonade', 'diregoo:goonadefreeze'].forEach(X => tooltip.add(X, '§3Useful Gadgets.'));

    [
        'minecraft:coal', 'minecraft:charcoal', 'minecraft:diamond', 'minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:gunpowder', 'minecraft:clay_ball', 'minecraft:obsidian', 'minecraft:ender_pearl', 'create:andesite_alloy', 'create:precision_mechanism', 'create:electron_tube', 'appliedenergistics2:purified_fluix_crystal', 'appliedenergistics2:purified_certus_quartz_crystal', 'minecraft:beetroot', 'diregoo:antigoodust','boss_tools:silicon_ingot', 'boss_tools:desh_ingot', 'immersiveengineering:hemp_fiber', 'immersiveengineering:hemp_fabric', 'immersiveengineering:stick_treated', 'immersiveengineering:component_iron', 'immersiveengineering:component_steel', 'immersiveengineering:ingot_hop_graphite', 'immersiveengineering:wire_copper', 'immersiveengineering:wire_electrum', 'immersiveengineering:wire_steel', 'mekanism:dust_lithium', 'mekanism:pellet_polonium', 'mekanism:ultimate_control_circuit', 'mekanism:elite_control_circuit', 'mekanism:advanced_control_circuit', 'mekanism:basic_control_circuit', 'immersivepetroleum:petcoke', 'immersiveengineering:coal_coke', 'immersiveengineering:dust_sulfur', 'immersiveengineering:wire_lead', 'myrtrees:latex', 'mekanism:ingot_refined_obsidian', 'mekanism:pellet_plutonium', 'mekanism:hdpe_sheet', 'mekanism:pellet_antimatter', 'mekanism:teleportation_core', 'mekanism:alloy_atomic', 'mekanism:alloy_reinforced', 'mekanism:alloy_infused',

        'mekanism:fluorite_gem', 'immersiveengineering:ingot_copper', 'immersiveengineering:ingot_lead', 'immersiveengineering:ingot_uranium', 'immersiveengineering:ingot_electrum', 'immersiveengineering:ingot_steel',

        'immersiveengineering:stick_steel', 'immersiveposts:stick_electrum', 'immersiveposts:stick_uranium', 'immersiveposts:stick_lead', 'immersiveposts:stick_copper', 'immersiveposts:stick_gold', 'immersiveengineering:stick_iron',

        'pneumaticcraft:compressed_iron_gear',

        'immersiveengineering:plate_copper', 'immersiveengineering:plate_lead', 'immersiveengineering:plate_uranium', 'immersiveengineering:plate_electrum', 'immersiveengineering:plate_steel', 'immersiveengineering:plate_iron', 'immersiveengineering:plate_gold'
    ].forEach(X => tooltip.add(X, '§3Basic crafting material.'));

    ['create:crushed_lead_ore', 'create:crushed_uranium_ore', 'create:crushed_copper_ore', 'create:crushed_gold_ore', 'create:crushed_iron_ore',
     'immersiveengineering:dust_iron', 'immersiveengineering:dust_gold', 'immersiveengineering:dust_copper', 'immersiveengineering:dust_lead', 'immersiveengineering:dust_uranium',
     'mekanism:shard_iron', 'mekanism:shard_gold', 'mekanism:shard_copper', 'mekanism:shard_lead', 'mekanism:shard_uranium',
     'mekanism:crystal_iron', 'mekanism:crystal_gold', 'mekanism:crystal_copper', 'mekanism:crystal_lead', 'mekanism:crystal_uranium',
     'mekanism:clump_iron', 'mekanism:clump_gold', 'mekanism:clump_copper', 'mekanism:clump_lead', 'mekanism:clump_uranium'].forEach(X => tooltip.add(X, '§3Resource Processing.'));

    ['minecraft:rabbit_stew', 'minecraft:mutton', 'minecraft:cooked_mutton', 'minecraft:beetroot', 'minecraft:beetroot_soup', 'minecraft:sweet_berries', 'minecraft:apple', 'minecraft:mushroom_stew', 'minecraft:bread', 'minecraft:porkchop', 'minecraft:cooked_porkchop', 'minecraft:cod', 'minecraft:salmon', 'minecraft:tropical_fish', 'minecraft:pufferfish', 'minecraft:cooked_cod', 'minecraft:cooked_salmon', 'minecraft:cookie', 'minecraft:melon_slice', 'minecraft:dried_kelp', 'minecraft:beef', 'minecraft:cooked_beef', 'minecraft:chicken', 'minecraft:cooked_chicken', 'minecraft:rotten_flesh', 'minecraft:spider_eye', 'minecraft:carrot', 'minecraft:potato', 'minecraft:baked_potato', 'minecraft:poisonous_potato', 'minecraft:pumpkin_pie', 'minecraft:rabbit', 'minecraft:cooked_rabbit'].forEach(X => tooltip.add(X, '§3Heals.'));

    ['appliedenergistics2:purified_certus_quartz_crystal', 'appliedenergistics2:purified_fluix_crystal'].forEach(X => tooltip.add(X, '§3Can be placed down.'));

    //.forEach(X => tooltip.add(X, '§3'));
    //tooltip.add(, '§3');
    // MANUALS
    ['immersiveengineering:manual', 'patchouli:guide_book'].forEach(Z => {
        tooltip.add(Z, '§4Note: Things listed here might have been removed.');
    });
});
