onEvent('recipes', event => {
    //event.remove({ type: 'create:splashing' });

    event.replaceInput({}, 'minecraft:piston', 'create:mechanical_piston');
    event.replaceInput({}, 'minecraft:bucket', 'create:fluid_tank');
    event.replaceInput({}, 'minecraft:water_bucket', 'create:fluid_tank');
    event.replaceInput({}, 'minecraft:hopper', 'create:chute');
    event.replaceInput({}, 'minecraft:dispenser', 'mekanism:pressure_disperser');
    event.replaceInput({}, 'minecraft:dried_kelp', 'myrtrees:latex');

    event.replaceInput({}, '#forge:ingots/refined_glowstone', '#forge:ingots/copper');
    event.replaceInput({}, '#forge:ingots/netherite', 'mekanism:pellet_polonium');

    event.replaceInput({}, 'create:brass_ingot', '#forge:ingots/electrum');
    event.replaceInput({}, 'minecraft:lapis_lazuli', 'immersiveengineering:ingot_hop_graphite');
    event.replaceInput({}, '#forge:gems/lapis', 'immersiveengineering:ingot_hop_graphite');
    event.replaceInput({}, '#forge:gems/emerald', '#forge:plates/uranium');
    event.replaceInput({}, '#forge:gems/quartz', 'appliedenergistics2:purified_certus_quartz_crystal');
    event.replaceInput({}, '#forge:storage_blocks/diamond', '#forge:gems/diamond');
    event.replaceInput({}, '#forge:dusts/diamond', '#forge:gems/diamond');

    event.replaceInput({}, '#forge:wires/aluminum', '#forge:wires/lead');

    event.replaceInput({}, '#forge:glass_panes', Khd);

    event.replaceInput({}, 'mekanism:personal_chest', '#forge:chests');
    event.replaceInput({}, 'mekanism:enriched_iron', '#mekanism:enriched/obsidian');

    event.replaceInput({}, 'immersiveengineering:fluid_pipe', 'create:fluid_pipe');
    event.replaceInput({}, 'immersiveengineering:electron_tube', 'create:electron_tube');
    event.replaceInput({}, 'immersiveengineering:metal_barrel', 'create:fluid_tank');
    event.replaceInput({}, 'immersiveengineering:steel_scaffolding_standard', 'immersiveengineering:steel_scaffolding_wooden_top');

    event.replaceInput({}, 'pneumaticcraft:plastic', Khd);
    event.replaceInput({}, 'pneumaticcraft:small_tank', 'create:fluid_tank');
    event.replaceInput({}, 'pneumaticcraft:cannon_barrel', 'create:potato_cannon');
    event.replaceInput({}, 'pneumaticcraft:vortex_cannon', 'create:potato_cannon');
    event.replaceInput({}, 'minecraft:golden_carrot', 'pneumaticcraft:compressed_iron_gear');
    event.replaceInput({}, '#minecraft:beds', 'minecraft:clock');
    event.replaceInput({}, 'pneumaticcraft:advanced_air_compressor', 'compressedcreativity:rotational_compressor');
    event.replaceInput({}, 'mekanism:module_radiation_shielding_unit', 'mekanism:hazmat_gown');

    event.replaceInput({}, '#forge:ingots/compressed_iron', tPs);
    event.replaceInput({}, '#pneumaticcraft:plastic_sheets', Khd);
    event.replaceInput({}, 'pneumaticcraft:turbine_rotor', 'mekanismgenerators:turbine_blade');
    event.replaceInput({}, 'pneumaticcraft:printed_circuit_board', _K4);
    event.replaceInput({}, 'pneumaticcraft:reinforced_brick_tile', 'immersiveengineering:blastbrick_reinforced');
    event.replaceInput({}, '#pneumaticcraft:upgrade_components', 'immersiveengineering:ingot_hop_graphite');

    [['nickel', 'lead'], ['bronze', 'electrum'], ['zinc', 'gold'], ['brass', 'electrum'], ['constantan', 'copper'],
     ['osmium', 'copper'], ['tin', 'iron'], ['silver', 'gold'], ['aluminum', 'gold']].forEach(A => {
        ['plates', 'ingots', 'nuggets', 'storage_blocks', 'rods', 'dusts'].forEach(B => {
            event.replaceInput({}, '#forge:' + B + '/' + A[0], '#forge:' + B + '/' + A[1]);
        });
     });

    // NUGGET->INGOT ; INGOT->PLATE ; PLATE->GEAR
    ['iron', 'gold', 'copper', 'lead', 'uranium', 'electrum', 'steel'].forEach(A => {
        event.replaceInput({}, '#forge:storage_blocks/' + A, 'pneumaticcraft:compressed_iron_gear');
        //event.replaceInput({}, '#forge:plates/' + A, '#forge:rods/' + A);
        event.replaceInput({}, '#forge:ingots/' + A, '#forge:plates/' + A);
        event.replaceInput({}, '#forge:nuggets/' + A, '#forge:ingots/' + A);
    });
});
