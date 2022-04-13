onEvent('item.tooltip', tooltip => {
    ['immersiveengineering:tesla_coil', 'immersiveengineering:turret_gun', 'immersiveengineering:turret_chem', 'immersiveengineering:razor_wire', 'diregoo:turretblock', 'diregoo:zapperturretblock', 'diregoo:antigoofieldgen', 'mekanism:laser', 'mekanism:laser_amplifier'].forEach(X => tooltip.add(X, '§3Base defense.'));

    ['immersiveengineering:chemthrower', 'mekanism:flamethrower', 'immersiveengineering:railgun', 'immersiveengineering:revolver', 'diregoo:gooremover', 'diregoo:goozapper', 'create:potato_cannon'].forEach(X => tooltip.add(X, '§3Weapons.'));

    ['minecraft:campfire', 'pneumaticcraft:kerosene_lamp', 'immersiveengineering:electric_lantern', 'immersiveengineering:floodlight', 'appliedenergistics2:semi_dark_monitor'].forEach(X => tooltip.add(X, '§3Light Source.'));

    tooltip.add('immersiveengineering:turret_gun', '§3Range: 15.');
    tooltip.add('immersiveengineering:turret_chem', '§3Range: 7.');
    tooltip.add('immersiveengineering:tesla_coil', '§3Range: 6.');
    tooltip.add('immersiveengineering:tesla_coil', '§3Extendo Grip allows user to interact from outside the damage range.');

    tooltip.add('diregoo:turretblock', '§3Power Amplifier Range - Basic: 3 | Improved: 5 | Powerful: 7 | Extreme: 11.');

    [
        "minecraft:farmland", "minecraft:beehive", "minecraft:crafting_table", "minecraft:furnace", "minecraft:ladder", "minecraft:enchanting_table", "minecraft:brewing_stand", "minecraft:anvil", "minecraft:chipped_anvil", "minecraft:damaged_anvil", "minecraft:scaffolding", "minecraft:loom", "minecraft:smoker", "minecraft:blast_furnace", "minecraft:cartography_table", "minecraft:fletching_table", "minecraft:grindstone", "minecraft:smithing_table", "minecraft:stonecutter",
        "immersiveengineering:metal_ladder_none", "immersiveengineering:metal_ladder_alu", "immersiveengineering:metal_ladder_steel",

        "minecraft:campfire", "compressedcreativity:rotational_compressor", "pneumaticcraft:charging_station", "pneumaticcraft:kerosene_lamp",

        "mekanism:formulaic_assemblicator",

        "factoriores:mechanical_miner", "factoriores:electrical_miner", "factoriores:burner_miner",

        "diregoo:antigoofieldgen", "diregoo:turretblock",

        "mekanism:elite_chemical_tank", "mekanism:ultimate_chemical_tank", "mekanismgenerators:solar_generator", "mekanismgenerators:advanced_solar_generator", "mekanismgenerators:fusion_reactor_frame", "mekanismgenerators:fission_reactor_casing", "mekanismgenerators:turbine_casing", "mekanismgenerators:reactor_glass", "mekanismgenerators:laser_focus_matrix", "mekanismgenerators:fusion_reactor_port", "mekanismgenerators:fission_reactor_port", "mekanismgenerators:turbine_valve", "mekanism:rotary_condensentrator", "mekanism:chemical_oxidizer", "mekanism:chemical_infuser", "mekanism:chemical_injection_chamber", "mekanism:electrolytic_separator", "mekanism:precision_sawmill", "mekanism:chemical_dissolution_chamber", "mekanism:chemical_washer", "mekanism:chemical_crystallizer", "mekanism:pressurized_reaction_chamber", "mekanism:isotopic_centrifuge", "mekanism:nutritional_liquifier", "mekanism:laser", "mekanism:solar_neutron_activator", "mekanism:laser_amplifier", "mekanism:fuelwood_heater", "mekanism:resistive_heater", "mekanism:pigment_extractor", "mekanism:pigment_mixer", "mekanism:painting_machine", "mekanism:sps_casing", "mekanism:basic_chemical_tank", "mekanism:advanced_chemical_tank", "mekanism:boiler_casing", "mekanism:enrichment_chamber", "mekanism:combiner", "mekanism:crusher", "mekanism:metallurgic_infuser", "mekanism:chargepad", "mekanism:teleporter", "mekanism:energized_smelter", "mekanism:purification_chamber", "mekanism:dynamic_tank", "mekanism:structural_glass", "mekanism:thermal_evaporation_block", "mekanism:thermal_evaporation_controller", "mekanism:induction_casing", "mekanism:basic_induction_cell", "mekanism:advanced_induction_cell", "mekanism:elite_induction_cell", "mekanism:ultimate_induction_cell", "mekanism:superheating_element", "mekanism:sps_port", "mekanism:induction_port", "mekanism:thermal_evaporation_valve", "mekanism:dynamic_valve",

        "mekanism:basic_smelting_factory",  "mekanism:basic_enriching_factory", "mekanism:basic_crushing_factory", "mekanism:basic_combining_factory", "mekanism:basic_purifying_factory", "mekanism:basic_injecting_factory", "mekanism:basic_infusing_factory", "mekanism:basic_sawing_factory",
        "mekanism:advanced_sawing_factory", "mekanism:advanced_infusing_factory", "mekanism:advanced_injecting_factory", "mekanism:advanced_purifying_factory", "mekanism:advanced_combining_factory", "mekanism:advanced_crushing_factory", "mekanism:advanced_enriching_factory", "mekanism:advanced_smelting_factory",
        "mekanism:elite_enriching_factory", "mekanism:elite_smelting_factory", "mekanism:elite_crushing_factory", "mekanism:elite_combining_factory", "mekanism:elite_purifying_factory", "mekanism:elite_injecting_factory", "mekanism:elite_infusing_factory", "mekanism:elite_sawing_factory",
        "mekanism:ultimate_smelting_factory", "mekanism:ultimate_enriching_factory", "mekanism:ultimate_crushing_factory", "mekanism:ultimate_combining_factory", "mekanism:ultimate_purifying_factory", "mekanism:ultimate_injecting_factory", "mekanism:ultimate_infusing_factory", "mekanism:ultimate_sawing_factory",

        "immersiveengineering:floodlight", "immersiveengineering:tesla_coil", "immersiveengineering:blastfurnace_preheater", "immersiveengineering:capacitor_hv", "immersiveengineering:capacitor_mv", "immersiveengineering:capacitor_lv", "immersiveengineering:dynamo", "immersiveengineering:radiator", "immersiveengineering:generator", "immersiveengineering:heavy_engineering", "immersiveengineering:light_engineering", "immersiveengineering:rs_engineering", "immersiveengineering:workbench", "immersivepetroleum:gas_generator", "immersiveengineering:turret_chem", "immersiveengineering:turret_gun", "immersiveengineering:cloche", "immersiveengineering:windmill", "immersiveengineering:electric_lantern", "immersiveengineering:alloybrick", "immersiveengineering:blastbrick_reinforced", "immersiveengineering:blastbrick", "immersiveengineering:cokebrick",

        "immersiveengineering:alloy_smelter", "immersiveengineering:arc_furnace", "immersiveengineering:assembler", "immersiveengineering:auto_workbench", "immersiveengineering:coke_oven", "immersiveengineering:blast_furnace", "immersiveengineering:crusher", "immersiveengineering:diesel_generator",  "immersiveengineering:excavator", "immersiveengineering:advanced_blast_furnace", "immersiveengineering:lightning_rod", "immersiveengineering:metal_press", "immersiveengineering:mixer", "immersiveengineering:sawmill", "immersiveengineering:silo", "immersiveengineering:squeezer",  "immersiveengineering:tank",
        "immersivepetroleum:pumpjack", "immersivepetroleum:hydrotreater", "immersivepetroleum:distillationtower", "immersivepetroleum:cokerunit",

        "appliedenergistics2:controller", "appliedenergistics2:drive", "appliedenergistics2:chest", "appliedenergistics2:condenser", "appliedenergistics2:quartz_growth_accelerator", "appliedenergistics2:crafting_unit", "appliedenergistics2:crafting_accelerator", "appliedenergistics2:1k_crafting_storage", "appliedenergistics2:4k_crafting_storage", "appliedenergistics2:16k_crafting_storage", "appliedenergistics2:64k_crafting_storage",

        "createaddition:rolling_mill", "createaddition:alternator", "createaddition:electric_motor", "steampowered:cast_iron_burner", "steampowered:steel_flywheel", "steampowered:cast_iron_flywheel", "steampowered:bronze_flywheel", "steampowered:steel_steam_engine", "steampowered:cast_iron_steam_engine", "steampowered:bronze_steam_engine", "steampowered:cast_iron_boiler", "create:millstone", "create:sticky_mechanical_piston", "create:gantry_shaft", "create:rope_pulley", "create:spout", "create:hose_pulley", "create:fluid_tank", "create:mechanical_press", "create:crushing_wheel", "create:mechanical_arm", "create:mechanical_crafter", "create:rotation_speed_controller", "create:mechanical_piston", "create:mechanical_bearing", "create:clockwork_bearing", "create:cart_assembler", "create:encased_fan", "create:schematicannon"
    ].forEach(X => tooltip.add(X, '§4Attracts idle monsters.'));
});
