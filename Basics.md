# Openwhisk Functions Basics

If you did't already, install openwhisk cli. 

https://github.com/apache/incubator-openwhisk-cli

For MacOSX users if you have [brew](https://brew.sh/) you can also install openwhisk using 
`brew install wsk`

Install IBM Cloud CLI
https://console.bluemix.net/docs/cli/index.html#overview

Setup IBM Cloud Functions
https://github.com/jthomas/openwhisk-workshops/tree/master/bootcamp/ex0%20-%20setting%20up%20development%20environment

Okay, Finally we are ready to get started with the workshop.
If something is still missing work through this thorough bootcamp step by step. 
https://github.com/jthomas/openwhisk-workshops/tree/master/bootcamp

## Function Structure
### NODE
Everything in this section is straight from the official doc.
https://openwhisk.apache.org/documentation.html#nodejs-actions

First things first its a function,

```javascript
funtion main(params) {
  return params;
}
```

If you have done any node, this should more or less look familiar. There is a function called `main`. It takes a parameter called `params` and straight away returns it. 

We save the code in a file called `hello.js`

```bash
wsk action create hello hello.js
```

This commad has a few parts.
**wsk** - The openwhisk cli command
**action** - Action is a single function in openwhisk. More formally
  > Actions are stateless functions (code snippets) that run on the OpenWhisk platform. Actions encapsulates application logic to be executed in response to events.

**create** - We are creating a new action
**hello** - Name of the action
**hello.js** - File where the code of the `hello` action resides

With this command if everything else goes well we should see the following.
```bash
ok: created action hello
```

Now its time to invoke it. 
```bash
wsk action invoke hello --blocking --result
```

**invoke** - Run the action
**--blocking** - Wait for the result to come back
**--result** - Just show the result

```json
{}
```
You probably see this. You are quite disappointed. And rightly so. You spend a good 2 mins on functions already and it gave you an empty `{}`. Well all is not lost.
Remember our function is returning the `params` object back? And we did not give any params when we invoked our function. Lets do that next.

```bash
wsk action invoke hello --blocking --result --param name "John Doe" --param age "21"
```

Whoa!!! We added a few more words up here. What all these mean? Its quite simple really. 
We are passing two parameters with the `--param` flag. One is `name` with value `John Doe` and the other is `age` with value `21`. 

With luck on our side we should see the following.
```json
{
    "age": 21,
    "name": "John Doe"
}
```
>Pro tip : You can shorten your flags -b : --blocking and -p : --param


