// const request = indexedDB.open("ShopDB", 1);

// request.onsuccess = (event) => {
//   const db = event.target.result;
//   console.log("Database opened", db);
// };

// request.onerror = (event) => {
//   console.error("Database error", event.target.error);
// };

const request = indexedDB.open("ShopDB", 41);

request.onupgradeneeded = (event) => {
    const db = event.target.result;

    // console.log(db.objectStoreNames);
    if (!db.objectStoreNames.contains("products")) {
        const store = db.createObjectStore("products", {
            keyPath: "id",
        });

        store.createIndex("name", "name", {
            unique: false,
        });
    }
};

request.onsuccess = (event) => {
    console.log(event);

    const db = event.target.result;
    console.log("Database ready");
    console.log(db);
    // addProduct(db);
    getProduct(db, 1);
};

function addProduct(db) {
    const transaction = db.transaction("products", "readwrite");

    const store = transaction.objectStore("products");

    store.add({
        id: 1,
        name: "Laptop",
        price: 60000,
    });
    store.add({
        id: 2,
        name: "PC",
        price: 160000,
    });
    store.add({
        id: 3,
        name: "Mobile",
        price: 30000,
    });

    transaction.oncomplete = () => {
        console.log("Product saved successfully");
        getProduct(db, 1);
        cursorProduct(db);
    };

    transaction.onerror = () => {
        console.error("Failed to save product");
    };
}

function delProduct(db, id) {
    const transaction = db.transaction("products", "readwrite");

    const store = transaction.objectStore("products");

    let result = store.delete(id);

    transaction.oncomplete = () => {
        console.log("Product removed successfully", result);
    };

    transaction.onerror = () => {
        console.error("Failed to remove product");
    };
}

function getProduct(db, id) {
    const transaction = db.transaction("products", "readonly");

    const store = transaction.objectStore("products");
    const request = store.get(id);
    const request2 = store.getAll();

    const range = IDBKeyRange.bound(1, 3);
    const request3 = store.getAll(range);

    const request4 = store.getAllKeys();

    const index = store.index("name");
    const request5 = index.get("Laptop");

    request.onsuccess = () => {
        console.log("BY ID KEY:", request);
        // delProduct(db, id);
        console.log("ALL", request2);
        console.log("ALL between", request3);
        console.log("ONLY ALL KEYS", request4);
        console.log("CHANGED KEY", request5);
        cursorProduct(db);
    };

    request.onerror = () => {
        console.error("Unable to read product");
    };
}

function cursorProduct(db) {
    const transaction = db.transaction("products", "readonly");

    const store = transaction.objectStore("products");

    const request = store.openCursor();

    request.onsuccess = (event) => {
        const cursor = event.target.result;

        
        // console.log(`cursor ${cursor.value.id} `, cursor);

        if (cursor) {
            console.log(cursor.value);

            cursor.value;

            cursor.continue();
        }
    };
    request.onerror = () => {
        console.error("Unable to read product from cursor");
    };
}
