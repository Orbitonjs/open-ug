---
slug: making-mobile-money-payments-in-python
title: How to create Mobile Money Payments in Python in Uganda
authors:
  name: Beingana Jim Junior
  title: Open UG Team
  url: https://github.com/jim-junior
  image_url: https://avatars.githubusercontent.com/u/69729988?v=4
tags: [python, ugmobilemoney, mtn-momo]
---

![How to create Mobile Money Payments in Python in Uganda](./banner.png)

In this article, we will learn how to create Mobile Money Payments in Python in Uganda using different Mobile Money APIs, while utilizing the `ugmobilemoney` library.

<!--truncate-->

## Introduction

Mobile Money is a digital payment system that allows users to conduct financial transactions using their mobile phones. It is a popular payment method in Uganda, with the most popular Mobile Money service providers being MTN Mobile Money, Airtel Money, and Africell Money.

In this article, we will focus on creating Mobile Money Payments in Python in Uganda using the `ugmobilemoney` library. This library provides a simple and easy-to-use interface for interacting with different Mobile Money APIs in Uganda.

The `ugmobilemoney` library currently supports a number of Mobile Money APIs in Uganda, including:

- MTN Mobile Money API
- Airtel Money API
- Flutterwave API
- Yo Uganda API
- Xente API

In this article, we will focus on creating Mobile Money Payments using the MTN Mobile Money API, If you want other APIs, you can check the [`ugmobilemoney` documentation](https://open.cranom.cloud/ugmobilemoney/intro).

## Prerequisites

Before we get started, you will need to have the following prerequisites:

- Python installed on your machine
- An active MTN Mobile Money API key and Subscription Key

> If you don't have an MTN Mobile Money API key or Subscription Key, you can follow this **Step by Step Guide** to get one: [How to getting Started with MTN MOMO API](https://open.cranom.cloud/ugmobilemoney/mtn-momo/getting-started)

## Installing the `ugmobilemoney` library

To get started, you will need to install the `ugmobilemoney` library using `pip`. You can do this by running the following command:

```bash
pip install ugmobilemoney
```

Once you have installed the `ugmobilemoney` library, it should be accessible in your Python environment and `mobile_money` module.

## Creating Mobile Money Payments

At this point, you should have the `ugmobilemoney` library installed and your MTN Mobile Money API key and Subscription Key ready. Now, let's create a simple Mobile Money Payment using the `ugmobilemoney` library.

The MTN MOMO API provides differect services in form of Products. When you want to recieve money from users you use the [**Collections**](https://momodeveloper.mtn.com/product#product=collections) Product.

The `ugmobilemoney` library provides a simple interface to interact with each of the Products. For example if you want to use the Collections Product, you can import the `Collection` class from the `mobile_money.momo` module and use it to create a Mobile Money Payment.

Here is an example of how you can create a Mobile Money Payment using the `Collection` class:

```python
from mobile_money.momo import Collection
from mobile_money import generate_uuid

collection = Collection(
    subscription_key=SUBSCRIPTION_KEY,
    api_user=API_USER,
    api_key=API_KEY,
    callback_url="http://mydomain.com/webhooks/mtn/",
    production=False,
)

transaction_reference = generate_uuid()
# Request to pay
response = COLLECTION.collect(
    amount="100",
    phone_number="256772123456",
    currency="UGX",
    external_id="external id",
    reference_id=transaction_reference,
    payee_note="test",
    payer_message="test",
)

print(response)

# >>> <Response [202 Accepted]>
```

In this example, we first import the `Collection` class from the `ugmobilemoney.momo` module. We then create an instance of the `Collection` class, passing in the required parameters such as the Subscription Key, API User, API Key, and callback URL.

We then generate a unique transaction reference using the `generate_uuid` function. We then call the `collect` method on the `Collection` instance, passing in the required parameters such as the amount, phone number, currency, external ID, reference ID, payee note, and payer message.

The `collect` method will send a request to the MTN MOMO API to create a Mobile Money Payment. If the request is successful, the method will return a response object with a status code of `202 Accepted`.

## Disbursing (Sending) Mobile Money Payments

The MTN MOMO API also provides a service for sending Mobile Money Payments in bulk to different recipients. This service is called Disbursements. You can use the `Disbursement` class from the `mobile_money.momo` module to send Mobile Money Payments using the Disbursements service.

Here is an example of how you can send Mobile Money Payments using the `Disbursement` class:

```python
from mobile_money.momo import Disbursement

disbursement = Disbursement(
    subscription_key=SUBSCRIPTION_KEY,
    api_user=API_USER,
    api_key=API_KEY,
    callback_url="http://mydomain.com/webhooks/mtn/",
    production=False,
)

transaction_reference = generate_uuid()

response = disbursement.send(
    amount="100",
    phone_number="256772123456",
    currency="UGX",
    external_id="external id",
    reference_id=transaction_reference,
    payee_note="test",
    payer_message="test",
)

print(response)

# >>> <Response [202 Accepted]>
```

## Conclusion

In this article, we have learned how to create Mobile Money Payments in Python in Uganda using the `ugmobilemoney` library. We have seen how to create Mobile Money Payments using the MTN Mobile Money API, and how to send Mobile Money Payments using the Disbursements service.

The `ugmobilemoney` library also supports other Payment Providers in Uganda, such as Airtel Money, Flutterwave, Yo Uganda, and Xente, It also tries to fully implement their APIs making it not only limited to mobile money payments but also other services like Airtime Topup, Bill Payments, Card Payments as long as the Service Provider has an API for it that is well documented.

You can learn more about the `ugmobilemoney` library and how to use it by checking out the [documentation](https://open.cranom.cloud/ugmobilemoney/intro). or its Code on [Github](https://github.com/open-ug/ugmobilemoney-py)


[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=ad96e8b378d5&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)