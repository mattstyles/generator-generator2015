
# generator-generator2015

> Scaffolds a Yeoman generator used to build more generators, oh no, I’ve gone cross-eyed

![](http://goo.gl/NVYL7K)

```
npm i -g yo
npm i -g generator-generator2015
mkdir my-awesome-generator && cd $_
yo generator2015
```

## Hack

If you want to hack on this generator then use

```
npm run watch
```

to handle the transpilation and add any unit tests for new functionality wherever it makes sense inside `__test__`, use `npm` to make sure all is good

```
npm test
```
