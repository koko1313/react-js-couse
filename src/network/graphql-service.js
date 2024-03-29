import gql from 'graphql-tag';
import graphQLClient from './graphql-client';

export default {
    async getGames(responseFields) {
        const response = await graphQLClient.query({
            query: gql `
                query {
                    games {
                        ${responseFields}
                    }
                }
            `
        });

        return response;
    },

    async addGame(variables, responseFields){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($name: String!, $description: String!, $imageUrl: String!, $price: Float!){
                addGame(name: $name, description: $description, imageUrl: $imageUrl, price: $price){
                    ${responseFields}
                }
            }`,
            variables
        })
        return response;
    },

    async deleteGame(variables, responseFields){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($_id: String!){
                deleteGame(_id: $_id){
                    ${responseFields}
                }
            }`,
            variables
        })
        return response;
    },

    async editUser(variables, responseFields){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($_id: String!, $firstName: String!, $lastName: String!, $password: String!){
                editUser(_id: $_id, firstName: $firstName, lastName: $lastName, password: $password){
                     ${responseFields}
                }
            }`,
           variables
        })
        return response;
    },

    async addUser(variables){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($firstName: String!, $lastName: String!, $email: String!, $userType: String!, $password: String!){
                addUser(firstName: $firstName, lastName: $lastName, email: $email, userType: $userType, password: $password)
            }`,
            variables
        })
        return response;
    },

    async login(variables){
        const response = await graphQLClient.mutate({
            mutation: gql `mutation($email: String!, $password: String!){
                login(email: $email, password: $password)
            }`,
            variables
        })
        return response;
    },

    async currentUser(responseFields = "_id firstName lastName email userType games {name}"){
        const response = await graphQLClient.query({
            query: gql `
                query {
                    currentUser {
                        ${responseFields}
                    }
                }
            `
        })
        return response;
    }
}