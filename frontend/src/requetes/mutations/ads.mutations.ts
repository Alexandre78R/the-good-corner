import { gql } from "@apollo/client";

export const CREATE_AD = gql`
  mutation CreateAd($data: CreateAdInput!) {
    createAd(data: $data) {
      category {
        id
      }
    }
  }
`;

export const UPDATE_AD = gql`
  mutation UpdateAd($data: UpdateAdInput!) {
    updateAd(data: $data) {
      id
      title
      description
      owner
      price
      location
      picture
      createdAt
      updatedAt
      category {
        id
      }
    }
  }
`;
