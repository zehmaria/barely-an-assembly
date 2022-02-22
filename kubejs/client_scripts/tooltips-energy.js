onEvent('item.tooltip', tooltip => {
    // GENERATION
    ['createaddition:alternator', 'immersiveengineering:dynamo', 'immersivepetroleum:gas_generator', 'mekanismgenerators:advanced_solar_generator', 'mekanismgenerators:solar_generator', 'immersiveengineering:generator', 'mekanismgenerators:turbine_casing', 'mekanismgenerators:fission_reactor_casing', 'mekanismgenerators:fusion_reactor_frame'].forEach(X => tooltip.add(X, '§3Generates Forge Energy [RF, FE, FLUX].'));

    ['immersiveengineering:generator', 'mekanismgenerators:turbine_casing', 'mekanismgenerators:fission_reactor_casing', 'mekanismgenerators:fusion_reactor_frame'].forEach(X => tooltip.add(X, '§3Requires multiblock.'));
    tooltip.add('immersiveengineering:dynamo', '§3Requires windmill.');
    tooltip.add('immersiveengineering:windmill', '§3Works best with windmill sail.');

    tooltip.add('compressedcreativity:rotational_compressor', '§3Generates PneumaticCraft Pressure [Drones].');

    ['create:water_wheel', 'create:encased_fan', 'create:hand_crank', 'create:copper_valve_handle', 'createaddition:electric_motor', 'steampowered:bronze_steam_engine', 'steampowered:cast_iron_steam_engine', 'steampowered:steel_steam_engine'].forEach(X => tooltip.add(X, '§3Generates Create\'s Rotational Energy.'));
    ['create:hand_crank', 'create:copper_valve_handle'].forEach(X => tooltip.add(X, '§3Rotation manual generation.'));

    ['steampowered:bronze_steam_engine', 'steampowered:cast_iron_steam_engine', 'steampowered:steel_steam_engine'].forEach(X => tooltip.add(X, '§3Requires Flywheel of the same material.'));

    // MULTIBLOCK TIP
    ['mekanismgenerators:fusion_reactor_frame', 'mekanismgenerators:fusion_reactor_port', 'mekanismgenerators:fusion_reactor_logic_adapter', 'mekanismgenerators:fusion_reactor_controller', 'mekanismgenerators:reactor_glass', 'mekanismgenerators:laser_focus_matrix', 'mekanism:laser', 'mekanism:laser_amplifier'].forEach(X => tooltip.add(X, '§3Fusion Reactor Piece.'));

    ['mekanismgenerators:reactor_glass', 'mekanismgenerators:fission_reactor_casing', 'mekanismgenerators:fission_reactor_port', 'mekanismgenerators:fission_reactor_logic_adapter', 'mekanismgenerators:fission_fuel_assembly', 'mekanismgenerators:control_rod_assembly'].forEach(X => tooltip.add(X, '§3FissionReactor Piece.'));

    ['mekanismgenerators:turbine_blade', 'mekanismgenerators:turbine_rotor', 'mekanismgenerators:turbine_vent', 'mekanismgenerators:turbine_valve', 'mekanism:pressure_disperser', 'mekanismgenerators:saturating_condenser', 'mekanismgenerators:rotational_complex', 'mekanismgenerators:electromagnetic_coil', 'mekanismgenerators:turbine_casing', 'mekanism:structural_glass'].forEach(X => tooltip.add(X, '§3Industrial Turbine Piece.'));

    ['mekanism:dynamic_tank', 'mekanism:structural_glass', 'mekanism:dynamic_valve'].forEach(X => tooltip.add(X, '§3Dynamic Tank Piece.'));

    ['mekanism:sps_casing', 'mekanism:sps_port', 'mekanism:supercharged_coil', 'mekanismgenerators:reactor_glass'].forEach(X => tooltip.add(X, '§3Supercritical Phase Shifter Piece.'));

    // STORAGE
    ['immersiveengineering:capacitor_lv', 'immersiveengineering:capacitor_mv', 'immersiveengineering:capacitor_hv', 'mekanism:energy_tablet', 'immersiveengineering:powerpack', 'mekanism:basic_induction_cell', 'mekanism:advanced_induction_cell', 'mekanism:elite_induction_cell', 'mekanism:ultimate_induction_cell'].forEach(X => tooltip.add(X, '§3Energy storage.'));
    ['mekanism:basic_induction_cell', 'mekanism:advanced_induction_cell', 'mekanism:elite_induction_cell', 'mekanism:ultimate_induction_cell'].forEach(X => tooltip.add(X, '§3Requires multiblock.'));


    // VALUES

    // GENS
    tooltip.add('mekanismgenerators:solar_generator', '§3Gens: ~14FE/t at peak.');
    tooltip.add('mekanismgenerators:advanced_solar_generator', '§3Gens: ~56FE/t at peak.');

    tooltip.add('immersiveengineering:dynamo', '§3Gens: ~35FE/t while sunny with a full windmill.');
    tooltip.add('immersivepetroleum:gas_generator', '§3Gens: 128FE/t.');
    tooltip.add('immersiveengineering:generator', '§3Gens: 4096FE/t.');

    tooltip.add('createaddition:alternator', '§3Gens: 256FE/t at 32RPM | 2kFE/t at 256RPM.');
    tooltip.add('createaddition:electric_motor', '§3Gens: 64RPM at 1kFE/t | 8RPM at 128FE/t.');

    tooltip.add('steampowered:cast_iron_flywheel', '§3Gens: at 16RPM.');
    tooltip.add('steampowered:bronze_flywheel', '§3Gens: at 32RPM.');
    tooltip.add('steampowered:steel_flywheel', '§3Gens: at 256RPM.');

    // USES
    ['factoriores:electrical_miner'].forEach(X => tooltip.add(X, '§3Uses 10FE/t.'));

    tooltip.add('immersiveengineering:tesla_coil', '§3Uses: 16FE/t in idle | 128FE/t while shooting.');
    tooltip.add('immersiveengineering:turret_chem', '§3Uses: 1FE/t in idle | 8FE/t while shooting.');
    tooltip.add('immersiveengineering:turret_gun', '§3Uses: 1FE/t in idle | 4FE/t while shooting.');

    tooltip.add('diregoo:gooliminationfieldgen', '§3Uses: 1mFE/t.');
    tooltip.add('diregoo:turretblock', '§3Uses: 128FE per shot.');
    tooltip.add('diregoo:antigoofieldgen', '§3Uses: FE cost based per block.');

    tooltip.add('extendedcrafting:basic_auto_table', '§3Uses: 32FE/t.');

    tooltip.add('create:mechanical_pump', '§3Pumps 128mB/t at 256RMP.');

    tooltip.add('mekanism:rotary_condensentrator', '§3Note: Produces 256 mB/t of steam for the Steam Engines at the cost of 320FE/t when using 4 speed upgrades and 8 energy upgrades.');

    //tooltip.add(, '§3');

});
