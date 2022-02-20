onEvent('item.tooltip', tooltip => {
    // ACTUALLY TIPS
    tooltip.add('mekanismgenerators:hohlraum', '§3Heavy Water can be extracted using Immersive Engineering Pumpjack.');
    tooltip.add('mekanism:fluorite_gem', '§3Mined via Immersive Engineering Excavator.');
    tooltip.add('factoriores:uranium_ore', '§3Mining requires liquid Hydrofluoric Acid or Sulfuric Acid.');
    tooltip.add('create:crushed_uranium_ore', '§3Mining requires liquid Hydrofluoric Acid or Sulfuric Acid.');

    tooltip.add('create:chute', '§3Can be placed on top of Little Logistics Docks for automation.');

    ['mekanism:basic_tier_installer', 'mekanism:advanced_tier_installer', 'mekanism:elite_tier_installer', 'mekanism:ultimate_tier_installer'].forEach(X => tooltip.add(X, '§3Some machines can be upgraded by [shift + right click]ing this onto them. Tiers can not be skipped and must be installed in sequence.'));

    ['create:schematicannon', 'create:schematic_table'].forEach(X => tooltip.add(X, '§3Basic Schematics Available.'));
    ['create:schematicannon', 'create:schematic_table', 'immersivepetroleum:projector'].forEach(X => tooltip.add(X, '§3Multiblock Building Helper.'));
    ['create:rotation_speed_controller', 'create:stressometer', 'create:goggles', 'create:speedometer'].forEach(X => tooltip.add(X, '§3Fine RPM control.'));

    ['appliedenergistics2:purified_certus_quartz_crystal'].forEach(X => tooltip.add(X, '§3Maybe there will be a new reaction with the monolith?'));
    ['extendedcrafting:the_ultimate_block'].forEach(X => tooltip.add(X, '§3It has an uncanny attraction towards the monolith.'));

    //.forEach(X => tooltip.add(X, '§3'));
    //tooltip.add(, '§3');

    // BASIC
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

    // MANUALS
    ['immersiveengineering:manual', 'patchouli:guide_book'].forEach(Z => {
        tooltip.add(Z, '§4Note: Things listed here might have been removed.');
    });
});
