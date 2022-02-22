onEvent('fluid.tags', event => {
    event.removeAll('minecraft:water'); event.add('minecraft:water', ['minecraft:water', 'minecraft:flowing_water']);
});

onEvent('recipes', event => {
    const _ws = '#forge:wires/steel';
    const _wl = '#forge:wires/lead';
    const _gd = 'mekanism:gauge_dropper';
    const __i = 'immersiveengineering:sheetmetal_iron';
    const _ts = 'immersiveengineering:treated_scaffold';
    const _wg = 'immersiveengineering:wooden_grip';
    const __s = 'myrtrees:rubberwood_slab';

    addShaped(event, [
        ['kubejs:conveyor_basic_mimic',                 [[Mlt, Mlt], [tPi, tPi]]],

        ['immersiveengineering:workbench',              [[Caa, __s, __s], [Mct, air, 'immersiveposts:fence_copper']]],
        ['immersiveengineering:electric_lantern',       [[Apq, mm1], [Cc2, 'createaddition:capacitor']]],

        ['immersiveengineering:gunpart_hammer',         [[tPi, air, air], [tPi, tPi, air], [air, tPi, tPi]]],
        ['immersiveengineering:gunpart_drum',           [[air, tPi, air], [tPi, _I2, tPi], [air, tPi, air]]],
        ['immersiveengineering:gunpart_barrel',         [[tRi, tRi]]],
        ['immersiveengineering:wooden_grip',            [[stk, stk], [tIc, stk], [stk, stk]]],
        ['4x immersiveengineering:casull',              [[Iec, Iec, Iec], [Iec, tDl, tPi]]],
        ['immersiveengineering:railgun',                [[air, Ic2, _wg], [tPs, Icm, _K2], [Icm, tPs, air]]],

        ['immersiveengineering:survey_tools',           [[Mbk, _gd, Ihm], [Ihf, Ihf, Ihf]]],

        ['immersiveengineering:buzzsaw',                [[air, air, _wg], [tRs, Ihe, _wg], [tRs, air, air]]],
        ['immersiveengineering:drillhead_iron',         [[tPi, Ccw, tPi], [tPi, tPi, tPi], [air, tPi, air]]],
        ['immersiveengineering:drillhead_steel',        [[tPs, Ccw, tPs], [tPs, tPs, tPs], [air, tPs, air]]],
        ['immersiveengineering:shield',                 [[tPs, Itw, tPs], [tPs, tPs, tPs], [tPs, Itw, tPs]]],
        ['immersiveengineering:powerpack',              [[Iw1, Ik1, Iw1], [Mlt, Ktb, Mlt]]],

        ['4x immersiveengineering:concrete',            [[tSG, cly, tSG], [grv, ltx, grv], [tSG, cly, tSG]]],
        ['4x immersivepetroleum:asphalt',               [[tSG, btm, tSG], [grv, ltx, grv], [tSG, btm, tSG]]],

        ['immersivepetroleum:projector',                [[Khd, air, air], [tPs, ltx, air], [air, tPs, Itw]]],

        ['immersiveengineering:blastfurnace_preheater', [[__i, __i, __i], [__i, air, __i], [__i, Krh, __i]]],

        ['16x immersiveengineering:empty_casing',       [[tPc, air, tPc], [tPc, air, tPc], [air, tPc, air]]],

        [Item.of('immersiveengineering:blueprint', '{blueprint:"bullet"}'),        [[Mpp, Mpp], [Iec, Iec]]],
        [Item.of('immersiveengineering:blueprint', '{blueprint:"specialBullet"}'), [[Mpp, Mpp], [Irm, Irm]]],
        ['immersiveengineering:steel_scaffolding_wooden_top',                      [[tPs, _ts, tPs], [air, tRs, air], [tRs, air, tRs]]],
        ['immersiveengineering:toolupgrade_revolver_magazine',                     [[air, tPc, mm1], [tPc, Caa, tPc], [_I2, tPc, air]]]
    ]);

    event.replaceInput({}, 'immersiveengineering:craftingtable', 'minecraft:crafting_table');
    rm2(event, 'immersiveengineering:component_', ['iron', 'steel'], ['minecraft:crafting_shaped']);

    bpIE(event, 'create:electron_tube',
         ['#forge:glass', '#forge:plates/electrum', ['#forge:wires/copper', 2], 'minecraft:redstone'], 'components');

    bpIE(event, '8x immersiveengineering:casull', [[Iec, 8], tDl, tPi], 'bullet');
    bpIE(event, '8x immersiveengineering:armor_piercing', [[Iec, 8], Mgp, tPs, tPl], 'bullet');
    bpIE(event, '8x immersiveengineering:homing', [[Iec, 8], Mgp, _K1, 'minecraft:ender_eye'], 'specialBullet');
    bpIE(event, '8x immersiveengineering:he', [[Iec, 8], Mgp, ['minecraft:tnt', 8]], 'bullet');

    bpIE(event, '8x immersiveengineering:buckshot', [[Ies, 8], Mgp, [tDs, 2]], 'specialBullet');
    bpIE(event, '8x immersiveengineering:wolfpack', [[Ies, 8], ['immersiveengineering:homing', 8], Mgp], 'specialBullet');
    bpIE(event, '8x immersiveengineering:dragons_breath', [[Ies, 8], Mgp, tDf], 'specialBullet');
    bpIE(event, Item.of('8x immersiveengineering:flare', '{flareColour:2925323}'), [[Ies, 8], Mgp, tDf, '#forge:dyes/green'], 'specialBullet');
    bpIE(event, Item.of('8x immersiveengineering:flare', '{flareColour:13381126}'), [[Ies, 8], Mgp, tDf, '#forge:dyes/red'], 'specialBullet');
    bpIE(event, Item.of('8x immersiveengineering:flare', '{flareColour:16777090}'), [[Ies, 8], Mgp, tDf, '#forge:dyes/yellow'], 'specialBullet');

    event.remove({ id: 'immersivepetroleum:mixer/napalm' });
    event.custom({
        type: 'immersiveengineering:mixer',
        inputs: [{ count: 3, base_ingredient: { tag: 'forge:dusts/fluorite' } }],
        result: { fluid: 'immersivepetroleum:napalm', amount: 500 },
        fluid: { tag: 'forge:gasoline', amount: 500 },
        energy: 3200
    });

    event.remove({ output: 'immersiveengineering:treated_wood_horizontal' });
    event.custom({
        type: 'create:filling',
        ingredients: [
            { tag: 'minecraft:planks' },
            { fluid: 'immersiveengineering:creosote', nbt: {}, amount: 500 }
        ],
        results: [{ item: 'immersiveengineering:treated_wood_horizontal' }]
    });

    // REMOVE BIODIESEL
    event.remove({ id: 'immersiveengineering:crafting/blueprint_bannerpatterns' });
    event.remove({ type: 'immersiveengineering:fermenter' });
    event.remove({ type: 'immersiveengineering:bottling_machine' });
    ['refinery/biodiesel', 'mixer/herbicide', 'squeezer/melon_seeds', 'squeezer/beetroot_seeds', 'squeezer/pumpkin_seeds', 'squeezer/hemp_seeds', 'squeezer/wheat_seeds'].forEach(X => event.remove({ id: 'immersiveengineering:' + X }));

    // REMOVE BY ID
    ['cokebrick', 'blastbrick_reinforced', 'hempcrete', 'croncrete_leaded', 'insulating_glass'].forEach(X => event.remove({ id: 'immersiveengineering:crafting/' + X + '_from_slab' }));
});
