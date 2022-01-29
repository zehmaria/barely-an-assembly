onEvent('item.tags', event => {});

onEvent('recipes', event => {});

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
    event.player.tell('Warning: This modpack is still under development. Configuration and recipes are currently not completely fine tuned and quest line is imcomplete.');
});

//PLACING
onEvent('block.right_click', event => {
    if (event.item.equals('appliedenergistics2:purified_fluix_crystal') && (event.item.getCount() === 8)) {
        event.block.offset(event.getFacing()).set('appliedenergistics2:fluix_block');
        event.item.setCount(0);
    }
    if (event.item.equals('appliedenergistics2:purified_certus_quartz_crystal') && (event.item.getCount() === 8)) {
        event.block.offset(event.getFacing()).set('appliedenergistics2:quartz_block');
        event.item.setCount(0);
    }
});
