// src/data/questions.ts
export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  level: 1 | 2 | 3 | 4 | 5;
  explanation: string;
  category?: string;
}

export const questions: Question[] = [
  // ========== NÍVEL 1 - FUNDAMENTOS DE MEIOS DE PAGAMENTO ==========
  {
    question: "What is the primary function of a payment processor?",
    options: [
      "Facilitates transactions between merchants and banks",
      "Issues credit cards",
      "Provides loans to customers",
      "Stores customer payment details"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "A payment processor acts as an intermediary that facilitates the communication and transaction flow between merchants (who want to accept payments) and banks (who process the actual funds). Think of it as a translator and router - it takes payment requests from merchants, formats them properly, routes them to the right banks, and returns the responses. Payment processors don't issue cards (that's the issuer's job) or provide loans (that's a different banking function).",
    category: "Fundamentals"
  },
  {
    question: "Which entity is responsible for issuing credit cards?",
    options: [
      "Issuer Bank",
      "Acquirer Bank",
      "Merchant",
      "Payment Gateway"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "The Issuer Bank (also called the issuing bank or card issuer) is the financial institution that issues credit or debit cards to cardholders. They are responsible for approving card applications, setting credit limits, managing cardholder accounts, and authorizing transactions. The acquirer processes payments FOR merchants, but doesn't issue cards. Merchants accept payments but don't issue cards. Payment gateways facilitate transactions but don't issue cards either.",
    category: "Fundamentals"
  },
  {
    question: "What is the role of an acquiring bank?",
    options: [
      "Processes payments on behalf of merchants",
      "Provides customers with credit limits",
      "Stores customer payment information",
      "Verifies customer identity"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "An acquiring bank (acquirer) processes card transactions on behalf of merchants. When you swipe your card at a store, the acquirer receives the transaction request, routes it through the payment network to the issuer, and handles the settlement of funds to the merchant's account. The acquirer doesn't set credit limits (that's the issuer), doesn't store customer payment info (merchants do, with PCI compliance), and doesn't verify identity (that's part of the authorization process).",
    category: "Fundamentals"
  },
  {
    question: "Which protocol is commonly used for encrypting payment data?",
    options: [
      "TLS",
      "HTTP",
      "FTP",
      "SMTP"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "TLS (Transport Layer Security) is the standard protocol used to encrypt payment data during transmission. It creates a secure channel between systems, ensuring that card data cannot be intercepted. HTTP is unencrypted by default (HTTPS uses TLS). FTP and SMTP are not secure protocols for payment data - FTP is for file transfer and SMTP is for email.",
    category: "Security"
  },
  {
    question: "What is the primary function of a Payment Gateway?",
    options: [
      "Securely process online payments",
      "Issue refunds to customers",
      "Provide customer credit limits",
      "Authorize cardholder transactions"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "A Payment Gateway is a service that securely processes online payments by encrypting and transmitting transaction data from the merchant's website to the acquiring bank and payment networks. While gateways can facilitate refunds, they don't issue them directly (the merchant does). They don't set credit limits (that's the issuer) and while they route authorization requests, the actual authorization decision is made by the issuer.",
    category: "Fundamentals"
  },
  {
    question: "What is the function of an EMV chip?",
    options: [
      "Provides dynamic authentication for transactions",
      "Stores the PIN code",
      "Lowers transaction fees",
      "Allows unlimited spending"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "EMV chips provide dynamic authentication by generating a unique cryptogram for each transaction using cryptographic keys stored in the chip. This makes each transaction unique and prevents card cloning. The PIN is NOT stored on the chip - it's stored securely by the issuer bank. EMV doesn't affect transaction fees (that's determined by interchange rates) and doesn't remove spending limits (those are set by the issuer).",
    category: "EMV"
  },
  {
    question: "What does the Payment Card Industry Data Security Standard (PCI DSS) enforce?",
    options: [
      "Secure storage and transmission of payment card data",
      "Lower merchant processing fees",
      "Faster transaction approvals",
      "Mandatory encryption of customer emails"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "PCI DSS (Payment Card Industry Data Security Standard) is a set of security standards designed to ensure that all companies that accept, process, store or transmit credit card information maintain a secure environment. It enforces secure storage and transmission of cardholder data, requires encryption, access controls, and regular security testing. PCI DSS doesn't affect fees, transaction speed, or email encryption - it's purely about card data security.",
    category: "Security"
  },
  {
    question: "Which method is commonly used to prevent chargebacks?",
    options: [
      "Address Verification Service (AVS)",
      "PCI DSS compliance",
      "Dynamic CVV codes",
      "Two-factor authentication"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "AVS (Address Verification Service) compares the billing address provided by the customer with the address on file with the card issuer. This helps verify that the person making the purchase is the legitimate cardholder, reducing fraudulent transactions and chargebacks. PCI DSS is about data security, not fraud prevention. Dynamic CVV codes don't exist (CVV is static). Two-factor authentication helps but AVS is specifically designed for CNP transactions to reduce chargebacks.",
    category: "Fraud Prevention"
  },
  {
    question: "What is a Card-Not-Present (CNP) transaction?",
    options: [
      "An online or over-the-phone payment",
      "A payment where the card is swiped",
      "A transaction done at a bank ATM",
      "A payment processed by cash"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "A Card-Not-Present (CNP) transaction occurs when the physical card is not present at the point of sale. This includes online purchases, phone orders, mail orders, and recurring payments. When a card is swiped, inserted, or tapped at a physical terminal, that's a Card-Present transaction. ATM transactions are Card-Present. Cash payments don't involve cards at all.",
    category: "Fundamentals"
  },
  {
    question: "Which type of fraud involves using stolen card details for unauthorized transactions?",
    options: [
      "Card-Not-Present (CNP) fraud",
      "Point-of-Sale (POS) fraud",
      "Chargeback fraud",
      "Merchant fraud"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "CNP fraud occurs when criminals use stolen card information (card number, CVV, expiration date) to make unauthorized purchases online or over the phone where the card isn't physically present. POS fraud involves physical card theft or skimming at point-of-sale terminals. Chargeback fraud is when a legitimate cardholder falsely claims a transaction was unauthorized. Merchant fraud involves merchants committing fraud, not using stolen cards.",
    category: "Fraud Prevention"
  },
  {
    question: "What does NFC stand for in contactless payments?",
    options: [
      "Near Field Communication",
      "Network Fraud Control",
      "New Financial Code",
      "Next Factor Compliance"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "NFC stands for Near Field Communication, a short-range wireless technology that enables contactless payments. It allows two devices (like a card and a payment terminal) to communicate when they're within a few centimeters of each other. This is the technology behind tap-to-pay cards and mobile wallets like Apple Pay and Google Pay. The other options are made-up terms.",
    category: "Technology"
  },
  {
    question: "What is an example of strong customer authentication (SCA)?",
    options: [
      "Biometric authentication and a password",
      "Using only a username and password",
      "Entering credit card details manually",
      "Providing an email address"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "Strong Customer Authentication (SCA) requires two or more independent authentication factors: something you know (password), something you have (phone, card), or something you are (biometric). Biometric + password combines 'something you are' with 'something you know', meeting SCA requirements. Username/password alone is only one factor. Entering card details is just data entry, not authentication. An email address is just an identifier, not authentication.",
    category: "Security"
  },
  {
    question: "What does 3D Secure help prevent?",
    options: [
      "Online payment fraud",
      "Card cloning",
      "Point-of-Sale fraud",
      "Declined transactions"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "3D Secure (like Verified by Visa, Mastercard SecureCode) adds an extra authentication step for online transactions, typically requiring a password or OTP sent to the cardholder's phone. This helps prevent online payment fraud by verifying the cardholder's identity. It doesn't prevent card cloning (that's EMV chip's job), POS fraud (that's for physical transactions), or declined transactions (it can actually cause declines if authentication fails).",
    category: "Security"
  },
  {
    question: "What is tokenization in payment security?",
    options: [
      "Replacing sensitive card data with a secure token",
      "Encrypting payment card data",
      "Storing cardholder information in plain text",
      "Using PIN codes for transactions"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "Tokenization replaces sensitive card data (like PAN) with a non-sensitive equivalent called a token. The token can be used for transactions but cannot be reverse-engineered to reveal the original card data. This is different from encryption, which can be decrypted with a key. Tokenization is one-way - tokens cannot be converted back to the original data. Storing data in plain text is a security violation. PIN codes are for authentication, not tokenization.",
    category: "Security"
  },
  {
    question: "What is an Interchange Fee?",
    options: [
      "A fee paid between banks for processing transactions",
      "A charge imposed on customers for ATM withdrawals",
      "A discount applied to credit card purchases",
      "A tax on international transactions"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "An interchange fee is paid by the acquirer (merchant's bank) to the issuer (cardholder's bank) for each card transaction. It compensates the issuer for the risk and cost of issuing cards and extending credit. It's typically a percentage of the transaction amount plus a fixed fee. This fee is NOT charged to customers directly (though merchants may pass costs to customers). It's not a discount or tax - it's a fee between financial institutions.",
    category: "Fundamentals"
  },
  {
    question: "Which of the following best defines a chargeback?",
    options: [
      "A reversal of a transaction by the cardholder's bank",
      "A refund issued by the merchant",
      "A fee for using a payment gateway",
      "A discount applied to credit card transactions"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "A chargeback is when the cardholder's bank (issuer) reverses a transaction and returns funds to the cardholder, typically due to fraud, unauthorized use, or a dispute. This is different from a refund, which is initiated by the merchant voluntarily. Chargebacks involve the issuer forcing the reversal. They're not fees or discounts - they're transaction reversals that can result in fees for the merchant.",
    category: "Fundamentals"
  },
  {
    question: "What is the role of an Acquiring Bank?",
    options: [
      "Processes card transactions for merchants",
      "Issues debit and credit cards",
      "Determines a customer's credit score",
      "Manages loyalty programs for cardholders"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "An acquiring bank (acquirer) processes card transactions on behalf of merchants. They receive transaction requests from merchants, route them through payment networks to issuers, handle authorization responses, and settle funds to merchant accounts. Issuers issue cards, not acquirers. Credit scores are determined by credit bureaus, not acquirers. Loyalty programs are typically managed by issuers or card networks.",
    category: "Fundamentals"
  },
  {
    question: "What is a Payment Service Provider (PSP)?",
    options: [
      "A company that facilitates electronic payments for merchants",
      "An entity that issues credit cards",
      "A regulatory body for financial transactions",
      "A customer support service for banking issues"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "A Payment Service Provider (PSP) is a company that provides payment processing services to merchants, enabling them to accept electronic payments. PSPs typically offer payment gateways, merchant accounts, and payment processing infrastructure. They don't issue cards (that's issuers), aren't regulatory bodies, and aren't customer support services - they're payment infrastructure providers.",
    category: "Fundamentals"
  },
  {
    question: "Which type of transaction requires the cardholder's PIN?",
    options: [
      "Chip-and-PIN transaction",
      "Contactless payment",
      "Card-Not-Present (CNP) transaction",
      "Online purchase"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "Chip-and-PIN transactions require the cardholder to enter their PIN when inserting the chip card into a terminal. This provides strong authentication. Contactless payments typically don't require PIN for small amounts (though limits vary). CNP transactions (online) don't use PIN - they use CVV and other methods. Online purchases are CNP transactions and don't require PIN entry.",
    category: "Fundamentals"
  },
  {
    question: "What does the term 'Settlement' refer to in payment processing?",
    options: [
      "The transfer of funds from the acquiring bank to the merchant",
      "The process of refunding a transaction",
      "The verification of cardholder details",
      "The calculation of transaction fees"
    ],
    correctAnswer: 0,
    level: 2,
    explanation: "Settlement is the process where funds are transferred from the acquiring bank to the merchant's account, typically occurring 1-3 business days after authorization. This is the final step that completes a transaction. Refunds are separate transactions. Verification happens during authorization, not settlement. Fee calculation happens during settlement but settlement is the actual fund transfer.",
    category: "Transaction Flow"
  },
  {
    question: "What is the purpose of Address Verification System (AVS)?",
    options: [
      "To verify the cardholder's billing address",
      "To store cardholder addresses",
      "To prevent duplicate transactions",
      "To enable faster online purchases"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "AVS compares the billing address provided by the customer during a CNP transaction with the address on file with the card issuer. This helps verify the cardholder's identity and reduces fraud. AVS doesn't store addresses (that's done by merchants and issuers), doesn't prevent duplicates (that requires other checks), and doesn't speed up purchases (it can actually add a verification step).",
    category: "Fraud Prevention"
  },
  {
    question: "Which organization maintains PCI DSS compliance standards?",
    options: [
      "PCI Security Standards Council",
      "Visa",
      "Federal Reserve",
      "World Bank"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "The PCI Security Standards Council (PCI SSC) is the independent body that develops and maintains the PCI DSS standards. It was founded by major card brands (Visa, Mastercard, American Express, Discover, JCB) but operates independently. Visa is a card brand, not the standards body. The Federal Reserve regulates banks in the US but doesn't maintain PCI DSS. The World Bank is a financial institution, not a standards body.",
    category: "Security"
  },
  {
    question: "Which of the following is a benefit of using digital wallets like Apple Pay or Google Pay?",
    options: [
      "Enhanced security via tokenization",
      "Lower transaction fees",
      "Faster bank settlements",
      "Direct integration with cryptocurrency wallets"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "Digital wallets use tokenization to replace actual card numbers with tokens, enhancing security. If a token is compromised, it can't be used elsewhere and the real card number isn't exposed. Transaction fees are set by card networks and acquirers, not affected by wallet type. Settlement times are the same regardless of payment method. Digital wallets don't integrate with cryptocurrency wallets - they're separate systems.",
    category: "Technology"
    },
  // ========== NÍVEL 3 - ISO 8583 E MENSAGERIA ==========
   {
    question: "What does Data Element 1 in ISO 8583 represent?",
    options: [
      "Bitmap",
      "PAN (Primary Account Number)",
      "Transaction Amount",
      "Processing Code"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 1 is the Primary Bitmap, which indicates which data elements are present in the message. Each bit in the bitmap corresponds to a data element number - if bit 2 is set, DE 2 is present; if bit 3 is set, DE 3 is present, etc. The bitmap is essential for parsing ISO 8583 messages. PAN is DE 2, Transaction Amount is DE 4, and Processing Code is DE 3.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 2 in ISO 8583 represent?",
    options: [
      "PAN (Primary Account Number)",
      "Merchant ID",
      "Response Code",
      "Transaction Type"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 2 contains the PAN (Primary Account Number) - the card number. This is typically formatted as LLVAR (Length-Length-Value) or fixed length depending on the implementation. The PAN is one of the most critical fields as it identifies the card being used. Merchant ID is DE 42, Response Code is DE 39, and Transaction Type is indicated by the Processing Code (DE 3) and MTI.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 3 in ISO 8583 represent?",
    options: [
      "Processing Code",
      "Transaction Amount",
      "Merchant Category Code",
      "Point of Service Entry Mode"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "Data Element 3 is the Processing Code, a 6-digit field that defines the transaction type. The first 2 digits indicate the transaction type (e.g., 00=purchase, 20=withdrawal), digits 3-4 indicate the source account (e.g., 00=default, 10=savings), and digits 5-6 indicate the destination account. Transaction Amount is DE 4, MCC is DE 18, and Entry Mode is DE 22.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 4 in ISO 8583 represent?",
    options: [
      "Transaction Amount",
      "Settlement Date",
      "Transaction Type",
      "PAN Sequence Number"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 4 contains the Transaction Amount, typically formatted as a fixed 12-digit field representing the amount in the minor currency unit (e.g., cents for USD). This is a critical field for authorization - the issuer checks if the cardholder has sufficient funds/credit. Settlement Date is DE 15, Transaction Type is in DE 3, and PAN Sequence Number is DE 20.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 5 in ISO 8583 represent?",
    options: [
      "Settlement Amount",
      "Transaction Type",
      "Merchant ID",
      "Transaction Currency Code"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 5 contains the Settlement Amount, which may differ from the transaction amount (DE 4) due to currency conversion or fees. This is used when the settlement currency differs from the transaction currency. Transaction Type is in DE 3, Merchant ID is DE 42, Currency Code is DE 49.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 6 in ISO 8583 represent?",
    options: [
      "Cardholder Billing Amount",
      "Transaction Date",
      "Transaction Time",
      "Point of Service Condition Code"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 6 contains the Cardholder Billing Amount, used when the billing currency differs from the transaction currency (e.g., international transactions). This is the amount that will appear on the cardholder's statement. Transaction Date is DE 13, Transaction Time is DE 12, POS Condition Code is DE 25.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 7 in ISO 8583 represent?",
    options: [
      "Transmission Date and Time",
      "Response Code",
      "Transaction Type",
      "Card Expiry Date"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 7 contains the Transmission Date and Time (MMDDhhmmss format), indicating when the message was transmitted from the point of origin. This is critical for tracking, auditing, and timeout handling. Response Code is DE 39, Transaction Type is in DE 3, and Card Expiry Date is DE 14.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 8 in ISO 8583 represent?",
    options: [
      "Cardholder Billing Fee Amount",
      "Settlement Amount",
      "Merchant Name",
      "Transaction Type"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 8 contains the Cardholder Billing Fee Amount, used when fees are charged to the cardholder (e.g., ATM fees, currency conversion fees). This is separate from the transaction amount and represents additional charges. Settlement Amount is DE 5, Merchant Name is DE 43, Transaction Type is in DE 3.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 9 in ISO 8583 represent?",
    options: [
      "Conversion Rate for Cardholder Billing",
      "Transaction Currency Code",
      "Response Code",
      "Account Type"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 9 contains the Conversion Rate for Cardholder Billing, used when the billing currency differs from the transaction currency. This rate is used to convert the transaction amount to the cardholder's billing currency. Currency Code is DE 49, Response Code is DE 39, Account Type is indicated in DE 3 (Processing Code).",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 10 in ISO 8583 represent?",
    options: [
      "Conversion Rate for Settlement",
      "Processing Code",
      "Transaction Fee",
      "Merchant Category Code"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 10 contains the Conversion Rate for Settlement, used when the settlement currency differs from the transaction currency. This rate converts the transaction amount to the currency used for settlement between acquirer and issuer. Processing Code is DE 3, Transaction Fee amounts are in DE 28-31, MCC is DE 18.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 11 in ISO 8583 represent?",
    options: [
      "System Trace Audit Number (STAN)",
      "Transaction Type",
      "Point of Service Entry Mode",
      "Response Code"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 11 contains the System Trace Audit Number (STAN), a unique sequential number assigned by the originator to identify each transaction. This is essential for matching request and response messages, tracking transactions, and debugging. The STAN must be unique within a 24-hour period. Transaction Type is in DE 3, Entry Mode is DE 22, and Response Code is DE 39.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 12 in ISO 8583 represent?",
    options: [
      "Transaction Time",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 12 contains the Transaction Time in HHMMSS format (24-hour). This indicates when the transaction occurred at the point of sale. Used for tracking, reconciliation, and reporting. Transaction Type is in DE 3, Merchant Name is DE 43, Processing Code is DE 3.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 13 in ISO 8583 represent?",
    options: [
      "Transaction Date",
      "Settlement Date",
      "Response Code",
      "Point of Service Condition Code"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 13 contains the Transaction Date in MMDD format. This indicates the date when the transaction occurred at the point of sale. Used with DE 12 (time) for complete transaction timestamp. Settlement Date is DE 15, Response Code is DE 39, POS Condition Code is DE 25.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 14 in ISO 8583 represent?",
    options: [
      "Card Expiry Date",
      "Transaction Type",
      "Merchant ID",
      "Processing Code"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 14 contains the Card Expiry Date in YYMM format (e.g., 2512 = December 2025). This is read from the card and used to validate that the card hasn't expired. Critical for authorization - expired cards should be declined. Transaction Type is in DE 3, Merchant ID is DE 42, Processing Code is DE 3.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 15 in ISO 8583 represent?",
    options: [
      "Settlement Date",
      "Merchant Name",
      "Transaction Type",
      "Transaction Fee"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 15 contains the Settlement Date in MMDD format, indicating when the transaction will be settled (funds transferred). This is typically 1-3 business days after the transaction date. Used for reconciliation and settlement processing. Merchant Name is DE 43, Transaction Type is in DE 3, Transaction Fee amounts are in DE 28-31.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 16 in ISO 8583 represent?",
    options: [
      "Cardholder Billing Date",
      "Processing Code",
      "Transaction Time",
      "Merchant Category Code"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 16 contains the Cardholder Billing Date in MMDD format, indicating when the transaction will appear on the cardholder's statement. This may differ from the transaction date for international transactions or batch processing. Processing Code is DE 3, Transaction Time is DE 12, MCC is DE 18.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 17 in ISO 8583 represent?",
    options: [
      "Capture Date",
      "Settlement Amount",
      "Merchant Name",
      "Point of Service Entry Mode"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 17 contains the Capture Date in MMDD format, indicating when the transaction was captured for settlement. In dual-message systems, capture happens separately from authorization. Settlement Amount is in DE 5, Merchant Name is DE 43, Entry Mode is DE 22.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 18 in ISO 8583 represent?",
    options: [
      "Merchant Category Code (MCC)",
      "Transaction Amount",
      "Cardholder Billing Amount",
      "Processing Code"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 18 contains the Merchant Category Code (MCC), a 4-digit code that categorizes the merchant's business type (e.g., 5411=groceries, 5812=eating places). Used for interchange fee calculation, fraud detection, and reporting. Transaction Amount is DE 4, Cardholder Billing Amount is DE 6, Processing Code is DE 3.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 19 in ISO 8583 represent?",
    options: [
      "Acquiring Institution Country Code",
      "Transaction Type",
      "Response Code",
      "Transaction Currency Code"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 19 contains the Acquiring Institution Country Code, a 3-digit ISO 3166-1 numeric code indicating the country where the acquirer is located. Used for cross-border transaction routing and compliance. Transaction Type is in DE 3, Response Code is DE 39, Currency Code is DE 49.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 20 in ISO 8583 represent?",
    options: [
      "PAN Sequence Number",
      "Transaction Type",
      "Merchant ID",
      "Processing Code"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 20 contains the PAN Sequence Number, a 3-digit number identifying a specific card when multiple cards share the same PAN (e.g., primary and supplementary cards). Used to distinguish between cards with the same account number. Transaction Type is in DE 3, Merchant ID is DE 42, Processing Code is DE 3.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 21 in ISO 8583 represent?",
    options: [
      "Forwarding Institution Country Code",
      "Card Expiry Date",
      "Transaction Currency Code",
      "Response Code"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 21 contains the Forwarding Institution Country Code, a 3-digit ISO 3166-1 numeric code indicating the country where the forwarding institution (issuer) is located. Used for cross-border transaction routing. Card Expiry is DE 14, Currency Code is DE 49, Response Code is DE 39.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 22 in ISO 8583 represent?",
    options: [
      "Point of Service Entry Mode",
      "Transaction Type",
      "Merchant Name",
      "Processing Code"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "Data Element 22 is the Point of Service Entry Mode, a 3-digit field indicating how the card data was captured. Common values: 05=chip card read, 07=contactless chip, 02=magnetic stripe, 81=fallback from chip to magstripe. This is critical for fraud detection and risk assessment - chip transactions are more secure than magstripe. Transaction Type is in DE 3, Merchant Name is DE 43, Processing Code is DE 3.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 23 in ISO 8583 represent?",
    options: [
      "Card Sequence Number",
      "Transaction Type",
      "Merchant Category Code",
      "Settlement Amount"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 23 contains the Card Sequence Number, a 3-digit number identifying a specific card when multiple cards share the same PAN (e.g., primary and supplementary cards, or card reissuance). Used to distinguish between cards with the same account number. Transaction Type is in DE 3, MCC is DE 18, Settlement Amount is in DE 5.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 24 in ISO 8583 represent?",
    options: [
      "Function Code",
      "Processing Code",
      "Point of Service Condition Code",
      "Merchant ID"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 24 contains the Function Code, a 3-digit code indicating the function of the message (e.g., 100=original transaction, 200=repeat/retry, 400=reversal). Used to distinguish between original transactions and retries/reversals. Processing Code is DE 3, POS Condition Code is DE 25, Merchant ID is DE 42.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 25 in ISO 8583 represent?",
    options: [
      "Point of Service Condition Code",
      "Transaction Type",
      "Response Code",
      "Settlement Date"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 25 contains the Point of Service Condition Code, a 2-digit code indicating the condition under which the transaction occurred (e.g., 00=normal, 01=merchant initiated, 02=cardholder initiated). Used for transaction classification and reporting. Transaction Type is in DE 3, Response Code is DE 39, Settlement Date is DE 15.",
    category: "ISO 8583"
  },
  {
    "question": "What does Data Element 26 in ISO 8583 represent?",
    "options": [
      "Point of Service PIN Capture Code",
      "Transaction Amount",
      "Processing Code",
      "Merchant Name"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "Data Element 26 is the Point of Service PIN Capture Code, indicating how the PIN was captured (e.g., 0=no PIN, 1=PIN entered). This is used for PIN-based transactions to indicate PIN presence and capture method.",
    category: "ISO 8583"
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
    question: "What does Data Element 35 in ISO 8583 represent?",
    options: [
      "Track 2 Data",
      "Transaction Amount",
      "Merchant ID",
      "Settlement Date"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "Data Element 35 contains Track 2 Data in LLVAR format. Track 2 includes: PAN, separator, expiry date (YYMM), service code, and discretionary data. Format: PAN=expiry=service_code=discretionary. This is read from the magnetic stripe or chip card. Track 2 is essential for card identification and is more commonly used than Track 1. Transaction Amount is DE 4, Merchant ID is DE 42, Settlement Date is DE 15.",
    category: "ISO 8583"
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
    question: "What does Data Element 39 in ISO 8583 represent?",
    options: [
      "Response Code",
      "Settlement Date",
      "Transaction Time",
      "Card Expiry Date"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 39 contains the Response Code, a 2-character field indicating the result of the transaction. Common codes: 00=approved, 05=do not honor (declined), 14=invalid card number, 51=insufficient funds, 54=expired card, 91=issuer unavailable. This is the most critical field in the response message - it tells you if the transaction was approved or declined and why. Settlement Date is DE 15, Transaction Time is DE 12, Card Expiry is DE 14.",
    category: "ISO 8583"
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
    question: "What does Data Element 41 in ISO 8583 represent?",
    options: [
      "Card Acceptor Terminal Identification",
      "Transaction Type",
      "Merchant Name",
      "Settlement Amount"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 41 contains the Card Acceptor Terminal Identification (TID), an 8-character field that uniquely identifies the terminal or device where the transaction originated. This is essential for tracking, reconciliation, and identifying problematic terminals. It's typically assigned by the acquirer and must be unique. Transaction Type is in DE 3, Merchant Name is DE 43, Settlement Amount is in DE 5.",
    category: "ISO 8583"
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
    question: "What does Data Element 45 in ISO 8583 represent?",
    options: [
      "Track 1 Data",
      "Processing Code",
      "Point of Service Entry Mode",
      "Transaction Currency Code"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "Data Element 45 contains Track 1 Data in LLVAR format. Track 1 includes: start sentinel, format code, PAN, name separator, cardholder name, expiry date, service code, and discretionary data. Format: %B[PAN]^[NAME]^[YYMM][service_code][discretionary]?. Track 1 is less commonly used than Track 2 but contains the cardholder name. Processing Code is DE 3, Entry Mode is DE 22, Currency Code is DE 49.",
    category: "ISO 8583"
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
    question: "What does Data Element 48 in ISO 8583 represent?",
    options: [
      "Additional Data (Private)",
      "Settlement Date",
      "Transaction Time",
      "Card Expiry Date"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "Data Element 48 contains Additional Data (Private Use) in LLLVAR format. This field is used for private/network-specific data and can contain subelements with different meanings depending on the card network. Common subelements include: authentication data, risk management data, loyalty program info, and network-specific fields. The structure varies by network (Visa, Mastercard, etc.). Settlement Date is DE 15, Transaction Time is DE 12, Card Expiry is DE 14.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 49 in ISO 8583 represent?",
    options: [
      "Transaction Currency Code",
      "Processing Code",
      "Merchant Category Code",
      "Transaction Type"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 49 contains the Transaction Currency Code, a 3-digit numeric code following ISO 4217 standard (e.g., 840=USD, 986=BRL, 978=EUR). This indicates the currency in which the transaction amount (DE 4) is denominated. Essential for multi-currency processing and currency conversion. Processing Code is DE 3, MCC is DE 18, Transaction Type is in DE 3.",
    category: "ISO 8583"
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
    question: "What does Data Element 52 in ISO 8583 represent?",
    options: [
      "PIN Data",
      "Transaction Type",
      "Processing Code",
      "Settlement Amount"
    ],
    correctAnswer: 0,
    level: 5,
    explanation: "Data Element 52 contains PIN Data, which is the encrypted PIN block (typically 8 bytes, 16 hex characters). The PIN is encrypted using a PIN encryption key (PEK) and formatted according to ISO 9564. The PIN is NEVER stored on the card - it's stored securely by the issuer bank. The PIN block is created by the terminal/HSM and sent encrypted to the issuer for verification. Transaction Type is in DE 3, Processing Code is DE 3, Settlement Amount is in DE 5.",
    category: "ISO 8583"
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
    question: "What does Data Element 55 in ISO 8583 represent?",
    options: [
      "EMV Chip Data",
      "Transaction Type",
      "Merchant ID",
      "Transaction Currency Code"
    ],
    correctAnswer: 0,
    level: 5,
    explanation: "Data Element 55 contains EMV Chip Data in LLLVAR format (TLV - Tag Length Value). This includes critical EMV data like: Application Cryptogram (ARQC/ARPC), Card Verification Results (CVR), Application Transaction Counter (ATC), and other EMV tags. The ARQC (Application Request Cryptogram) is generated by the chip and validated by the issuer. This field is essential for EMV chip card transactions. Transaction Type is in DE 3, Merchant ID is DE 42, Currency Code is DE 49.",
    category: "ISO 8583"
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
    question: "What is the ASCII code for the letter 'A'?",
    options: [
      "65",
      "97",
      "41",
      "5A"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "In ASCII encoding, the uppercase letter 'A' has the decimal value 65 (hexadecimal 0x41). Lowercase 'a' is 97 (0x61). The value 41 is hexadecimal for 'A', not decimal. 5A is hexadecimal for 'Z'. Understanding ASCII codes is essential for parsing payment messages correctly.",
    category: "Encoding"
  },
  {
    question: "What is the hexadecimal representation of ASCII letter 'B'?",
    options: [
      "0x42",
      "0x62",
      "0x32",
      "0x52"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "The uppercase letter 'B' in ASCII is decimal 66, which is hexadecimal 0x42. Lowercase 'b' is 0x62. 0x32 is '2' (digit), and 0x52 is 'R'. Hexadecimal representation is commonly used in payment systems for debugging and data inspection.",
    category: "Encoding"
  },
  {
    question: "What is the ASCII value of the digit '5'?",
    options: [
      "53",
      "35",
      "85",
      "95"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "The digit '5' in ASCII has the decimal value 53 (hexadecimal 0x35). Digits 0-9 are encoded as 48-57 in ASCII. Interestingly, digits have the same encoding in both ASCII and EBCDIC, which is why numeric fields are less affected by encoding mismatches. 35 is '#', 85 is 'U', 95 is '_'.",
    category: "Encoding"
  },
  {
    question: "What is the EBCDIC code for the letter 'C'?",
    options: [
      "0xC3",
      "0x83",
      "0x43",
      "0xD3"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "In EBCDIC encoding, the uppercase letter 'C' has the hexadecimal value 0xC3 (decimal 195). This is different from ASCII where 'C' is 0x43 (67). 0x83 is a control character in EBCDIC, 0x43 is 'C' in ASCII, and 0xD3 is 'P' in EBCDIC. This difference is why encoding mismatches cause data corruption.",
    category: "Encoding"
  },

  // ========== NÍVEL 1 - TOKENIZATION E SEGURANÇA ==========
  {
    question: "What is the main benefit of tokenization in payments?",
    options: [
      "It reduces the need for PCI DSS compliance",
      "It speeds up transaction processing",
      "It eliminates the need for encryption",
      "It prevents all types of fraud"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "Tokenization reduces PCI DSS compliance scope because merchants/store tokens instead of real PANs. If tokens are compromised, they're useless without the token vault. However, tokenization doesn't eliminate PCI DSS entirely - you still need compliance for the tokenization system itself. It doesn't speed up processing (may add slight overhead). Encryption is still needed for token transmission. It helps prevent fraud but doesn't prevent all types.",
    category: "Security"
  },
  {
    question: "Which of the following is NOT a characteristic of a tokenized transaction?",
    options: [
      "The PAN is replaced by a token",
      "Tokens can be reused for different transactions",
      "It enhances security by preventing exposure of real card data",
      "It requires a secure token vault"
    ],
    correctAnswer: 1,
    level: 1,
    explanation: "Tokens are typically single-use or limited-use for security. Reusing the same token across different transactions would reduce security - if one transaction is compromised, others could be too. Modern tokenization systems often use transaction-specific tokens or limit token reuse. The PAN is replaced by a token (correct), security is enhanced (correct), and a secure token vault is required (correct).",
    category: "Security"
  },

  // ========== NÍVEL 5 - HSM ==========
  {
    question: "What is the primary function of an HSM in payment processing?",
    options: [
      "Encrypting and decrypting sensitive data",
      "Generating random numbers",
      "Processing financial transactions",
      "Managing PCI DSS compliance"
    ],
    correctAnswer: 0,
    level: 5,
    explanation: "HSM (Hardware Security Module) is a physical device that performs cryptographic operations securely. Its primary function is encrypting and decrypting sensitive data like PINs, keys, and card data. HSMs are tamper-resistant and certified (FIPS 140-2). While they can generate random numbers and keys, their main purpose is secure cryptographic operations. They don't process transactions (that's software) or manage compliance (that's a process).",
    category: "Security"
  },
  {
    question: "Which of these cryptographic operations is performed by an HSM?",
    options: [
      "PIN encryption",
      "Tokenization",
      "SSL certificate issuance",
      "Firewall security"
    ],
    correctAnswer: 0,
    level: 5,
    explanation: "HSMs perform PIN encryption using PIN encryption keys (PEK) stored securely in the HSM. PIN blocks are created and encrypted by the HSM before transmission. Tokenization is typically done by tokenization systems (though some use HSM for key management). SSL certificates can be stored in HSM but issuance is done by CAs. Firewall security is network-level, not cryptographic.",
    category: "Security"
  },

  // ========== NÍVEL 1 - TECBAN ==========
  {
    question: "What is TecBan responsible for in Brazil?",
    options: [
      "Managing the largest ATM network (Banco24Horas)",
      "Processing card transactions",
      "Regulating interchange fees",
      "Issuing credit cards"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "TecBan manages Banco24Horas, Brazil's largest shared ATM network, allowing cardholders from any bank to withdraw cash from ATMs of other banks. TecBan provides the network infrastructure but doesn't process card transactions (that's acquirers/issuers), doesn't regulate fees (that's central bank/card networks), and doesn't issue cards (that's banks).",
    category: "Fundamentals"
  },
  {
    question: "Which type of transaction is commonly performed through TecBan's Banco24Horas network?",
    options: [
      "Cash withdrawals",
      "Online purchases",
      "International wire transfers",
      "Mobile payments"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "Banco24Horas is primarily an ATM network for cash withdrawals. Cardholders can use ATMs from any participating bank to withdraw cash. Online purchases use payment gateways, not ATM networks. Wire transfers are separate banking services. Mobile payments use different infrastructure (NFC, apps).",
    category: "Fundamentals"
  },

  // ========== NÍVEL 3 - ISO 8583 MENSAGENS ==========
  {
    question: "Which data element in ISO 8583 represents the transaction type?",
    options: [
      "DE 3",
      "DE 2",
      "DE 4",
      "DE 7"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 3 (Processing Code) contains the transaction type in its first 2 digits. For example, 00=purchase, 20=withdrawal, 30=balance inquiry. DE 2 is PAN, DE 4 is transaction amount, DE 7 is transmission date/time. The Processing Code is a 6-digit field that defines transaction type, source account, and destination account.",
    category: "ISO 8583"
  },
  {
    question: "Which field in ISO 8583 contains the response code?",
    options: [
      "DE 39",
      "DE 7",
      "DE 11",
      "DE 22"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 39 contains the Response Code, a 2-character field indicating transaction result. Common codes: 00=approved, 05=do not honor, 14=invalid card number, 51=insufficient funds, 54=expired card. This is the most critical field in response messages. DE 7 is transmission date/time, DE 11 is STAN, DE 22 is Entry Mode.",
    category: "ISO 8583"
  },
  {
    question: "Which Message Type Indicator (MTI) represents a financial transaction request?",
    options: [
      "0200",
      "0100",
      "0800",
      "0420"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "MTI 0200 is a Financial Transaction Request. The first digit (0)=version, second (2)=financial message, third (0)=request, fourth (0)=from acquirer to issuer. This is used for purchases, withdrawals - transactions that move money. 0100 is authorization-only (no money movement), 0800 is network management, 0420 is reversal response.",
    category: "ISO 8583"
  },

  // ========== NÍVEL 1 - PCI DSS ==========
  {
    question: "Which of the following is a PCI DSS requirement?",
    options: [
      "Encrypt cardholder data",
      "Store CVV2 numbers",
      "Allow merchants to save full PANs",
      "Disable all authentication logs"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "PCI DSS Requirement 3.4 mandates encryption of cardholder data at rest, and Requirement 4.1 requires encryption during transmission. CVV2 numbers must NEVER be stored after authorization (Requirement 3.2). Full PANs should be masked or truncated when stored (Requirement 3.3). Authentication logs must be maintained, not disabled (Requirement 10).",
    category: "Security"
  },
  {
    question: "What is the maximum cardholder data retention period allowed under PCI DSS?",
    options: [
      "Only as long as necessary for business and legal reasons",
      "Up to 5 years",
      "Forever, if encrypted",
      "Only for chargeback disputes"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "PCI DSS Requirement 3.1 states that cardholder data should be retained only as long as necessary for business, legal, or regulatory purposes. There's no fixed time limit - it depends on business needs and legal requirements. Even if encrypted, data shouldn't be kept forever. Chargeback disputes may require retention, but that's just one reason, not the only one.",
    category: "Security"
  },

  // ========== NÍVEL 1 - EMV ==========
  {
    question: "What is the primary benefit of EMV chip cards?",
    options: [
      "Enhanced security through dynamic authentication",
      "Faster transactions",
      "Eliminates transaction fees",
      "Removes the need for PINs"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "EMV chips generate unique cryptograms (ARQC) for each transaction using cryptographic keys, making each transaction unique and preventing card cloning. This is dynamic authentication - the chip proves it's authentic and the transaction data is valid. EMV doesn't make transactions faster (may be slightly slower), doesn't eliminate fees, and PINs are still used for additional security.",
    category: "EMV"
  },
  {
    question: "What does 'EMV' stand for?",
    options: [
      "Europay, Mastercard, and Visa",
      "Electronic Money Verification",
      "Encrypted Merchant Validation",
      "Enhanced Mobile Verification"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "EMV stands for Europay, Mastercard, and Visa - the three card brands that originally developed the standard for chip-based payment cards. Europay was later acquired by Mastercard, but the name EMV remains. It's now managed by EMVCo, which includes additional members like American Express, Discover, JCB, and others.",
    category: "EMV"
  },

  // ========== NÍVEL 1 - NFC ==========
  {
    question: "Which technology is commonly used for contactless payments?",
    options: [
      "NFC",
      "Bluetooth",
      "Wi-Fi",
      "Infrared"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "NFC (Near Field Communication) is the standard technology for contactless payments. It enables secure communication between the card/device and terminal when they're within a few centimeters. Bluetooth has longer range and different security model. Wi-Fi requires network setup. Infrared is outdated and not used for payments.",
    category: "Technology"
  },
  {
    question: "What is required for an NFC payment transaction to occur?",
    options: [
      "A close proximity between the card and reader",
      "A direct internet connection",
      "A PIN entry every time",
      "A signature verification"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "NFC requires close proximity (typically 4cm or less) between the card/device and the terminal reader. The terminal doesn't need direct internet - it can work offline and sync later. PIN entry depends on amount limits and card settings - small amounts often don't require PIN. Signatures are rarely used with contactless payments.",
    category: "Technology"
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
    question: "Which character encoding does TecBan use for its transactions?",
    options: [
      "ASCII",
      "EBCDIC",
      "Base64",
      "UTF-8"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "TecBan uses ASCII encoding for its Banco24Horas ATM network transactions. This is common for modern payment systems. ASCII is simpler and more widely supported than EBCDIC. Base64 is for encoding binary data, not character encoding. UTF-8 is Unicode and is used in modern APIs, but legacy ATM networks often use ASCII.",
    category: "Encoding"
  },
  {
    question: "Which character encoding does Mastercard typically use for transaction processing?",
    options: [
      "EBCDIC",
      "ASCII",
      "Base64",
      "UTF-16"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "Mastercard's legacy systems (especially MIP - Mastercard Integrated Processing) use EBCDIC encoding because they were originally built on IBM mainframes. However, modern Mastercard APIs use JSON/UTF-8. Understanding encoding is critical - if you send EBCDIC data to an ASCII system (or vice versa), all text fields will be corrupted. Base64 and UTF-16 are not typically used for ISO 8583 messages.",
    category: "Encoding"
  },
  {
    question: "What is the main difference between ASCII and EBCDIC?",
    options: [
      "ASCII uses a 7-bit or 8-bit encoding, while EBCDIC is an 8-bit character encoding used mainly by IBM",
      "EBCDIC is a Unicode-based system, while ASCII is not",
      "ASCII is used only in payment systems, while EBCDIC is used in networking",
      "EBCDIC supports more characters than ASCII"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "ASCII is a 7-bit (or 8-bit extended) encoding standard, while EBCDIC (Extended Binary Coded Decimal Interchange Code) is an 8-bit encoding developed by IBM for mainframes. They use completely different byte values for the same characters - for example, 'A' is 0x41 in ASCII but 0xC1 in EBCDIC. Neither is Unicode-based. Both are used in payment systems. They support similar character sets but with different encodings.",
    category: "Encoding"
  },
  {
    question: "Why does Mastercard use EBCDIC instead of ASCII in some of its legacy systems?",
    options: [
      "Because it was originally designed for IBM mainframes",
      "Because EBCDIC is faster than ASCII",
      "Because ASCII is not secure enough",
      "Because it allows for more transaction types"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "Mastercard's legacy systems use EBCDIC because they were built on IBM mainframes, which natively use EBCDIC. It's not about speed or security - both encodings perform similarly. It's about historical compatibility. Modern systems are migrating to ASCII/UTF-8, but legacy systems maintain EBCDIC for backward compatibility. The encoding doesn't affect transaction types - that's determined by the message format, not encoding.",
    category: "Encoding"
  },
  {
    question: "Which encoding format is more commonly used in modern financial APIs?",
    options: [
      "ASCII",
      "EBCDIC",
      "Base64",
      "JSON (UTF-8)"
    ],
    correctAnswer: 3,
    level: 4,
    explanation: "Modern financial APIs (REST APIs, GraphQL) use JSON format with UTF-8 encoding. This is human-readable, web-friendly, and supports international characters. Legacy ISO 8583 systems still use ASCII or EBCDIC for binary message formats, but new APIs prefer JSON/UTF-8. Base64 is used for encoding binary data within JSON, not as the primary encoding.",
    category: "Encoding"
  },
  {
    question: "Which financial standard defines how character encoding should be handled in payment transactions?",
    options: [
      "ISO 8583",
      "PCI DSS",
      "EMVCo",
      "IEEE 754"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "ISO 8583 standard defines the message format for financial transactions and specifies encoding requirements. Different implementations may use ASCII or EBCDIC, but ISO 8583 defines the structure. PCI DSS is about data security, not encoding. EMVCo defines chip card standards. IEEE 754 is for floating-point numbers, not character encoding.",
    category: "ISO 8583"
  },

  // ========== NÍVEL 1 - MIP ==========
  {
    question: "What is MIP in the context of Mastercard?",
    options: [
      "Mastercard Integrated Processing",
      "Mastercard International Protocol",
      "Merchant Interoperability Program",
      "Mobile Identification Payment"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "MIP stands for Mastercard Integrated Processing, Mastercard's centralized processing platform that handles authorization, clearing, and settlement for Mastercard transactions. It's a key part of Mastercard's network infrastructure. The other options are not real Mastercard terms - MIP is specifically about integrated processing.",
    category: "Fundamentals"
  },
  {
    question: "What is the main function of Mastercard Integrated Processing (MIP)?",
    options: [
      "To centralize payment processing and authorization",
      "To provide fraud detection for merchants",
      "To process only cross-border transactions",
      "To replace ISO 8583"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "MIP centralizes payment processing and authorization for Mastercard transactions, providing a single platform for acquirers and issuers to connect. It handles both domestic and cross-border transactions. While it includes fraud detection capabilities, that's not its main function. It doesn't replace ISO 8583 - MIP uses ISO 8583 messages internally.",
    category: "Fundamentals"
  },
  {
    question: "Which type of transactions does MIP primarily support?",
    options: [
      "Cross-border and domestic transactions",
      "Only domestic transactions",
      "Only international transactions",
      "Only ATM withdrawals"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "MIP supports both cross-border (international) and domestic transactions. It's Mastercard's unified processing platform that handles all types of Mastercard transactions regardless of geography. It's not limited to domestic or international only, and it handles more than just ATM withdrawals - it processes all card transactions.",
    category: "Fundamentals"
  },
  {
    question: "How does MIP improve transaction efficiency?",
    options: [
      "By centralizing clearing and settlement processes",
      "By using blockchain technology",
      "By eliminating the need for acquirers",
      "By removing the authorization step"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "MIP improves efficiency by centralizing clearing and settlement processes, reducing the number of connections needed and streamlining transaction flow. It doesn't use blockchain (that's not how payment networks work). Acquirers are still needed - MIP is the network platform they connect to. Authorization is still required - MIP facilitates it, doesn't remove it.",
    category: "Fundamentals"
  },

  // ========== NÍVEL 1 - TECBAN ==========
  {
    question: "What is TecBan's primary role in the Brazilian financial ecosystem?",
    options: [
      "Managing the Banco24Horas ATM network",
      "Issuing credit cards",
      "Providing acquiring services",
      "Regulating interchange fees"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "TecBan manages Banco24Horas, Brazil's largest shared ATM network infrastructure. They provide the network that allows cardholders from any bank to use ATMs from other banks. TecBan doesn't issue cards (that's banks), doesn't provide acquiring services (that's acquirers), and doesn't regulate fees (that's central bank/card networks).",
    category: "Fundamentals"
  },
  {
    question: "Which of the following services is provided by TecBan's Banco24Horas?",
    options: [
      "Cash withdrawals",
      "Cryptocurrency exchanges",
      "Stock trading",
      "Online banking"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "Banco24Horas primarily provides cash withdrawal services through its shared ATM network. Cardholders can withdraw cash from ATMs of any participating bank. It doesn't provide cryptocurrency exchanges, stock trading, or online banking - those are separate services provided by banks or fintech companies.",
    category: "Fundamentals"
  },
  {
    question: "How does TecBan ensure security in ATM transactions?",
    options: [
      "By encrypting PINs and using tokenization",
      "By implementing blockchain technology",
      "By requiring two-factor authentication for ATM withdrawals",
      "By limiting cash withdrawals per day"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "TecBan ensures security by encrypting PINs (using HSM/PIN encryption) and using tokenization for sensitive data. PINs are never stored or transmitted in plain text. Blockchain is not used in traditional ATM networks. Two-factor authentication isn't standard for ATM withdrawals (PIN is single factor). Withdrawal limits are set by banks, not TecBan.",
    category: "Security"
  },
  {
    question: "Which encoding format does TecBan use to transmit ATM transaction data?",
    options: [
      "ASCII",
      "EBCDIC",
      "UTF-16",
      "Base64"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "TecBan uses ASCII encoding for Banco24Horas ATM network transactions. This is standard for modern ATM networks. EBCDIC is used by some legacy mainframe systems (like Mastercard MIP), but TecBan uses ASCII. UTF-16 is Unicode and not typically used for ISO 8583 messages. Base64 is for encoding binary data, not character encoding.",
    category: "Encoding"
  },

  // ========== NÍVEL 1 - TOKENIZATION ==========
  {
    question: "What is the primary purpose of tokenization in payment systems?",
    options: [
      "To replace sensitive card data with a non-sensitive equivalent",
      "To encrypt payment transactions",
      "To accelerate transaction processing",
      "To allow anonymous transactions"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "Tokenization replaces sensitive card data (like PAN) with a non-sensitive token that can be used for transactions but cannot be reverse-engineered to reveal the original data. This reduces PCI DSS scope and security risk. Tokenization is different from encryption - tokens are one-way (can't be reversed), while encryption can be decrypted. It doesn't speed up processing and doesn't enable anonymity.",
    category: "Security"
  },
  {
    question: "Which of the following payment technologies requires tokenization?",
    options: [
      "Apple Pay",
      "Magnetic stripe transactions",
      "Manual card entry",
      "Offline transactions"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "Apple Pay and other digital wallets (Google Pay, Samsung Pay) use tokenization to replace the actual card number with a device-specific token. This is a security requirement for these services. Magnetic stripe transactions can use tokenization but don't require it. Manual card entry and offline transactions don't inherently require tokenization.",
    category: "Security"
  },
  {
    question: "How does tokenization differ from encryption?",
    options: [
      "Tokens cannot be reversed into the original data, whereas encrypted data can be decrypted with a key",
      "Encryption is faster than tokenization",
      "Tokenization stores data in plaintext while encryption does not",
      "Tokenization does not enhance security"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "Tokenization is one-way - tokens cannot be mathematically reversed to get the original data. You need a token vault (database) to map tokens back to PANs. Encryption is two-way - encrypted data can be decrypted with the correct key. Both are secure, but tokenization reduces PCI scope. Encryption isn't necessarily faster. Tokenization doesn't store data in plaintext - tokens are stored, not the original data.",
    category: "Security"
  },

  // ISO 8583 e Comunicação de Pagamentos
  {
    question: "Which data element in ISO 8583 represents the PAN (Primary Account Number)?",
    options: [
      "DE 2",
      "DE 4",
      "DE 39",
      "DE 52"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 2 contains the PAN (Primary Account Number) - the card number. This is typically formatted as LLVAR (Length-Length-Value) to accommodate variable-length PANs (13-19 digits). DE 4 is transaction amount, DE 39 is response code, DE 52 is PIN data. The PAN is one of the most critical fields for identifying the card.",
    category: "ISO 8583"
  },
  {
    question: "What does Data Element 39 in ISO 8583 indicate?",
    options: [
      "Response Code",
      "Transaction Amount",
      "PAN",
      "Merchant Category Code"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 39 contains the Response Code, a 2-character field indicating the transaction result. This is the most critical field in response messages - it tells you if the transaction was approved (00) or declined and why (05=do not honor, 14=invalid card, 51=insufficient funds, etc.). Transaction Amount is DE 4, PAN is DE 2, MCC is DE 18.",
    category: "ISO 8583"
  },
  {
    question: "What is the Message Type Indicator (MTI) for a financial transaction authorization request?",
    options: [
      "0100",
      "0200",
      "0800",
      "0420"
    ],
    correctAnswer: 1,
    level: 3,
    explanation: "MTI 0200 is a Financial Transaction Request - it both authorizes AND moves funds in one message. The first digit (0)=version, second (2)=financial message, third (0)=request, fourth (0)=from acquirer to issuer. 0100 is authorization-only (no money movement), 0800 is network management, 0420 is reversal response.",
    category: "ISO 8583"
  },
  {
    question: "Which financial entity is responsible for processing ISO 8583 transactions?",
    options: [
      "Acquirer",
      "Issuer",
      "Cardholder",
      "Merchant"
    ],
    correctAnswer: 0,
    level: 2,
    explanation: "The Acquirer processes ISO 8583 transactions on behalf of merchants. They receive transaction requests from merchants/terminals, format them into ISO 8583 messages, route them through card networks to issuers, and handle responses. The Issuer makes authorization decisions but doesn't process the ISO messages directly - they receive them through the network. Cardholders and merchants don't process ISO messages.",
    category: "Transaction Flow"
  },
  {
    question: "What does DE 7 in ISO 8583 represent?",
    options: [
      "Transmission Date and Time",
      "Transaction Type",
      "Response Code",
      "Point of Service Entry Mode"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "Data Element 7 contains the Transmission Date and Time in MMDDhhmmss format, indicating when the message was transmitted from the point of origin. This is critical for tracking, auditing, timeout handling, and reconciliation. Transaction Type is in DE 3, Response Code is DE 39, Entry Mode is DE 22.",
    category: "ISO 8583"
  },
  {
    question: "Which ISO 8583 field contains the cardholder's PIN data?",
    options: [
      "DE 52",
      "DE 2",
      "DE 4",
      "DE 32"
    ],
    correctAnswer: 0,
    level: 5,
    explanation: "Data Element 52 contains the encrypted PIN block. The PIN is NEVER stored on the card - it's stored securely by the issuer bank. When a PIN is entered, it's encrypted by the terminal/HSM and sent in DE 52. DE 2 contains the PAN (card number), DE 4 contains the transaction amount, and DE 32 is the acquiring institution ID.",
    category: "ISO 8583"
  },

  // ========== NOVAS QUESTÕES NÍVEL 1 - FUNDAMENTOS ==========
  {
    question: "What is the difference between authorization and capture in payment processing?",
    options: [
      "Authorization reserves funds; capture completes the transaction and transfers funds",
      "Authorization transfers funds; capture only reserves them",
      "They are the same thing",
      "Authorization is for online, capture is for offline transactions"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "Authorization is the first step where the issuer checks if the cardholder has sufficient funds/credit and reserves the amount. The funds are 'held' but not yet transferred. Capture (also called settlement) is the second step where the reserved funds are actually transferred from the issuer to the acquirer/merchant. In some cases, authorization and capture happen together (single-message), but they can be separate (dual-message).",
    category: "Fundamentals"
  },
  {
    question: "What is a sub-acquirer in the payment ecosystem?",
    options: [
      "A company that processes payments on behalf of an acquirer",
      "A smaller version of an acquirer",
      "A type of payment gateway",
      "An issuer that also processes transactions"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "A sub-acquirer (also called payment facilitator or PayFac) is a company that processes payments on behalf of merchants but operates under the sponsorship of a main acquirer. They handle merchant onboarding, payment processing, and settlement, but the main acquirer holds the merchant account and assumes the financial risk. Think of it as a reseller model - the sub-acquirer provides the service, but the main acquirer is the actual bank relationship.",
    category: "Fundamentals"
  },
  {
    question: "When does a card network (like Visa or Mastercard) directly intervene in a transaction?",
    options: [
      "When routing transactions between acquirer and issuer, setting interchange rates, and handling disputes",
      "Only when there's fraud",
      "Never - they just provide the network infrastructure",
      "Only for international transactions"
    ],
    correctAnswer: 0,
    level: 1,
    explanation: "Card networks (Visa, Mastercard, etc.) are actively involved in every transaction: they route transaction messages between acquirer and issuer, set interchange fees, establish security standards (like PCI DSS), handle chargeback disputes, and provide the authorization network. They're not just passive infrastructure - they're active participants that set rules, fees, and standards for all parties.",
    category: "Fundamentals"
  },

  // ========== NOVAS QUESTÕES NÍVEL 2 - FLUXO TRANSACIONAL ==========
  {
    question: "What happens immediately after a card is swiped at a POS terminal?",
    options: [
      "Terminal reads card data, formats ISO 8583 message, sends to acquirer",
      "Funds are immediately transferred",
      "Card is verified with the issuer directly",
      "Transaction is completed offline"
    ],
    correctAnswer: 0,
    level: 2,
    explanation: "When a card is swiped, the terminal reads the magnetic stripe data (or chip data), formats it into an ISO 8583 authorization request message, and sends it to the acquirer. The acquirer then routes it through the card network to the issuer. Funds are NOT transferred immediately - that happens during settlement. The terminal doesn't communicate directly with the issuer - it goes through acquirer → network → issuer.",
    category: "Transaction Flow"
  },
  {
    question: "What happens if an authorization request times out?",
    options: [
      "The acquirer may retry, or the transaction may be declined, depending on configuration",
      "The transaction is automatically approved",
      "The funds are immediately transferred",
      "The card is blocked"
    ],
    correctAnswer: 0,
    level: 2,
    explanation: "When an authorization request times out (typically after 20-30 seconds), the acquirer/system must decide what to do. Common strategies: retry the request (if transient network issue), decline the transaction (fail-safe), or in some cases approve offline (if terminal supports offline processing). The transaction is NOT automatically approved (that would be a security risk). Funds aren't transferred (that's settlement). The card isn't blocked (timeouts are usually network issues, not card problems).",
    category: "Transaction Flow"
  },
  {
    question: "What is the difference between online and offline authorization?",
    options: [
      "Online requires real-time issuer approval; offline uses terminal/issuer risk parameters without real-time communication",
      "Online uses internet; offline doesn't",
      "Online is for credit cards; offline is for debit cards",
      "They're the same thing"
    ],
    correctAnswer: 0,
    level: 2,
    explanation: "Online authorization requires real-time communication with the issuer to get approval/decline. The issuer checks balance, fraud rules, and card status in real-time. Offline authorization uses risk parameters stored in the terminal or card (like floor limits, velocity checks) to approve transactions without real-time issuer communication. Offline is used when connectivity is poor or for small amounts. Both can use internet or other networks - the difference is real-time issuer communication, not the network type.",
    category: "Transaction Flow"
  },
  {
    question: "What happens when an issuer declines a transaction with response code '05' (Do Not Honor)?",
    options: [
      "The transaction is declined, no funds are transferred, and the merchant receives a decline response",
      "The transaction is approved but flagged for review",
      "Funds are transferred but held in escrow",
      "The card is automatically blocked"
    ],
    correctAnswer: 0,
    level: 2,
    explanation: "Response code 05 (Do Not Honor) means the issuer declined the transaction. Common reasons: insufficient funds, account closed, card restricted, or issuer risk rules triggered. The transaction is immediately declined - no funds are reserved or transferred. The merchant receives the decline response and should inform the customer. The card is NOT automatically blocked (that requires separate action). The transaction doesn't proceed in any way.",
    category: "Transaction Flow"
  },

  // ========== NOVAS QUESTÕES NÍVEL 3 - ISO 8583 ==========
  {
    question: "What does MTI 0200 represent in ISO 8583?",
    options: [
      "Financial transaction request (purchase, withdrawal, etc.)",
      "Authorization request only",
      "Reversal request",
      "Network management message"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "MTI 0200 is a Financial Transaction Request. The first digit (0) = version, second digit (2) = financial message, third digit (0) = request, fourth digit (0) = from acquirer to issuer. This is used for purchases, withdrawals, and other transactions that move money. 0100 is authorization only (no money movement), 0400 is reversal, 0800 is network management.",
    category: "ISO 8583"
  },
  {
    question: "What is the difference between MTI 0100 and 0200?",
    options: [
      "0100 is authorization-only (no funds movement); 0200 is financial transaction (authorization + funds movement)",
      "0100 is for credit cards; 0200 is for debit cards",
      "0100 is online; 0200 is offline",
      "They're the same"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "MTI 0100 is an Authorization Request - it only checks if the cardholder has funds/credit available but doesn't move money. Used for pre-authorizations (like hotels holding a deposit). MTI 0200 is a Financial Transaction Request - it both authorizes AND moves funds in one message. Most point-of-sale transactions use 0200. The difference is whether money actually moves (0200) or just gets reserved (0100).",
    category: "ISO 8583"
  },
  {
    question: "What does the primary bitmap in ISO 8583 indicate?",
    options: [
      "Which data elements are present in the message (bits 2-64)",
      "The transaction amount",
      "The response code",
      "The encryption method used"
    ],
    correctAnswer: 0,
    level: 3,
    explanation: "The primary bitmap (DE 1) is a binary map where each bit position corresponds to a data element number. If bit 2 is set (1), DE 2 (PAN) is present. If bit 3 is set, DE 3 (Processing Code) is present, and so on up to bit 64. This allows parsers to know which fields to expect and read. It's like a table of contents for the message. The bitmap doesn't contain transaction data itself - it's metadata about what data follows.",
    category: "ISO 8583"
  },

  // ========== NOVAS QUESTÕES NÍVEL 4 - CAMPOS ISO E ENCODING ==========
  {
    question: "What does Processing Code '001000' represent?",
    options: [
      "Purchase from default account (first 2 digits=00 purchase, middle 2=10 savings source, last 2=00 default destination)",
      "Cash withdrawal",
      "Refund transaction",
      "Balance inquiry"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "Processing Code is 6 digits: positions 1-2 = transaction type (00=purchase), positions 3-4 = source account (10=savings), positions 5-6 = destination account (00=default/checking). So '001000' means: purchase transaction, from savings account, to default account. This is a common code for debit card purchases from a savings account.",
    category: "ISO 8583"
  },
  {
    question: "What is the structure of Track 2 data in DE 35?",
    options: [
      "LLVAR format: PAN=expiry_date=service_code=discretionary_data",
      "Fixed 37 characters",
      "Hexadecimal encoded",
      "Base64 encoded"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "Track 2 in DE 35 is LLVAR (Length-Length-Value) format. The structure is: PAN (up to 19 digits) + '=' + Expiry Date (YYMM) + Service Code (3 digits) + Discretionary Data + '?' (end sentinel). Example: '4111111111111111=2512=101=1234567890?'. The LLVAR format means the length is encoded first (2 digits), then the actual data. This allows variable-length PANs.",
    category: "ISO 8583"
  },
  {
    question: "What is the difference between Entry Mode 05 and 07?",
    options: [
      "05 = chip card inserted; 07 = contactless chip (NFC/tap)",
      "05 = online; 07 = offline",
      "05 = credit card; 07 = debit card",
      "They're the same"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "Entry Mode 05 means the chip card was physically inserted into the terminal (chip-and-PIN or chip-and-signature). Entry Mode 07 means contactless payment - the card was tapped or held near the terminal using NFC technology. Both use EMV chip technology, but 05 requires physical contact/insertion while 07 is proximity-based. Entry Mode affects risk scoring and some issuer rules.",
    category: "ISO 8583"
  },
  {
    question: "What happens if a field sent in EBCDIC encoding is read as ASCII?",
    options: [
      "The data will be corrupted - characters will be misinterpreted (e.g., 'A' in EBCDIC is 0xC1, but ASCII 'A' is 0x41)",
      "Nothing - they're compatible",
      "The message will be rejected automatically",
      "Only numbers are affected"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "EBCDIC and ASCII are incompatible encodings. If EBCDIC data is read as ASCII (or vice versa), characters will be completely wrong. For example, EBCDIC 'A' is 0xC1, but ASCII 'A' is 0x41. The same byte value represents different characters in each encoding. This causes data corruption - PANs, names, and other text fields will be unreadable. Numbers (0-9) happen to have the same encoding in both, but letters and special characters don't.",
    category: "Encoding"
  },
  {
    question: "What does LLVAR mean in ISO 8583?",
    options: [
      "Length-Length-Value: a 2-digit length prefix followed by the actual data",
      "Long Length Variable",
      "Low-Level Variable",
      "A fixed-length field"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "LLVAR means Length-Length-Value format. The first 2 digits indicate the length of the data that follows. For example, if the data is '12345', it would be encoded as '0512345' (05 = length, 12345 = data). This allows variable-length fields. LLLVAR uses 3 digits for length (for longer fields). Fixed-length fields have a predetermined size and don't need length indicators.",
    category: "ISO 8583"
  },

  // ========== NOVAS QUESTÕES NÍVEL 5 - CASOS REAIS E DEBUGGING ==========
  {
    question: "Where is the PIN stored on a payment card?",
    options: [
      "The PIN is NOT stored on the card - it's stored securely by the issuer bank",
      "In the chip's memory",
      "On the magnetic stripe",
      "In the card number itself"
    ],
    correctAnswer: 0,
    level: 5,
    explanation: "The PIN is NEVER stored on the card itself - this is a critical security principle. The PIN is stored securely by the issuer bank in their systems. When you enter your PIN, it's encrypted by the terminal/HSM and sent to the issuer for verification. The card only contains cryptographic keys and application data, not the PIN. If PINs were on cards, anyone with physical access could extract them.",
    category: "Security"
  },
  {
    question: "What is ARQC and when is it generated?",
    options: [
      "Application Request Cryptogram - generated by the EMV chip during transaction to prove card authenticity",
      "Authorization Response Code - sent by the issuer",
      "A type of encryption key",
      "The card's serial number"
    ],
    correctAnswer: 0,
    level: 5,
    explanation: "ARQC (Application Request Cryptogram) is generated by the EMV chip during a transaction using cryptographic keys and transaction data. It's sent to the issuer in DE 55 (EMV Chip Data) to prove the card is authentic and the transaction data hasn't been tampered with. The issuer validates the ARQC using shared secret keys. If valid, the issuer generates ARPC (Authorization Response Cryptogram) to complete authentication.",
    category: "EMV"
  },
  {
    question: "You receive an ISO 8583 message with MTI 0200, DE 39 = '05'. What happened?",
    options: [
      "The transaction was declined by the issuer with code 'Do Not Honor'",
      "The transaction was approved",
      "The message format is invalid",
      "The transaction is pending"
    ],
    correctAnswer: 0,
    level: 5,
    explanation: "MTI 0200 is a financial transaction request. DE 39 = '05' is the response code 'Do Not Honor' - meaning the issuer declined the transaction. Common reasons: insufficient funds, account closed, card restricted, or issuer risk rules. The transaction did NOT complete - no funds were transferred. The merchant should inform the customer and possibly suggest trying a different payment method.",
    category: "ISO 8583"
  },
  {
    question: "You are the acquirer system. A merchant sends you a transaction with DE 4 (amount) = '000000001234' and DE 49 (currency) = '986'. What does this mean?",
    options: [
      "Transaction for 12.34 BRL (Brazilian Real) - amount is in minor units (centavos), currency 986 = BRL",
      "Transaction for 1234 USD",
      "Invalid - amount too small",
      "Transaction for 12.34 USD"
    ],
    correctAnswer: 0,
    level: 5,
    explanation: "DE 4 contains the transaction amount in minor currency units (no decimal point). '000000001234' = 1234 minor units. DE 49 = '986' is Brazilian Real (BRL) per ISO 4217. Since BRL uses 2 decimal places, 1234 centavos = 12.34 BRL. If it were USD (840), it would be $12.34. The amount field is always in the smallest currency unit (cents, centavos, etc.).",
    category: "ISO 8583"
  },
  {
    question: "What is the difference between a reversal (0400/0420) and a refund?",
    options: [
      "Reversal cancels an authorization before settlement; refund returns funds after settlement is complete",
      "They're the same thing",
      "Reversal is automatic; refund is manual",
      "Reversal is for credit cards; refund is for debit cards"
    ],
    correctAnswer: 0,
    level: 5,
    explanation: "A reversal (MTI 0400/0420) cancels a pending authorization BEFORE settlement occurs - it releases the hold on funds but no money has moved yet. A refund is a NEW transaction that returns funds AFTER settlement is complete - money has already been transferred, so you need a new transaction to send it back. Reversals are typically automatic (timeout, error). Refunds are usually manual (customer request, merchant error).",
    category: "Transaction Flow"
  },

  // ========== MAIS QUESTÕES NÍVEL 2 - FLUXO TRANSACIONAL ==========
  {
    question: "What is the next step in the transaction flow after the issuer approves an authorization request?",
    options: [
      "The acquirer receives the approval response and forwards it to the merchant/terminal",
      "Funds are immediately transferred",
      "The transaction is automatically captured",
      "A settlement message is sent"
    ],
    correctAnswer: 0,
    level: 2,
    explanation: "After the issuer approves (DE 39 = '00'), the approval response flows back: Issuer → Card Network → Acquirer → Merchant/Terminal. The terminal displays approval and the customer receives confirmation. Funds are NOT transferred immediately - that happens during settlement (typically 1-3 days later). Capture is a separate step that may happen immediately or later. Settlement messages are sent in batches, not immediately.",
    category: "Transaction Flow"
  },
  {
    question: "What happens if a terminal doesn't receive a response to an authorization request within the timeout period?",
    options: [
      "The terminal may retry, decline the transaction, or approve offline depending on configuration",
      "The transaction is automatically approved",
      "The card is blocked",
      "The terminal shuts down"
    ],
    correctAnswer: 0,
    level: 2,
    explanation: "When a timeout occurs (typically 20-30 seconds), the terminal/system must decide based on configuration: retry the request (if transient issue), decline (fail-safe), or approve offline (if terminal supports offline processing and amount is below floor limit). Transactions are NEVER automatically approved on timeout (security risk). The card isn't blocked (timeouts are network issues, not card problems). The terminal continues operating.",
    category: "Transaction Flow"
  },
  {
    question: "What does response code '51' (Insufficient Funds) mean?",
    options: [
      "The cardholder's account doesn't have enough balance/credit for the transaction",
      "The merchant account is full",
      "The payment network is down",
      "The card is expired"
    ],
    correctAnswer: 0,
    level: 2,
    explanation: "Response code 51 means 'Insufficient Funds' - the cardholder's account (checking, savings, or credit limit) doesn't have enough money/credit available to complete the transaction. This is an issuer decision based on account balance. It's NOT about the merchant account (that's separate). Network issues would cause timeouts, not this code. Expired cards return code 54.",
    category: "Transaction Flow"
  },

  // ========== MAIS QUESTÕES NÍVEL 4 - CAMPOS ISO E ENCODING ==========
  {
    question: "What is LLLVAR format in ISO 8583?",
    options: [
      "Length-Length-Length-Value: 3-digit length prefix followed by data (for fields up to 999 characters)",
      "A fixed-length field",
      "Low-Level Variable format",
      "A hexadecimal encoding"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "LLLVAR means Length-Length-Length-Value - the first 3 digits indicate the length of the data that follows. For example, if data is '12345', it's encoded as '00512345' (005 = length, 12345 = data). This allows variable-length fields up to 999 characters. LLVAR uses 2 digits (up to 99 chars). Fixed-length fields have predetermined size. LLLVAR is used for longer fields like DE 48, DE 55 (EMV data).",
    category: "ISO 8583"
  },
  {
    question: "What are common subelements found in DE 48 (Additional Private Data)?",
    options: [
      "Authentication data, risk management flags, loyalty program info, network-specific fields",
      "Only the PAN",
      "Only the response code",
      "Only the transaction amount"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "DE 48 can contain various subelements depending on the card network. Common subelements include: authentication/3DS data, risk management indicators, loyalty program information, installment payment data, and network-specific proprietary fields. The structure varies by network (Visa, Mastercard, etc.). PAN is in DE 2, Response Code is DE 39, Transaction Amount is DE 4.",
    category: "ISO 8583"
  },
  {
    question: "What happens if you try to parse a Track 2 field (DE 35) without understanding LLVAR format?",
    options: [
      "You'll misinterpret the length indicator as part of the PAN, causing parsing errors",
      "Nothing - it will work fine",
      "The field will be automatically decoded",
      "Only the first character will be read"
    ],
    correctAnswer: 0,
    level: 4,
    explanation: "DE 35 is LLVAR format: first 2 digits = length, then the actual Track 2 data. If you don't parse LLVAR correctly, you'll treat the length digits as part of the PAN. For example, '3712345678901234=2512=101?' might be stored as '3712345678901234=2512=101?' but if length is '37', you'd read '37' as part of PAN instead of as the length indicator. This causes complete data corruption.",
    category: "ISO 8583"
  },

  // ========== MAIS QUESTÕES NÍVEL 5 - CASOS REAIS ==========
  {
    question: "You are the acquirer system. You receive a transaction with DE 22 = '02' (magnetic stripe) but DE 55 (EMV Chip Data) is present. What should you do?",
    options: [
      "Reject the transaction - Entry Mode 02 indicates magstripe, but DE 55 indicates chip was used (data inconsistency)",
      "Approve the transaction automatically",
      "Ignore DE 55 and process as magstripe",
      "Send to issuer without validation"
    ],
    correctAnswer: 0,
    level: 5,
    explanation: "This is a data inconsistency error. Entry Mode '02' means magnetic stripe was read, but DE 55 contains EMV chip data which should only be present for chip transactions (Entry Mode 05 or 07). This suggests either: the terminal sent wrong data, there's a parsing error, or fraud attempt. As acquirer, you should reject this transaction before sending to issuer - it violates ISO 8583 rules and indicates potential fraud or system error.",
    category: "ISO 8583"
  },
  {
    question: "What is ARPC and how does it differ from ARQC?",
    options: [
      "ARPC is Authorization Response Cryptogram generated by issuer to complete EMV authentication; ARQC is generated by chip",
      "They're the same thing",
      "ARPC is sent by the terminal",
      "ARPC is optional"
    ],
    correctAnswer: 0,
    level: 5,
    explanation: "ARQC (Application Request Cryptogram) is generated by the EMV chip and sent to the issuer in DE 55 to prove card authenticity. ARPC (Authorization Response Cryptogram) is generated by the issuer after validating the ARQC and is sent back to the chip (also in DE 55) to complete mutual authentication. The chip validates the ARPC to ensure it's communicating with the legitimate issuer. Both are required for secure EMV transactions.",
    category: "EMV"
  },
  {
    question: "A transaction times out after 25 seconds. The terminal retries and gets response code '00' (Approved). What happened?",
    options: [
      "The first request likely had a network issue; the retry succeeded and transaction was approved",
      "The transaction was approved twice",
      "The timeout caused automatic approval",
      "The card was blocked then unblocked"
    ],
    correctAnswer: 0,
    level: 5,
    explanation: "The timeout was likely a transient network issue (network congestion, temporary connectivity problem). The retry succeeded, reached the issuer, and got approval. This is normal retry logic. The transaction was NOT approved twice - the first request never reached the issuer (that's why it timed out). The retry is a new request. Timeouts don't cause automatic approval (security risk). The card wasn't blocked - this was a network issue, not a card problem.",
    category: "Transaction Flow"
  },
  {
    question: "You receive a message with MTI 0420. What type of message is this?",
    options: [
      "Reversal response (reversal was processed)",
      "Authorization request",
      "Financial transaction request",
      "Network management"
    ],
    correctAnswer: 0,
    level: 5,
    explanation: "MTI 0420 is a Reversal Response. The first digit (0) = version, second digit (4) = reversal message, third digit (2) = response, fourth digit (0) = from issuer to acquirer. This confirms that a reversal (MTI 0400) was successfully processed. Authorization requests are 0100/0200, financial transactions are 0200/0210, network management is 0800.",
    category: "ISO 8583"
  },
  {
    question: "How does PIN verification work when a cardholder enters their PIN?",
    options: [
      "PIN is encrypted by terminal/HSM, sent to issuer in DE 52, issuer decrypts and compares with stored PIN",
      "PIN is stored on the card and compared locally",
      "PIN is sent in plain text",
      "PIN verification is optional"
    ],
    correctAnswer: 0,
    level: 5,
    explanation: "The PIN is NEVER stored on the card. When entered, the terminal encrypts it using a PIN encryption key (PEK) in an HSM, creating a PIN block (ISO 9564 format). This encrypted PIN block is sent in DE 52 to the issuer. The issuer decrypts it using their HSM and compares it with the PIN stored in their secure database. If they match, PIN verification succeeds. PINs are NEVER sent in plain text - always encrypted.",
    category: "Security"
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
