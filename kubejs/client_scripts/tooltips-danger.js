onEvent('item.tooltip', tooltip => {
    ['immersiveengineering:tesla_coil', 'immersiveengineering:turret_gun', 'immersiveengineering:turret_chem', 'immersiveengineering:razor_wire', 'diregoo:turretblock', 'diregoo:zapperturretblock', 'diregoo:antigoofieldgen', 'mekanism:laser', 'mekanism:laser_amplifier'].forEach(X => tooltip.add(X, '§3Base defense.'));

    ['immersiveengineering:chemthrower', 'mekanism:flamethrower', 'immersiveengineering:railgun', 'immersiveengineering:revolver', 'diregoo:gooremover', 'diregoo:goozapper', 'create:potato_cannon'].forEach(X => tooltip.add(X, '§3Weapons.'));

    ['minecraft:campfire', 'pneumaticcraft:kerosene_lamp', 'immersiveengineering:electric_lantern', 'immersiveengineering:floodlight', 'appliedenergistics2:semi_dark_monitor'].forEach(X => tooltip.add(X, '§3Light Source.'));

    tooltip.add('immersiveengineering:turret_gun', '§3Range: 15.');
    tooltip.add('immersiveengineering:turret_chem', '§3Range: 7.');
    tooltip.add('immersiveengineering:tesla_coil', '§3Range: 6.');
    tooltip.add('immersiveengineering:tesla_coil', '§3Extendo Grip allows user to interact from outside the damage range.');

    tooltip.add('diregoo:turretblock', '§3Power Amplifier Range - Basic: 3 | Improved: 5 | Powerful: 7 | Extreme: 11.');
});
