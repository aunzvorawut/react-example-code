In this example, you have a loader with three properties: test, exclude, and loader. 
Your loader will search for all files ending in ".js", excluding files in the node_modules folder. 
Whatever files it finds, it will run through the 'babel-loader' transformation.

Where does the string 'babel-loader' come from? When you ran the command npm install --save-dev babel-core babel-loader babel-preset-react, you installed babel-loader into your node_modules folder. Your loader property will automatically be able to find it there. The magic of npm!

The output object should have two properties: filename and path. filename will be the name of the new, transformed JavaScript file. path will be the filepath to where that transformed JavaScript file ends up:
This will save your transformed JavaScript into a new file named build/transformed.js.
