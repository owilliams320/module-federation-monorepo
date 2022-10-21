module.exports = {
  name: 'mfe3-remote',
  exposes: {
    './Routes': 'apps/mfe3-remote/src/app/remote-entry/entry.routes.ts',
    './Component': 'apps/mfe3-remote/src/app/remote-entry/entry.component.ts',
  },
};
