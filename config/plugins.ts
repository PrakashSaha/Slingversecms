import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
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

export default config;

