onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
        ores.blocks = ['boss_tools:moon_cheese_ore', 'boss_tools:moon_glowstone_ore', 'boss_tools:moon_iron_ore', 'boss_tools:mars_iron_ore', 'boss_tools:mercury_iron_ore', 'boss_tools:venus_gold_ore'];
    });
});

onEvent('worldgen.add', event => {
});
