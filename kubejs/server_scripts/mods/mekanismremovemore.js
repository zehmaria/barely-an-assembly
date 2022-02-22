onEvent('recipes', event => {
    event.remove({ id: 'mekanism:enriching/dye/blue' });
    event.remove({ id: 'mekanism:hdpe_sheet' });

    // FACTORIES
    ['smelting','enriching','crushing','compressing','combining','purifying','injecting','infusing','sawing'].forEach(X => {
        ['basic', 'advanced', 'elite', 'ultimate'].forEach(Z => event.remove({ output: 'mekanism:' + Z + '_' + X + '_factory' }));
    });

    // CONVERSIONS
    event.remove({ id: 'mekanism:gas_conversion/osmium_from_ingot' });
    event.remove({ id: 'mekanism:gas_conversion/osmium_from_block' });

    event.remove({ id: 'mekanism:infusion_conversion/tin/from_enriched' });
    event.remove({ id: 'mekanism:infusion_conversion/tin/from_dust' });
    event.remove({ id: 'mekanism:infusion_conversion/diamond/from_dust' });

    event.remove({ id: 'mekanism:infusion_conversion/obsidian_to_obsidian_dust' });
    event.remove({ id: 'mekanism:enriching/conversion/obsidian_to_obsidian_dust' });

    // REDSTONE INFUSING BYE BYE
    event.remove({ id: 'mekanism:infusion_conversion/redstone/from_block' });
});
