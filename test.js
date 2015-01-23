var fs = require('fs'),
    vm = require('vm'),
    vow = require('./libs/bem-core/common.blocks/vow/vow.vanilla.js'),
    bemtreeFile = fs.readFileSync('./desktop.bundles/index/index.bemtree.js'),
    BEMHTML = require('./desktop.bundles/index/index.bemhtml.js').BEMHTML,
    context = vm.createContext({
        Vow: vow
    });

vm.runInNewContext(bemtreeFile, context);

context.BEMTREE.apply([
    {
        block: 'b1'
    },
    {
        block: 'b2'
    },
    {
        block: 'b3'
    }
]).then(console.log);
