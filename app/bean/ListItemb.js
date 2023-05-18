"use client";

import Link from "next/link";

export default function ListItemb({ result }) {
  return (
    <div>
      {result.map((list) => {
        return (
          <div
            className="bg-[white] rounded-[10px] p-[20px] mb-[5px] shadow-[0_2px_4px_0px_rgb(224,224,224)] relative"
            key={list._id}
          >
            <Link href={"/bean/beandetail/" + list._id.toString()}>
              <h4 className="text-[20px] text-[#675D50] font-[800] m-[0]">
                {list.title}
              </h4>
            </Link>
            <p className="text-[gray] my-[5px] mx-[0]">1월 1일</p>
            <Link href={"/bean/beanedit/" + list._id.toString()}>
              <button className="absolute top-2 right-12" type="button">
                수정
              </button>
            </Link>
            <button
              onClick={(e) => {
                fetch("/api/post/deleteb", {
                  method: "POST",
                  body: list._id.toString(),
                })
                  .then((r) => {
                    if (r.status == 200) {
                      return r.json();
                    } else {
                      alert("에러!");
                    }
                  })
                  .then(() => {
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 100);
                  })
                  .catch((error) => {
                    alert("인터넷 환경을 확인해주세요");
                  });
              }}
              className="absolute top-2 right-3"
              type="button"
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
}
