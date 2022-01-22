module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID', 'AKIAX2VIUIX4ZTQYRCUC'),
      secretAccessKey: env('AWS_ACCESS_SECRET', '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'),
      region: env('AWS_REGION', 'us-east-1'),
      params: {
        Bucket: env('AWS_BUCKET', 'edu-strapi-content'),
      },
    },
  },
});
