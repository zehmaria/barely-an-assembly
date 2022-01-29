// priority: 100

// GENERAL
//'kubejs:dummy_fluid_item',
hide1(['diregoo:antigoobeacon', 'diregoo:gooliminationfieldgen', 'diregoo:goonade', 'diregoo:corefreeze', 'diregoo:coremelt']);

hide1(['itemfilters:always_true', 'itemfilters:always_false', 'itemfilters:or', 'itemfilters:and', 'itemfilters:not', 'itemfilters:xor', 'itemfilters:tag', 'itemfilters:mod', 'itemfilters:item_group', 'itemfilters:id_regex', 'itemfilters:id_regex', 'itemfilters:damage', 'itemfilters:block', 'itemfilters:max_count', 'itemfilters:strong_nbt', 'itemfilters:weak_nbt', 'itemfilters:custom', 'ftbquests:detector', 'ftbquests:missing_item', 'itemfilters:item_group', 'ftbquests:barrier', 'ftbquests:stage_barrier', 'ftbquests:custom_icon']);

hide1(['adpother:polluted_water_bucket', 'adpother:iron_filter_frame', 'adpother:iron_respirator', 'adpother:gold_respirator', 'adpother:diamond_respirator', 'adpother:gold_filter_frame', 'adpother:iron_vacuum_tube', 'adpother:gold_vacuum_tube', 'adpother:diamond_vacuum_tube', 'adpother:diamond_filter_frame', 'adpother:iron_vacuum_bag', 'adpother:gold_vacuum_bag', 'adpother:diamond_vacuum_bag', 'adpother:aerometer', 'adpother:dust']);

hide2('theoneprobe:', ['gold_helmet_probe', 'diamond_helmet_probe', 'iron_helmet_probe', 'probe', 'creativeprobe']);

// STORAGE
//hide2('krate:', ['collect_upgrade', 'krate_basic', 'krate_large', 'small_to_basic', 'basic_to_big', 'big_to_large', 'compacting_upgrade']);
hide1(['minecraft:barrel']);

// CREATE
hide3('create:', colors, '_toolbox');
hide3('create:', colors, '_seat');
hide3('create:', colors, '_valve_handle');
hide2('create:', ['basin', 'mechanical_mixer', 'empty_blaze_burner', 'blaze_burner', 'item_drain', 'blaze_cake_base', 'blaze_cake', 'creative_blaze_cake', 'bar_of_chocolate', 'sweet_roll', 'chocolate_glazed_berries', 'honeyed_apple', 'builders_tea', 'dough', 'honey_bucket', 'chocolate_bucket', 'shadow_steel_casing', 'refined_radiance_casing', 'chromatic_compound', 'shadow_steel', 'refined_radiance', 'wand_of_symmetry', 'handheld_worldshaper', 'polished_rose_quartz', 'rose_quartz', 'cinder_flour', 'natural_scoria', 'copper_ore', 'adjustable_crate', 'powdered_obsidian', 'flywheel', 'furnace_engine', 'crafting_blueprint', 'sand_paper', 'red_sand_paper', 'crimson_window', 'warped_window', 'crimson_window_pane', 'warped_window_pane', 'windmill_bearing', 'sail_frame', 'white_sail', 'creative_motor', 'creative_fluid_tank', 'creative_crate', 'copper_shingles', 'copper_tiles', 'limesand']);

hide4('create:', ['tiled', 'framed', 'horizontal_framed', 'vertical_framed'], '_glass', ['', '_pane']);
hide1(['create:oak_window_pane', 'create:spruce_window_pane', 'create:birch_window_pane', 'create:jungle_window_pane', 'create:acacia_window_pane', 'create:dark_oak_window_pane', 'create:ornate_iron_window_pane']);

const __sto = ['limestone', 'weathered_limestone', 'dolomite', 'gabbro', 'scoria', 'dark_scoria'];
const __st = __sto.concat(['andesite', 'diorite', 'granite']);
hide3('create:', __st, '_pillar');
hide4('create:', ['layered', 'mossy', 'overgrown'], '_', __st);
__st.forEach(A => hide4('create:', [A+'_cobblestone', A+'_bricks', 'fancy_'+A+'_bricks', 'paved_'+A], '', ['', '_stairs', '_slab', '_wall']));
hide4('create:', ['chiseled_', ''], '', __sto);
hide4('create:polished_', __sto, '', ['', '_stairs', '_slab', '_wall']);

hide2('createaddition:', ['accumulator', 'overcharged_hammer', 'spool', 'copper_spool', 'gold_spool', 'gold_wire', 'connector', 'diamond_grit', 'cake_base_baked', 'cake_base', 'honey_cake', 'chocolate_cake', 'gold_rod', 'iron_rod', 'copper_rod', 'copper_wire', 'redstone_relay', 'charging_chromatic_compound', 'overcharged_alloy', 'iron_wire', 'heater', 'zinc_sheet', 'brass_rod', 'creative_energy', 'furnace_burner', 'crude_burner', 'diamond_grit_sandpaper', 'seed_oil_bucket', 'overcharged_casing', 'tesla_coil']);

hide2('steampowered:', ['bronze_sheet', 'alternator', 'bronze_burner', 'bronze_boiler', 'steel_burner', 'steel_boiler']);
hide1(['steampowered:steel_cogwheel', 'steampowered:steel_large_cogwheel', 'steampowered:cast_iron_cogwheel', 'steampowered:cast_iron_large_cogwheel', 'steampowered:bronze_cogwheel', 'steampowered:bronze_large_cogwheel', 'steampowered:pressurized_gas_container']);

// IMMERSIVE ENGINEERING

hide1(['immersiveengineering:concrete_three_quarter', 'immersiveengineering:concrete_quarter', 'immersiveengineering:concrete_sheet', 'immersiveengineering:slab_cokebrick', 'immersiveengineering:slab_blastbrick', 'immersiveengineering:slab_blastbrick_reinforced', 'immersiveengineering:slab_hempcrete', 'immersiveengineering:slab_concrete', 'immersiveengineering:slab_concrete_tile', 'immersivepetroleum:asphalt_slab', 'immersiveengineering:slab_alloybrick', 'immersiveengineering:slab_insulating_glass', 'immersiveengineering:slab_concrete_leaded', 'immersiveengineering:wirecoil_structure_steel', 'immersiveengineering:treated_wood_vertical', 'immersiveengineering:slab_treated_wood_vertical', 'immersiveengineering:stairs_treated_wood_vertical', 'immersiveengineering:treated_wood_packaged', 'immersiveengineering:slab_treated_wood_packaged', 'immersiveengineering:stairs_treated_wood_packaged', 'immersiveengineering:fluorescent_tube', 'immersiveengineering:concrete_tile', 'immersiveengineering:stairs_concrete_tile', 'immersiveengineering:cushion', 'immersiveengineering:sawdust', 'immersiveengineering:treated_post', 'immersiveengineering:steel_post', 'immersiveengineering:steel_slope', 'immersiveengineering:turntable', 'immersiveengineering:firework', 'immersiveengineering:steel_scaffolding_standard', 'immersiveengineering:stairs_steel_scaffolding_standard', 'immersiveengineering:slab_steel_scaffolding_standard', 'immersiveengineering:steel_scaffolding_grate_top', 'immersiveengineering:stairs_steel_scaffolding_grate_top', 'immersiveengineering:slab_steel_scaffolding_grate_top', 'immersiveengineering:stairs_steel_scaffolding_wooden_top', 'immersiveengineering:slab_steel_scaffolding_wooden_top']);

hide1(['immersiveengineering:shader_bag_common', 'immersiveengineering:shader_bag_ie_masterwork', 'immersiveengineering:shader_bag_rare', 'immersiveengineering:shader_bag_uncommon', 'immersiveengineering:shader_bag_epic', 'immersiveengineering:bannerpattern_hammer', 'immersiveengineering:bannerpattern_bevels', 'immersiveengineering:bannerpattern_treated_wood', 'immersiveengineering:bannerpattern_windmill', 'immersiveengineering:bannerpattern_wolf_r', 'immersiveengineering:bannerpattern_wolf_l', 'immersiveengineering:bannerpattern_wolf']);

hide2('immersiveengineering:conveyor_', ['basic', 'redstone', 'dropper', 'vertical', 'splitter', 'extract', 'covered', 'droppercovered', 'verticalcovered', 'extractcovered', 'splittercovered']);

hide2('immersiveengineering:', ['crate', 'reinforced_crate', 'minecart_woodencrate', 'minecart_reinforcedcrate', 'thermoelectric_generator', 'metal_ladder_none', 'craftingtable', 'metal_ladder_alu', 'metal_ladder_steel', 'toolbox', 'sorter', 'fluid_pump', 'fluid_sorter', 'fluid_pipe', 'silver', 'dust_wood', 'balloon', 'lantern', 'electron_tube', 'potion', 'bannerpattern_ornate', 'coke', 'slab_coke', 'item_batcher', 'fluid_placer', 'wooden_barrel', 'metal_barrel', 'minecart_woodenbarrel', 'minecart_metalbarrel', 'gunpowder_barrel', 'furnace_heater', 'toolupgrade_drill_lube', 'toolupgrade_revolver_bayonet', 'jerrycan', 'mold_packing_9', 'mold_packing_4', 'mold_bullet_casing', 'coresample', 'concrete_sprayed', 'strip_curtain', 'watermill', 'waterwheel_segment', 'capacitor_creative']);

hide4('immersiveengineering:', ['', 'slab_'], 'sheetmetal_colored_', colors);

hide2('immersiveengineering:armor_faraday_', ['head', 'chest', 'legs', 'feet']);

hide3('immersiveengineering:', ['sword'], '_steel');

hide2('immersivepetroleum:', ['petcoke_block']);

// MEKANISM

hide2('mekanismgenerators:', ['module_geothermal_generator_unit', 'wind_generator', 'gas_burning_generator', 'bio_generator', 'heat_generator']);

hide4('mekanism:', ['basic', 'advanced', 'elite', 'ultimate'], '_', ['fluid_tank', 'energy_cube', 'universal_cable', 'bin', 'mechanical_pipe', 'logistical_transporter']);

hide2('mekanism:mekasuit_', ['helmet', 'bodyarmor', 'pants', 'boots']);
hide3('mekanism:module_', ['nutritional_injection', 'jetpack', 'vision_enhancement', 'solar_recharging', 'attack_amplification', 'hydraulic_propulsion', 'locomotive_boosting', 'dosimeter', 'excavation_escalation', 'electrolytic_breathing', 'gravitational_modulating', 'vein_mining', 'farming', 'teleportation', 'charge_distribution', 'energy', 'silk_touch', 'radiation_shielding', 'inhalation_purification', 'magnetic_attraction', 'laser_dissipation', 'shearing', 'geiger', 'elytra', 'frost_walker'], '_unit');

hide2('mekanism:', ['cardboard_box', 'electric_bow', 'atomic_disassembler', 'creative_bin', 'restrictive_transporter', 'diversion_transporter', 'logistical_sorter', 'creative_fluid_tank', 'creative_energy_cube', 'enriched_iron', 'meka_tool', 'antiprotonic_nucleosynthesizer', 'personal_chest', 'electric_pump', 'fluidic_plenisher', 'qio_drive_base', 'qio_drive_hyper_dense', 'qio_drive_time_dilating', 'qio_drive_supermassive', 'qio_drive_array', 'qio_dashboard', 'qio_importer', 'qio_exporter', 'qio_redstone_adapter', 'portable_qio_dashboard', 'osmium_compressor', 'robit', 'dust_sulfur', 'digital_miner', 'formulaic_assemblicator', 'crafting_formula', 'module_base', 'modification_station', 'hdpe_elytra', 'upgrade_stone_generator', 'laser_tractor_beam', 'basic_compressing_factory', 'advanced_compressing_factory', 'elite_compressing_factory', 'ultimate_compressing_factory', 'quantum_entangloporter']);

// INGOTS

hide2('create:', ['iron_sheet', 'golden_sheet', 'crushed_brass']);
hide3('create:crushed_', ['platinum', 'zinc', 'osmium', 'silver', 'tin', 'aluminum', 'nickel'], '_ore');
hide2('create:zinc_', ['ingot', 'nugget', 'ore', 'block']);
hide4('create:', ['copper', 'brass'], '_', ['ingot', 'nugget', 'sheet']);

hide3('mekanism:', ['copper', 'fluorite', 'tin', 'osmium', 'uranium', 'lead'], '_ore');
hide4('mekanism:', ['shard', 'crystal', 'dust', 'dirty_dust', 'clump', 'ingot', 'nugget', 'block'], '_', ['osmium', 'tin']);
hide4('mekanism:', ['nugget', 'ingot', 'block'], '_', ['refined_glowstone', 'copper', 'uranium', 'lead', 'bronze', 'steel']);
hide4('mekanism:', ['dirty_dust', 'dust'], '_' , ['iron', 'gold', 'copper', 'lead', 'uranium']);
hide2('mekanism:dust_', ['bronze', 'steel', 'lapis_lazuli', 'quartz', 'emerald', 'diamond']);
hide2('mekanism:', ['dirty_netherite_scrap', 'dust_netherite', 'enriched_tin', 'block_charcoal']);

hide2('immersiveengineering:ore_', ['copper', 'silver', 'aluminum', 'lead', 'nickel', 'uranium']);
hide4('immersiveengineering:', ['plate', 'dust', 'sheetmetal', 'slab_sheetmetal', 'storage', 'nugget', 'ingot', 'slab_storage'], '_', ['constantan', 'silver', 'nickel', 'aluminum']);
hide4('immersiveengineering:', ['nugget', 'storage', 'slab_storage'], '_', ['copper', 'lead', 'uranium', 'electrum', 'steel']);
hide2('immersiveengineering:alu_', ['fence', 'wallmount', 'post', 'slope']);
hide4('immersiveengineering:', ['alu', 'stairs_alu', 'slab_alu'], '_scaffolding_', ['standard', 'grate_top', 'wooden_top']);
hide2('immersiveengineering:', ['stick_aluminum', 'wire_aluminum', 'chute_aluminum']);

hide4('immersiveposts:', ['fence', 'stick'], '_', ['constantan', 'nickel', 'silver']);

hide1(['minecraft:coal_block', 'minecraft:diamond_block', 'minecraft:lapis_block', 'minecraft:gold_block', 'minecraft:iron_block', 'minecraft:emerald_block', 'minecraft:quartz_block', 'minecraft:redstone_block', 'mekanism:block_refined_obsidian', 'mekanism:block_charcoal', 'mekanism:block_fluorite', 'pneumaticcraft:compressed_iron_block', 'minecraft:diamond_block', 'create:brass_block', 'create:copper_block']);
hide1(['minecraft:gold_nugget', 'minecraft:iron_nugget', 'mekanism:nugget_refined_obsidian']);

// SPACE-BOSS-TOOLS
//hide2('boss_tools:', ['iron_plate', 'iron_stick', 'steel_ingot', 'steel_sword', 'solar_panel', 'blue_iron_plating_block', 'chesse', 'nasa_workbench']);
//hide1(['boss_tools_giselle_addon:oxygen_can', 'boss_tools_giselle_addon:electric_blast_furnace', 'boss_tools_giselle_addon:advanced_compressor', 'boss_tools_giselle_addon:gravity_normalizer', 'boss_tools_giselle_addon:module_space_breathing_unit', 'boss_tools_giselle_addon:module_gravity_normalizing_unit', 'boss_tools_giselle_addon:module_space_fire_proof_unit', 'boss_tools_giselle_addon:module_venus_acid_proof_unit']);
//hide2('boss_tools:', ['coal_torch', 'coal_lantern', 'netherite_oxygen_mask', 'netherite_space_suit', 'netherite_space_pants', 'netherite_space_boots', 'coal_generator', 'blast_furnace', 'compressor', 'fuel_refinery', 'oxygen_loader', 'water_pump', 'fuel_bucket', 'oil_bucket', 'hammer', 'steel_nugget', 'steel_block', 'iron_plating_block', 'rusted_iron_pillar_block', 'rusted_iron_plating_block', 'iron_mark_block', 'rover', 'oxygen_gear', 'oxygen_tank', 'wheel', 'engine_frame', 'engine_fan', 'iron_tank', 'golden_tank', 'diamond_tank', 'desh_plate', 'ice_shard']);
//hide1(['#boss_tools:flags']);

// EXTENDED CRAFTING
hide2('extendedcrafting:', ['handheld_table', 'recipe_maker', 'nether_star_block', 'frame', 'luminessence', 'luminessence_block', 'redstone_ingot_block', 'redstone_ingot', 'redstone_nugget', 'black_iron_slate', 'pedestal', 'crafting_core', 'recipe_maker', 'ultimate_singularity', 'advanced_auto_table', 'elite_auto_table', 'ultimate_auto_table']);
hide2('extendedcrafting:ender_', ['star', 'alternator', 'crafter', 'star_block']);
hide3('extendedcrafting:', ['basic', 'advanced', 'elite', 'ultimate'], '_table');
hide4('extendedcrafting:', ['', 'enhanced_'], 'ender_', ['ingot_block', 'ingot', 'nugget', 'catalyst', 'component']);
hide4('extendedcrafting:', ['black_iron', 'crystaltine', 'the_ultimate'], '_', ['block', 'ingot', 'nugget']);
hide4('extendedcrafting:', ['basic', 'advanced', 'elite', 'ultimate', 'redstone', 'crystaltine', 'the_ultimate'], '_', ['catalyst', 'component']);

// FACTORIORES
hide3('factoriores:', ['diamond', 'emerald', 'redstone', 'lapis', 'quartz', 'stone', 'sulfur', 'zinc', 'aluminum', 'nickel', 'silver'], '_ore');
hide2('factoriores:', ['creative_miner', 'sulfur_block', 'drill_head', 'sulfur_dust', 'coal_nugget', 'sulfuric_acid_bucket', 'water_deposit', 'lava_deposit', 'oil_deposit']);

/*
// AUTOMATED
hide1(['createautomated:picker', 'createautomated:wet_sponge_sail', 'createautomated:lava_sponge_sail', 'createautomated:sponge_sail', 'createautomated:lapis_ore_piece', 'createautomated:lapis_node', 'createautomated:iron_ore_piece', 'createautomated:iron_node', 'createautomated:zinc_ore_piece', 'createautomated:diamond_bit', 'createautomated:crushed_prismarine', 'createautomated:cinder_flour_node', 'createautomated:cinder_flour_ore_piece', 'createautomated:copper_node', 'createautomated:copper_ore_piece', 'createautomated:gold_node', 'createautomated:gold_ore_piece', 'createautomated:zinc_node', 'createautomated:molten_emerald_bucket', 'createautomated:emerald_bit', 'createautomated:molten_diamond_bucket']);

/*
// GEOLOSYS
hide2('geolosys:', ['peat', 'rhododendron', 'peat_coal', 'lignite_coal', 'bituminous_coal', 'anthracite_coal', 'lignite_coal_coke', 'bituminous_coal_coke', 'prospectors_pick']);
hide3('geolosys:', ['iron', 'gold', 'uranium', 'yellorium', 'osmium', 'ancient_debris', 'nether_gold'], '_cluster');
hide4('geolosys:', ['copper', 'tin', 'silver', 'lead', 'aluminum', 'nickel', 'platinum', 'zinc'], '_', ['cluster', 'ingot', 'nugget']);
hide4('geolosys:', ['lignite', 'bituminous_coal', 'anthracite_coal', 'coal', 'cinnabar', 'gold', 'lapis', 'quartz', 'kimberlite', 'beryl', 'nether_gold', 'ancient_debris', 'hematite', 'limonite', 'malachite', 'azurite', 'cassiterite', 'teallite', 'galena', 'bauxite', 'platinum', 'autunite', 'sphalerite'], '_ore', ['', '_sample']);
*/
