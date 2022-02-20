onEvent('recipes', event => {
    const __c = 'immersiveengineering:blastbrick';

    addShaped(event, [
        ['littlelogistics:tug_dock',             [[Caa, Plc, Caa], [tPs, __c, tPs], [Caa, _K2, Caa]]],
        ['littlelogistics:barge_dock',           [[Caa, Plc, Caa], [tPs, __c, tPs], [Caa, _K1, Caa]]],

        ['littlelogistics:barge',                [[mm1, Mcw, mm1], [tPs, Plc, tPs]]],
        ['littlelogistics:chunk_loader_barge',   [[mm3, 'moreminecarts:chunk_loader', mm3], [tPs, Plc, tPs]]],
        ['littlelogistics:fishing_barge',        [[mm1, 'minecraft:fishing_rod', mm1], [tPs, Plc, tPs]]],
        ['littlelogistics:fluid_barge',          [[mm1, Cft, mm1], [tPs, Plc, tPs]]],
        ['littlelogistics:seater_barge',         [[mm1, '#create:seats', mm1], [tPs, Plc, tPs]]],

        ['littlelogistics:tug',                  [[mm2, Mfu, mm2], [tPs, Plc, tPs]]],
        ['littlelogistics:energy_tug',           [[mm2, 'littlelogistics:vessel_charger', mm2], [tPs, Plc, tPs]]],
        ['littlelogistics:tug_route',            [[air, _K2, Cpm], [tPs, Amc, tPs], [Plc, Pgt, air]]],

        ['8x littlelogistics:spring',            [[tST, ltx, tST], [tPs, 'create:minecart_coupling', tPs]]],
        ['littlelogistics:vessel_charger',       [[tPs, Ik2, tPs], [mm1, 'mekanism:basic_induction_cell', mm1]]],
        ['littlelogistics:fluid_hopper',         [[tPs, Cft, tPs], [tPs, 'create:mechanical_pump', tPs]]],
    ]);
});
