# FirebaseTest Issue

This sample demostrate problem running JEST unittests with a firebase. I dont have such issues with KARMA

```
[2023-10-20T09:01:04.947Z]  @firebase/firestore: Firestore (9.23.0): FIRESTORE (9.23.0) INTERNAL ASSERTION FAILED: Unexpected state

      at Logger.defaultLogHandler [as _logHandler] (node_modules/@firebase/logger/src/logger.ts:115:57)
      at Logger.Object.<anonymous>.Logger.error (node_modules/@firebase/logger/src/logger.ts:210:5)
      at logError (node_modules/@firebase/firestore/src/util/log.ts:59:15)
      at fail (node_modules/@firebase/firestore/src/util/assert.ts:35:3)
      at hardAssert (node_modules/@firebase/firestore/src/util/assert.ts:54:5)
      at fromBytes (node_modules/@firebase/firestore/src/remote/serializer.ts:264:5)
      at fromWatchChange (node_modules/@firebase/firestore/src/remote/serializer.ts:502:25)
      at PersistentListenStream.onMessage (node_modules/@firebase/firestore/src/remote/persistent_stream.ts:642:25)
      at node_modules/@firebase/firestore/src/remote/persistent_stream.ts:517:21
      at node_modules/@firebase/firestore/src/remote/persistent_stream.ts:570:18
      at node_modules/@firebase/firestore/src/util/async_queue_impl.ts:135:7
      at node_modules/@firebase/firestore/src/util/async_queue_impl.ts:186:14
      at _ZoneDelegate.Object.<anonymous>._ZoneDelegate.invoke (node_modules/zone.js/bundles/zone.umd.js:411:30)
      at Zone.Object.<anonymous>.Zone.run (node_modules/zone.js/bundles/zone.umd.js:165:47)
      at node_modules/zone.js/bundles/zone.umd.js:1314:38
      at _ZoneDelegate.Object.<anonymous>._ZoneDelegate.invokeTask (node_modules/zone.js/bundles/zone.umd.js:445:35)
      at Zone.Object.<anonymous>.Zone.runTask (node_modules/zone.js/bundles/zone.umd.js:210:51)
      at drainMicroTaskQueue (node_modules/zone.js/bundles/zone.umd.js:634:39)

```


## To run:

> Using node v16.15.1

- `npm i`
- `npm run firestore:test`


in the `notes.txt` are steps of commands i run to integrate firebase after angular workspace 
was created. 

