---
sidebar_position: 3
---

# Disbursements - Sending Payments

> "Disbursements is a service that enables Mobile Money partners to send money in bulk to different recipients with just one click. This setup can be manually executed (logging into the system, uploading recipient's list and trigger payments) or automated (requires a one-time setup of the recipients' lists and commands to effect payment)." - [MTN MOMO DOCUMENTATION](https://momodeveloper.mtn.com/product#product=disbursements)


## Disbursment

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

## Transfer

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