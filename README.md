## 📋 About the App
Built with Next.js, Horizon is a simulation of financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether. Since it is running on the Plaid sandbox mode, the app uses only fake data. I have coded it because of willingness to polish my Backend and Next.JS skills. During the development process I have discovered some details about how banking apps work under the hood. The biggest challenge for me was writing the serverside functions which handle the bank connection for users. Mainly because of the quite complex process of obtaining all of the necessary access tokens for both Plaid and Dwolla. 

## ⚙️ Tech Stack
- TailwindCSS
- React
- Next.JS
- Typescript
- Appwrite
- Plaid
- Dwolla

## ❔ How to Create App Account
Firstly a you will have to sign in or sign up on the site. It is important to provide proper two-letter shorhand of an actual US state, in order to signup successfully.
After the user account is created, the button with link will show up. After skipping some information, you will be able to choose a bank to link your account. It doesn't matter which will you choose. Then you will have to log in on the fake bank site. In order to do that, use the following credentials: 
<br/><br/>
username: user_good <br/>
password: pass_good 
<br/><br/>
Then just click twice on the big buttons under the form inputs to skip the two mobile verification steps.
Lastly, the list of bank accounts will be displayed. Check, which of them you want to link and accept all of the terms and conditions. Now you are ready to go and can fully enjoy the app!

## 🔋 Functionalities

👉 **Authentication**: An ultra-secure SSR authentication with proper validations and authorization

👉 **Connect Banks**: Integrates with Plaid for multiple bank account linking

👉 **Home Page**: Shows general overview of user account with total balance from all connected banks, recent transactions, money spent on different categories, etc

👉 **My Banks**: Check the complete list of all connected banks with respective balances, account details

👉 **Transaction History**: Includes pagination and filtering options for viewing transaction history of different banks

👉 **Real-time Updates**: Reflects changes across all relevant pages upon connecting new bank accounts.

👉 **Funds Transfer**: Allows users to transfer funds using Dwolla to other accounts with required fields and recipient bank ID.

👉 **Responsiveness**: Ensures the application adapts seamlessly to various screen sizes and devices, providing a consistent user experience across desktop, tablet, and mobile platforms.


## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

1. Download the code from repo

2. Install the project dependencies using npm/pnpm

3. Set Up Environment Variables. Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```
4. Replace the placeholder values with your account credentials. You can obtain these credentials by signing up on the [Appwrite](https://appwrite.io), [Plaid](https://plaid.com/) and [Dwolla](https://www.dwolla.com/)
