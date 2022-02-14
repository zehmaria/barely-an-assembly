onEvent('block.tags', event => {
    event.add('diregoo:gooresistant', ['custommachinery:custom_machine_block', 'appliedenergistics2:creative_energy_cell', 'appliedenergistics2:controller', 'kubejs:monolith_node', 'create:shadow_steel_casing', 'pneumaticcraft:reinforced_chest', 'appliedenergistics2:smooth_sky_stone_chest', 'extendedcrafting:the_ultimate_block']);
    event.add('appliedenergistics2:blacklisted/annihilation_plane', ['#diregoo:gooresistant', 'diregoo:gooblock', 'diregoo:gooblockterrain']);
});

onEvent('recipes', event => {
    const __f = 'appliedenergistics2:purified_fluix_crystal';
    addShaped(event, [
        ['diregoo:focust1',    [[Khd, Dad, Khd], [Dad, _K1, Dad], [Khd, Dad, Khd]]],
        ['diregoo:focust2',    [[Khd, Dad, Khd], [Dad, _K2, Dad], [Khd, Dad, Khd]]],
        ['diregoo:focust3',    [[Khd, Dad, Khd], [Dad, _K3, Dad], [Khd, Dad, Khd]]],
        ['diregoo:focust4',    [[Khd, Dad, Khd], [Dad, _K4, Dad], [Khd, Dad, Khd]]],

        ['diregoo:powerampt1', [[tPi, Dad, tPi], [__f, _K1, __f], [tPi, Dad, tPi]]],
        ['diregoo:powerampt2', [[tPi, Dad, tPi], [__f, _K2, __f], [tPi, Dad, tPi]]],
        ['diregoo:powerampt3', [[tPi, Dad, tPi], [__f, _K3, __f], [tPi, Dad, tPi]]],
        ['diregoo:powerampt4', [[tPi, Dad, tPi], [__f, _K4, __f], [tPi, Dad, tPi]]],
    ]);

    event.remove({ output: 'diregoo:gooliminationfieldgen' });
});
