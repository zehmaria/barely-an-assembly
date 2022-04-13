onEvent('recipes', event => {
    function minf(X, Y, W, Z) {
        event.remove({ output: Z });
        event.custom({
            type: 'mekanism:metallurgic_infusing', itemInput: { ingredient: Item.of(X) }, infusionInput: { amount: W, tag: Y }, output: Item.of(Z)
        });
    }

    minf('3x #forge:plates/iron', 'mekanism:redstone', 20, '#forge:circuits/basic');
    minf('3x #forge:plates/iron', 'mekanism:gold', 20, '#forge:alloys/advanced');
    minf('minecraft:ender_pearl', 'mekanism:gold', 20, 'minecraft:ender_eye');

    minf('create:andesite_casing', 'mekanism:redstone', 160, 'create:copper_casing');
    minf('create:copper_casing', 'mekanism:gold', 320, 'immersiveengineering:alloybrick');
    minf('pickletweaks:iron_paxel', 'mekanism:diamond', 640, 'pickletweaks:diamond_paxel');
});
