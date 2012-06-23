#Introduction

This package provides a shim between haml-coffee and hem, where you can add the haml dependency to your
primary spine project, rather than to hem.

At this point, it is dependent on an [experimental hem branch](https://github.com/deafgreatdane/hem)


#Installation

    npm install hem-compiler-haml

# Using in your project

1. Add the npm module that provides the hem-compiler
2. Add the mapping in your slug.json (see below)
3. Write your spine views in haml (in files ending in .haml)

Example of slug.json

    {
        "dependencies": [
            "es5-shimify",
            "json2ify",
            "jqueryify",
            "spine",
            "spine/lib/local",
            "spine/lib/ajax",
            "spine/lib/route",
            "spine/lib/manager"
        ],
        "libs": [],
        "compilers":{
           "haml":"hem-compiler-haml"
        }
    }

# Credits
The wiring here is an exact clone of Vojtech Rinik's logic at [hem-haml-coffee](https://github.com/vojto/hem-haml-coffee)