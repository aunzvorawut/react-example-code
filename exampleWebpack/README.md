In this example, you have a loader with three properties: test, exclude, and loader. 
Your loader will search for all files ending in ".js", excluding files in the node_modules folder. 
Whatever files it finds, it will run through the 'babel-loader' transformation.

Where does the string 'babel-loader' come from? When you ran the command npm install --save-dev babel-core babel-loader babel-preset-react, you installed babel-loader into your node_modules folder. Your loader property will automatically be able to find it there. The magic of npm!

The output object should have two properties: filename and path. filename will be the name of the new, transformed JavaScript file. path will be the filepath to where that transformed JavaScript file ends up:
This will save your transformed JavaScript into a new file named build/transformed.js.


HTML
The object's first property should be named template. template's value should be a filepath to the current HTML file, the one that you're trying to copy and move:

The object's second property should be named filename. filename's value should be the name of the newly created HTML file. It's fine to name it index.html. Since the new HTML file will be located in the build folder, there won't be any naming conflicts:

The object's final property should be named inject. inject value should be be a string: either 'head' or 'body'.

When HTMLWebpackPlugin creates a new HTML file, that new HTML file will contain a <script> tag linking to webpack's new JavaScript file. This <script> tag can appear in either the HTML file's <head> or <body>. You choose which one via the inject property.

THE PLUGINS PROPERTY

You have fully configured your HTMLWebpackPlugin instance! Now all that's left is to add that instance to module.exports.

You can do this by creating a new module.exports property named plugins. plugins value should be an array, containing your configured HTMLWebpackPlugin instance!

Find the plugins property at the bottom of module.exports:
