onEvent('recipes', event => {
    function dron(I, O) { event.custom({ type: 'pneumaticcraft:amadron', input: I, output: O, static: true, maxStock: 1 }); }
    function ama(T, A, B, N) { return { type: T, id: A, amount: B, "nbt": N }; }
    function _f(A, B, N) { return ama('FLUID', A, B, N); }
    function _i(A, B, N) { return ama('ITEM', A, B, N); }
    dron(_i('minecraft:emerald', 130), _i('minecraft:diamond', 1));
    dron(_f('pneumaticcraft:oil', 100000), _i('minecraft:diamond', 1));
    dron(_i('minecraft:diamond', 2), _i('minecraft:written_book', 1, "{pages:['{\"text\":\"Bro HELP!\"}'],title:\"HELP\",author:\"9831\",resolved:1b}"));
});
