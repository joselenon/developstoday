export interface IFirebaseResponse<D = undefined> {
  docId: string;
  docData: D;
  docRef: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;
}

export interface IFirebaseManyDocuments<R> {
  docId: string;
  docData: R;
  docRef: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;
}

export interface IFirebaseManyDocumentsResponse<R> {
  documents: IFirebaseManyDocuments<R>[];
  hasMore?: boolean;
}

export interface IFirebaseAllDocumentsByCollectionQueryResponse<R> {
  result: { docId: string; docData: R }[];
}

export type TDBCollections = 'users' | 'contactForms';

export type DbChangeFunction = (transaction: FirebaseFirestore.Transaction, args: any[]) => Promise<void>;
