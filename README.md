# IgniteTeams
Ignite Teams

[Layout](https://www.figma.com/file/fgZ01VcIp3I88PCXx9IC6v/Ignite-Teams?node-id=37%3A6)

Install the Watchman:
```sh
brew install watchman
```

Check if Watchmand is Installed:
```sh
watchman --version
```

 Increase the Limit for File Watchers:
 ```sh
ulimit -n
 ```

Create the project usinf [Expo](https://docs.expo.dev):
```sh
npx create-expo-app@latest
```

Install Expo dependencies
```sh
npx expo install expo-font @expo-google-fonts/roboto
npx expo install react-native-svg
npx expo install react-native-screens 
npx expo install react-native-safe-area-context
npx expo install @react-native-async-storage/async-storage
```

Install the dependencies
```sh
npm install --save styled-components
npm install --save phosphor-react-native
npm install @react-navigation/native
npm install @react-navigation/native-stack
```

Install the development dependencies
```sh
npm install --save-dev babel-plugin-module-resolver
npm install --save-dev @types/styled-components
npm install --save-dev @types/styled-components-react-native
```

- [Babel Plugin Module Resolver](https://github.com/tleunen/babel-plugin-module-resolver)
- [Styled Components](https://styled-components.com/docs/basics)
- [Expo Google Fonts](https://docs.expo.dev/guides/using-custom-fonts/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Expo SVG](https://docs.expo.dev/versions/latest/sdk/svg/)
- [React Native Vector Icons](https://oblador.github.io/react-native-vector-icons/)
- [Expo Vector Icons](https://icons.expo.fyi)
- [React Navigation](https://reactnavigation.org/)
- [Async Storage](https://docs.expo.dev/versions/latest/sdk/async-storage/)

- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [TypeScript Error Translator](https://marketplace.visualstudio.com/items?itemName=mattpocock.ts-error-translator)

Update the Expo SDK 52
```sh
npx expo install expo@latest
npx expo install --fix
```

Start the project:
```sh
npx expo start
```