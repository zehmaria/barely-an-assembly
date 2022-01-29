/*
onEvent('recipes', event => {
    // REFINED
    const Rpb = 'refinedstorage:processor_binding';

    event.replaceInput({}, 'refinedstorage:quartz_enriched_iron', tPs);

    event.replaceInput({}, 'refinedstorage:machine_casing', Kca);
    event.replaceInput({}, 'refinedstorage:basic_processor', _K1);
    event.replaceInput({}, 'refinedstorage:advanced_processor', _K2);
    event.replaceInput({}, 'refinedstorage:improved_processor', _K3);
*/
//event.remove({ id: '/refinedstorage:coloring_recipes/*/' });
/*
    addShapeless(event, [
        ['refinedstorage:destruction_core', [_K1, 'diregoo:antigoopaste']],
        ['refinedstorage:construction_core', [_K1, 'minecraft:diamond']],
        ['refinedstorage:filter', [_K1, tPs, Mpp]],
    ]);

    // PROCESSORS
    function csAssembly(event, Z) {
        Z.forEach(zz => {
            event.remove({ output: zz[0] });
            var sq = [];
            zz[3].forEach(it => sq.push({ type: 'create:deploying', ingredients: [{ item: zz[1] }, Ingredient.of(it)], results: [{ item: zz[1] }] },));
            event.custom({
                type: 'create:sequenced_assembly',
                ingredient: Ingredient.of(zz[2]), transitionalItem: { item: zz[1] }, results: [{ item: zz[0] }],
                sequence: sq,
                loops: 1
            });
        });
    }
    csAssembly(event, [
        //['refinedstorage:raw_basic_processor', 'kubejs:imcomplete_raw_basic_processor',       Khd, [_K1, Rpb, Rsl, Kec]],
    ]);

});
*/


/*
//REFINED STORAGE
_qt('refinedstorage:controller', 'myrtrees:latex', 1000, 5000000, Kca);
_qt('refinedstorage:64k_storage_block', 'krate:krate_big', 9, 1000000, Kca);
_qt('refinedstorage:4096k_fluid_storage_block', 'create:fluid_tank', 512, 10000000, Cc3);
*/


/*
hide4('refinedstorage:', ["white", "orange", "magenta", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"], '_', ["controller", "creative_controller", "grid", "crafting_grid", "pattern_grid", "fluid_grid", "network_receiver", "network_transmitter", "relay", "detector", "security_manager", "wireless_transmitter", "disk_manipulator", "crafter", "crafter_manager", "crafting_monitor"]);

hide2('refinedstorage:', ['1k_storage_part', '4k_storage_part', '16k_storage_part', '64k_storage_part', '1k_storage_disk', '4k_storage_disk', '16k_storage_disk', '64k_fluid_storage_disk', 'creative_storage_disk', '64k_fluid_storage_part', '256k_fluid_storage_part', '1024k_fluid_storage_part', '4096k_fluid_storage_part', '64k_storage_disk', '256k_fluid_storage_disk', '1024k_fluid_storage_disk', '4096k_fluid_storage_disk', 'creative_fluid_storage_disk', 'creative_storage_block', 'creative_storage_block', 'creative_fluid_storage_block', 'storage_housing', 'silk_touch_upgrade', 'fortune_1_upgrade', 'fortune_2_upgrade', 'fortune_3_upgrade', 'creative_portable_grid', 'portable_grid', 'creative_wireless_crafting_monitor', 'creative_wireless_fluid_grid', 'creative_wireless_grid', 'disk_manipulator', 'creative_controller', 'disk_drive', 'machine_casing', 'quartz_enriched_iron', 'quartz_enriched_iron_block', 'silicon', 'improved_processor', 'raw_basic_processor', 'raw_improved_processor', 'processor_binding', 'advanced_processor', 'basic_processor', 'raw_advanced_processor', 'cover', 'hollow_cover', '1k_storage_block', '4k_storage_block', '16k_storage_block', '64k_fluid_storage_block', '256k_fluid_storage_block', '1024k_fluid_storage_block']);
*/
