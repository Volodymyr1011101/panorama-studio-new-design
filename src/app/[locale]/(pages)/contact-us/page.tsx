import { db, storage } from '@/app/firebase';
import { addDoc, collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// import type { NextComponentType, NextPageContext } from 'next';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';

interface Props {}

const Page = async (props: Props) => {
    // const [docs, setDocs] = useState<any>(null);
    // const [docs2, setDocs2] = useState<any>(null);
    // const [pending, setPending] = useState<boolean>(false);
    // const getData = async (dbName: string, stateFnc: (arg1: any[]) => void) => {
    //     setPending(true);
    //     const q = query(collection(db, 'products'));
    //     const querySnapshot = await getDocs(q);
    //     const docs: any[] = [];
    //     querySnapshot.forEach(doc => {
    //         // doc.data() is never undefined for query doc snapshots
    //         docs.push(doc.data());
    //         console.log(doc.data());
    //     });
    //     stateFnc(docs);
    //     setPending(false);
    // };
    const test = await fetch(
        'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Starbucks%20Warsaw&inputtype=textquery&fields=0x470fc34cb1991dd5:0x44b768dcbe6708be&key=AIzaSyA-A1qPlF5VFeG_sNUXc9rReXVUSX4XC-g'
    );
    const result = await test.json();
    console.log(result);

    // useEffect(() => {
    //     if (!document) {
    //         return;
    //     }
    //     const productForm = document?.getElementById("productForm");
    //
    //     productForm?.addEventListener("submit", async (e: any) => {
    //         e.preventDefault();
    //         //@ts-ignore
    //         const productName = document.getElementById("productName").value;
    //         //@ts-ignore
    //
    //         const productDescription = document.getElementById("productDescription").value;
    //         //@ts-ignore
    //
    //         const productPrice = document.getElementById("productPrice").value;
    //         //@ts-ignore
    //
    //         const productImage = document.getElementById("productImage").files[0];
    //
    //         if (!productImage) {
    //             alert("Пожалуйста, выберите изображение.");
    //             return;
    //         }
    //
    //         try {
    //             // Загрузка изображения в Storage
    //             const storageRef = ref(storage, `products/${productImage.name}`);
    //             await uploadBytes(storageRef, productImage);
    //             const imageUrl = await getDownloadURL(storageRef);
    //
    //             // Сохранение данных товара в Firestore
    //             const productData = {
    //                 name: productName,
    //                 description: productDescription,
    //                 price: parseFloat(productPrice),
    //                 imageUrl: imageUrl,
    //                 createdAt: new Date(),
    //             };
    //
    //             await addDoc(collection(db, "products"), productData);
    //
    //             alert("Товар успешно добавлен!");
    //             //@ts-ignore
    //             productForm.reset();
    //         } catch (error) {
    //             console.error("Ошибка при добавлении товара:", error);
    //             alert("Произошла ошибка. Попробуйте еще раз.");
    //         }
    //     });
    //     getData('products', setDocs);
    // }, []);
    //
    // useEffect(() => {
    //     const q = query(collection(db, "products"));
    //     const data: any[] = [];
    //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             data.push(doc.data());
    //         });
    //         setDocs2(data);
    //     });
    //     return () => {
    //         unsubscribe();
    //     };
    // }, []);
    // const addItem = async (e: any) => {
    //     e.preventDefault();
    //     await addDoc(collection(db, 'users'), {
    //         name: 'test',
    //         price: 321
    //     });
    // };
    // const [file, setFile] = useState<File | null>(null);
    // const hanldeChange = (e: any) => {
    //     if (e.target.files && e.target.files[0]) {
    //         setFile(e.target.files[0]);
    //     }
    // };
    // const handleUpload = () => {
    //     if (file) {
    //         const storageRef = ref(storage, `image/${file.name}`);
    //         const uploadTask = uploadBytesResumable(storageRef, file);

    //         uploadTask.on(
    //             'state_changed',
    //             snapshot => {
    //                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //                 console.log(`Upload is ${progress}% done`);
    //             },
    //             error => {
    //                 console.log(error.message);
    //             },
    //             () => {
    //                 console.log('Upload Complete');
    //             }
    //         );
    //     }
    // };
    // const storage2 = getStorage();
    // const listRef = ref(storage2, 'image');
    // listAll(listRef)
    //     .then(res => {
    //         res.prefixes.forEach(folderRef => {

    //             // All the prefixes under listRef.
    //             // You may call listAll() recursively on them.
    //         });
    //         res.items.forEach(itemRef => {
    //             console.log(itemRef);

    //             const imageRef = itemRef.fullPath;
    //             getDownloadURL(ref(storage, imageRef)).then(url => {
    //                 console.log(url);
    //             });

    //             // All the items under listRef.
    //         });
    //     })
    //     .catch(error => {
    //         // Uh-oh, an error occurred!
    //     });

    return (
        <>
            <div className="bg-black h-[100vh] flex items-center justify-center text-white">
                {/*    <form id="productForm">*/}
                {/*        <input type="text" id="productName" placeholder="Название товара" required />*/}
                {/*        <textarea id="productDescription" placeholder="Описание товара" required></textarea>*/}
                {/*        <input type="number" id="productPrice" placeholder="Цена товара" required />*/}
                {/*        <input type="file" id="productImage" accept="image/*" required />*/}
                {/*        <button type="submit">Загрузить</button>*/}
                {/*    </form>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    {pending ? (*/}
                {/*        ''*/}
                {/*    ) : (*/}
                {/*        <ul>*/}
                {/*            {docs &&*/}
                {/*                docs.map((item: any) => (*/}
                {/*                    <li key={item.imageUrl} style={{ color: '#fff' }}>*/}
                {/*                        <Image src={item.imageUrl} alt={'item'} width={300} height={500} />*/}
                {/*                        <p>{item.description}</p>*/}
                {/*                        <p>{item.name}</p>*/}
                {/*                        <p>{item.price}</p>*/}
                {/*                    </li>*/}
                {/*                ))}*/}
                {/*        </ul>*/}
                {/*    )}*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <h1>Test real time</h1>*/}
                {/*    {pending ? (*/}
                {/*        ''*/}
                {/*    ) : (*/}
                {/*        <ul>*/}
                {/*            {docs2 &&*/}
                {/*                docs2.map((item: any) => (*/}
                {/*                    <li key={item.imageUrl} style={{ color: '#fff' }}>*/}
                {/*                        <Image src={item.imageUrl} alt={'item'} width={300} height={500} />*/}
                {/*                        <p>{item.description}</p>*/}
                {/*                        <p>{item.name}</p>*/}
                {/*                        <p>{item.price}</p>*/}
                {/*                    </li>*/}
                {/*                ))}*/}
                {/*        </ul>*/}
                {/*    )}*/}
            </div>
        </>
    );
};

export default Page;
