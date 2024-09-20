# miniquery


## Usage/Examples

```javascript
  // Selecting elements
  MQ(selector)

  // Adding class
  MQ(selector).ac('class')

  // Removing class
  MQ(selector).rc('class')

  // Toggling class
  MQ(selector).tc('class')

  // Adding click event
  MQ(selector).click(function() {
    MQ(this).ac('class')
  })

  // Looping through elements (forEach)
  MQ(selector).each(function(index, element) {
    console.log(`Element ${index}: ${element.tagName}`)
  })

  // Looping through elements (for loop)
  MQ(selector).loop(function(index, element) {
    console.log(`Element ${index}: ${element.tagName}`)
  })
```

## Methods
--------
### Element Selection
```
MQ(selector): Selects elements matching the given selector.
```
#### Class Manipulation

```
ac(className): Adds a class to the selected elements.

rc(className): Removes a class from the selected elements.

tc(className): Toggles a class on the selected elements.

```

#### Event Handling

```
click(handler): Attaches a click event handler to the selected elements.
```

### Looping

```
each(callback): Iterates over the selected elements using forEach.

loop(callback): Iterates over the selected elements using a for loop.

```



## Author

```
@iminiscript


## 🚀 About Me
I'm a full stack developer... 
