var HamlCoffee = require('haml-coffee/lib/haml-coffee');
var CoffeeScript = require('coffee-script')
var fs   = require('fs');

var compile = function(path) {
  var compiler, content, template;
  compiler = new HamlCoffee({});
  content = fs.readFileSync(path, 'utf8');
  compiler.parse(content);
  template = compiler.precompile();
  template = CoffeeScript.compile(template);
  return "module.exports = (function(data){ return (function(){ return " + template + " }).call(data); })";
};

module.exports.compile = compile;