# Create Data Function
For this we need to have a dependency of cloudant. So check back on [previous docs](./Basics.md) on how to create action with dependency.

Here is the step by step guide
1. Create a new folder. Give it any name
2. In the folder create a new js file.
3. `npm init` Keep the defaults.
4. `npm install --save '@cloudant/cloudant'` To get cloudant module in packag.json
5. `npm install`
6. Write our function code.
7. `zip -r <name>.zip *`
8. `wsk action create <action> --kind nodejs:default <name>.zip` 
`<action>` is the name of the action you give. I named mine `create-data`

Here is the code
Its also available here [CODE](./function/create-data)
