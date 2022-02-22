onEvent('item.tags', event => {});

onEvent('recipes', event => {
    //event.printTypes();
    addShaped(event, [
        ['myrtrees:wooden_bucket', [[log, air, log], [air, log, air]]],
    ]);
});

const hIT = ['diregoo:gooblockterrain', 'diregoo:gooblock'];
onEvent('block.break', event => {
    hIT.forEach(X => { if (event.block.equals(X)) {  event.entity.attack(10); event.entity.playSound('minecraft:block.glass.hit'); } });
});

onEvent('block.right_click', event => {
    if (event.block.equals('create:shadow_steel_casing') &&
        (event.item.equals('create:wrench') || event.item.equals('pneumaticcraft:pneumatic_wrench'))) {
        event.cancel(); event.entity.playSound('minecraft:block.wood.hit');
    }
    if (event.block.hasTag('minecraft:beds')) {
        event.cancel(); event.entity.playSound('minecraft:block.wood.hit');
    }
});

onEvent('player.logged_in', event => {
    event.player.tell('Warning: This modpack is still under testing.');
});

onEvent('block.right_click', event => {
    if (event.item.equals('appliedenergistics2:purified_certus_quartz_crystal') && (event.item.getCount() === 8)) {
        event.block.offset(event.getFacing()).set('appliedenergistics2:quartz_block');
        event.item.setCount(0);
    }
    if (event.block.hasTag('minecraft:beds')) {
        event.cancel();
        event.entity.playSound('minecraft:block.wood.hit');
    }
});

// CHANGING
onEvent('block.right_click', event => {
    if (event.block.equals('mekanism:qio_drive_array')) {
        if (event.item.equals('appliedenergistics2:crafting_terminal')) {
            event.item.setCount(0); event.player.give('mekanism:qio_dashboard'); event.player.sendInventoryUpdate();
        }
        if (event.item.equals('appliedenergistics2:import_bus')) {
            event.item.setCount(0); event.player.give('mekanism:qio_importer'); event.player.sendInventoryUpdate();
        }
        if (event.item.equals('appliedenergistics2:export_bus')) {
            event.item.setCount(0); event.player.give('mekanism:qio_exporter'); event.player.sendInventoryUpdate();
        }
        if (event.item.equals('appliedenergistics2:level_emitter')) {
            event.item.setCount(0); event.player.give('mekanism:qio_redstone_adapter'); event.player.sendInventoryUpdate();
        }
        if (event.item.equals('appliedenergistics2:64k_storage_cell')) {
            event.item.setCount(0); event.player.give('mekanism:qio_drive_base'); event.player.sendInventoryUpdate();
        }
        if (event.item.equals('diregoo:antigoofieldgen')) {
            if (event.block.getUp().equals('minecraft:air')){
                event.block.getUp().set('diregoo:gooliminationfieldgen');
                event.item.setCount(0);
                event.cancel();
            }
        }
    }
    if (event.block.equals('littlelogistics:tug_dock') || event.block.equals('littlelogistics:barge_dock')) {
        if (event.item.equals('create:chute')) {
            if (event.block.getUp().equals('minecraft:air')){
                event.block.getUp().set('minecraft:hopper', { facing:  event.block.getProperties().facing });
                event.item.setCount(event.item.getCount() - 1);
                event.cancel();
            }
        }
    }
});

onEvent('block.left_click', event => {
    if (event.block.equals('kubejs:monolith_node')) {
        event.cancel();
        if (event.item.equals('minecraft:wooden_pickaxe')) {
            event.player.tell('Not sharp enough, it breaks!');
            event.item.setCount(0);
        } else if (event.item.equals('immersiveengineering:pickaxe_steel')) {
            event.player.tell('Surface scrapped!');
            if (event.block.getDown().getDown().getDown().equals('kubejs:monolith_node')) {
                event.block.getDown().getDown().getDown().set('appliedenergistics2:controller');
            } else if (event.block.getDown().getDown().equals('kubejs:monolith_node')) {
                event.block.getDown().getDown().set('appliedenergistics2:controller');
            } else if (event.block.getDown().equals('kubejs:monolith_node')) {
                event.block.getDown().set('appliedenergistics2:controller');
            } else event.block.set('appliedenergistics2:controller');
        } else { event.player.tell('You are unable to scrap the surface.'); }
    }
});
