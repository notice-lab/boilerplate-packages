#!/usr/bin/bash

rm -f .npmrc

REPOSITORY_DOMAIN=sprovod
REPOSITORY_DOMAIN_OWNER=336911096458
REPOSITORY_REGION=eu-central-1
REPOSITORY_NAMES=( $(aws codeartifact list-repositories-in-domain \
    --domain $REPOSITORY_DOMAIN \
    --domain-owner $REPOSITORY_DOMAIN_OWNER \
    --region $REPOSITORY_REGION \
    --query 'repositories[*].[name]' \
    --output text) )

for REPOSITORY_NAME in "${REPOSITORY_NAMES[@]}"
do
    REPOSITORY_ENDPOINT=$(aws codeartifact get-repository-endpoint \
        --domain $REPOSITORY_DOMAIN \
        --repository $REPOSITORY_NAME \
        --format npm \
        --query repositoryEndpoint \
        --output text)

    echo "@$REPOSITORY_NAME:registry=$REPOSITORY_ENDPOINT" >> .npmrc
    echo "${REPOSITORY_ENDPOINT#https:}:always-auth=true" >> .npmrc
    echo "${REPOSITORY_ENDPOINT#https:}:_authToken=\${CODEARTIFACT_AUTH_TOKEN}" >> .npmrc
    echo "" >> .npmrc
done

export CODEARTIFACT_AUTH_TOKEN=$(aws codeartifact get-authorization-token \
    --domain $REPOSITORY_DOMAIN \
    --domain-owner $REPOSITORY_DOMAIN_OWNER \
    --region $REPOSITORY_REGION \
    --query authorizationToken \
    --output text)

echo "$CODEARTIFACT_AUTH_TOKEN"
