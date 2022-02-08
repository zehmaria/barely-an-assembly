onEvent('recipes', event => {
    // FACTORIES
    ['smelting','enriching','crushing','compressing','combining','purifying','injecting','infusing','sawing'].forEach(X => {
        ['basic', 'advanced', 'elite', 'ultimate'].forEach(Z => event.remove({ output: 'mekanism:' + Z + '_' + X + '_factory' }));
    });

    event.remove({ id: 'mekanism:enriching/dye/blue' });

    // CONVERSIONS
    event.remove({ id: 'mekanism:gas_conversion/osmium_from_ingot' });
    event.remove({ id: 'mekanism:gas_conversion/osmium_from_block' });

    event.remove({ id: 'mekanism:infusion_conversion/tin/from_enriched' });
    event.remove({ id: 'mekanism:infusion_conversion/tin/from_dust' });
    event.remove({ id: 'mekanism:infusion_conversion/diamond/from_dust' });

    event.remove({ id: 'mekanism:infusion_conversion/obsidian_to_obsidian_dust' });

    // REDSTONE INFUSING BYE BYE
    //event.remove({ id: 'mekanism:infusion_conversion/redstone/from_enriched' });
    event.remove({ id: 'mekanism:infusion_conversion/redstone/from_block' });
    //event.remove({ id: 'mekanism:infusion_conversion/redstone/from_dust' });
});
