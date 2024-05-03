---
sidebar_position: 2
---

# Collections - Recieving Payments

> "Collections is a service that enables Mobile Money partners to receive payments for goods and services using MTN Mobile Money. The services can be face-to-face like MomoPay or can be done remotely for both offline and online" - [MTN MOMO DOCUMENTATION](https://momodeveloper.mtn.com/product#product=collections)


## Collection

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
