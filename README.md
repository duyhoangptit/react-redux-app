This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### Learning React Js
1. componentDidMount

2. componentDidUpdate(prevProps, prevState, snapshot)

3. componentWillUnmount

4. shouldComponentUpdate(nextProps, nextState)

5. static getDerivedStateFromProps(props, state)

6. getSnapshotBeforeUpdate(prevProps, prevState)

### React Redux
1. Nếu không sử dụng redux thì chúng ta sẽ có một mạng lưới các handle func được truyền từ component cha
cho component con rồi component con dùng nó để update state của component cha.
Khi 1 component cha có nhiều cấp component con thì khi 1 component con làm ảnh hưởng đến rất nhiều component
con khác thì lúc đó xử lý sẽ rất phức tạp, rối loạn.

2. Khi sử dụng redux thì redux sẽ đóng vai trò là store data trung gian giữa các component.
Sẽ sử dụng và update state ở trong store. Khi một hành động làm thay đổi state của nhiều component
thì chúng ta cũng chỉ cần set state cho store rồi từ đó store sẽ update xuống các component bị
ảnh hưởng.

3. ES6 Spread Operator - Toán tử ...: Toán tử để copy một object một cách nhanh chóng
    sample:
        var obj = {
            name: 'abc',
            age: 20
        }

        var obj2 = {...obj};

4. Pure func: Tinh khiết
    var add = (a, b) => a+b;
    console.log(add(5,6));
    - Không được có size defact: Không có hành động làm thay đổi các biến ngoài func
    - Không được chứa các tác vụ bất đồng bộ(async task)
    - Một input thì trả ra một kết quả output(là hằng số k đổi theo thời gian) mà thôi.

5. Redux
    Store = [reducers + state]