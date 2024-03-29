var specs = [
  './multiple/test_01.js',
  './multiple/test_02.js',
  './multiple/multitest3.js'
];

for (var i = specs.length - 1; i >= 0; i--) {
  require(specs[i]);
};
