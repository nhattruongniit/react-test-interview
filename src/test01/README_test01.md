# How to optimize prevent re-render component

## Scripts

```bash
$ npm install

$ npm start
```

## App screen

![app-screen](../assets/images/app-screen.png)

### First load apps. It will render all components

![first-load](../assets/images/first-load.png)

## Action

- Click "Increment Age" button -> age + 1
- Click "Increment Salary" button -> salary + 1000

## Requirement

How to user click "Increment Age" button, it just re-render 'Age - x' component?. It will look like the result below.

![age](../assets/images/age.png)

The result same when user click "Increment Salary" button.

![salary](../assets/images/salary.png)

## Note

- You can't create new any component or move the position of components.

- You can only change code in that components.

## Result

![react-test-optimize](../assets/images/react-test-optimize.gif)

- You can use function or class component.

- You can't create new any component or move the position of components. You can only change code in that components.
