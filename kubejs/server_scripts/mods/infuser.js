onEvent('recipes', event => {
    function minf(X, Y, W, Z) {
        event.remove({ output: Z });
        event.custom({
            type: 'mekanism:metallurgic_infusing', itemInput: { ingredient: Item.of(X) }, infusionInput: { amount: W, tag: Y }, output: Item.of(Z)
        });
    }
    minf('#forge:plates/iron', 'mekanism:redstone', 20, '#forge:circuits/basic');
    minf('#forge:plates/iron', 'mekanism:gold', 20, '#forge:alloys/advanced');
    minf('minecraft:ender_pearl', 'mekanism:gold', 20, 'minecraft:ender_eye');
    minf('mekanism:dust_refined_obsidian', 'mekanism:refined_obsidian', 40, 'mekanism:ingot_refined_obsidian');

    minf('create:andesite_casing', 'mekanism:redstone', 800, 'create:copper_casing');
    minf('create:copper_casing', 'mekanism:gold', 1600, 'immersiveengineering:alloybrick');
});
