onEvent('item.tags', event => {
    event.add('barely_tips:torch_lamp_lantern_glowstone', ['minecraft:campfire', 'pneumaticcraft:kerosene_lamp', 'immersiveengineering:electric_lantern', 'immersiveengineering:floodlight', 'appliedenergistics2:semi_dark_monitor']);

    event.add('barely_tips:farming_hoes', ['minecraft:farmland', 'minecraft:grass_block', 'create:mechanical_plough']);

    event.add('barely_tips:pickaxe_axe_shovel', ['pickletweaks:wooden_paxel', 'pickletweaks:iron_paxel', 'pickletweaks:diamond_paxel']);
});

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
const BS = 'immersiveengineering:storage_steel';
onEvent('item.entity_interact', event => {
    console.log(event.getTarget().getType());
    if ((event.getTarget().getType() === 'boss_tools:rocket_t1' ||
         event.getTarget().getType() === 'boss_tools:rocket_t2' ||
         event.getTarget().getType() === 'boss_tools:rocket_t3')
        && event.entity.isCrouching()) { event.cancel(); }
    if (event.getTarget().getType() === 'boss_tools:lander') {
        for (var i = event.getTarget().getBlock().getUp().getUp().getUp().getY(); i <= 256; i++) {
            event.getWorld().getBlock(event.getTarget().getBlock().getX(), i, event.getTarget().getBlock().getZ()).set('kubejs:elevator_cable');
        }
        event.getTarget().getBlock().getUp().getUp().set('mekanism:teleporter');
        event.getTarget().getBlock().getUp().set('mekanism:quantum_entangloporter');
        event.getTarget().getBlock().set(BS);
        event.getTarget().getBlock().getDown().set(BS);
        event.getTarget().getBlock().getDown().getWest().set(BS);
        event.getTarget().getBlock().getDown().getEast().set(BS);
        event.getTarget().getBlock().getDown().getNorth().set(BS);
        event.getTarget().getBlock().getDown().getNorth().getWest().set(BS);
        event.getTarget().getBlock().getDown().getNorth().getEast().set(BS);
        event.getTarget().getBlock().getDown().getSouth().set(BS);
        event.getTarget().getBlock().getDown().getSouth().getWest().set(BS);
        event.getTarget().getBlock().getDown().getSouth().getEast().set(BS);
        event.getTarget().mergeFullNBT({InventoryCustom:{Size:2,Items:[{Slot:1,id:"minecraft:air",Count:true}]}});
        event.getTarget().kill();
        event.server.runCommandSilent(`execute as ${event.player.name} in ${event.player.world.dimension} run summon firework_rocket ${event.getTarget().x} ${event.getTarget().y + 0.5} ${event.getTarget().z} {LifeTime:20,FireworksItem:{id:firework_rocket,Count:1,tag:{Fireworks:{Flight:200,Explosions:[{Type:2,Flicker:1b,Trail:1b,Colors:[I;8073150,6719955],FadeColors:[I;14602026,11250603]}]}}}}`);
        event.player.tell('Successfully deplayed!');
    }
});

onEvent('entity.spawned', event => {
    if (event.getEntity().getName() === 'Lander') {
        event.getEntity().setCustomName("<< Right-click to deploy >>");
    }
});

onEvent('block.right_click', event => {
    if (event.block.equals('mekanism:qio_drive_array')) {
        if (event.item.equals('appliedenergistics2:crafting_terminal')) {
            event.item.setCount(0); event.player.give('mekanism:qio_dashboard'); event.player.sendInventoryUpdate();
            event.player.tell('A mysterious reaction occurs!');
        }
        if (event.item.equals('appliedenergistics2:import_bus')) {
            event.item.setCount(0); event.player.give('mekanism:qio_importer'); event.player.sendInventoryUpdate();
            event.player.tell('A mysterious reaction occurs!');
        }
        if (event.item.equals('appliedenergistics2:export_bus')) {
            event.item.setCount(0); event.player.give('mekanism:qio_exporter'); event.player.sendInventoryUpdate();
            event.player.tell('A mysterious reaction occurs!');
        }
        if (event.item.equals('appliedenergistics2:level_emitter')) {
            event.item.setCount(0); event.player.give('mekanism:qio_redstone_adapter'); event.player.sendInventoryUpdate();
            event.player.tell('A mysterious reaction occurs!');
        }
        if (event.item.equals('appliedenergistics2:64k_storage_cell')) {
            event.item.setCount(0); event.player.give('mekanism:qio_drive_base'); event.player.sendInventoryUpdate();
            event.player.tell('A mysterious reaction occurs!');
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

    console.log(event.block);
    console.log(event.item);
    if (event.block.equals('myrtrees:filled_rubberwood_log') && event.item.equals('myrtrees:tree_tap')) {
        if (event.block.getEntityData().latex == 10000) {
            console.log(event.block.getEntityData());
            event.block.mergeEntityData({ latex: 256000 });
        }
        console.log(event.block.getEntityData());
    }
});

onEvent('block.left_click', event => {
    if (event.block.equals('kubejs:monolith_node')) {
        event.cancel();
        if (event.item.equals('minecraft:wooden_pickaxe')) {
            event.player.tell('Not sharp enough, it breaks!');
            event.item.setCount(0);
        } else if (event.item.equals('pickletweaks:iron_paxel')) {
            event.player.tell('Surface scratched, but it breaks!');
            event.item.setCount(0);
            if (event.block.getDown().getDown().getDown().equals('kubejs:monolith_node')) {
                event.block.getDown().getDown().getDown().set('appliedenergistics2:controller');
            } else if (event.block.getDown().getDown().equals('kubejs:monolith_node')) {
                event.block.getDown().getDown().set('appliedenergistics2:controller');
            } else if (event.block.getDown().equals('kubejs:monolith_node')) {
                event.block.getDown().set('appliedenergistics2:controller');
            } else event.block.set('appliedenergistics2:controller');
        } else if (event.item.equals('pickletweaks:diamond_paxel')) {
            event.player.tell('Surface scratched!');
            if (event.block.getDown().getDown().getDown().equals('kubejs:monolith_node')) {
                event.block.getDown().getDown().getDown().set('appliedenergistics2:controller');
            } else if (event.block.getDown().getDown().equals('kubejs:monolith_node')) {
                event.block.getDown().getDown().set('appliedenergistics2:controller');
            } else if (event.block.getDown().equals('kubejs:monolith_node')) {
                event.block.getDown().set('appliedenergistics2:controller');
            } else event.block.set('appliedenergistics2:controller');
        } else { event.player.tell('You are unable to scratch the surface.'); }
    }
});
//Item.of('myrtrees:rubberwood_log', '{BlockEntityTag:{id:"myrtrees:filled_rubberwood_log",latex:2000}}')
