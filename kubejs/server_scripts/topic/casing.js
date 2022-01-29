onEvent('recipes', event => {
    function _qt(X, Y, N, P, Z) {
        event.remove({ output: X });
        event.custom({
            type: 'extendedcrafting:compressor', powerCost: P, inputCount: N, ingredient: Item.of(Y), catalyst: Item.of(Z), result: Item.of(X)
        });
    }

    addShaped(event, [
        //['2x create:andesite_casing',   [[Caa, Caa, Caa], [Caa, Cc1, Caa], [Caa, Caa, Caa]]],
        //['2x create:brass_casing',      [[tPe, tPe, tPe], [tPe, Cc2, tPe], [tPe, tPe, tPe]]],
        //['2x create:copper_casing',     [[tPc, tPc, tPc], [tPc, Cc3, tPc], [tPc, tPc, tPc]]],
        //['2x mekanism:steel_casing',    [[tPs, tPs, tPs], [tPs, Kca, tPs], [tPs, tPs, tPs]]],
    ]);

    //REFINED STORAGE

});
