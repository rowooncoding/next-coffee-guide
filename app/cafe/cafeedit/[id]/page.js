export default function () {
  return (
    <div className="w-[828px] m-auto mt-[50px]">
      <h4 className="text-[25px] border-b-[1px] pb-[10px] text-[#081910]">
        글 수정
      </h4>
      <form action="/api/post/new" method="POST">
        <input
          className="block px-[6px] py-[10px] mt-[20px] w-[828px] border-[1px] rounded-lg"
          name="title"
          placeholder="제목을 작성해주세요"
        />
        <textarea
          className="block w-[828px] h-[400px] border-[1px] rounded-lg mt-[10px] px-[6px] pt-[10px] resize-none"
          name="content"
          placeholder="내용을 작성해주세요"
        />
        <button
          className="mt-[15px] flex sm:inline-flex justify-center items-center bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus-visible:ring ring-teal-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2"
          type="submit"
        >
          작성완료
        </button>
      </form>
    </div>
  );
}
