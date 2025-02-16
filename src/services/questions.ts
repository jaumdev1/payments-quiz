// src/data/questions.ts
export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  {
    "question": "What is the primary function of a payment processor?",
    "options": [
      "Facilitates transactions between merchants and banks",
      "Issues credit cards",
      "Provides loans to customers",
      "Stores customer payment details"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which entity is responsible for issuing credit cards?",
    "options": [
      "Issuer Bank",
      "Acquirer Bank",
      "Merchant",
      "Payment Gateway"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the role of an acquiring bank?",
    "options": [
      "Processes payments on behalf of merchants",
      "Provides customers with credit limits",
      "Stores customer payment information",
      "Verifies customer identity"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which protocol is commonly used for encrypting payment data?",
    "options": [
      "TLS",
      "HTTP",
      "FTP",
      "SMTP"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the primary function of a Payment Gateway?",
    "options": [
      "Securely process online payments",
      "Issue refunds to customers",
      "Provide customer credit limits",
      "Authorize cardholder transactions"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the function of an EMV chip?",
    "options": [
      "Provides dynamic authentication for transactions",
      "Stores the PIN code",
      "Lowers transaction fees",
      "Allows unlimited spending"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does the Payment Card Industry Data Security Standard (PCI DSS) enforce?",
    "options": [
      "Secure storage and transmission of payment card data",
      "Lower merchant processing fees",
      "Faster transaction approvals",
      "Mandatory encryption of customer emails"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which method is commonly used to prevent chargebacks?",
    "options": [
      "Address Verification Service (AVS)",
      "PCI DSS compliance",
      "Dynamic CVV codes",
      "Two-factor authentication"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a Card-Not-Present (CNP) transaction?",
    "options": [
      "An online or over-the-phone payment",
      "A payment where the card is swiped",
      "A transaction done at a bank ATM",
      "A payment processed by cash"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which type of fraud involves using stolen card details for unauthorized transactions?",
    "options": [
      "Card-Not-Present (CNP) fraud",
      "Point-of-Sale (POS) fraud",
      "Chargeback fraud",
      "Merchant fraud"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does NFC stand for in contactless payments?",
    "options": [
      "Near Field Communication",
      "Network Fraud Control",
      "New Financial Code",
      "Next Factor Compliance"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is an example of strong customer authentication (SCA)?",
    "options": [
      "Biometric authentication and a password",
      "Using only a username and password",
      "Entering credit card details manually",
      "Providing an email address"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does 3D Secure help prevent?",
    "options": [
      "Online payment fraud",
      "Card cloning",
      "Point-of-Sale fraud",
      "Declined transactions"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is tokenization in payment security?",
    "options": [
      "Replacing sensitive card data with a secure token",
      "Encrypting payment card data",
      "Storing cardholder information in plain text",
      "Using PIN codes for transactions"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is an Interchange Fee?",
    "options": [
      "A fee paid between banks for processing transactions",
      "A charge imposed on customers for ATM withdrawals",
      "A discount applied to credit card purchases",
      "A tax on international transactions"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which of the following best defines a chargeback?",
    "options": [
      "A reversal of a transaction by the cardholder's bank",
      "A refund issued by the merchant",
      "A fee for using a payment gateway",
      "A discount applied to credit card transactions"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the role of an Acquiring Bank?",
    "options": [
      "Processes card transactions for merchants",
      "Issues debit and credit cards",
      "Determines a customer’s credit score",
      "Manages loyalty programs for cardholders"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a Payment Service Provider (PSP)?",
    "options": [
      "A company that facilitates electronic payments for merchants",
      "An entity that issues credit cards",
      "A regulatory body for financial transactions",
      "A customer support service for banking issues"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which type of transaction requires the cardholder's PIN?",
    "options": [
      "Chip-and-PIN transaction",
      "Contactless payment",
      "Card-Not-Present (CNP) transaction",
      "Online purchase"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does the term 'Settlement' refer to in payment processing?",
    "options": [
      "The transfer of funds from the acquiring bank to the merchant",
      "The process of refunding a transaction",
      "The verification of cardholder details",
      "The calculation of transaction fees"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the purpose of Address Verification System (AVS)?",
    "options": [
      "To verify the cardholder’s billing address",
      "To store cardholder addresses",
      "To prevent duplicate transactions",
      "To enable faster online purchases"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which organization maintains PCI DSS compliance standards?",
    "options": [
      "PCI Security Standards Council",
      "Visa",
      "Federal Reserve",
      "World Bank"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which of the following is a benefit of using digital wallets like Apple Pay or Google Pay?",
    "options": [
      "Enhanced security via tokenization",
      "Lower transaction fees",
      "Faster bank settlements",
      "Direct integration with cryptocurrency wallets"
    ],
    "correctAnswer": 0
    },
   {
    "question": "What does Data Element 1 in ISO 8583 represent?",
    "options": [
      "Bitmap",
      "PAN (Primary Account Number)",
      "Transaction Amount",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 2 in ISO 8583 represent?",
    "options": [
      "PAN (Primary Account Number)",
      "Merchant ID",
      "Response Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 3 in ISO 8583 represent?",
    "options": [
      "Processing Code",
      "Transaction Amount",
      "Merchant Category Code",
      "Point of Service Entry Mode"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 4 in ISO 8583 represent?",
    "options": [
      "Transaction Amount",
      "Settlement Date",
      "Transaction Type",
      "PAN Sequence Number"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 5 in ISO 8583 represent?",
    "options": [
      "Settlement Amount",
      "Transaction Type",
      "Merchant ID",
      "Transaction Currency Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 6 in ISO 8583 represent?",
    "options": [
      "Cardholder Billing Amount",
      "Transaction Date",
      "Transaction Time",
      "Point of Service Condition Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 7 in ISO 8583 represent?",
    "options": [
      "Transmission Date and Time",
      "Response Code",
      "Transaction Type",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 8 in ISO 8583 represent?",
    "options": [
      "Cardholder Billing Fee Amount",
      "Settlement Amount",
      "Merchant Name",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 9 in ISO 8583 represent?",
    "options": [
      "Conversion Rate for Cardholder Billing",
      "Transaction Currency Code",
      "Response Code",
      "Account Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 10 in ISO 8583 represent?",
    "options": [
      "Conversion Rate for Settlement",
      "Processing Code",
      "Transaction Fee",
      "Merchant Category Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 11 in ISO 8583 represent?",
    "options": [
      "System Trace Audit Number (STAN)",
      "Transaction Type",
      "Point of Service Entry Mode",
      "Response Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 12 in ISO 8583 represent?",
    "options": [
      "Transaction Time",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 13 in ISO 8583 represent?",
    "options": [
      "Transaction Date",
      "Settlement Date",
      "Response Code",
      "Point of Service Condition Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 14 in ISO 8583 represent?",
    "options": [
      "Card Expiry Date",
      "Transaction Type",
      "Merchant ID",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 15 in ISO 8583 represent?",
    "options": [
      "Settlement Date",
      "Merchant Name",
      "Transaction Type",
      "Transaction Fee"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 16 in ISO 8583 represent?",
    "options": [
      "Cardholder Billing Date",
      "Processing Code",
      "Transaction Time",
      "Merchant Category Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 17 in ISO 8583 represent?",
    "options": [
      "Capture Date",
      "Settlement Amount",
      "Merchant Name",
      "Point of Service Entry Mode"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 18 in ISO 8583 represent?",
    "options": [
      "Merchant Category Code (MCC)",
      "Transaction Amount",
      "Cardholder Billing Amount",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 19 in ISO 8583 represent?",
    "options": [
      "Acquiring Institution Country Code",
      "Transaction Type",
      "Response Code",
      "Transaction Currency Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 20 in ISO 8583 represent?",
    "options": [
      "PAN Sequence Number",
      "Transaction Type",
      "Merchant ID",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 21 in ISO 8583 represent?",
    "options": [
      "Forwarding Institution Country Code",
      "Card Expiry Date",
      "Transaction Currency Code",
      "Response Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 22 in ISO 8583 represent?",
    "options": [
      "Point of Service Entry Mode",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 23 in ISO 8583 represent?",
    "options": [
      "Card Sequence Number",
      "Transaction Type",
      "Merchant Category Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 24 in ISO 8583 represent?",
    "options": [
      "Function Code",
      "Processing Code",
      "Point of Service Condition Code",
      "Merchant ID"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 25 in ISO 8583 represent?",
    "options": [
      "Point of Service Condition Code",
      "Transaction Type",
      "Response Code",
      "Settlement Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 26 in ISO 8583 represent?",
    "options": [
      "Point of Service PIN Capture Code",
      "Transaction Amount",
      "Processing Code",
      "Merchant Name"
    ],
    "correctAnswer": 0
  },  {
    "question": "What does Data Element 26 in ISO 8583 represent?",
    "options": [
      "Point of Service PIN Capture Code",
      "Transaction Type",
      "Processing Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 27 in ISO 8583 represent?",
    "options": [
      "Authorization Identification Response Length",
      "Transaction Amount",
      "Merchant Category Code",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 28 in ISO 8583 represent?",
    "options": [
      "Transaction Fee Amount",
      "Processing Code",
      "Response Code",
      "PAN Sequence Number"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 29 in ISO 8583 represent?",
    "options": [
      "Settlement Fee Amount",
      "Transaction Type",
      "Merchant ID",
      "Transaction Currency Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 30 in ISO 8583 represent?",
    "options": [
      "Transaction Processing Fee Amount",
      "Settlement Date",
      "Transaction Type",
      "Response Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 31 in ISO 8583 represent?",
    "options": [
      "Settlement Processing Fee Amount",
      "Transaction Amount",
      "Merchant Category Code",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 32 in ISO 8583 represent?",
    "options": [
      "Acquiring Institution Identification Code",
      "Transaction Type",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 33 in ISO 8583 represent?",
    "options": [
      "Forwarding Institution Identification Code",
      "Card Expiry Date",
      "Processing Code",
      "Transaction Currency Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 34 in ISO 8583 represent?",
    "options": [
      "Extended Primary Account Number",
      "Transaction Type",
      "Point of Service Entry Mode",
      "Response Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 35 in ISO 8583 represent?",
    "options": [
      "Track 2 Data",
      "Transaction Amount",
      "Merchant ID",
      "Settlement Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 36 in ISO 8583 represent?",
    "options": [
      "Track 3 Data",
      "Processing Code",
      "Point of Service Condition Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 37 in ISO 8583 represent?",
    "options": [
      "Retrieval Reference Number (RRN)",
      "Transaction Currency Code",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 38 in ISO 8583 represent?",
    "options": [
      "Authorization Identification Response Code",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 39 in ISO 8583 represent?",
    "options": [
      "Response Code",
      "Settlement Date",
      "Transaction Time",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 40 in ISO 8583 represent?",
    "options": [
      "Service Restriction Code",
      "Merchant Category Code",
      "Processing Code",
      "Transaction Currency Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 41 in ISO 8583 represent?",
    "options": [
      "Card Acceptor Terminal Identification",
      "Transaction Type",
      "Merchant Name",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 42 in ISO 8583 represent?",
    "options": [
      "Card Acceptor Identification Code",
      "Transaction Amount",
      "Point of Service Entry Mode",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 43 in ISO 8583 represent?",
    "options": [
      "Card Acceptor Name and Location",
      "Processing Code",
      "Response Code",
      "Transaction Time"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 44 in ISO 8583 represent?",
    "options": [
      "Additional Response Data",
      "Transaction Type",
      "Merchant Category Code",
      "Settlement Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 45 in ISO 8583 represent?",
    "options": [
      "Track 1 Data",
      "Processing Code",
      "Point of Service Entry Mode",
      "Transaction Currency Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 46 in ISO 8583 represent?",
    "options": [
      "Additional Data (ISO)",
      "Transaction Amount",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 47 in ISO 8583 represent?",
    "options": [
      "Additional Data (National)",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 48 in ISO 8583 represent?",
    "options": [
      "Additional Data (Private)",
      "Settlement Date",
      "Transaction Time",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 49 in ISO 8583 represent?",
    "options": [
      "Transaction Currency Code",
      "Processing Code",
      "Merchant Category Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 50 in ISO 8583 represent?",
    "options": [
      "Settlement Currency Code",
      "Point of Service Entry Mode",
      "Response Code",
      "Transaction Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 51 in ISO 8583 represent?",
    "options": [
      "Cardholder Billing Currency Code",
      "Transaction Type",
      "Settlement Amount",
      "Processing Code"
    ],
    "correctAnswer": 0
    },
   {
    "question": "What does Data Element 52 in ISO 8583 represent?",
    "options": [
      "PIN Data",
      "Transaction Type",
      "Processing Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 53 in ISO 8583 represent?",
    "options": [
      "Security Related Control Information",
      "Transaction Amount",
      "Merchant Category Code",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 54 in ISO 8583 represent?",
    "options": [
      "Additional Amounts",
      "Processing Code",
      "Response Code",
      "PAN Sequence Number"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 55 in ISO 8583 represent?",
    "options": [
      "EMV Chip Data",
      "Transaction Type",
      "Merchant ID",
      "Transaction Currency Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 56 in ISO 8583 represent?",
    "options": [
      "Reserved for ISO Use",
      "Settlement Date",
      "Transaction Type",
      "Response Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 57 in ISO 8583 represent?",
    "options": [
      "Reserved for National Use",
      "Transaction Amount",
      "Merchant Category Code",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 58 in ISO 8583 represent?",
    "options": [
      "Reserved for Private Use",
      "Transaction Type",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 59 in ISO 8583 represent?",
    "options": [
      "National POS Geographical Data",
      "Transaction Type",
      "Card Expiry Date",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 60 in ISO 8583 represent?",
    "options": [
      "Additional POS Information",
      "Processing Code",
      "Response Code",
      "Settlement Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 61 in ISO 8583 represent?",
    "options": [
      "Transaction Reference Data",
      "Transaction Amount",
      "Merchant Category Code",
      "Point of Service Entry Mode"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 62 in ISO 8583 represent?",
    "options": [
      "Additional Transaction Data",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 63 in ISO 8583 represent?",
    "options": [
      "Reserved for Private Use",
      "Transaction Time",
      "Settlement Amount",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 64 in ISO 8583 represent?",
    "options": [
      "Message Authentication Code (MAC)",
      "Processing Code",
      "Merchant Category Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 65 in ISO 8583 represent?",
    "options": [
      "Reserved for ISO Use",
      "Point of Service Entry Mode",
      "Response Code",
      "Transaction Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 66 in ISO 8583 represent?",
    "options": [
      "Settlement Code",
      "Transaction Type",
      "Settlement Amount",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 67 in ISO 8583 represent?",
    "options": [
      "Extended Payment Code",
      "Transaction Currency Code",
      "Merchant Category Code",
      "Settlement Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 68 in ISO 8583 represent?",
    "options": [
      "Receiving Institution Country Code",
      "Processing Code",
      "Point of Service Entry Mode",
      "Response Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 69 in ISO 8583 represent?",
    "options": [
      "Settlement Institution Country Code",
      "Transaction Type",
      "Merchant Name",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 70 in ISO 8583 represent?",
    "options": [
      "Network Management Information Code",
      "Transaction Amount",
      "Processing Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 71 in ISO 8583 represent?",
    "options": [
      "Message Number",
      "Point of Service Entry Mode",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 72 in ISO 8583 represent?",
    "options": [
      "Data Record",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 73 in ISO 8583 represent?",
    "options": [
      "Date, Action",
      "Settlement Date",
      "Transaction Amount",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 74 in ISO 8583 represent?",
    "options": [
      "Credits, Number",
      "Processing Code",
      "Merchant Category Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 75 in ISO 8583 represent?",
    "options": [
      "Credits, Reversal Number",
      "Point of Service Entry Mode",
      "Response Code",
      "Transaction Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 76 in ISO 8583 represent?",
    "options": [
      "Debits, Number",
      "Transaction Type",
      "Settlement Amount",
      "Processing Code"
    ],
    "correctAnswer": 0
    },
   {
    "question": "What does Data Element 77 in ISO 8583 represent?",
    "options": [
      "Debits, Reversal Number",
      "Processing Code",
      "Merchant Category Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 78 in ISO 8583 represent?",
    "options": [
      "Transfer, Number",
      "Settlement Date",
      "Transaction Amount",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 79 in ISO 8583 represent?",
    "options": [
      "Transfer, Reversal Number",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 80 in ISO 8583 represent?",
    "options": [
      "Reversal, Number",
      "Point of Service Entry Mode",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 81 in ISO 8583 represent?",
    "options": [
      "Authorizations, Number",
      "Transaction Type",
      "Processing Code",
      "Transaction Currency Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 82 in ISO 8583 represent?",
    "options": [
      "Credits, Processing Fee Amount",
      "Settlement Amount",
      "Transaction Amount",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 83 in ISO 8583 represent?",
    "options": [
      "Credits, Transaction Fee Amount",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 84 in ISO 8583 represent?",
    "options": [
      "Debits, Processing Fee Amount",
      "Point of Service Entry Mode",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 85 in ISO 8583 represent?",
    "options": [
      "Debits, Transaction Fee Amount",
      "Processing Code",
      "Merchant Category Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 86 in ISO 8583 represent?",
    "options": [
      "Credits, Amount",
      "Settlement Date",
      "Transaction Amount",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 87 in ISO 8583 represent?",
    "options": [
      "Credits, Reversal Amount",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 88 in ISO 8583 represent?",
    "options": [
      "Debits, Amount",
      "Point of Service Entry Mode",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 89 in ISO 8583 represent?",
    "options": [
      "Debits, Reversal Amount",
      "Processing Code",
      "Merchant Category Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 90 in ISO 8583 represent?",
    "options": [
      "Original Data Elements",
      "Settlement Date",
      "Transaction Amount",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 91 in ISO 8583 represent?",
    "options": [
      "File Update Code",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 92 in ISO 8583 represent?",
    "options": [
      "File Security Code",
      "Point of Service Entry Mode",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 93 in ISO 8583 represent?",
    "options": [
      "Response Indicator",
      "Processing Code",
      "Merchant Category Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 94 in ISO 8583 represent?",
    "options": [
      "Service Indicator",
      "Settlement Date",
      "Transaction Amount",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 95 in ISO 8583 represent?",
    "options": [
      "Replacement Amounts",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 96 in ISO 8583 represent?",
    "options": [
      "Message Security Code",
      "Point of Service Entry Mode",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 97 in ISO 8583 represent?",
    "options": [
      "Net Settlement Amount",
      "Processing Code",
      "Merchant Category Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 98 in ISO 8583 represent?",
    "options": [
      "Payee",
      "Settlement Date",
      "Transaction Amount",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 99 in ISO 8583 represent?",
    "options": [
      "Settlement Institution Identification Code",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 100 in ISO 8583 represent?",
    "options": [
      "Receiving Institution Identification Code",
      "Point of Service Entry Mode",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 101 in ISO 8583 represent?",
    "options": [
      "File Name",
      "Processing Code",
      "Merchant Category Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
    },
   {
    "question": "What does Data Element 102 in ISO 8583 represent?",
    "options": [
      "Account Identification 1",
      "Transaction Type",
      "Merchant ID",
      "Transaction Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 103 in ISO 8583 represent?",
    "options": [
      "Account Identification 2",
      "Settlement Date",
      "Response Code",
      "Transaction Currency Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 104 in ISO 8583 represent?",
    "options": [
      "Transaction Description",
      "Processing Code",
      "Merchant Category Code",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 105 in ISO 8583 represent?",
    "options": [
      "Reserved for ISO Use",
      "Point of Service Entry Mode",
      "Settlement Amount",
      "Transaction Fee Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 106 in ISO 8583 represent?",
    "options": [
      "Reserved for ISO Use",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 107 in ISO 8583 represent?",
    "options": [
      "Reserved for ISO Use",
      "Point of Service Condition Code",
      "Response Code",
      "Reversal Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 108 in ISO 8583 represent?",
    "options": [
      "Reserved for ISO Use",
      "Transaction Currency Code",
      "Processing Code",
      "Cardholder Verification Method"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 109 in ISO 8583 represent?",
    "options": [
      "Reserved for ISO Use",
      "Settlement Date",
      "Transaction Fee Amount",
      "Issuer Country Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 110 in ISO 8583 represent?",
    "options": [
      "Reserved for ISO Use",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 111 in ISO 8583 represent?",
    "options": [
      "Reserved for ISO Use",
      "Point of Service Entry Mode",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 112 in ISO 8583 represent?",
    "options": [
      "Additional Data - National",
      "Processing Code",
      "Merchant Category Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 113 in ISO 8583 represent?",
    "options": [
      "Additional Data - Private",
      "Settlement Date",
      "Transaction Amount",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 114 in ISO 8583 represent?",
    "options": [
      "Additional Data - ISO Use",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 115 in ISO 8583 represent?",
    "options": [
      "Additional Data - National Use",
      "Point of Service Entry Mode",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 116 in ISO 8583 represent?",
    "options": [
      "Additional Data - Private Use",
      "Processing Code",
      "Merchant Category Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 117 in ISO 8583 represent?",
    "options": [
      "Reserved for ISO Use",
      "Settlement Date",
      "Transaction Amount",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 118 in ISO 8583 represent?",
    "options": [
      "Reserved for National Use",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 119 in ISO 8583 represent?",
    "options": [
      "Reserved for Private Use",
      "Point of Service Entry Mode",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 120 in ISO 8583 represent?",
    "options": [
      "Reserved for ISO Use",
      "Processing Code",
      "Merchant Category Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 121 in ISO 8583 represent?",
    "options": [
      "Reserved for National Use",
      "Settlement Date",
      "Transaction Amount",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 122 in ISO 8583 represent?",
    "options": [
      "Reserved for Private Use",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 123 in ISO 8583 represent?",
    "options": [
      "Reserved for ISO Use",
      "Point of Service Entry Mode",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 124 in ISO 8583 represent?",
    "options": [
      "Reserved for National Use",
      "Processing Code",
      "Merchant Category Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 125 in ISO 8583 represent?",
    "options": [
      "Reserved for Private Use",
      "Settlement Date",
      "Transaction Amount",
      "Card Expiry Date"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 126 in ISO 8583 represent?",
    "options": [
      "Reserved for ISO Use",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 127 in ISO 8583 represent?",
    "options": [
      "Reserved for National Use",
      "Point of Service Entry Mode",
      "Response Code",
      "Settlement Amount"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 128 in ISO 8583 represent?",
    "options": [
      "Message Authentication Code (MAC)",
      "Processing Code",
      "Merchant Category Code",
      "Transaction Type"
    ],
    "correctAnswer": 0
    },
    {
    "question": "What is the ASCII code for the letter 'A'?",
    "options": [
      "65",
      "97",
      "41",
      "5A"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the hexadecimal representation of ASCII letter 'B'?",
    "options": [
      "0x42",
      "0x62",
      "0x32",
      "0x52"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the ASCII value of the digit '5'?",
    "options": [
      "53",
      "35",
      "85",
      "95"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the EBCDIC code for the letter 'C'?",
    "options": [
      "0xC3",
      "0x83",
      "0x43",
      "0xD3"
    ],
    "correctAnswer": 0
  },

  // Tokenization e Segurança
  {
    "question": "What is the main benefit of tokenization in payments?",
    "options": [
      "It reduces the need for PCI DSS compliance",
      "It speeds up transaction processing",
      "It eliminates the need for encryption",
      "It prevents all types of fraud"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which of the following is NOT a characteristic of a tokenized transaction?",
    "options": [
      "The PAN is replaced by a token",
      "Tokens can be reused for different transactions",
      "It enhances security by preventing exposure of real card data",
      "It requires a secure token vault"
    ],
    "correctAnswer": 1
  },

  // HSM (Hardware Security Module)
  {
    "question": "What is the primary function of an HSM in payment processing?",
    "options": [
      "Encrypting and decrypting sensitive data",
      "Generating random numbers",
      "Processing financial transactions",
      "Managing PCI DSS compliance"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which of these cryptographic operations is performed by an HSM?",
    "options": [
      "PIN encryption",
      "Tokenization",
      "SSL certificate issuance",
      "Firewall security"
    ],
    "correctAnswer": 0
  },

  // TecBan e Redes de Pagamento
  {
    "question": "What is TecBan responsible for in Brazil?",
    "options": [
      "Managing the largest ATM network (Banco24Horas)",
      "Processing card transactions",
      "Regulating interchange fees",
      "Issuing credit cards"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which type of transaction is commonly performed through TecBan's Banco24Horas network?",
    "options": [
      "Cash withdrawals",
      "Online purchases",
      "International wire transfers",
      "Mobile payments"
    ],
    "correctAnswer": 0
  },

  // ISO 8583 - Mensagens de Pagamento
  {
    "question": "Which data element in ISO 8583 represents the transaction type?",
    "options": [
      "DE 3",
      "DE 2",
      "DE 4",
      "DE 7"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which field in ISO 8583 contains the response code?",
    "options": [
      "DE 39",
      "DE 7",
      "DE 11",
      "DE 22"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which Message Type Indicator (MTI) represents a financial transaction request?",
    "options": [
      "0200",
      "0100",
      "0800",
      "0420"
    ],
    "correctAnswer": 0
  },

  // PCI DSS - Segurança de Dados
  {
    "question": "Which of the following is a PCI DSS requirement?",
    "options": [
      "Encrypt cardholder data",
      "Store CVV2 numbers",
      "Allow merchants to save full PANs",
      "Disable all authentication logs"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the maximum cardholder data retention period allowed under PCI DSS?",
    "options": [
      "Only as long as necessary for business and legal reasons",
      "Up to 5 years",
      "Forever, if encrypted",
      "Only for chargeback disputes"
    ],
    "correctAnswer": 0
  },

  // EMV (Europay, Mastercard, and Visa)
  {
    "question": "What is the primary benefit of EMV chip cards?",
    "options": [
      "Enhanced security through dynamic authentication",
      "Faster transactions",
      "Eliminates transaction fees",
      "Removes the need for PINs"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does 'EMV' stand for?",
    "options": [
      "Europay, Mastercard, and Visa",
      "Electronic Money Verification",
      "Encrypted Merchant Validation",
      "Enhanced Mobile Verification"
    ],
    "correctAnswer": 0
  },

  // NFC (Near Field Communication)
  {
    "question": "Which technology is commonly used for contactless payments?",
    "options": [
      "NFC",
      "Bluetooth",
      "Wi-Fi",
      "Infrared"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is required for an NFC payment transaction to occur?",
    "options": [
      "A close proximity between the card and reader",
      "A direct internet connection",
      "A PIN entry every time",
      "A signature verification"
    ],
    "correctAnswer": 0
  },

  // Outros Conceitos de Pagamento
  {
    "question": "What is an Acquirer in the payments ecosystem?",
    "options": [
      "A bank or financial institution that processes payments for merchants",
      "A company that issues credit cards",
      "A consumer using a debit or credit card",
      "A fraud detection system"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is a Payment Gateway?",
    "options": [
      "A service that securely transmits transaction data from a merchant to the acquiring bank",
      "A method of encrypting credit card data",
      "A digital wallet provider",
      "A type of chip in a credit card"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is Strong Customer Authentication (SCA)?",
    "options": [
      "A multi-factor authentication method required in payment transactions",
      "A type of card encryption",
      "A new debit card technology",
      "A fraud detection algorithm"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which regulation enforces Strong Customer Authentication in Europe?",
    "options": [
      "PSD2",
      "PCI DSS",
      "ISO 8583",
      "SOX"
    ],
    "correctAnswer": 0
    },
   {
    "question": "Which character encoding does TecBan use for its transactions?",
    "options": [
      "ASCII",
      "EBCDIC",
      "Base64",
      "UTF-8"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which character encoding does Mastercard typically use for transaction processing?",
    "options": [
      "EBCDIC",
      "ASCII",
      "Base64",
      "UTF-16"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the main difference between ASCII and EBCDIC?",
    "options": [
      "ASCII uses a 7-bit or 8-bit encoding, while EBCDIC is an 8-bit character encoding used mainly by IBM",
      "EBCDIC is a Unicode-based system, while ASCII is not",
      "ASCII is used only in payment systems, while EBCDIC is used in networking",
      "EBCDIC supports more characters than ASCII"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Why does Mastercard use EBCDIC instead of ASCII in some of its legacy systems?",
    "options": [
      "Because it was originally designed for IBM mainframes",
      "Because EBCDIC is faster than ASCII",
      "Because ASCII is not secure enough",
      "Because it allows for more transaction types"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which encoding format is more commonly used in modern financial APIs?",
    "options": [
      "ASCII",
      "EBCDIC",
      "Base64",
      "JSON (UTF-8)"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Which financial standard defines how character encoding should be handled in payment transactions?",
    "options": [
      "ISO 8583",
      "PCI DSS",
      "EMVCo",
      "IEEE 754"
    ],
    "correctAnswer": 0
  },

  // Mastercard Integrated Processing (MIP)
  {
    "question": "What is MIP in the context of Mastercard?",
    "options": [
      "Mastercard Integrated Processing",
      "Mastercard International Protocol",
      "Merchant Interoperability Program",
      "Mobile Identification Payment"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the main function of Mastercard Integrated Processing (MIP)?",
    "options": [
      "To centralize payment processing and authorization",
      "To provide fraud detection for merchants",
      "To process only cross-border transactions",
      "To replace ISO 8583"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which type of transactions does MIP primarily support?",
    "options": [
      "Cross-border and domestic transactions",
      "Only domestic transactions",
      "Only international transactions",
      "Only ATM withdrawals"
    ],
    "correctAnswer": 0
  },
  {
    "question": "How does MIP improve transaction efficiency?",
    "options": [
      "By centralizing clearing and settlement processes",
      "By using blockchain technology",
      "By eliminating the need for acquirers",
      "By removing the authorization step"
    ],
    "correctAnswer": 0
  },

  // TecBan e Banco24Horas
  {
    "question": "What is TecBan's primary role in the Brazilian financial ecosystem?",
    "options": [
      "Managing the Banco24Horas ATM network",
      "Issuing credit cards",
      "Providing acquiring services",
      "Regulating interchange fees"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which of the following services is provided by TecBan's Banco24Horas?",
    "options": [
      "Cash withdrawals",
      "Cryptocurrency exchanges",
      "Stock trading",
      "Online banking"
    ],
    "correctAnswer": 0
  },
  {
    "question": "How does TecBan ensure security in ATM transactions?",
    "options": [
      "By encrypting PINs and using tokenization",
      "By implementing blockchain technology",
      "By requiring two-factor authentication for ATM withdrawals",
      "By limiting cash withdrawals per day"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which encoding format does TecBan use to transmit ATM transaction data?",
    "options": [
      "ASCII",
      "EBCDIC",
      "UTF-16",
      "Base64"
    ],
    "correctAnswer": 0
  },

  // Tokenization e Segurança
  {
    "question": "What is the primary purpose of tokenization in payment systems?",
    "options": [
      "To replace sensitive card data with a non-sensitive equivalent",
      "To encrypt payment transactions",
      "To accelerate transaction processing",
      "To allow anonymous transactions"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which of the following payment technologies requires tokenization?",
    "options": [
      "Apple Pay",
      "Magnetic stripe transactions",
      "Manual card entry",
      "Offline transactions"
    ],
    "correctAnswer": 0
  },
  {
    "question": "How does tokenization differ from encryption?",
    "options": [
      "Tokens cannot be reversed into the original data, whereas encrypted data can be decrypted with a key",
      "Encryption is faster than tokenization",
      "Tokenization stores data in plaintext while encryption does not",
      "Tokenization does not enhance security"
    ],
    "correctAnswer": 0
  },

  // ISO 8583 e Comunicação de Pagamentos
  {
    "question": "Which data element in ISO 8583 represents the PAN (Primary Account Number)?",
    "options": [
      "DE 2",
      "DE 4",
      "DE 39",
      "DE 52"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does Data Element 39 in ISO 8583 indicate?",
    "options": [
      "Response Code",
      "Transaction Amount",
      "PAN",
      "Merchant Category Code"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What is the Message Type Indicator (MTI) for a financial transaction authorization request?",
    "options": [
      "0100",
      "0200",
      "0800",
      "0420"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Which financial entity is responsible for processing ISO 8583 transactions?",
    "options": [
      "Acquirer",
      "Issuer",
      "Cardholder",
      "Merchant"
    ],
    "correctAnswer": 0
  },
  {
    "question": "What does DE 7 in ISO 8583 represent?",
    "options": [
      "Transmission Date and Time",
      "Transaction Type",
      "Response Code",
      "Point of Service Entry Mode"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Which ISO 8583 field contains the cardholder's PIN data?",
    "options": [
      "DE 52",
      "DE 2",
      "DE 4",
      "DE 32"
    ],
    "correctAnswer": 0
  }
]


// Gerador assíncrono de questões
export async function getQuizQuestions(): Promise<Question[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(questions);
    }, 1000);
  });
}
