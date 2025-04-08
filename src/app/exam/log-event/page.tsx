export default function Home() {
  return (
    <>
      <div className="p-6 space-y-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          data-log="true"
          data-log-label="메인 버튼 클릭"
        >
          버튼 A
        </button>

        <div data-log="true" data-log-label="카드 전체 클릭">
          <div className="p-4 border rounded shadow cursor-pointer">
            <h2 className="text-xl font-semibold">카드 컴포넌트</h2>
            <p>이 카드를 클릭해도 로그가 전송됩니다.</p>
          </div>
        </div>

        <button className="bg-gray-300 px-4 py-2 rounded">
          일반 버튼 (로그 안 남음)
        </button>
      </div>
    </>
  );
}
