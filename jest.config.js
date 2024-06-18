module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest-setup.ts'],
  "transformIgnorePatterns": [
    "node_modules/(?!(@react-native|react-native|react-native-vector-icons|react-native-size-matters)/)"
  ]
};
