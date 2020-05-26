// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    appRoot: 'http://localhost:3000/',
    disableConsoleLogs: false,
    disableOkta: false,
    okta: {
        Issuer: 'https://dev-456789.oktapreview.com/oauth2/default',
        RedirectUri: 'http://localhost:4200/implicit/callback',
        ClientId: '',
        Pkce: true,
        CurrentUser: 'https://dev-456789.oktapreview.com/api/v1/users/me',
    },
    agGridLicenseKey: '',
    impersonateUser: 'mbarua',
};
