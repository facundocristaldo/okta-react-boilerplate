export const config = {
  oidc: {
    clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
    issuer: process.env.REACT_APP_OKTA_ISSUER,
    redirectUri: `${process.env.REACT_APP_FRONT_BASE_URL}/login/callback`,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: process.env.REACT_APP_OKTA_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    messagesUrl: `${process.env.REACT_APP_FRONT_BASE_URL}/api/messages`,
  },
  app: {
    basename: process.env.REACT_APP_FRONT_BASE_URL,
  },
};
