module.exports = {
  name: 'social-network',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/social-network',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
