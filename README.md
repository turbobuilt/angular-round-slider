# angular-round-slider
Angular directive for the roundSlider jQuery plugin

##Usage
Usage is pretty simple.  First you've got to include the actual roundSlider jquery plugin:
https://github.com/soundar24/roundSlider/tree/master/dist

You also need to include jQuery
```
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
```


Then include `angular-round-slider` as a dependency in your app.

```javascript
var myApp = angular.module('ngAppName', ['angular-round-slider'])
```

Then in your html file, include the directive `<round-slider>`.  The `value` field works just like the ng-model field on angular directives.

```html
<round-slider value="sliderModel" radius="200"></round-slider>
{{sliderModel}}
```

The source for round-slider is

https://github.com/soundar24/roundSlider
