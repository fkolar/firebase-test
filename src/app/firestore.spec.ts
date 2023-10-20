import {TestBed} from '@angular/core/testing';
import {FirebaseApp, getApp, initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {
      connectFirestoreEmulator,
      disableNetwork,
      doc,
      Firestore,
      getDoc,
      getFirestore,
      provideFirestore,
      setDoc
} from '@angular/fire/firestore';


interface User {
      firstName: string;
      lastName: string;
      age: number;
}

const data: User = {
      firstName: 'a',
      lastName: 'b',
      age: 10
};

const CONFIG = {
      apiKey: 'SomeKey',
      authDomain: 'relloca-test',
      projectId: 'relloca-test',
      storageBucket: 'relloca-test.appspot.com',
      messagingSenderId: '12321321312',
      appId: '1:18723852544:web:ssds1232132311',
      measurementId: 'G-3333HH'
};

describe('Firestore setup', () => {
      let app: FirebaseApp;
      let firestore: Firestore;
      let providedFirestore: Firestore;
      let appName: string;

      beforeEach(() => {
            appName = testName();
            TestBed.configureTestingModule({
                  imports: [
                        provideFirebaseApp(() => initializeApp(CONFIG)),
                        provideFirestore(() => {
                              providedFirestore = getFirestore(getApp());
                              connectFirestoreEmulator(providedFirestore, 'localhost', 8080);
                              return providedFirestore;
                        })
                  ]
            });
            app = TestBed.inject(FirebaseApp);
            firestore = TestBed.inject(Firestore);

      });

      afterEach(async () => {
            await disableNetwork(firestore);
      });

      it('should create firestore app instance', () => {
            expect(providedFirestore).toBeTruthy();
            expect(firestore).toEqual(providedFirestore);
            expect(firestore.app).toEqual(app);
      });

      it('should create document ', async () => {
            const userDoc = doc(firestore,
                  'Users', 'frank');
            await setDoc(userDoc, data);

            console.log('saved....');

            // const docSnap = await getDoc(userDoc);
            //
            // console.log('@@@ #####: ', docSnap.exists());
      });



      fit('should read document ', async () => {
            const userDoc = doc(firestore,
                  'Users', 'frank');

            const docSnap = await getDoc(userDoc);
            console.log('@@@ #####: ', docSnap.exists());
      });

});

const randomString = () => (Math.random() + 1).toString(36).split('.')[1];

export const testName = () => [randomString(), randomString(), randomString()].join('');
