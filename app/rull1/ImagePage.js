"use client";
import GuideDetail from "../mainsection/GuideDetail";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbService as db } from "../firebase";

const ImagePage = () => {
  const itemsCollectionRef = collection(db, "post");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(itemsCollectionRef);
        const itemsData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setItems(itemsData);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {items.length > 0 ? (
        items.map((list) => {
          return (
            <GuideDetail>
              <img
                className={list.className}
                src={list.src}
                alt={list.alt}
                key={list.key}
                width="100%"
              />
              <div className="text-2xl mt-[20px] text-[#675D50]">
                {list.title}
              </div>
              <div className="mt-[10px] text-base text-[#A99072]">
                {list.content}
              </div>
            </GuideDetail>
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default ImagePage;
