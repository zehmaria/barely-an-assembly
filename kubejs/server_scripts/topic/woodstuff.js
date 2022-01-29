onEvent('recipes', event => {
    // ACCESS
    const wood = {
        minecraft :     ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak']
    };
    Object.keys(wood).forEach(X => {
        wood[X].forEach(Z => {
            const rrr = X + ':' + Z; const sss = rrr + '_planks'; var recipes = [];
            recipes.push([rrr + '_pressure_plate', [[Ihm, sss, _I2]]]);
            recipes.push([rrr + '_trapdoor',       [[sss, sss, sss], [sss, _I2, sss]]]);
            recipes.push([rrr + '_fence_gate',     [[stk, sss, stk], [stk, _I2, stk]]]);
            recipes.push([rrr + '_button',         [[Iwc, rrr + '_pressure_plate']]]);
            recipes.push([rrr + '_door',           [[sss, sss], [sss, _I2], [sss, sss]]]);
            addShaped(event, recipes);
        });
    });

    // BOATS
    const boats = {
        minecraft :     ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak']
    };
    Object.keys(boats).forEach(X => {
        boats[X].forEach(Z => {
            const rrr = X + ':' + Z + '_planks';
            addShaped(event, [[X + ':' + Z + '_boat', [[rrr, air, rrr], [_I2, rrr, _I2]]]]);
        });
    });
});
