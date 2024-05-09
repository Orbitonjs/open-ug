---
sidebar_position: 2
---

# Getting Started

Get started with UG Mobile Money is easy. This guide will help you get started with the library and make your first transaction. We shall use the MTN MOMO API for this guide.


## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install UG Mobile Money.

```sh
pip install ugmobilemoney
```

After installing it you can now import the package in your project.

```python
from mobile_money.momo import Collection, Disbursment
```

## Usage

This library is currently in development and only supports MTN MOMO. It supports the following operations:

- Collection
  - Request to pay
- Disbursment
  - Transfer

> **Note:** You need to have an account with MTN MOMO and have your API user ID and API key. You can get these from the [MTN MOMO Developer Portal](https://momodeveloper.mtn.com). If your in sandbox environment, we provide utils for creation of API user ID and API key.

### Collection

The UG Mobile Money library provides a `Collection` class that can be used to carry out operations or call the MOMO APIs provided under the collection Products.

You access it from the `mobile_money.momo` module.

```py
from mobile_money.momo import Collection


collection = Collection(
    subscription_key=SUBSCRIPTION_KEY,
    api_user=API_USER,
    api_key=API_KEY,
    callback_url="http://mydomain.com/webhooks/mtn/",
    production=False,
)
```

### Request to Pay

Request to pay is a service that allows a merchant to receive payments on from a customer. This is typically used when a customer is paying for goods or services. The `collect()` method is used to initiate a request to pay transaction.

```py
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

### Disbursment

The UG Mobile Money library provides a `Disbursment` class that can be used to carry out operations or call the MOMO APIs provided under the Disbursment Products.

You access it from the `mobile_money.momo` module.

```py
from mobile_money.momo import Disbursment

DISBURSEMENT = Disbursment(
    subscription_key=SUBSCRIPTION_KEY,
    api_user=API_USER,
    api_key=API_KEY,
    callback_url="http://mydomain.com/webhooks/mtn/",
    production=False,
)
```

### Transfer

Transfer is a service that allows a merchant to transfer money from their account to a customer's account. This is typically used when a customer is receiving money for goods or services. The `transfer()` method is used to initiate a transfer transaction.

```py
from mobile_money.momo import Disbursment
from mobile_money import generate_uuid

DISBURSEMENT = Disbursment(
    subscription_key=SUBSCRIPTION_KEY,
    api_user=API_USER,
    api_key=API_KEY,
    callback_url="http://mydomain.com/webhooks/mtn/",
    production=False,
)

transaction_reference = generate_uuid()

# Transfer
response = DISBURSEMENT.transfer(
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

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=ad96e8b378d5&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)