import { SQSClient, ListQueuesCommand, SendMessageCommand, ReceiveMessageCommand } from "@aws-sdk/client-sqs";

const client = new SQSClient({
  region: "eu-west-1",
  endpoint: "http://localstack:4566",
  credentials: {
    accessKeyId: "test",
    secretAccessKey: "test",
  },
  forcePathStyle: true,
});

const getSQSlist = async () => {
  const qList = await client.send(new ListQueuesCommand({}));

  console.log(qList);
};

await getSQSlist();


const sendMsg = async () => {
  const sendRes = await client.send(new SendMessageCommand({
    QueueUrl: 'http://localstack:4566/000000000000/my-queue',
    MessageBody: 'something',
  }));

  console.log(sendRes);
};

await sendMsg();

const receiveMsg = async () => {
  const msg = await client.send(new ReceiveMessageCommand({
    QueueUrl: 'http://localstack:4566/000000000000/my-queue',
  }));

  console.log(msg);
};

await receiveMsg();