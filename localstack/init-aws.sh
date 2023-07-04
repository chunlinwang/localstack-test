#!/bin/bash

awslocal s3api create-bucket --bucket my-bucket --region eu-west-1 --create-bucket-configuration LocationConstraint=eu-west-1
awslocal sqs create-queue --queue-name my-queue --region eu-west-1