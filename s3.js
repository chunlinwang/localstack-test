import {S3Client, ListBucketsCommand, PutObjectCommand, GetObjectCommand} from '@aws-sdk/client-s3';

const client = new S3Client({
  region: "eu-west-1",
  endpoint: "http://localstack:4566",
  credentials: {
    accessKeyId: "test",
    secretAccessKey: "test",
  },
  forcePathStyle: true,
});

const getBucketList = async () => {
  const bList = await client.send(new ListBucketsCommand({}));

  console.log(bList);
};

await getBucketList();

const putObject = async (Body) => {
  const result = await client.send(new PutObjectCommand({
    Bucket: 'my-bucket',
    Key: 'put-test',
    Body,
  }));

  console.log(result);
};

await putObject('Test');
const getObject = async () => {
  const result = await client.send(new GetObjectCommand({
    Bucket: 'my-bucket',
    Key: 'put-test'
  }));

  console.log(result.ContentLength);
};

await getObject();
