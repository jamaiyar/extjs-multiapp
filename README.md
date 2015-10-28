# extjs-multiapp
This workspace contains basic code to demonstrate multiple app concept in ExtJS

Steps

1. Add ext framework to the ext folder
2. To build this workspace, 
  2a. navigate to \cloudBase in command prompt, and fire sencha app build
  2b. navigate to \firstApp in command prompt, and fire sencha app build
  2c. navigate to \secondApp in command prompt, and fire sencha app build

Note, app.js for firstApp & secondApp will not contain ExtJS framework

3. navigate to \cloudBase again and give sencha app watch
4. Go to browser and load the app at - http://localhost:1841/build/production/cloudBase

5. In order to run de mode, look for the "// NOTE:" comments which I have left in the code.


Reference: https://docs.sencha.com/cmd/5.x/workspaces.html
