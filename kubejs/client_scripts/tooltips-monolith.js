onEvent('item.tooltip', tooltip => {
    ['mekanism:advanced_bin', 'mekanism:basic_bin', 'mekanism:advanced_thermodynamic_conductor', 'mekanism:basic_thermodynamic_conductor', 'mekanism:advanced_pressurized_tube', 'mekanism:basic_pressurized_tube', 'mekanism:advanced_induction_provider', 'mekanism:basic_induction_provider', 'mekanism:advanced_induction_cell', 'immersiveengineering:coil_mv', 'immersiveengineering:connector_mv_relay', 'immersiveengineering:connector_mv', 'immersiveengineering:capacitor_mv', 'immersiveengineering:wirecoil_electrum', 'diregoo:gooresidue', 'minecraft:furnace', 'diregoo:gntblockt1', 'diregoo:gntblockt2', 'appliedenergistics2:purified_certus_quartz_crystal', 'mekanism:energized_smelter', 'mekanism:enrichment_chamber', 'mekanism:crusher', 'mekanism:combiner', 'mekanism:purification_chamber', 'mekanism:chemical_injection_chamber', 'mekanism:metallurgic_infuser', 'mekanism:precision_sawmill', 'mekanism:advanced_smelting_factory', 'mekanism:advanced_enriching_factory', 'mekanism:advanced_crushing_factory', 'mekanism:advanced_combining_factory', 'mekanism:advanced_purifying_factory', 'mekanism:advanced_injecting_factory', 'mekanism:advanced_infusing_factory', 'mekanism:advanced_sawing_factory', 'mekanism:basic_induction_cell', 'mekanism:basic_chemical_tank', 'mekanism:advanced_chemical_tank', 'mekanism:ultimate_induction_cell', 'mekanism:resistive_heater', 'compressedcreativity:rotational_compressor', 'createaddition:electric_motor', 'mekanismgenerators:fusion_reactor_controller'].forEach(X => tooltip.add(X, '§3You feel a slight pull towards the monolith.'));

    tooltip.add('diregoo:antigoofieldgen', '§3You feel a slight pull towards Qio Drive Array.');
});