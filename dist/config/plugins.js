"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = ({ env }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                s3Options: {
                    credentials: {
                        accessKeyId: env('AWS_ACCESS_KEY_ID'),
                        secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
                    },
                    region: env('AWS_REGION'),
                    endpoint: env('AWS_ENDPOINT'),
                    forcePathStyle: true,
                    params: {
                        Bucket: env('AWS_BUCKET_NAME'),
                    },
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});
exports.default = config;
