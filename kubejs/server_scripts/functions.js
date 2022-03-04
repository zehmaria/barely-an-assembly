// REMOVE
function rm1(event, A, T) { A.forEach(aa => T.forEach(tt => event.remove({ output: aa, type: tt }))); }
function rm2(event, m, A, T) { A.forEach(aa => T.forEach(tt => event.remove({ output: m + aa, type: tt }))); }
function rm3(event, m, A, bb, T) { A.forEach(aa => T.forEach(tt => event.remove({ output: m + aa + bb, type: tt }))); }
function rm4(event, m, A, B, T) { A.forEach(aa => B.forEach(bb => T.forEach(tt => event.remove({ output: m + aa + bb, type: tt })))); }

// REPLACE
function addShaped (event, Z) {
    Z.forEach(zz => { event.remove({ output: zz[0] }); event.shaped(zz[0], zz[1]); });
}
function addShapeless (event, Z) { Z.forEach(zz => { event.remove({ output: zz[0] }); event.shapeless(zz[0], zz[1]); }); }
function addCampfire (event, Z, T) { Z.forEach(zz => { event.remove({ output: zz[0] }); event.campfireCooking(zz[0], zz[1], 0, T); }); }
function addSmith (event, Z) { Z.forEach(zz => { event.remove({ output: zz[0] }); event.smithing(zz[0], zz[1], zz[2]); }); }

// MEKANISM - COMBINING
function addMKCombining(event, Z) {
    Z.forEach(zz => {
        event.remove({ output: zz[0] });
        event.custom({
            type: 'mekanism:combining', output: { item: zz[0] },
            mainInput: { ingredient: { item: zz[1] } }, extraInput: { amount: 4, ingredient: { item: zz[2] } }
        });
    });
}

function fixGem(event, Z) {
    Object.keys(Z).forEach(X => {
        event.custom({type:'mekanism:enriching',output:Item.of(X).toResultJson(),input:{ingredient:{tag:Z[X]}}});
        event.custom({type:'immersiveengineering:crusher',secondaries:[],result:Item.of(X).toResultJson(),input:{tag:Z[X]},energy:6000});
    });
}

// IMMERSIVE ENGINEERING
function bI (X) {
    if (X instanceof Array) return { count: X[1], base_ingredient: Ingredient.of(X[0]) };
    else return Ingredient.of(X);
}
function bpIE(event, X, Y, Z) {
    event.remove({ output: X });
    var _y = []; Y.forEach(yy => _y.push(bI(yy)));
    event.custom({ type: 'immersiveengineering:blueprint', category: Z, result: Item.of(X), inputs: _y });
}
function arc(event, Z) {
    Z.forEach(zz => {
        if (zz[0] instanceof Array) event.remove({ output: zz[0][0] }); else event.remove({ output: zz[0] });
        var _ad = [];
        zz[3].forEach(it => _ad.push(bI(it)));
        event.custom({
            type: 'immersiveengineering:arc_furnace', time: zz[1]/512, energy: zz[1],
            results: [bI(zz[0])], input: bI(zz[2]), additives: _ad
        });
    });
}

// CREATE
// Z = [A, B, C, D=[M, N, O, ...], E=[[F,N], [G, M], ...]
function csAssembly(event, Z) {
    Z.forEach(zz => {
        event.remove({ output: zz[0] });
        var sq = [{
            type: 'create:cutting',
            ingredients: [{ item: zz[1] }],
            results: [{ item: zz[1] }],
            processingTime: 200
        }];

        zz[3].forEach(it => sq.push({
            type: 'create:deploying',
            ingredients: [{ item: zz[1] }, Ingredient.of(it)],
            results: [{ item: zz[1] }]
        }));

        zz[4].forEach(it => sq.push({
            type: 'create:filling',
            ingredients: [{ item: zz[1] }, { fluid: it[0], nbt: {}, amount: it[1] }],
            results: [{ item: zz[1] }]
        }));

        sq.push({ type: 'create:pressing', ingredients: [{ item: zz[1] }], results: [{ item: zz[1] }] });

        event.custom({
            type: 'create:sequenced_assembly',
            ingredient: Ingredient.of(zz[2]), transitionalItem: { item: zz[1] }, results: [{ item: zz[0] }],
            sequence: sq,
            loops: zz[5]
        });
    });
}

function cFilling(event, Z) {
    Z.forEach(zz => {
        event.remove({ output: Item.of(zz[0]) });
        event.custom({
            type: 'create:filling', ingredients: [Ingredient.of(zz[1]), { fluid: zz[2], nbt: {}, amount: zz[3] }], results: [Item.of(zz[0])]
        });
    });
}
