onEvent('item.modification', event => {
    ['diregoo:gooliminationfieldgen', 'diregoo:antigoofieldgen'].forEach(X => {
        event.modify(X, Y => Y.setMaxStackSize(1));
    });

    ['minecraft:rabbit_stew', 'minecraft:mutton', 'minecraft:cooked_mutton', 'minecraft:beetroot', 'minecraft:beetroot_soup', 'minecraft:sweet_berries', 'minecraft:apple', 'minecraft:mushroom_stew', 'minecraft:bread', 'minecraft:porkchop', 'minecraft:cooked_porkchop', 'minecraft:cod', 'minecraft:salmon', 'minecraft:tropical_fish', 'minecraft:pufferfish', 'minecraft:cooked_cod', 'minecraft:cooked_salmon', 'minecraft:cookie', 'minecraft:melon_slice', 'minecraft:dried_kelp', 'minecraft:beef', 'minecraft:cooked_beef', 'minecraft:chicken', 'minecraft:cooked_chicken', 'minecraft:rotten_flesh', 'minecraft:spider_eye', 'minecraft:carrot', 'minecraft:potato', 'minecraft:baked_potato', 'minecraft:poisonous_potato', 'minecraft:pumpkin_pie', 'minecraft:rabbit', 'minecraft:cooked_rabbit',

     'appliedenergistics2:purified_certus_quartz_crystal', 'appliedenergistics2:purified_fluix_crystal',

     'create:crushed_iron_ore', 'create:crushed_gold_ore', 'create:crushed_copper_ore', 'create:crushed_uranium_ore', 'create:crushed_lead_ore'].forEach(X => {
        event.modify(X, Y => Y.setMaxStackSize(8));
    });

    [].forEach(X => {
         event.modify(X, Y => Y.setMaxStackSize(16));
     });

    [].forEach(X => {
        event.modify(X, Y => Y.setMaxStackSize(64));
    });
});
