import { Client, Account, Avatars,Databases} from 'react-native-appwrite';
export const client = new Client()
  .setEndpoint('https://sgp.cloud.appwrite.io/v1')
  .setProject('695021b10029a63b1026')   // Your Project ID
  .setPlatform('com.ary.nva');   // Your package name / bundle identifier
export const account = new Account(client)
export const databases = new Databases(client)
export const avatars = new Avatars(client)