export const Tools = [
    {
      name: 'Stoplight',
      description: 'Design first, Develop Better',
      image: 'https://res.cloudinary.com/platformable/image/upload/v1687341510/internaldevportal/spotlight/rq7iui3t9b3hcf4a3bru.jpg',
      details: {
          categories: ['API','Design','API Documentation'],
          links: [
            {
                sourceName: 'Github',
                url: 'https://github.com/Midships/digital-txn-signing'
            }
            //...more links
          ],
          supportedBy: ['Security']
      },
      releases: [
          {
              version: '0.0.0',
              releaseDate: 'May 2023' 
          }
      ],
      content: `# Design, Document & Build APIs Faster.
      A set of authentication trees that enable native Digital Transaction Signing on ForgeRock's Identity Platform 7.x and ForgeRock Identity Cloud. Please contact us at sales@midships.io for further details of our solution.
    
      The Midships’ Digital transaction signing solution can be used by those customers looking to introduce non-repudiation across transactions e.g. payments, changes to sensitive details and/or to comply with regulatory standards such as MAS 14.2.3 and MAS 14.2.4 TRM-Guidelines-18-January-2021.pdf (mas.gov.sg):
      
      14.2.3 The FI should implement transaction-signing (e.g. digital signatures) for authorising high-risk activities to protect the integrity of customer accounts’ data and transaction details. High-risk activities include changes to sensitive customer data (e.g. customer office and home address, email and telephone contact details), registration of third party payee details, high value funds transfers and revision of funds transfer limits.
      
      14.2.4 Besides login and transaction-signing for high-risk activities, the FI may implement appropriate risk-based or adaptive authentication that presents customers with authentication options that are commensurate with the risk level of the transaction and sensitivity of the data.
      
      This solution does not use any third-party tooling or services and is self-contained within Access Manager (deployed via scripted authentication trees). It is compatible with both the self-managed ForgeRock stack and ForgeRock Identity Cloud. It integrates with ForgeRock’s out-of-the-box passwordless solution and comes with a FIDO compliant passwordless solution for any customer not currently using the ForgeROck SDK.
      
      The solution uses the customer’s private key (held on the client) to sign the transaction details. The signed transaction is forwarded to ForgeRock AM. ForgeRock AM validates the signature (using the public key) and creates a one time token containing the key transaction details (customisable). This one time token is returned to the client.
      
      Midships also provides an offline version where the client does not have internet access.
      
      Please contact us at sales@midships.io for further details of our solution and how it can be customised to meet your specific requirements.
      
      Our contact details
      Website: www.midships.io
      Email: support@midships.io / sales@midships.io
      Usage
      To deploy these trees in Identity Cloud, download the .json tree files provided by Midships. Next, import the .json files individually from Journeys -> Import.
      
      If you'd like to import the trees programatically in an on-premise or Identity Cloud deployment you can follow the instructions mentioned below for each journey using the AM-treetool or the newest version, Frodo.
      
      Midships passwordless registration tree
      This tree is used to enroll your device to your profile and store the public key information along with the device metadata that will later be used for passwordless login and doing digital transactions. As part of the device enrollment process, user will be prompted to introduce his password before the device gets enrolled in his profile. At the end of the device enrollment process, the tree will also generate a symmetric key secret (ktp) that can be used for the Midships caller verification trees. The tree is composed by the following nodes:
      
      Active session check - Script which will check if user has provided existing session token.
      Get Session data - If user has submitted an existing session token, will retrieve the session details.
      Username collector - Collects username from user if unable to retrieve from provided session token.
      Password collector - Collects password from user as a second factor before enrolling the device.
      Data Store Decision - Validates username+password combination against the configured realm data store.
      Device Enroll - FIDO2 compliant node use to register the user device metadata along with the public key for passwordless. Only used if the user calling the tree has not enrolled his device as part of the passwordless registration tree. See more here.
      Generate and store ktp - Will randomly generate a ktp secret under frIndexedString1 user attribute. For on premise deployments, this can be changed to a custom attribute name in the associated node script.
      Midships passwordless login tree
      The tree is composed by the following nodes:
      
      Active session check - Script which will check if user has provided existing session token.
      Get Session data - If user has submitted an existing session token, will retrieve the session details.
      Username collector - Collects username from user if unable to retrieve from provided session token.
      Password collector - Collects password from user as a second factor before enrolling the device if not enrolled yet.
      Data Store Decision - Validates username+password combination against the configured realm data store if device has not been enrolled yet.
      Device Enroll - FIDO2 compliant node use to register the user device metadata along with the public key for passwordless. Only used if the user calling the tree has not enrolled his device as part of the passwordless registration tree. See more here.
      Device Login - FIDO2 compliant node use to login the user via passwordless. See more here.
      Generate and store ktp - Will randomly generate a ktp secret under frIndexedString1 user attribute. For on premise deployments, this can be changed to a custom attribute name in the associated node script. Only used if device has not been enrolled yet.
      Midships Digital transaction signing login tree
      The tree is composed by the following nodes:
      
      Active session check - Script which will check if user has provided existing session token.
      Get Session data - If user has submitted an existing session token, will retrieve the session details.
      Username collector - Collects username from user if unable to retrieve from provided session token.
      Collect payment details - This node will collect the payment details, including the amount and beneficiary of the transaction.
      Device Login - FIDO2 compliant node use to login the user via passwordless. See more here.
      Set beneficiary - Will store the beneficiary of the transaction in the session token. This information will be injected in the access token generated as part of the authorization process.
      Set amount - Will store the amount of the transaction in the session token. This information will be injected in the access token generated as part of the authorization process.
      Example Flow 1 - Passwordless registration
      The example flow below validates the users username and password and enrolls the device under his profile for passwordless login. To deploy this flow via the AM-treetool, run cat Treetool/passwordlessEnroll.json | amtree.sh -i verify -h https://{{AM_Domain}} -u amadmin -p {{admin_password}}.
      
      ![Drag Racing](https://raw.githubusercontent.com/Midships/digital-txn-signing/master/images/passwordless_enroll.png)
        `
    },
  ];
  
  