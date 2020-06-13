import gql from 'graphql-tag';

export const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

export const IS_NOTIFICATION_MODAL_OPEN = gql`
    query IsNotificationModalOpen {
        isNotificationModalOpen @client
    }
`;

export const WILL_RELOAD = gql`
    query WillReload {
        willReload @client
    }    
`;